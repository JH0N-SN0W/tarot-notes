
const PACK = JSON.parse(document.getElementById("pack").textContent);
const UI = PACK.ui;
const CARDS = PACK.cards;
const KEY = "tarot-notes-lang";
const NOTE_KEY = "tarot-notes-journal";
const backTemplate = document.querySelector(".back-plate").cloneNode(true);
let lang = localStorage.getItem(KEY) === "en" ? "en" : "zh";
let drawnId = null;

function lookup(key) {
  const parts = key.split(".");
  let node = parts[0] === "ui" ? UI[lang] : CARDS.find((c) => c.id === parts[1])[lang];
  const rest = parts[0] === "ui" ? parts.slice(1) : parts.slice(2);
  for (const p of rest) node = node[p];
  return node;
}

function applyLang() {
  const s = UI[lang];
  document.documentElement.lang = s.htmlLang;
  document.title = s.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", s.desc);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = lookup(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", lookup(el.getAttribute("data-i18n-placeholder")));
  });
  const btn = document.getElementById("lang-toggle");
  btn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  btn.setAttribute("aria-label", s.toggleLabel);
  const nav = document.querySelector(".nav-links");
  if (nav) nav.setAttribute("aria-label", lang === "zh" ? "页面" : "Page");
  renderDraw();
}

function plateFrom(id) {
  const face = document.querySelector('.face[data-id="' + id + '"] .plate');
  return face ? face.cloneNode(true) : null;
}

function renderDraw() {
  const s = UI[lang];
  const btn = document.getElementById("draw-btn");
  btn.textContent = drawnId ? s.drawAgain : s.drawBtn;
  const cardBox = document.getElementById("draw-card");
  const result = document.getElementById("draw-result");
  cardBox.innerHTML = "";
  result.innerHTML = "";
  if (!drawnId) {
    cardBox.appendChild(backTemplate.cloneNode(true));
    const p = document.createElement("p");
    p.className = "fine";
    p.textContent = s.drawEmpty;
    result.appendChild(p);
    return;
  }
  const svg = plateFrom(drawnId);
  if (svg) cardBox.appendChild(svg);
  const card = CARDS.find((c) => c.id === drawnId);
  const copy = card[lang];
  const h = document.createElement("h3");
  h.className = "draw-result-name";
  h.textContent = card.num + " · " + copy.name;
  const sub = document.createElement("p");
  sub.className = "draw-result-title";
  sub.textContent = copy.title;
  const tag = document.createElement("p");
  tag.className = "reflect-label";
  tag.textContent = s.label;
  const reading = document.createElement("p");
  reading.textContent = copy.popular;
  const link = document.createElement("a");
  link.href = "#note-" + card.id;
  link.textContent = copy.name;
  result.append(h, sub, tag, reading, link);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem(KEY, lang);
  applyLang();
});

document.getElementById("draw-btn").addEventListener("click", () => {
  const pick = CARDS[Math.floor(Math.random() * CARDS.length)];
  drawnId = pick.id;
  renderDraw();
});

const note = document.getElementById("journal-note");
const saved = localStorage.getItem(NOTE_KEY);
if (saved) note.value = saved;
note.addEventListener("input", () => localStorage.setItem(NOTE_KEY, note.value));

applyLang();
