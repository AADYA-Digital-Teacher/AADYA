/*
===========================================================
AADYA DIGITAL TEACHER
Class 8 Mathematics
Chapter 1 - Rational Numbers
Chapter 2 - Square Roots
Independent Diagram Engine
===========================================================
*/

(function () {
  "use strict";

  const ENGINE_NAME =
    "AADYA Class 8 Number + Root Diagram Engine v1.0";

  function esc(v) {
    return String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function text(x, y, value, size = 20, weight = 600) {
    return `<text x="${x}" y="${y}"
      text-anchor="middle"
      dominant-baseline="middle"
      font-size="${size}"
      font-weight="${weight}"
      fill="#222">${esc(value)}</text>`;
  }

  function line(x1, y1, x2, y2, width = 3) {
    return `<line x1="${x1}" y1="${y1}"
      x2="${x2}" y2="${y2}"
      stroke="#222"
      stroke-width="${width}"
      stroke-linecap="round"/>`;
  }

  function box(x, y, w, h, fill = "#f5f5f5") {
    return `<rect x="${x}" y="${y}"
      width="${w}" height="${h}"
      rx="12"
      fill="${fill}"
      stroke="#222"
      stroke-width="2"/>`;
  }

  function circle(cx, cy, r) {
    return `<circle cx="${cx}" cy="${cy}"
      r="${r}"
      fill="#fff"
      stroke="#222"
      stroke-width="3"/>`;
  }

  function wrap(svg, height = 300) {
    return `
      <div class="aadya-c8nr-diagram"
        style="
          margin:20px 0;
          padding:14px;
          background:#fff;
          border:1px solid #e5e5e5;
          border-radius:18px;
          overflow:hidden;
        ">
        <div style="
          font-weight:700;
          font-size:16px;
          margin-bottom:8px;
        ">
          🧮 AADYA Visual Learning
        </div>

        <svg
          viewBox="0 0 800 ${height}"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Class 8 गणित visual">
          ${svg}
        </svg>
      </div>
    `;
  }

  /* =====================================================
     CHAPTER 1
     ===================================================== */

  function rationalIntro() {
    return wrap(`
      ${text(400, 25, "परिमेय संख्या = p/q", 23, 700)}

      ${box(90, 75, 180, 80)}
      ${text(180, 105, "p", 32, 700)}
      ${line(140, 125, 220, 125, 3)}
      ${text(180, 145, "q ≠ 0", 18, 700)}

      ${text(400, 115, "=", 35, 700)}

      ${box(530, 75, 180, 80)}
      ${text(620, 105, "3", 32, 700)}
      ${line(580, 125, 660, 125, 3)}
      ${text(620, 145, "5", 32, 700)}

      ${text(400, 215, "उदाहरण: आधा किलो = 1/2 kg", 21, 700)}
      ${text(400, 255, "उधार ₹50 = −50 रुपये", 21, 700)}
    `, 300);
  }

  function numberLine() {
    return wrap(`
      ${text(400, 25, "संख्या रेखा पर परिमेय संख्याएँ", 22, 700)}

      ${line(90, 150, 710, 150, 4)}

      ${line(150, 135, 150, 165, 3)}
      ${line(250, 135, 250, 165, 3)}
      ${line(350, 135, 350, 165, 3)}
      ${line(450, 135, 450, 165, 3)}
      ${line(550, 135, 550, 165, 3)}
      ${line(650, 135, 650, 165, 3)}

      ${text(150, 190, "-2", 18)}
      ${text(250, 190, "-1", 18)}
      ${text(350, 190, "0", 18, 700)}
      ${text(450, 190, "1", 18)}
      ${text(550, 190, "2", 18)}
      ${text(650, 190, "3", 18)}

      ${circle(500, 150, 9)}
      ${text(500, 105, "3/2", 21, 700)}

      ${text(400, 245, "बाएँ = ऋणात्मक   |   दाएँ = धनात्मक", 20, 700)}
    `, 290);
  }

  function rationalAddition() {
    return wrap(`
      ${text(400, 25, "परिमेय संख्याओं का जोड़", 22, 700)}

      ${box(75, 80, 180, 70)}
      ${text(165, 115, "1/2", 28, 700)}

      ${text(305, 115, "+", 32, 700)}

      ${box(355, 80, 180, 70)}
      ${text(445, 115, "1/3", 28, 700)}

      ${text(585, 115, "→", 35, 700)}

      ${box(625, 80, 100, 70)}
      ${text(675, 115, "5/6", 25, 700)}

      ${text(400, 205, "LCM(2,3)=6", 20, 700)}
      ${text(400, 245, "3/6 + 2/6 = 5/6", 23, 700)}
    `, 290);
  }

  function multiplicationDistribution() {
    return wrap(`
      ${text(400, 25, "वितरण नियम", 22, 700)}

      ${box(80, 80, 170, 70)}
      ${text(165, 115, "a(b+c)", 25, 700)}

      ${text(290, 115, "=", 30, 700)}

      ${box(355, 55, 160, 60)}
      ${text(435, 85, "ab", 23, 700)}

      ${text(535, 85, "+", 28, 700)}

      ${box(570, 55, 160, 60)}
      ${text(650, 85, "ac", 23, 700)}

      ${text(400, 175, "उदाहरण", 19, 700)}
      ${text(400, 215, "3(4+5) = 3×4 + 3×5 = 27", 23, 700)}
      ${text(400, 260, "एक मात्रा को दो हिस्सों में बाँटकर सोचें", 18)}
    `, 300);
  }

  function inverseDiagram() {
    return wrap(`
      ${text(400, 25, "दो प्रकार के प्रतिलोम", 22, 700)}

      ${box(70, 75, 270, 70)}
      ${text(205, 110, "3/5 + (−3/5)", 24, 700)}
      ${text(205, 175, "=", 25, 700)}
      ${text(205, 210, "0  → योज्य प्रतिलोम", 21, 700)}

      ${box(460, 75, 270, 70)}
      ${text(595, 110, "3/5 × 5/3", 24, 700)}
      ${text(595, 175, "=", 25, 700)}
      ${text(595, 210, "1 → गुणात्मक प्रतिलोम", 21, 700)}
    `, 280);
  }

  function divisionDiagram() {
    return wrap(`
      ${text(400, 25, "भाग = गुणात्मक प्रतिलोम से गुणा", 22, 700)}

      ${box(70, 80, 160, 70)}
      ${text(150, 115, "3/4", 28, 700)}

      ${text(280, 115, "÷", 32, 700)}

      ${box(325, 80, 160, 70)}
      ${text(405, 115, "2/5", 28, 700)}

      ${text(535, 115, "→", 35, 700)}

      ${box(580, 80, 150, 70)}
      ${text(655, 115, "5/2", 26, 700)}

      ${text(400, 210, "3/4 × 5/2 = 15/8", 25, 700)}
      ${text(400, 255, "भाजक को पलटें और गुणा करें", 20, 700)}
    `, 300);
  }

  function absoluteComparison() {
    return wrap(`
      ${text(400, 25, "निरपेक्ष मान = 0 से दूरी", 22, 700)}

      ${line(100, 145, 700, 145, 4)}

      ${line(180, 130, 180, 160, 3)}
      ${line(400, 130, 400, 160, 3)}
      ${line(620, 130, 620, 160, 3)}

      ${text(180, 190, "-3", 20)}
      ${text(400, 190, "0", 20, 700)}
      ${text(620, 190, "3", 20)}

      ${line(400, 105, 180, 105, 3)}
      ${line(400, 105, 620, 105, 3)}

      ${text(290, 75, "3", 20, 700)}
      ${text(510, 75, "3", 20, 700)}

      ${text(400, 240, "|−3| = |3| = 3", 25, 700)}
    `, 290);
  }

  function betweenRationals() {
    return wrap(`
      ${text(400, 25, "दो परिमेय संख्याओं के बीच", 22, 700)}

      ${box(100, 85, 150, 70)}
      ${text(175, 120, "1/3", 27, 700)}

      ${box(325, 85, 150, 70)}
      ${text(400, 120, "1/2", 27, 700)}

      ${box(550, 85, 150, 70)}
      ${text(625, 120, "2/3", 27, 700)}

      ${line(250, 120, 325, 120, 3)}
      ${line(475, 120, 550, 120, 3)}

      ${text(400, 205, "(1/3 + 2/3)/2 = 1/2", 23, 700)}
      ${text(400, 250, "एक नहीं — बहुत सारी परिमेय संख्याएँ!", 20, 700)}
    `, 290);
  }

  /* =====================================================
     CHAPTER 2
     ===================================================== */

  function squareTiles() {
    return wrap(`
      ${text(400, 25, "वर्ग = बराबर भुजाओं वाला चौकोर क्षेत्र", 22, 700)}

      <rect x="230" y="65" width="240" height="240"
        fill="#f5f5f5" stroke="#222" stroke-width="3"/>

      ${line(310, 65, 310, 305, 2)}
      ${line(390, 65, 390, 305, 2)}
      ${line(230, 145, 470, 145, 2)}
      ${line(230, 225, 470, 225, 2)}

      ${text(350, 330, "4 × 4 = 16 टाइलें", 22, 700)}
      ${text(350, 365, "4² = 16", 25, 700)}
    `, 400);
  }

  function squareRootMeaning() {
    return wrap(`
      ${text(400, 25, "वर्गमूल = छिपी हुई भुजा", 22, 700)}

      ${box(80, 75, 180, 100)}
      ${text(170, 110, "64", 34, 700)}
      ${text(170, 150, "क्षेत्रफल", 18)}

      ${text(315, 125, "→", 40, 700)}

      ${box(390, 75, 180, 100)}
      ${text(480, 110, "8 × 8", 30, 700)}
      ${text(480, 150, "वर्ग", 18)}

      ${text(625, 125, "→", 40, 700)}

      ${box(650, 75, 90, 100)}
      ${text(695, 125, "8", 34, 700)}

      ${text(400, 235, "√64 = 8", 30, 700)}
      ${text(400, 275, "क्योंकि 8² = 64", 21, 700)}
    `, 320);
  }

  function factorPairs() {
    return wrap(`
      ${text(400, 25, "गुणनखंड विधि — जोड़े बनाइए", 22, 700)}

      ${text(400, 75, "144", 32, 700)}

      ${text(400, 115, "↓", 30, 700)}

      ${box(100, 145, 120, 55)}
      ${text(160, 172, "2×2", 22, 700)}

      ${box(250, 145, 120, 55)}
      ${text(310, 172, "2×2", 22, 700)}

      ${box(400, 145, 120, 55)}
      ${text(460, 172, "3×3", 22, 700)}

      ${text(400, 235, "हर जोड़े से एक संख्या बाहर", 20, 700)}
      ${text(400, 275, "√144 = 2×2×3 = 12", 26, 700)}
    `, 320);
  }

  function longRoot() {
    return wrap(`
      ${text(400, 25, "भाग विधि से वर्गमूल", 22, 700)}

      ${box(100, 70, 600, 70)}
      ${text(250, 105, "44", 30, 700)}
      ${text(400, 105, "|", 30, 700)}
      ${text(550, 105, "89", 30, 700)}

      ${text(400, 175, "दाईं ओर से दो-दो अंकों के समूह", 20, 700)}

      ${box(180, 210, 170, 60)}
      ${text(265, 240, "√4489", 24, 700)}

      ${text(400, 240, "=", 30, 700)}

      ${box(450, 210, 170, 60)}
      ${text(535, 240, "67", 28, 700)}

      ${text(400, 305, "67 × 67 = 4489", 23, 700)}
    `, 345);
  }

  function perfectSquare() {
    return wrap(`
      ${text(400, 25, "पूर्ण वर्ग की खोज", 22, 700)}

      ${box(90, 75, 170, 65)}
      ${text(175, 108, "70²=4900", 21, 700)}

      ${box(315, 75, 170, 65)}
      ${text(400, 108, "4931", 27, 700)}

      ${box(540, 75, 170, 65)}
      ${text(625, 108, "71²=5041", 21, 700)}

      ${text(400, 185, "4931 → 5041", 24, 700)}
      ${text(400, 225, "जोड़ना है: 5041−4931 = 110", 22, 700)}
      ${text(400, 270, "अगला पूर्ण वर्ग = 5041", 21, 700)}
    `, 315);
  }

  function decimalRoot() {
    return wrap(`
      ${text(400, 25, "दशमलव वर्गमूल", 22, 700)}

      ${box(100, 75, 180, 70)}
      ${text(190, 110, "0.25", 30, 700)}

      ${text(320, 110, "→", 35, 700)}

      ${box(380, 75, 180, 70)}
      ${text(470, 110, "0.5 × 0.5", 25, 700)}

      ${text(600, 110, "→", 35, 700)}

      ${box(640, 75, 100, 70)}
      ${text(690, 110, "0.25", 24, 700)}

      ${text(400, 205, "√0.25 = 0.5", 28, 700)}
      ${text(400, 250, "क्योंकि 0.5² = 0.25", 21, 700)}
    `, 300);
  }

  function getLessonFile() {
    try {
      return new URLSearchParams(window.location.search).get("lesson") || "";
    } catch (e) {
      return "";
    }
  }

  function getChapter() {
    const match = getLessonFile().match(/textbook(\d+)/i);

    if (match) {
      return Number(match[1]);
    }

    if (window.lessonData?.chapter !== undefined) {
      return Number(window.lessonData.chapter);
    }

    return 0;
  }

  function getLesson() {
    const match = getLessonFile().match(/lesson(\d+)\.json/i);

    if (match) {
      return Number(match[1]);
    }

    if (window.lessonData?.lesson !== undefined) {
      return Number(window.lessonData.lesson);
    }

    return 0;
  }

  function selectDiagrams() {
    const chapter = getChapter();
    const lesson = getLesson();

    if (chapter === 1) {
      if (lesson === 1) return [rationalIntro(), numberLine()];
      if (lesson === 2) return [numberLine(), rationalIntro()];
      if (lesson === 3) return [rationalAddition(), numberLine()];
      if (lesson === 4) return [multiplicationDistribution(), rationalAddition()];
      if (lesson === 5) return [inverseDiagram(), numberLine()];
      if (lesson === 6) return [divisionDiagram(), inverseDiagram()];
      if (lesson === 7) return [absoluteComparison(), numberLine()];
      if (lesson === 8) return [betweenRationals(), numberLine()];
    }

    if (chapter === 2) {
      if (lesson === 1) return [squareTiles(), squareRootMeaning()];
      if (lesson === 2) return [squareRootMeaning(), squareTiles()];
      if (lesson === 3) return [factorPairs(), squareTiles()];
      if (lesson === 4) return [longRoot(), factorPairs()];
      if (lesson === 5) return [perfectSquare(), squareTiles()];
      if (lesson === 6) return [decimalRoot(), longRoot()];
    }

    return [];
  }

  function findContainer() {
    return document.querySelector("#content") ||
      document.querySelector("#lessonContent") ||
      document.querySelector("#lesson-container") ||
      document.querySelector(".lesson-content") ||
      document.querySelector(".lesson-container") ||
      document.querySelector("main");
  }
function isClass8() {
  const file = getLessonFile();

  if (/\/class8\//i.test(file)) {
    return true;
  }

  if (window.lessonData && window.lessonData.class !== undefined) {
    return Number(window.lessonData.class) === 8;
  }

  return false;
}
  function render() {
    const chapter = getChapter();

    if (chapter < 1 || chapter > 2) return;

    const container = findContainer();

    if (!container) return;

    if (container.querySelector(".aadya-c8nr-diagram")) {
      return;
    }

    const diagrams = selectDiagrams();

    if (!diagrams.length) return;

    const holder = document.createElement("div");

    holder.innerHTML = diagrams.join("");

    const tryBox = container.querySelector("#tryYourself");

    if (tryBox) {
      tryBox.parentNode.insertBefore(holder, tryBox);
    } else {
      container.appendChild(holder);
    }
  }

  function startObserver() {
    if (!window.MutationObserver) return;

    let scheduled = false;

    const observer = new MutationObserver(function () {
      if (scheduled) return;

      scheduled = true;

      setTimeout(function () {
        scheduled = false;

        if (!document.querySelector(".aadya-c8nr-diagram")) {
          render();
        }
      }, 80);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function init() {
    render();

    setTimeout(render, 500);
    setTimeout(render, 1200);
    setTimeout(render, 2000);

    startObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.AADYAClass8NumberRootDiagramEngine = {
    name: ENGINE_NAME,

    render: render,

    refresh: function () {
      document
        .querySelectorAll(".aadya-c8nr-diagram")
        .forEach(function (element) {
          element.remove();
        });

      render();
    }
  };

})();
