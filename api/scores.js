const OWNER = process.env.GITHUB_OWNER || "ilanjue201293-stack";
const REPO = process.env.GITHUB_REPO || "Nalyy-Labs";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const SCORE_PATH = process.env.SCORES_FILE_PATH || "data/scores.json";
const MAX_SCORES = 200;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function cleanEntry(entry) {
  const player = String(entry?.player || "Player").trim().slice(0, 24) || "Player";
  const game = String(entry?.game || "").trim().slice(0, 40);
  const score = String(entry?.score || "").trim().slice(0, 60);
  const date = String(entry?.date || "").trim().slice(0, 24);
  if (!game || !score) return null;
  return { player, game, score, date };
}

function readBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body || "{}");
    } catch {
      return {};
    }
  }
  return req.body || {};
}

async function githubRequest(path, options = {}) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    const error = new Error("Missing GITHUB_TOKEN");
    error.statusCode = 503;
    throw error;
  }

  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const error = new Error(await response.text());
    error.statusCode = response.status;
    throw error;
  }

  return response.json();
}

async function readScoreFile() {
  const encodedPath = encodeURIComponent(SCORE_PATH).replace(/%2F/g, "/");
  try {
    const file = await githubRequest(`/repos/${OWNER}/${REPO}/contents/${encodedPath}?ref=${BRANCH}`);
    const raw = Buffer.from(file.content || "", "base64").toString("utf8");
    const scores = JSON.parse(raw || "[]");
    return { scores: Array.isArray(scores) ? scores : [], sha: file.sha };
  } catch (error) {
    if (error.statusCode === 404) return { scores: [], sha: undefined };
    throw error;
  }
}

async function writeScoreFile(scores, sha) {
  const encodedPath = encodeURIComponent(SCORE_PATH).replace(/%2F/g, "/");
  const body = {
    message: "Update Nalyy Labs leaderboard",
    content: Buffer.from(JSON.stringify(scores, null, 2)).toString("base64"),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  await githubRequest(`/repos/${OWNER}/${REPO}/contents/${encodedPath}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { scores } = await readScoreFile();
      return json(res, 200, { scores: scores.slice(0, MAX_SCORES) });
    } catch (error) {
      return json(res, error.statusCode || 500, { scores: [], error: "Scores unavailable" });
    }
  }

  if (req.method === "POST") {
    try {
      const entry = cleanEntry(readBody(req));
      if (!entry) return json(res, 400, { error: "Invalid score" });
      const { scores, sha } = await readScoreFile();
      const nextScores = [entry, ...scores].slice(0, MAX_SCORES);
      await writeScoreFile(nextScores, sha);
      return json(res, 201, { scores: nextScores });
    } catch (error) {
      return json(res, error.statusCode || 500, { error: "Score not saved" });
    }
  }

  res.setHeader("Allow", "GET, POST");
  return json(res, 405, { error: "Method not allowed" });
};
