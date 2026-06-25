const difficulties = {
  Easy: { label: "Easy", mult: 1 },
  Medium: { label: "Medium", mult: 1.6 },
  Hard: { label: "Hard", mult: 2.4 },
  Impossible: { label: "Impossible", mult: 4 },
};

const games = [
  {
    name: "Inflate",
    icon: "balloon",
    description: "Hold. Inflate. Release before it explodes.",
    difficulty: "Easy",
    time: "30s - 1m",
    colors: ["#ff315a", "#b8142d"],
  },
  {
    name: "Color Match",
    icon: "palette",
    description: "Memorize a color, then recreate it as closely as possible.",
    difficulty: "Medium",
    time: "30s - 1m",
    colors: ["#ffb347", "#8b2cff"],
  },
  {
    name: "Reaction Test",
    icon: "zap",
    description: "Wait. Click as soon as the screen changes.",
    difficulty: "Medium",
    time: "30s - 1m",
    colors: ["#2468ff", "#7d43ff"],
  },
  {
    name: "Precision",
    icon: "target",
    description: "Hit every target before it disappears.",
    difficulty: "Hard",
    time: "1m - 2m",
    colors: ["#ff437a", "#5846ff"],
  },
  {
    name: "Timing",
    icon: "clock-3",
    description: "Stop the bar inside the green zone.",
    difficulty: "Medium",
    time: "30s - 1m",
    colors: ["#2957ff", "#6b49ff"],
  },
  {
    name: "Timer V2",
    icon: "hourglass",
    description: "Stop exactly at the requested time.",
    difficulty: "Hard",
    time: "30s - 2m",
    colors: ["#6c3cff", "#b34cff"],
  },
  {
    name: "Find The Movie",
    icon: "clapperboard",
    description: "Guess the movie from emojis.",
    difficulty: "Medium",
    time: "1m - 2m",
    colors: ["#7734ff", "#3d63ff"],
  },
  {
    name: "Find The Music",
    icon: "music",
    description: "Guess the music from modified audio.",
    difficulty: "Medium",
    time: "1m - 2m",
    colors: ["#8b28ff", "#2364ff"],
  },
];

const starterScores = [
  ["Lunax", "Reaction Test", "184 ms", "20 May 2024"],
  ["Zyrox", "Timer V2", "0.005 s", "19 May 2024"],
  ["Wazy", "Precision", "98 / 100", "18 May 2024"],
  ["Evan", "Timing", "98.2%", "18 May 2024"],
  ["Kiro", "Find The Music", "9,523 pts", "17 May 2024"],
  ["Nexon", "Color Match", "94 / 100", "16 May 2024"],
  ["Myz", "Find The Movie", "7,421 pts", "16 May 2024"],
].map(([player, game, score, date]) => ({ player, game, score, date }));

const movieBanks = {
  Easy: [
    ["🕷️🧑‍🎓🏙️", "Spider-Man", ["Spider-Man", "Batman", "Superman", "Iron Man", "Hulk", "Venom"]],
    ["🧊🚢💔", "Titanic", ["Titanic", "Avatar", "Jaws", "Frozen", "Gravity", "Interstellar"]],
    ["🦁👑", "The Lion King", ["The Lion King", "Madagascar", "Zootopia", "Ice Age", "Shrek", "Moana"]],
    ["🧸🤠🚀", "Toy Story", ["Toy Story", "Cars", "Monsters Inc.", "Wall-E", "Up", "Ratatouille"]],
    ["🦖🏝️🚙", "Jurassic Park", ["Jurassic Park", "King Kong", "Godzilla", "Jumanji", "Kong Skull Island", "The Lost World"]],
  ],
  Medium: [
    ["🧙‍♂️💍🌋", "The Lord of the Rings", ["The Lord of the Rings", "Harry Potter", "Narnia", "Eragon", "The Hobbit", "Dune"]],
    ["🟦👽🌳", "Avatar", ["Avatar", "Alien", "The Matrix", "E.T.", "Prometheus", "Arrival"]],
    ["🧑‍🚀🌽⏳", "Interstellar", ["Interstellar", "Gravity", "The Martian", "Ad Astra", "Apollo 13", "Moon"]],
    ["🧠💤🏙️", "Inception", ["Inception", "Tenet", "The Matrix", "Shutter Island", "Looper", "Memento"]],
    ["🃏🏙️🔥", "The Dark Knight", ["The Dark Knight", "Joker", "Batman Begins", "Watchmen", "Logan", "Man of Steel"]],
  ],
  Hard: [
    ["🪞🧠💊", "The Matrix", ["The Matrix", "Inception", "Memento", "Tenet", "Looper", "Equilibrium"]],
    ["🚕🌃🩸", "Taxi Driver", ["Taxi Driver", "Drive", "Nightcrawler", "Heat", "Collateral", "Goodfellas"]],
    ["🐇⏰🕳️", "Alice in Wonderland", ["Alice in Wonderland", "Coraline", "Pan's Labyrinth", "Labyrinth", "Hook", "Big Fish"]],
    ["🍔💼🕺", "Pulp Fiction", ["Pulp Fiction", "Reservoir Dogs", "Jackie Brown", "Snatch", "Fight Club", "Trainspotting"]],
    ["🏨🪓❄️", "The Shining", ["The Shining", "Misery", "Psycho", "Hereditary", "The Thing", "Rosemary's Baby"]],
  ],
  Impossible: [
    ["🪤📼🏠", "Funny Games", ["Funny Games", "Cache", "Dogtooth", "The Vanishing", "Benny's Video", "Audition"]],
    ["🛗👔🔁", "The Double Life of Veronique", ["The Double Life of Veronique", "Three Colors Blue", "Persona", "Stalker", "Solaris", "Mirror"]],
    ["🥚🏚️⚙️", "Eraserhead", ["Eraserhead", "Tetsuo", "Pi", "Possession", "Videodrome", "Begotten"]],
    ["📷🌾🔥", "Mirror", ["Mirror", "Stalker", "Solaris", "Come and See", "Andrei Rublev", "Nostalghia"]],
    ["🧤🧬🚗", "Crash", ["Crash", "Videodrome", "Dead Ringers", "Naked Lunch", "eXistenZ", "Possessor"]],
  ],
};

const musicCategories = [
  "Pop Internationale",
  "Rap US",
  "Rap Francais",
  "Electro / EDM",
  "Rock",
  "Annees 80",
  "Annees 90",
  "Annees 2000",
  "Annees 2010",
  "Annees 2020",
  "Disney",
  "Films & Series",
  "Jeux Video",
  "TikTok Hits",
  "Noel",
  "Aleatoire",
];

function slugifyAudio(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeTrack(artist, title, category) {
  return {
    title,
    artist,
    category,
    audioSrc: `/audio/${slugifyAudio(`${artist}-${title}`)}.mp3`,
  };
}

const musicLibrary = [
  makeTrack("The Weeknd", "Blinding Lights", "Pop Internationale"),
  makeTrack("The Weeknd", "Starboy", "Pop Internationale"),
  makeTrack("Ed Sheeran", "Shape of You", "Pop Internationale"),
  makeTrack("Harry Styles", "As It Was", "Pop Internationale"),
  makeTrack("Dua Lipa", "Levitating", "Pop Internationale"),
  makeTrack("Billie Eilish", "Bad Guy", "Pop Internationale"),
  makeTrack("Coldplay", "Viva La Vida", "Pop Internationale"),
  makeTrack("Adele", "Hello", "Pop Internationale"),
  makeTrack("Eminem", "Lose Yourself", "Rap US"),
  makeTrack("Drake", "God's Plan", "Rap US"),
  makeTrack("Post Malone", "Sunflower", "Rap US"),
  makeTrack("Kendrick Lamar", "HUMBLE.", "Rap US"),
  makeTrack("Travis Scott", "SICKO MODE", "Rap US"),
  makeTrack("Kanye West", "Stronger", "Rap US"),
  makeTrack("PNL", "Au DD", "Rap Francais"),
  makeTrack("Ninho", "Jefe", "Rap Francais"),
  makeTrack("Jul", "Tchikita", "Rap Francais"),
  makeTrack("SCH", "Champs-Elysees", "Rap Francais"),
  makeTrack("SDM", "Bolide Allemand", "Rap Francais"),
  makeTrack("Orelsan", "Basique", "Rap Francais"),
  makeTrack("Alan Walker", "Faded", "Electro / EDM"),
  makeTrack("Avicii", "Wake Me Up", "Electro / EDM"),
  makeTrack("David Guetta", "Titanium", "Electro / EDM"),
  makeTrack("Martin Garrix", "Animals", "Electro / EDM"),
  makeTrack("Daft Punk", "Get Lucky", "Electro / EDM"),
  makeTrack("Calvin Harris", "Summer", "Electro / EDM"),
  makeTrack("Queen", "Bohemian Rhapsody", "Rock"),
  makeTrack("Nirvana", "Smells Like Teen Spirit", "Rock"),
  makeTrack("Linkin Park", "In The End", "Rock"),
  makeTrack("AC/DC", "Thunderstruck", "Rock"),
  makeTrack("Bon Jovi", "Livin' On A Prayer", "Rock"),
  makeTrack("Green Day", "American Idiot", "Rock"),
  makeTrack("Michael Jackson", "Billie Jean", "Annees 80"),
  makeTrack("A-ha", "Take On Me", "Annees 80"),
  makeTrack("Rick Astley", "Never Gonna Give You Up", "Annees 80"),
  makeTrack("Survivor", "Eye Of The Tiger", "Annees 80"),
  makeTrack("Toto", "Africa", "Annees 80"),
  makeTrack("Madonna", "Like A Prayer", "Annees 80"),
  makeTrack("Britney Spears", "...Baby One More Time", "Annees 90"),
  makeTrack("Backstreet Boys", "I Want It That Way", "Annees 90"),
  makeTrack("Oasis", "Wonderwall", "Annees 90"),
  makeTrack("Coolio", "Gangsta's Paradise", "Annees 90"),
  makeTrack("Dr. Dre", "Still D.R.E.", "Annees 90"),
  makeTrack("Spice Girls", "Wannabe", "Annees 90"),
  makeTrack("The Black Eyed Peas", "I Gotta Feeling", "Annees 2000"),
  makeTrack("Lady Gaga", "Poker Face", "Annees 2000"),
  makeTrack("Beyonce", "Single Ladies", "Annees 2000"),
  makeTrack("Rihanna", "Umbrella", "Annees 2000"),
  makeTrack("OutKast", "Hey Ya!", "Annees 2000"),
  makeTrack("Britney Spears", "Toxic", "Annees 2000"),
  makeTrack("Avicii", "Wake Me Up", "Annees 2010"),
  makeTrack("Luis Fonsi", "Despacito", "Annees 2010"),
  makeTrack("Pharrell Williams", "Happy", "Annees 2010"),
  makeTrack("Sia", "Chandelier", "Annees 2010"),
  makeTrack("Drake", "One Dance", "Annees 2010"),
  makeTrack("Alan Walker", "Faded", "Annees 2010"),
  makeTrack("Olivia Rodrigo", "Drivers License", "Annees 2020"),
  makeTrack("Sabrina Carpenter", "Espresso", "Annees 2020"),
  makeTrack("Benson Boone", "Beautiful Things", "Annees 2020"),
  makeTrack("ROSE & Bruno Mars", "APT.", "Annees 2020"),
  makeTrack("Rema", "Calm Down", "Annees 2020"),
  makeTrack("Billie Eilish", "Birds of a Feather", "Annees 2020"),
  makeTrack("Frozen", "Let It Go", "Disney"),
  makeTrack("Moana", "How Far I'll Go", "Disney"),
  makeTrack("The Lion King", "Hakuna Matata", "Disney"),
  makeTrack("Aladdin", "A Whole New World", "Disney"),
  makeTrack("Encanto", "We Don't Talk About Bruno", "Disney"),
  makeTrack("Coco", "Remember Me", "Disney"),
  makeTrack("Mission Impossible", "Theme", "Films & Series"),
  makeTrack("Pirates Of The Caribbean", "Theme", "Films & Series"),
  makeTrack("Harry Potter", "Theme", "Films & Series"),
  makeTrack("Stranger Things", "Theme", "Films & Series"),
  makeTrack("Game Of Thrones", "Theme", "Films & Series"),
  makeTrack("Star Wars", "Main Theme", "Films & Series"),
  makeTrack("Minecraft", "Sweden", "Jeux Video"),
  makeTrack("GTA San Andreas", "Theme", "Jeux Video"),
  makeTrack("Super Mario Bros", "Theme", "Jeux Video"),
  makeTrack("Zelda", "Main Theme", "Jeux Video"),
  makeTrack("Tetris", "Theme", "Jeux Video"),
  makeTrack("Undertale", "Megalovania", "Jeux Video"),
  makeTrack("Tate McRae", "greedy", "TikTok Hits"),
  makeTrack("JVKE", "Golden Hour", "TikTok Hits"),
  makeTrack("Doja Cat", "Say So", "TikTok Hits"),
  makeTrack("Maneskin", "Beggin'", "TikTok Hits"),
  makeTrack("Tom Odell", "Another Love", "TikTok Hits"),
  makeTrack("PinkPantheress", "Boy's a liar", "TikTok Hits"),
  makeTrack("Mariah Carey", "All I Want For Christmas Is You", "Noel"),
  makeTrack("Wham!", "Last Christmas", "Noel"),
  makeTrack("Bobby Helms", "Jingle Bell Rock", "Noel"),
  makeTrack("Brenda Lee", "Rockin' Around The Christmas Tree", "Noel"),
  makeTrack("Ariana Grande", "Santa Tell Me", "Noel"),
  makeTrack("Sia", "Snowman", "Noel"),
];

let activeGame = games[0];
let activeScore = "";
let scores = loadScores();
let cleanupGame = () => {};
let audioContext = null;
let lastMoviePrompt = "";
let lastMusicAnswer = "";
let activeAudioStops = [];
const previewCache = new Map();

const gameByName = new Map(games.map((game) => [game.name, game]));
const gamesGrid = document.querySelector("#gamesGrid");
const gameShell = document.querySelector("#gameShell");
const leaderboardRows = document.querySelector("#leaderboardRows");
const gameFilter = document.querySelector("#gameFilter");
const scoreModal = document.querySelector("#scoreModal");
const modalGame = document.querySelector("#modalGame");
const modalScore = document.querySelector("#modalScore");
const playerName = document.querySelector("#playerName");
const cursorGlow = document.querySelector("#cursorGlow");

function loadScores() {
  try {
    const saved = JSON.parse(localStorage.getItem("nalyyScores") || "[]");
    return [...saved, ...starterScores];
  } catch {
    return [...starterScores];
  }
}

function saveUserScore(score) {
  const saved = JSON.parse(localStorage.getItem("nalyyScores") || "[]");
  localStorage.setItem("nalyyScores", JSON.stringify([score, ...saved].slice(0, 20)));
}

async function loadSharedScores() {
  try {
    const response = await fetch("/api/scores", { cache: "no-store" });
    if (!response.ok) throw new Error("Shared scores unavailable");
    const data = await response.json();
    const sharedScores = Array.isArray(data.scores) ? data.scores : [];
    scores = [...sharedScores, ...starterScores];
    renderLeaderboard();
    return true;
  } catch {
    return false;
  }
}

async function publishSharedScore(entry) {
  const response = await fetch("/api/scores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
  if (!response.ok) throw new Error("Score not saved globally");
  const data = await response.json();
  const sharedScores = Array.isArray(data.scores) ? data.scores : [];
  scores = [...sharedScores, ...starterScores];
  renderLeaderboard();
}

function iconMarkup(game) {
  if (game.icon === "balloon") return `<span class="balloon-icon" aria-hidden="true"></span>`;
  return `<i data-lucide="${game.icon}"></i>`;
}

function renderGames() {
  gamesGrid.innerHTML = games
    .map((game) => {
      const level = game.difficulty.toLowerCase();
      return `
        <article class="game-card" style="--c1:${game.colors[0]};--c2:${game.colors[1]}">
          <div class="game-icon">${iconMarkup(game)}</div>
          <h3>${game.name}</h3>
          <p>${game.description}</p>
          <div class="meta-row">
            <span class="pill ${level}">${game.difficulty}</span>
            <span class="time"><i data-lucide="clock"></i>${game.time}</span>
          </div>
          <button class="play-btn" data-game="${game.name}">
            <span>Play</span>
            <i data-lucide="chevron-right"></i>
          </button>
        </article>
      `;
    })
    .join("");
}

function renderFilters() {
  gameFilter.innerHTML = ["All Games", ...games.map((game) => game.name)]
    .map((name) => `<option>${name}</option>`)
    .join("");
}

function renderLeaderboard() {
  const selected = gameFilter.value || "All Games";
  const visibleScores = scores.filter((entry) => selected === "All Games" || entry.game === selected);

  leaderboardRows.innerHTML = visibleScores
    .map((entry, index) => {
      const game = gameByName.get(entry.game) || games[0];
      return `
        <tr>
          <td class="rank">${index + 1}</td>
          <td><span class="player"><span class="avatar">${entry.player[0].toUpperCase()}</span>${entry.player}</span></td>
          <td>
            <span class="game-cell">
              <span class="mini-icon" style="--c1:${game.colors[0]};--c2:${game.colors[1]}">${iconMarkup(game)}</span>
              ${entry.game}
            </span>
          </td>
          <td>${entry.score}</td>
          <td>${entry.date}</td>
        </tr>
      `;
    })
    .join("");

  refreshIcons();
}

function setRoute(route) {
  if (route !== "game") cleanupGame();

  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("active", view.dataset.view === route);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route || (route === "home" && link.dataset.route === "games"));
  });
}

function openScore(score) {
  activeScore = score;
  modalGame.textContent = activeGame.name;
  modalScore.textContent = activeScore;
  playerName.value = "";
  scoreModal.classList.add("open");
  scoreModal.setAttribute("aria-hidden", "false");
  setTimeout(() => playerName.focus(), 80);
}

function closeScore() {
  scoreModal.classList.remove("open");
  scoreModal.setAttribute("aria-hidden", "true");
}

async function publishScore() {
  const cleanName = playerName.value.trim() || "Player";
  const now = new Date();
  const entry = {
    player: cleanName,
    game: activeGame.name,
    score: activeScore,
    date: now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
  };
  const publishButton = document.querySelector("#publishScore");
  publishButton.disabled = true;
  publishButton.querySelector("span").textContent = "Publishing...";
  scores = [entry, ...scores];
  saveUserScore(entry);
  renderLeaderboard();
  try {
    await publishSharedScore(entry);
  } catch {
    renderLeaderboard();
  }
  publishButton.disabled = false;
  publishButton.querySelector("span").textContent = "Publish Score";
  closeScore();
  setRoute("leaderboard");
}

function finishGame(score) {
  cleanupGame();
  openScore(score);
}

function noteSuffix(note) {
  return `${Math.max(0, Math.min(10, note)).toFixed(1)}/10`;
}

function timeScore(seconds, maxGood = 8) {
  return noteSuffix(10 - Math.min(10, (seconds / maxGood) * 10));
}

function showResult(score, lines = []) {
  cleanupGame();
  activeScore = score;
  gameShell.querySelector(".game-stage").innerHTML = `
    <div class="result-box">
      <strong>${score}</strong>
      ${lines.map((line) => `<span>${line}</span>`).join("")}
      <button class="primary-btn game-action" id="resultPublish"><span>Publish Score</span></button>
      <button class="soft-btn game-action" id="resultReplay"><span>Play Again</span></button>
      <button class="private-btn" id="resultPrivate">Keep Private</button>
    </div>
  `;
  document.querySelector("#resultPublish").addEventListener("click", () => openScore(score));
  document.querySelector("#resultReplay").addEventListener("click", () => showSetup(activeGame));
  document.querySelector("#resultPrivate").addEventListener("click", showPrivateChoices);
}

function showPrivateChoices() {
  closeScore();
  cleanupGame();
  const stage = gameShell.querySelector(".game-stage");
  if (!stage || !activeGame) {
    setRoute("home");
    return;
  }
  stage.innerHTML = `
    <div class="result-box private-choice">
      <strong>Score kept private</strong>
      <span>${activeScore || "No score published"}</span>
      <button class="primary-btn game-action" id="privateRetry"><span>Retry</span></button>
      <button class="soft-btn game-action" id="privateHome"><span>Home</span></button>
    </div>
  `;
  document.querySelector("#privateRetry").addEventListener("click", () => showSetup(activeGame));
  document.querySelector("#privateHome").addEventListener("click", () => setRoute("home"));
}

function renderGameFrame(game, body) {
  gameShell.innerHTML = `
    <div class="game-panel" style="--c1:${game.colors[0]};--c2:${game.colors[1]}">
      <div class="game-panel-head">
        <div class="game-icon">${iconMarkup(game)}</div>
        <div>
          <h2>${game.name}</h2>
          <p>${game.description}</p>
        </div>
      </div>
      <div class="game-stage">${body}</div>
    </div>
  `;
  refreshIcons();
}

function difficultySelect() {
  return `
    <label class="setup-field">
      <span>Difficulty</span>
      <select id="difficulty">
        <option>Easy</option>
        <option selected>Medium</option>
        <option>Hard</option>
        <option>Impossible</option>
      </select>
    </label>
  `;
}

function numberSelect(id, label, values, selected = values[0]) {
  return `
    <label class="setup-field">
      <span>${label}</span>
      <select id="${id}">
        ${values.map((value) => `<option ${value === selected ? "selected" : ""}>${value}</option>`).join("")}
      </select>
    </label>
  `;
}

function optionSelect(id, label, values, selected = values[0]) {
  return `
    <label class="setup-field">
      <span>${label}</span>
      <select id="${id}">
        ${values.map((value) => `<option ${value === selected ? "selected" : ""}>${value}</option>`).join("")}
      </select>
    </label>
  `;
}

function centerSetupControls(html) {
  const count = (html.match(/setup-field/g) || []).length;
  if (count === 0) return { html: "", cls: "setup-grid empty" };
  if (count === 1) return { html, cls: "setup-grid single" };
  return { html, cls: "setup-grid" };
}

function showSetup(game) {
  cleanupGame();
  activeGame = game;
  setRoute("game");

  const controls = {
    Inflate: difficultySelect(),
    "Color Match": difficultySelect(),
    "Reaction Test": "",
    Precision: numberSelect("targetCount", "Targets", [10, 25, 50, 100], 10) + difficultySelect(),
    Timing: difficultySelect(),
    "Timer V2": "",
    "Find The Movie": numberSelect("optionCount", "Choices", [3, 4, 5, 6], 4) + difficultySelect(),
    "Find The Music":
      optionSelect("musicCategory", "Category", musicCategories, "Aleatoire") +
      numberSelect("optionCount", "Choices", [3, 4, 5, 6], 4),
  }[game.name];
  const setupControls = centerSetupControls(controls);

  renderGameFrame(game, `
    <div class="setup-card">
      <div class="setup-title">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
      </div>
      <div class="${setupControls.cls}">${setupControls.html}</div>
      <button class="primary-btn game-action" id="startGame"><span>Start</span></button>
    </div>
  `);

  document.querySelector("#startGame").addEventListener("click", () => {
    const settings = readSettings(game.name);
    startConfiguredGame(game, settings);
  });

}

function readSettings(gameName) {
  const difficulty = document.querySelector("#difficulty")?.value || "Medium";
  return {
    difficulty,
    trials: 1,
    targets: Number(document.querySelector("#targetCount")?.value || 10),
    timerTarget: 2 + Math.random() * 13,
    optionCount: Number(document.querySelector("#optionCount")?.value || 4),
    musicCategory: document.querySelector("#musicCategory")?.value || "Aleatoire",
    gameName,
  };
}

function startConfiguredGame(game, settings) {
  const starters = {
    Inflate: startInflate,
    "Color Match": startColorMatch,
    "Reaction Test": startReaction,
    Precision: startPrecision,
    Timing: startTiming,
    "Timer V2": startTimer,
    "Find The Movie": startMovie,
    "Find The Music": startMusic,
  };
  starters[game.name](settings);
}

function startInflate(settings) {
  const params = {
    Easy: { speed: 0.65, burst: 128, min: 82, max: 118 },
    Medium: { speed: 1, burst: 110, min: 78, max: 100 },
    Hard: { speed: 1.55, burst: 96, min: 70, max: 90 },
    Impossible: { speed: 2.35, burst: 82, min: 62, max: 78 },
  }[settings.difficulty];

  renderGameFrame(activeGame, `
    <div class="inflate-wrap">
      <div class="balloon-play red-balloon" id="balloonPlay"></div>
      <button class="primary-btn game-action" id="inflateBtn"><span>Hold</span></button>
      <p class="game-status" id="gameStatus">Hold as long as you dare. Release before it explodes.</p>
    </div>
  `);

  let power = 12;
  let timer = null;
  const balloon = document.querySelector("#balloonPlay");
  const button = document.querySelector("#inflateBtn");
  const status = document.querySelector("#gameStatus");

  const paint = () => {
    balloon.style.setProperty("--size", `${78 + power * 1.55}px`);
  };

  const lose = () => {
    clearInterval(timer);
    timer = null;
    status.textContent = "Boom. You lost.";
    balloon.classList.add("pop");
    setTimeout(() => showResult("0% - 0.0/10", ["The balloon exploded."]), 450);
  };

  const release = () => {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    const percent = Math.round(power);
    const note = (power / params.burst) * 10;
    finishGame(`${percent}% - ${noteSuffix(note)}`);
  };

  const hold = () => {
    if (timer) return;
    status.textContent = "Inflating...";
    timer = setInterval(() => {
      power += params.speed;
      paint();
      if (power >= params.burst) lose();
    }, 28);
  };

  button.addEventListener("pointerdown", hold);
  window.addEventListener("pointerup", release);
  cleanupGame = () => {
    clearInterval(timer);
    window.removeEventListener("pointerup", release);
  };
  paint();
}

function randomColor() {
  return {
    r: Math.floor(32 + Math.random() * 224),
    g: Math.floor(32 + Math.random() * 224),
    b: Math.floor(32 + Math.random() * 224),
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function colorAccuracy(target, chosen) {
  const distance = Math.hypot(target.r - chosen.r, target.g - chosen.g, target.b - chosen.b);
  const maxDistance = Math.hypot(255, 255, 255);
  return Math.max(0, 100 - (distance / maxDistance) * 100);
}

function startColorMatch(settings) {
  const visibleMs = { Easy: 5000, Medium: 3000, Hard: 1500, Impossible: 750 }[settings.difficulty];
  const reproduceMs = { Easy: 15000, Medium: 10000, Hard: 6000, Impossible: 3500 }[settings.difficulty];
  const target = randomColor();
  let left = visibleMs / 1000;
  let reproduceTimer = null;
  let reproduceTimeout = null;

  renderGameFrame(activeGame, `
    <div class="color-match">
      <div class="color-watch" id="targetColor" style="background:${rgbToHex(target)}"></div>
      <div class="countdown small-count" id="colorTimer">${left.toFixed(1)}</div>
      <p class="game-status">Memorize this color.</p>
    </div>
  `);

  const timerEl = document.querySelector("#colorTimer");
  const timer = setInterval(() => {
    left -= 0.1;
    timerEl.textContent = Math.max(0, left).toFixed(1);
  }, 100);

  const showPicker = () => {
    clearInterval(timer);
    const defaultColor = "#8b2cff";
    let reproduceLeft = reproduceMs / 1000;
    let submitted = false;
    gameShell.querySelector(".game-stage").innerHTML = `
      <div class="color-match picker-phase">
        <div class="countdown small-count repro-timer" id="reproTimer">${reproduceLeft.toFixed(1)}</div>
        <div class="color-compare">
          <div>
            <span>Target</span>
            <div class="color-hidden">?</div>
          </div>
          <div>
            <span>Your color</span>
            <div class="color-watch chosen-watch" id="chosenPreview" style="background:${defaultColor}"></div>
          </div>
        </div>
        <div class="color-tools">
          <label class="setup-field color-input">
            <span>Pick the closest color</span>
            <input type="color" id="colorPicker" value="${defaultColor}" />
          </label>
          <span class="hex-readout" id="hexReadout">${defaultColor.toUpperCase()}</span>
        </div>
        <button class="primary-btn game-action" id="validateColor"><span>Validate</span></button>
      </div>
    `;

    const picker = document.querySelector("#colorPicker");
    const preview = document.querySelector("#chosenPreview");
    const readout = document.querySelector("#hexReadout");
    const reproTimerEl = document.querySelector("#reproTimer");
    const syncFromPicker = () => {
      preview.style.background = picker.value;
      readout.textContent = picker.value.toUpperCase();
    };
    const validate = () => {
      if (submitted) return;
      submitted = true;
      clearInterval(reproduceTimer);
      clearTimeout(reproduceTimeout);
      const chosen = hexToRgb(picker.value);
      const accuracy = colorAccuracy(target, chosen);
      const score = Math.round(accuracy);
      showResult(`${score} / 100`, [
        `Accuracy: ${accuracy.toFixed(1)}%`,
        `Time limit: ${(reproduceMs / 1000).toFixed(1)}s`,
        `Target: ${rgbToHex(target)}`,
        `Chosen: ${picker.value}`,
      ]);
      const resultBox = document.querySelector(".result-box");
      resultBox.insertAdjacentHTML("afterbegin", `
        <div class="color-result-row">
          <div><span>Target</span><div class="color-watch mini-color" style="background:${rgbToHex(target)}"></div></div>
          <div><span>Chosen</span><div class="color-watch mini-color" style="background:${picker.value}"></div></div>
        </div>
      `);
    };
    picker.addEventListener("input", syncFromPicker);
    document.querySelector("#validateColor").addEventListener("click", validate);
    reproduceTimer = setInterval(() => {
      reproduceLeft -= 0.1;
      reproTimerEl.textContent = Math.max(0, reproduceLeft).toFixed(1);
    }, 100);
    reproduceTimeout = setTimeout(validate, reproduceMs);
  };

  const revealTimeout = setTimeout(showPicker, visibleMs);
  cleanupGame = () => {
    clearInterval(timer);
    clearTimeout(revealTimeout);
    clearInterval(reproduceTimer);
    clearTimeout(reproduceTimeout);
  };
}

function startReaction(settings) {
  renderGameFrame(activeGame, `
    <button class="reaction-pad" id="reactionPad">Start</button>
    <p class="game-status" id="gameStatus">One attempt. Wait for blue.</p>
  `);

  const pad = document.querySelector("#reactionPad");
  const status = document.querySelector("#gameStatus");
  let ready = false;
  let start = 0;
  let timeout = null;

  const arm = () => {
    ready = false;
    pad.classList.remove("ready");
    pad.textContent = "Wait...";
    status.textContent = "Wait for blue.";
    timeout = setTimeout(() => {
      ready = true;
      start = performance.now();
      pad.textContent = "Click!";
      pad.classList.add("ready");
    }, 700 + Math.random() * 1800);
  };

  pad.addEventListener("click", () => {
    if (pad.textContent === "Start") {
      arm();
      return;
    }
    if (!ready) {
      status.textContent = "Too early. Attempt restarted.";
      clearTimeout(timeout);
      setTimeout(arm, 600);
      return;
    }
    const ms = performance.now() - start;
    const note = 10 - Math.max(0, (ms - 170) / 55);
    finishGame(`${Math.round(ms)} ms - ${noteSuffix(note)}`);
  });

  cleanupGame = () => clearTimeout(timeout);
}

function startPrecision(settings) {
  const params = {
    Easy: { visible: 1000, size: 54 },
    Medium: { visible: 750, size: 44 },
    Hard: { visible: 500, size: 34 },
    Impossible: { visible: 250, size: 22 },
  }[settings.difficulty];

  renderGameFrame(activeGame, `
    <div class="precision-area" id="precisionArea"></div>
    <p class="game-status" id="gameStatus">0 / ${settings.targets}</p>
  `);

  const area = document.querySelector("#precisionArea");
  const status = document.querySelector("#gameStatus");
  let shown = 0;
  let hits = 0;
  let totalPoints = 0;
  let timeout = null;

  const spawn = () => {
    if (shown >= settings.targets) {
      area.innerHTML = "";
      const note = (totalPoints / (settings.targets * 100)) * 10;
      finishGame(`${Math.round(totalPoints)} pts - ${noteSuffix(note)}`);
      return;
    }
    shown += 1;
    area.innerHTML = `<button class="target-dot" data-target="1" style="width:${params.size}px;height:${params.size}px;left:${8 + Math.random() * 76}%;top:${10 + Math.random() * 70}%"></button>`;
    status.textContent = `${shown} / ${settings.targets} targets - ${Math.round(totalPoints)} pts`;
    const target = area.querySelector("button");
    target.addEventListener("click", (event) => {
      clearTimeout(timeout);
      hits += 1;
      const rect = target.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const max = rect.width / 2;
      totalPoints += Math.max(10, 100 * (1 - distance / max));
      spawn();
    });
    timeout = setTimeout(spawn, params.visible);
  };

  area.addEventListener("click", (event) => {
    if (event.target.closest("[data-target]")) return;
    clearTimeout(timeout);
    showResult("0 pts - 0.0/10", ["Failed: you clicked outside the target."]);
  });
  spawn();
  cleanupGame = () => clearTimeout(timeout);
}

function startTiming(settings) {
  const params = {
    Easy: { zone: 20, speed: 0.75 },
    Medium: { zone: 12, speed: 1.25 },
    Hard: { zone: 6, speed: 1.85 },
    Impossible: { zone: 2, speed: 2.8 },
  }[settings.difficulty];
  const safeLeft = 8 + Math.random() * (84 - params.zone);

  renderGameFrame(activeGame, `
    <div class="timing-bar">
      <span class="safe-zone" style="left:${safeLeft}%;width:${params.zone}%"></span>
      <span class="timing-marker" id="timingMarker"></span>
    </div>
    <button class="primary-btn game-action" id="stopTiming"><span>Stop</span></button>
    <p class="game-status" id="gameStatus">${settings.difficulty}: green zone is ${params.zone}%.</p>
  `);

  const marker = document.querySelector("#timingMarker");
  const status = document.querySelector("#gameStatus");
  let pos = 0;
  let dir = 1;
  const timer = setInterval(() => {
    pos += dir * params.speed;
    if (pos >= 100 || pos <= 0) dir *= -1;
    marker.style.left = `${pos}%`;
  }, 16);

  document.querySelector("#stopTiming").addEventListener("click", () => {
    clearInterval(timer);
    const center = safeLeft + params.zone / 2;
    const distance = Math.abs(pos - center);
    if (pos >= safeLeft && pos <= safeLeft + params.zone) {
      const note = 10 - (distance / Math.max(params.zone / 2, 1)) * 2;
      finishGame(`${Math.round(Math.max(0, 100 - distance * 4))}% - ${noteSuffix(note)}`);
    } else {
      const missNote = Math.max(0, 6 - distance / 4);
      showResult(`Miss - ${noteSuffix(missNote)}`, ["One attempt only."]);
    }
  });
  cleanupGame = () => clearInterval(timer);
}

function startTimer(settings) {
  const targetText = settings.timerTarget.toFixed(3);

  renderGameFrame(activeGame, `
    <div class="timer-target">${targetText}s</div>
    <button class="primary-btn game-action" id="timerButton"><span>Start</span></button>
    <p class="game-status" id="gameStatus">Click Start, then click again at the exact time.</p>
  `);

  const button = document.querySelector("#timerButton");
  const status = document.querySelector("#gameStatus");
  let startedAt = 0;
  button.addEventListener("click", () => {
    if (!startedAt) {
      startedAt = performance.now();
      button.querySelector("span").textContent = "Stop";
      status.textContent = "Counting...";
      return;
    }
    const elapsed = (performance.now() - startedAt) / 1000;
    const error = Math.abs(elapsed - settings.timerTarget);
    const note = 10 - error * 5;
    showResult(`${error.toFixed(3)} s error - ${noteSuffix(note)}`, [
      `Target: ${targetText}s`,
      `Your time: ${elapsed.toFixed(3)}s`,
    ]);
  });
  cleanupGame = () => {};
}

function pickQuiz(bank, optionCount, avoidPrompt = "") {
  const pool = bank.length > 1 ? bank.filter((item) => item[0] !== avoidPrompt) : bank;
  const item = pool[Math.floor(Math.random() * pool.length)];
  const [prompt, answer, allOptions] = item;
  const wrong = allOptions.filter((option) => option !== answer).sort(() => Math.random() - 0.5);
  return {
    prompt,
    answer,
    options: [answer, ...wrong].slice(0, optionCount).sort(() => Math.random() - 0.5),
  };
}

function startMovie(settings) {
  const startedAt = performance.now();
  const quiz = pickQuiz(movieBanks[settings.difficulty], settings.optionCount, lastMoviePrompt);
  lastMoviePrompt = quiz.prompt;
  renderGameFrame(activeGame, `
    <div class="quiz-prompt">${quiz.prompt}</div>
    <div class="quiz-options">
      ${quiz.options.map((option) => `<button class="soft-btn quiz-choice" data-answer="${option}"><span>${option}</span></button>`).join("")}
    </div>
    <p class="game-status" id="gameStatus">${settings.difficulty}: ${settings.optionCount} choices.</p>
  `);

  const status = document.querySelector("#gameStatus");
  document.querySelectorAll(".quiz-choice").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.answer !== quiz.answer) {
        showResult("0.000 s - 0.0/10", [`Wrong answer. Correct: ${quiz.answer}`]);
        return;
      }
      const seconds = (performance.now() - startedAt) / 1000;
      finishGame(`${seconds.toFixed(3)} s - ${timeScore(seconds, 10 + settings.optionCount)}`);
    });
  });
  cleanupGame = () => {};
}

function getAudioContext() {
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  return audioContext;
}

function stopActiveAudio() {
  activeAudioStops.forEach((stop) => {
    try {
      stop();
    } catch {}
  });
  activeAudioStops = [];
}

async function fetchAudioBuffer(track) {
  const ctx = getAudioContext();
  try {
    const response = await fetch(track.audioSrc);
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      return ctx.decodeAudioData(arrayBuffer);
    }
  } catch {}

  const previewUrl = await findPreviewUrl(track);
  if (!previewUrl) throw new Error("Audio not available yet");
  const previewResponse = await fetch(previewUrl);
  if (!previewResponse.ok) throw new Error("Audio preview not available");
  const previewBuffer = await previewResponse.arrayBuffer();
  return ctx.decodeAudioData(previewBuffer);
}

async function findPreviewUrl(track) {
  const key = `${track.artist} ${track.title}`.toLowerCase();
  if (previewCache.has(key)) return previewCache.get(key);
  try {
    const params = new URLSearchParams({
      term: `${track.artist} ${track.title}`,
      media: "music",
      entity: "song",
      limit: "8",
    });
    const response = await fetch(`https://itunes.apple.com/search?${params.toString()}`);
    if (!response.ok) throw new Error("Preview search failed");
    const data = await response.json();
    const titleToken = track.title.toLowerCase().split(" ")[0];
    const artistToken = track.artist.toLowerCase().split(" ")[0];
    const exact = (data.results || []).find((item) => {
      const song = String(item.trackName || "").toLowerCase();
      const artist = String(item.artistName || "").toLowerCase();
      return item.previewUrl && song.includes(titleToken) && artist.includes(artistToken);
    });
    const previewUrl = exact?.previewUrl || data.results?.find((item) => item.previewUrl)?.previewUrl || null;
    previewCache.set(key, previewUrl);
    return previewUrl;
  } catch {
    previewCache.set(key, null);
    return null;
  }
}

async function playLocalMusic(track, status) {
  stopActiveAudio();
  status.textContent = "Loading audio...";
  try {
    const ctx = getAudioContext();
    const buffer = await fetchAudioBuffer(track);
    const sourceBuffer = ctx.createBuffer(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
    for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
      const input = buffer.getChannelData(ch);
      const output = sourceBuffer.getChannelData(ch);
      for (let i = 0; i < input.length; i++) output[i] = input[input.length - 1 - i];
    }

    const source = ctx.createBufferSource();
    source.buffer = sourceBuffer;
    source.connect(ctx.destination);
    const offset = Math.random() * Math.max(1, buffer.duration - 5);
    source.start(0, offset, 5);
    activeAudioStops.push(() => {
      try {
        source.stop();
      } catch {}
    });
    status.textContent = "Inversed audio playing.";
  } catch {
    status.textContent = "Audio not available yet. Try Another Music or add the file in /audio.";
  }
}

function startMusic(settings) {
  const startedAt = performance.now();
  const categoryPool = settings.musicCategory === "Aleatoire"
    ? musicLibrary
    : musicLibrary.filter((track) => track.category === settings.musicCategory);
  const playablePool = categoryPool.length > 1 ? categoryPool.filter((track) => `${track.artist} - ${track.title}` !== lastMusicAnswer) : categoryPool;
  const answerTrack = playablePool[Math.floor(Math.random() * playablePool.length)] || musicLibrary[0];
  const answer = `${answerTrack.artist} - ${answerTrack.title}`;
  lastMusicAnswer = answer;
  const wrongPool = (categoryPool.length >= settings.optionCount ? categoryPool : musicLibrary)
    .filter((track) => `${track.artist} - ${track.title}` !== answer)
    .sort(() => Math.random() - 0.5);
  const options = [answer, ...wrongPool.map((track) => `${track.artist} - ${track.title}`)]
    .slice(0, settings.optionCount)
    .sort(() => Math.random() - 0.5);

  renderGameFrame(activeGame, `
    <div class="music-player">
      <button class="primary-btn game-action" id="playSound"><i data-lucide="volume-2"></i><span>Play Sound</span></button>
      <button class="soft-btn game-action" id="nextMusic"><span>Another Music</span></button>
    </div>
    <div class="quiz-options">
      ${options.map((option) => `<button class="soft-btn quiz-choice" data-answer="${option}"><span>${option}</span></button>`).join("")}
    </div>
    <p class="game-status" id="gameStatus">${settings.musicCategory} - Inversed - ${settings.optionCount} choices</p>
  `);
  refreshIcons();

  const status = document.querySelector("#gameStatus");
  document.querySelector("#playSound").addEventListener("click", () => playLocalMusic(answerTrack, status));
  document.querySelector("#nextMusic").addEventListener("click", () => startMusic(settings));

  document.querySelectorAll(".quiz-choice").forEach((button) => {
    button.addEventListener("click", () => {
      stopActiveAudio();
      const seconds = (performance.now() - startedAt) / 1000;
      if (button.dataset.answer !== answer) {
        showResult("0 pts - 0.0/10", [
          `Correct: ${answer}`,
          `Chosen: ${button.dataset.answer}`,
          `Time: ${seconds.toFixed(3)}s`,
        ]);
        return;
      }
      const points = Math.max(1, Math.round((1200 + settings.optionCount * 180) * 2.4 - seconds * 60));
      showResult(`${points} pts - ${timeScore(seconds, 10 + settings.optionCount)}`, [
        `Correct: ${answer}`,
        `Chosen: ${button.dataset.answer}`,
        `Time: ${seconds.toFixed(3)}s`,
      ]);
    });
  });
  cleanupGame = () => stopActiveAudio();
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

renderGames();
renderFilters();
renderLeaderboard();
loadSharedScores();
refreshIcons();

document.addEventListener("pointermove", (event) => {
  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

document.addEventListener("click", (event) => {
  const jump = event.target.closest(".nav-jump, .nav-link");
  if (jump?.dataset.route) {
    setRoute(jump.dataset.route);
    return;
  }

  const play = event.target.closest(".play-btn");
  if (play) {
    showSetup(gameByName.get(play.dataset.game) || games[0]);
  }
});

gameFilter.addEventListener("change", renderLeaderboard);
document.querySelector("#rangeFilter").addEventListener("change", renderLeaderboard);
document.querySelector("#closeModal").addEventListener("click", closeScore);
document.querySelector("#keepPrivate").addEventListener("click", showPrivateChoices);
document.querySelector("#publishScore").addEventListener("click", publishScore);

scoreModal.addEventListener("click", (event) => {
  if (event.target === scoreModal) closeScore();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeScore();
  if (event.key === "Enter" && scoreModal.classList.contains("open") && document.activeElement === playerName) {
    publishScore();
  }
});
