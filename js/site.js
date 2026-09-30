const STR = {
  zh: {
    kicker: "流行解释 · 供反思",
    title: "塔罗笔记",
    position: "五张大阿卡纳的笔记。抽到的是一种通行读法，用来对照自己，不是算命结果。",
    boundary: "每段流行解释都只是供反思的通行说法：不是事实，也不是对未来的承诺。不是预测、诊断或专业建议。是否采取任何行动由你自己决定。只谈塔罗，不谈易经，也不谈占星。",
    disclaimer: "仅供反思。流行解释是通行说法，不是事实，也不是对未来的承诺。此处塔罗是文化提示，不是预测、诊断或专业建议。是否采取任何行动由你自己决定。",
    drawTitle: "抽一张",
    drawBtn: "抽一张",
    drawAgain: "再抽一张",
    drawEmpty: "还没有抽牌。抽到的牌会显示流行解释。",
    label: "流行解释 · 供反思 · 不是事实，也不是对未来的承诺",
    fields: {
      history: "历史注记",
      popular: "流行解释",
      question: "反思问题",
      action: "温和行动",
      disclaimer: "声明"
    },
    all: "全部",
    footer: "18岁及以上。无登录，无视频。不使用受版权保护的牌面图画。不涉及易经或占星。",
    toggle: "EN",
    htmlLang: "zh-CN",
    sections: { major: "大阿卡纳" }
  },
  en: {
    kicker: "Popular interpretation · for reflection",
    title: "塔罗笔记",
    position: "Notes on five Major Arcana cards. A draw shows a common reading to think with, not a fortune result.",
    boundary: "Every popular reading is a common interpretation for reflection: not a fact, and not a promise about the future. Not a prediction, diagnosis, or professional advice. You decide what—if anything—to do next. Tarot only. No I Ching and no astrology.",
    disclaimer: "For reflection only. A popular reading is a common interpretation, not a fact and not a promise about the future. Tarot here is a cultural prompt, not a prediction, diagnosis, or professional advice. You decide what—if anything—to do next.",
    drawTitle: "One-card draw",
    drawBtn: "Draw one card",
    drawAgain: "Draw again",
    drawEmpty: "No card yet. A draw shows the popular reading.",
    label: "Popular interpretation · for reflection · not a fact and not a promise about the future",
    fields: {
      history: "Historical note",
      popular: "Popular reading",
      question: "Reflection question",
      action: "Gentle action",
      disclaimer: "Disclaimer"
    },
    all: "All",
    footer: "Ages 18 and over. No login and no video. No copyrighted card art. No I Ching and no astrology.",
    toggle: "中文",
    htmlLang: "en",
    sections: { major: "Major Arcana" }
  }
};

const CARDS = [
  {
    id: "fool",
    section: "major",
    num: "0",
    zh: {
      name: "愚者（0）",
      title: "没有地图也开始",
      history: "在早期意大利塔罗牌戏（tarocchi）里，愚者（matto）是一张与编号王牌并列的特殊百搭牌。15世纪中叶米兰宫廷的豪华手绘牌组，是与这一游戏传统相关、现存较早的例子。",
      popular: "在现代反思式读法里，愚者常被读作一道门槛：在一切还不确定时就开始，好奇多于保证。",
      question: "如果这周允许自己做一个小小的、可撤回的开始，那会是什么？还有哪一种害怕仍在跟它讨价还价？",
      action: "写一句以「我会试试……」开头的话，并在24小时内为它留出20分钟。不必公开宣布。"
    },
    en: {
      name: "The Fool (0)",
      title: "Begin Without a Map",
      history: "In early Italian tarocchi, the Fool (matto) functioned as a distinct wild card alongside numbered trumps. Luxury hand-painted decks from mid-15th-century Milan courts are among the earliest surviving examples tied to this game tradition.",
      popular: "In modern reflective practice, The Fool is often read as a threshold: starting before everything feels certain, with curiosity more than guarantees.",
      question: "If you allowed a small, reversible beginning this week, what would it be—and what fear is still negotiating against it?",
      action: "Write one sentence that starts with “I will try…” and schedule 20 minutes for it within 24 hours. No public announcement required."
    }
  },
  {
    id: "magician",
    section: "major",
    num: "I",
    zh: {
      name: "魔术师（I）",
      title: "已经在桌上的工具",
      history: "魔术师（或历史上王牌序列里类似的工匠或杂耍者形象）出现在随欧洲王牌纸牌游戏发展起来的大阿卡纳谱系中。具体图像因牌组传统而异，例如马赛式样，以及后来的英语牌组。",
      popular: "流行指南常把这张牌当作提醒：在去寻找一个全新身份之前，先看看你已经拥有的技能、联系和材料。",
      question: "有哪一种能力，你明明已经成功用过一次，却仍把它当成「还不够真」？",
      action: "列出三样你已经有的具体工具（一项技能、一则笔记、一个模板，或一个你可以问的人）。圈出一件，明天用一次。"
    },
    en: {
      name: "The Magician (I)",
      title: "Tools Already on the Table",
      history: "The Magician (or similar craftsman or juggler figures in historical trump sequences) appears in the Major Arcana lineage that developed with European trump card games. Exact iconography varies by deck tradition, such as Marseille-pattern decks and later English-language decks.",
      popular: "Popular guides often treat this card as a reminder to notice skills, contacts, and materials you already have before hunting for a brand-new identity.",
      question: "Which capability have you been treating as “not real enough” even though you’ve already used it successfully once?",
      action: "List three concrete tools you already have (a skill, a note, a template, or a person you could ask). Circle one to use once tomorrow."
    }
  },
  {
    id: "priestess",
    section: "major",
    num: "II",
    zh: {
      name: "女祭司（II）",
      title: "安静的应允",
      history: "王牌序列里的女教皇或女祭司图像，在不同地区和世纪里有过变化。历史学者提醒，不要把任何单一的现代神秘学故事回读到15世纪的牌戏上。",
      popular: "当代反思式读法常把这张牌与停顿、向内倾听，以及暂时选择还不说出口联系起来。",
      question: "在哪里，一段暂时的沉默能保护你的清楚，而又不惩罚别人？",
      action: "选一段可以推迟24小时的对话。如有需要，发一句简短的「我明天回复」，然后不戴耳机走一小段路。"
    },
    en: {
      name: "The High Priestess (II)",
      title: "The Quiet Yes",
      history: "Female papal or priestess imagery in trump sequences has shifted across regions and centuries. Historians caution against reading any single modern esoteric story back onto 15th-century gameplay.",
      popular: "Contemporary reflective readings often link this card with pausing, listening inward, and choosing what not to disclose yet.",
      question: "Where would a temporary silence protect your clarity—without punishing anyone else?",
      action: "Pick one conversation you can delay 24 hours. Send a brief “I’ll reply tomorrow” if needed, then take a short walk without headphones."
    }
  },
  {
    id: "empress",
    section: "major",
    num: "III",
    zh: {
      name: "女皇（III）",
      title: "照料你已有的园子",
      history: "女皇图像属于历史上王牌纸牌的宫廷与寓言视觉语言。存世的豪华牌组显示，文艺复兴精英委托制作的是华丽的游戏牌，而不是印刷的算命手册。",
      popular: "面向身心保养的现代读法常把女皇框定为滋养、创造，以及留意耗竭，并不承诺生育或健康结果。",
      question: "眼下有什么在消耗你，而你仍称之为「正常」？又有什么在悄悄喂养你，而你低估了它？",
      action: "做一件不超过15分钟的滋养小事（喝水、伸展、收拾一块台面，或好好吃一顿）。不必为了社交媒体去优化它。"
    },
    en: {
      name: "The Empress (III)",
      title: "Tend the Garden You Have",
      history: "Empress imagery belongs to the courtly and allegorical visual language of historical trump cards. Surviving luxury decks show how Renaissance elites commissioned ornate play decks rather than printed fortune manuals.",
      popular: "Modern wellness-oriented readings often frame The Empress as nourishment, creativity, and noticing depletion—without promising fertility or health outcomes.",
      question: "What is currently draining you that you keep calling “normal,” and what is quietly feeding you that you undervalue?",
      action: "Do one nourishing act under 15 minutes (water, a stretch, tidying one surface, or eating a proper meal). Skip optimizing it for social media."
    }
  },
  {
    id: "emperor",
    section: "major",
    num: "IV",
    zh: {
      name: "皇帝（IV）",
      title: "你写下的规则，和你继承的规则",
      history: "皇帝王牌处在早期欧洲王牌游戏常见的等级寓言里。学术性的牌史强调，在18至19世纪的神秘学重新诠释之前，它首先来自娱乐。",
      popular: "流行牌组常把皇帝理解为结构、责任与权威，适合用来问：你遵循的规则是谁写下的。",
      question: "这周哪一条规则是你有意选择的？哪一条你仍在执行，主要只是因为曾经有人这样期待？",
      action: "把一条继承来的「必须」改写成可撤回的试验：「这三天我会改成试试……」。写在一张便签上。"
    },
    en: {
      name: "The Emperor (IV)",
      title: "Rules You Wrote vs Rules You Inherited",
      history: "Emperor trumps sit within the hierarchical allegories common in early European trump games. Scholarly histories emphasize recreational origins before later occult reinterpretations of the 18th and 19th centuries.",
      popular: "Popular decks often cast The Emperor as structure, responsibility, and authority—useful for asking who authored the rules you follow.",
      question: "Which rule in your week did you choose on purpose, and which one are you still enforcing mainly because someone else once expected it?",
      action: "Rewrite one inherited “must” as a reversible experiment: “For three days I will try… instead.” Put it on a sticky note."
    }
  }
];

const KEY = "tarot-notes-lang";
let lang = localStorage.getItem(KEY) === "en" ? "en" : "zh";
let filter = "all";
let drawnId = null;

function t() { return STR[lang]; }

function glyph(card) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("class", "glyph");
  svg.setAttribute("viewBox", "0 0 72 112");
  svg.setAttribute("aria-hidden", "true");
  const rect = document.createElementNS(ns, "rect");
  rect.setAttribute("x", "1.5");
  rect.setAttribute("y", "1.5");
  rect.setAttribute("width", "69");
  rect.setAttribute("height", "109");
  rect.setAttribute("rx", "8");
  rect.setAttribute("fill", "#fffdf8");
  rect.setAttribute("stroke", "#1c1915");
  rect.setAttribute("stroke-width", "1.5");
  const label = document.createElementNS(ns, "text");
  label.setAttribute("x", "36");
  label.setAttribute("y", "28");
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("fill", "#9c3418");
  label.setAttribute("font-size", "14");
  label.setAttribute("font-family", "ui-sans-serif, system-ui, sans-serif");
  label.textContent = card.num;
  svg.append(rect, label);
  const mark = document.createElementNS(ns, "g");
  mark.setAttribute("fill", "none");
  mark.setAttribute("stroke", "#3d4a3a");
  mark.setAttribute("stroke-width", "1.5");
  if (card.id === "fool") {
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("cx", "36"); c.setAttribute("cy", "68"); c.setAttribute("r", "14");
    const d = document.createElementNS(ns, "circle");
    d.setAttribute("cx", "48"); d.setAttribute("cy", "84"); d.setAttribute("r", "3");
    d.setAttribute("fill", "#3d4a3a");
    mark.append(c, d);
  } else if (card.id === "magician") {
    for (const x of [22, 32, 42, 52]) {
      const c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", String(x)); c.setAttribute("cy", "78"); c.setAttribute("r", "3");
      mark.append(c);
    }
    const up = document.createElementNS(ns, "circle");
    up.setAttribute("cx", "36"); up.setAttribute("cy", "60"); up.setAttribute("r", "5");
    mark.append(up);
  } else if (card.id === "priestess") {
    const a = document.createElementNS(ns, "line");
    a.setAttribute("x1", "28"); a.setAttribute("y1", "54"); a.setAttribute("x2", "28"); a.setAttribute("y2", "88");
    const b = document.createElementNS(ns, "line");
    b.setAttribute("x1", "44"); b.setAttribute("y1", "54"); b.setAttribute("x2", "44"); b.setAttribute("y2", "88");
    const c = document.createElementNS(ns, "path");
    c.setAttribute("d", "M30 66h12");
    mark.append(a, b, c);
  } else if (card.id === "empress") {
    const p = document.createElementNS(ns, "path");
    p.setAttribute("d", "M24 84c6-22 18-22 24 0");
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("cx", "36"); c.setAttribute("cy", "62"); c.setAttribute("r", "4");
    mark.append(p, c);
  } else {
    const r = document.createElementNS(ns, "rect");
    r.setAttribute("x", "24"); r.setAttribute("y", "56"); r.setAttribute("width", "24"); r.setAttribute("height", "24");
    mark.append(r);
  }
  svg.append(mark);
  return svg;
}

function field(label, text) {
  const p = document.createElement("p");
  p.className = "field";
  const s = document.createElement("span");
  s.className = "field-label";
  s.textContent = label;
  p.append(s, document.createTextNode(text));
  return p;
}

function renderChrome() {
  const s = t();
  document.documentElement.lang = s.htmlLang;
  document.title = s.title;
  document.getElementById("kicker").textContent = s.kicker;
  document.getElementById("position").textContent = s.position;
  document.getElementById("boundary").textContent = s.boundary;
  document.getElementById("footer").textContent = s.footer;
  document.getElementById("draw-label").textContent = s.drawTitle;
  const drawBtn = document.getElementById("draw-btn");
  drawBtn.textContent = drawnId ? s.drawAgain : s.drawBtn;
  const btn = document.getElementById("lang-toggle");
  btn.textContent = s.toggle;
  btn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");

  const nav = document.getElementById("sections");
  nav.innerHTML = "";
  const chips = [["all", s.all], ...Object.entries(s.sections)];
  for (const [id, label] of chips) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = label;
    b.setAttribute("aria-pressed", filter === id ? "true" : "false");
    b.addEventListener("click", () => { filter = id; render(); });
    nav.appendChild(b);
  }
}

function renderDraw() {
  const s = t();
  const box = document.getElementById("draw-result");
  box.innerHTML = "";
  if (!drawnId) {
    const p = document.createElement("p");
    p.className = "fine");
    p.textContent = s.drawEmpty;
    box.appendChild(p);
    return;
  }
  const card = CARDS.find(c => c.id === drawnId);
  const copy = card[lang];
  const wrap = document.createElement("div");
  wrap.className = "drawn";
  const text = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = copy.name + " · " + copy.title;
  const tag = document.createElement("p");
  tag.className = "tag";
  tag.textContent = s.label;
  const reading = document.createElement("p");
  reading.className = "reading";
  reading.textContent = copy.popular;
  text.append(h3, tag, reading);
  wrap.append(glyph(card), text);
  box.appendChild(wrap);
}

function renderList() {
  const s = t();
  const list = document.getElementById("list");
  const open = new Set([...list.querySelectorAll("details[open]")].map(d => d.dataset.id));
  list.innerHTML = "";
  for (const card of CARDS) {
    if (filter !== "all" && card.section !== filter) continue;
    const copy = card[lang];
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.id = card.id;
    if (open.has(card.id)) d.open = true;
    const sum = document.createElement("summary");
    const meta = document.createElement("div");
    meta.className = "meta";
    const left = document.createElement("span");
    left.textContent = s.sections[card.section];
    const right = document.createElement("span");
    right.textContent = copy.name;
    meta.append(left, right);
    const h2 = document.createElement("h2");
    h2.textContent = copy.title;
    sum.append(meta, h2);
    const body = document.createElement("div");
    body.className = "body";
    body.append(
      field(s.fields.history, copy.history),
      field(s.fields.popular, copy.popular),
      field(s.fields.question, copy.question),
      field(s.fields.action, copy.action),
      field(s.fields.disclaimer, s.disclaimer)
    );
    const tag = document.createElement("p");
    tag.className = "tag";
    tag.textContent = s.label;
    body.insertBefore(tag, body.children[1]);
    d.append(sum, body);
    list.appendChild(d);
  }
}

function render() { renderChrome(); renderDraw(); renderList(); }

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem(KEY, lang);
  render();
});

document.getElementById("draw-btn").addEventListener("click", () => {
  const pick = CARDS[Math.floor(Math.random() * CARDS.length)];
  drawnId = pick.id;
  render();
});

render();
