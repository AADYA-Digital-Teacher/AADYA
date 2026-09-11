/*
===========================================================
AADYA DIGITAL TEACHER
Class 7 Mathematics
Chapter 13 Mental Practice
Chapter 14 Vedic Division
Independent Diagram Engine
===========================================================
*/

(function () {
  "use strict";

  const ENGINE_NAME = "AADYA Mental + Vedic Diagram Engine v1.0";

  function esc(v) {
    return String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function text(x, y, value, size = 20, weight = 600) {
    return `<text x="${x}" y="${y}" text-anchor="middle"
      dominant-baseline="middle"
      font-size="${size}"
      font-weight="${weight}"
      fill="#222">${esc(value)}</text>`;
  }

  function line(x1, y1, x2, y2, width = 3) {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      stroke="#222" stroke-width="${width}"
      stroke-linecap="round"/>`;
  }

  function box(x, y, w, h, fill = "#f5f5f5") {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}"
      rx="12" fill="${fill}" stroke="#222" stroke-width="2"/>`;
  }

  function circle(cx, cy, r, fill = "#fff") {
    return `<circle cx="${cx}" cy="${cy}" r="${r}"
      fill="${fill}" stroke="#222" stroke-width="3"/>`;
  }

  function wrap(svg, height = 300) {
    return `
      <div class="aadya-mv-diagram"
        style="margin:20px 0;padding:14px;background:#fff;
        border:1px solid #e5e5e5;border-radius:18px;
        overflow:hidden;">
        <div style="font-weight:700;font-size:16px;margin-bottom:8px;">
          🧠 AADYA Visual Learning
        </div>
        <svg viewBox="0 0 800 ${height}"
          width="100%" height="auto"
          xmlns="http://www.w3.org/2000/svg">
          ${svg}
        </svg>
      </div>`;
  }

  /* =========================
     CHAPTER 13 DIAGRAMS
     ========================= */

  function numberSeries() {
    return wrap(`
      ${text(400, 25, "संख्या श्रेणी का नियम खोजें", 23, 700)}

      ${box(55, 75, 105, 60)}
      ${box(180, 75, 105, 60)}
      ${box(305, 75, 105, 60)}
      ${box(430, 75, 105, 60)}
      ${box(555, 75, 105, 60)}
      ${box(680, 75, 80, 60)}

      ${text(107, 105, "2", 25, 700)}
      ${text(232, 105, "6", 25, 700)}
      ${text(357, 105, "12", 25, 700)}
      ${text(482, 105, "20", 25, 700)}
      ${text(617, 105, "30", 25, 700)}
      ${text(720, 105, "?", 27, 700)}

      ${text(170, 165, "+4", 18)}
      ${text(295, 165, "+6", 18)}
      ${text(420, 165, "+8", 18)}
      ${text(550, 165, "+10", 18)}
      ${text(685, 165, "+12", 18)}

      ${text(400, 230, "अन्तर 2-2 बढ़ रहा है", 21, 700)}
      ${text(400, 270, "अगला अन्तर = 14  →  30 + 14 = 44", 19, 600)}
    `, 310);
  }

  function letterSeries() {
    return wrap(`
      ${text(400, 25, "अक्षर श्रेणी", 23, 700)}

      ${box(45, 75, 145, 65)}
      ${box(220, 75, 145, 65)}
      ${box(395, 75, 145, 65)}
      ${box(570, 75, 185, 65)}

      ${text(117, 108, "ABE", 27, 700)}
      ${text(292, 108, "BCF", 27, 700)}
      ${text(467, 108, "CDG", 27, 700)}
      ${text(662, 108, "DEH", 27, 700)}

      ${text(205, 175, "हर स्थान +1", 18)}
      ${text(380, 175, "हर स्थान +1", 18)}
      ${text(570, 175, "हर स्थान +1", 18)}

      ${text(400, 235, "A→B→C→D→E", 22, 700)}
      ${text(400, 270, "B→C→D→E→F", 22, 700)}
    `, 310);
  }

  function triangleCounting() {
    return wrap(`
      ${text(400, 25, "त्रिभुज गिनने की रणनीति", 23, 700)}

      <polygon points="400,55 180,235 620,235"
        fill="#f5f5f5" stroke="#222" stroke-width="3"/>

      ${line(400, 55, 400, 235, 3)}
      ${line(180, 235, 510, 145, 3)}
      ${line(620, 235, 290, 145, 3)}

      ${text(400, 105, "1", 22, 700)}
      ${text(315, 190, "2", 22, 700)}
      ${text(485, 190, "3", 22, 700)}

      ${text(400, 265, "पहले छोटे त्रिभुज", 20, 700)}
      ${text(400, 292, "फिर उनसे बने बड़े त्रिभुज", 20, 700)}
    `, 320);
  }

  function paperFold() {
    return wrap(`
      ${text(400, 25, "कागज मोड़ना और खोलना", 23, 700)}

      ${box(80, 70, 230, 150, "#fff")}
      ${line(195, 70, 195, 220, 4)}
      ${text(195, 110, "↪", 35, 700)}
      ${text(195, 160, "मोड़ें", 20, 700)}

      ${text(400, 145, "→", 42, 700)}

      ${box(490, 70, 230, 150, "#fff")}
      <circle cx="575" cy="145" r="10" fill="#222"/>
      <circle cx="635" cy="145" r="10" fill="#222"/>

      ${text(605, 250, "खोलने पर सममित छेद", 20, 700)}
    `, 300);
  }

  function missingNumber() {
    return wrap(`
      ${text(400, 25, "लुप्त संख्या खोजें", 23, 700)}

      ${box(210, 70, 120, 70)}
      ${box(470, 70, 120, 70)}
      ${box(210, 170, 120, 70)}
      ${box(470, 170, 120, 70)}

      ${text(270, 105, "8", 27, 700)}
      ${text(530, 105, "12", 27, 700)}
      ${text(270, 205, "16", 27, 700)}
      ${text(530, 205, "?", 30, 700)}

      ${line(330, 105, 470, 105, 3)}
      ${line(270, 140, 270, 170, 3)}
      ${line(530, 140, 530, 170, 3)}

      ${text(400, 270, "पहले पंक्ति → स्तम्भ → विकर्ण का नियम जाँचें", 19, 700)}
    `, 310);
  }

  /* =========================
     CHAPTER 14 DIAGRAMS
     ========================= */

  function baseComplement() {
    return wrap(`
      ${text(400, 25, "निखिलम् : आधार और पूरक", 23, 700)}

      ${box(80, 75, 150, 70)}
      ${box(325, 75, 150, 70)}
      ${box(570, 75, 150, 70)}

      ${text(155, 110, "भाजक", 20, 700)}
      ${text(155, 140, "89", 26, 700)}

      ${text(400, 110, "आधार", 20, 700)}
      ${text(400, 140, "100", 26, 700)}

      ${text(645, 110, "पूरक", 20, 700)}
      ${text(645, 140, "11", 26, 700)}

      ${text(277, 110, "→", 35, 700)}
      ${text(522, 110, "→", 35, 700)}

      ${text(400, 220, "100 − 89 = 11", 27, 700)}
      ${text(400, 265, "यही पूरक आगे गणना में प्रयोग होगा", 19, 600)}
    `, 305);
  }

  function nikhilamSplit() {
    return wrap(`
      ${text(400, 25, "10182 ÷ 89 : संख्या को बाँटना", 23, 700)}

      ${box(125, 75, 550, 85)}
      ${text(300, 117, "101", 34, 700)}
      ${text(500, 117, "82", 34, 700)}

      ${line(400, 70, 400, 165, 4)}
      ${text(300, 185, "भागफल वाला भाग", 18, 700)}
      ${text(500, 185, "शेषफल वाला भाग", 18, 700)}

      ${text(400, 235, "आधार = 100  →  दाएँ 2 अंक अलग", 21, 700)}
      ${text(400, 275, "पूरक = 100 − 89 = 11", 21, 700)}
    `, 315);
  }

  function correction() {
    return wrap(`
      ${text(400, 25, "शेषफल का सुधार", 23, 700)}

      ${box(70, 80, 180, 70)}
      ${text(160, 115, "प्रारम्भिक शेष", 18, 700)}
      ${text(160, 140, "125", 25, 700)}

      ${text(300, 115, "− 89", 25, 700)}

      ${box(380, 80, 150, 70)}
      ${text(455, 115, "36", 28, 700)}

      ${text(625, 115, "✓", 40, 700)}

      ${text(400, 205, "36 < 89", 27, 700)}
      ${text(400, 250, "अब शेषफल सही है", 21, 700)}
      ${text(400, 285, "भागफल में 1 जोड़ें", 19, 600)}
    `, 320);
  }

  function paravartya() {
    return wrap(`
      ${text(400, 25, "परावर्त्य योजयेत्", 23, 700)}

      ${box(75, 80, 180, 70)}
      ${text(165, 112, "विचलन", 18, 700)}
      ${text(165, 140, "+d", 28, 700)}

      ${text(310, 115, "→", 40, 700)}

      ${box(365, 80, 180, 70)}
      ${text(455, 112, "परावर्तित", 18, 700)}
      ${text(455, 140, "−d", 28, 700)}

      ${text(625, 115, "→", 40, 700)}

      ${box(600, 80, 130, 70)}
      ${text(665, 115, "जोड़", 22, 700)}

      ${text(400, 215, "पहला अंक नीचे लाएँ", 20, 700)}
      ${text(400, 250, "परावर्तित विचलन से गुणा करें", 20, 700)}
      ${text(400, 285, "अगले अंक में जोड़ते जाएँ", 20, 700)}
    `, 320);
  }

  function getLessonFile() {
    try {
      return new URLSearchParams(window.location.search).get("lesson") || "";
    } catch (e) {
      return "";
    }
  }

  function getChapter() {
    const m = getLessonFile().match(/textbook(\d+)/i);

    if (m) return Number(m[1]);

    if (window.lessonData?.chapter !== undefined) {
      return Number(window.lessonData.chapter);
    }

    return 0;
  }

  function getLesson() {
    const m = getLessonFile().match(/lesson(\d+)\.json/i);

    if (m) return Number(m[1]);

    if (window.lessonData?.lesson !== undefined) {
      return Number(window.lessonData.lesson);
    }

    return 0;
  }

  function selectDiagrams() {
    const ch = getChapter();
    const ls = getLesson();

    if (ch === 13) {
      if (ls === 1) return [
        numberSeries(),
        missingNumber()
      ];

      if (ls === 2) return [
        letterSeries(),
        numberSeries()
      ];

      if (ls === 3) return [
        triangleCounting(),
        triangleCounting()
      ];

      if (ls === 4) return [
        paperFold(),
        missingNumber()
      ];
    }

    if (ch === 14) {
      if (ls === 1) return [
        baseComplement(),
        baseComplement()
      ];

      if (ls === 2) return [
        nikhilamSplit(),
        baseComplement()
      ];

      if (ls === 3) return [
        correction(),
        nikhilamSplit()
      ];

      if (ls === 4) return [
        paravartya(),
        correction()
      ];
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

  function render() {
    const chapter = getChapter();

    if (chapter < 13 || chapter > 14) return;

    const container = findContainer();

    if (!container) return;

    if (container.querySelector(".aadya-mv-diagram")) return;

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

        if (!document.querySelector(".aadya-mv-diagram")) {
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

  window.AADYAMentalVedicDiagramEngine = {
    name: ENGINE_NAME,
    render: render,

    refresh: function () {
      document.querySelectorAll(".aadya-mv-diagram")
        .forEach(function (el) {
          el.remove();
        });

      render();
    }
  };

})();
