/* =========================================================
   AADYA — Class 8 Algebra & Numbers Diagram Engine
   Chapters 5–6
========================================================= */

(function () {
  "use strict";

  function getLessonData() {
    return window.lessonData || null;
  }

  function getChapterNumber() {
    const data = getLessonData();
    const n = Number(data && data.chapter);
    return Number.isFinite(n) ? n : 0;
  }

  function isClass8() {
    const data = getLessonData();

    if (data && data.class !== undefined) {
      return Number(data.class) === 8;
    }

    const path =
      new URLSearchParams(location.search).get("lesson") || "";

    return /\/class8\//i.test(decodeURIComponent(path));
  }

  function findContainer() {
    return document.querySelector(
      "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
    );
  }

  function makeDiagram(title, body) {
    return `
      <div class="aadya-c8an-diagram"
        style="
          margin:18px 0;
          padding:14px;
          border-radius:16px;
          background:#fff;
          box-shadow:0 5px 18px rgba(0,0,0,.08);
          overflow:hidden;
        ">

        <div style="
          font-weight:800;
          font-size:16px;
          margin-bottom:10px;
        ">
          📐 ${title}
        </div>

        <svg
          viewBox="0 0 760 250"
          width="100%"
          role="img"
          aria-label="${title}"
          style="display:block;"
        >
          ${body}
        </svg>
      </div>
    `;
  }

  const diagrams = {

    "5-1": makeDiagram("बीजीय भाग", `
      <text x="35" y="55" font-size="26">
        24 ÷ 6 = 4
      </text>

      <text x="35" y="105" font-size="26">
        24x² ÷ 6x = 4x
      </text>

      <line x1="35" y1="135" x2="700" y2="135"
        stroke="#222" stroke-width="3"/>

      <text x="35" y="185" font-size="24">
        संख्या का भाग + घातों का भाग
      </text>

      <text x="35" y="225" font-size="22">
        12x³y² ÷ 3xy = 4x²y
      </text>
    `),

    "5-2": makeDiagram("भाग का मूल संबंध", `
      <rect x="35" y="70" width="145" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="220" y="70" width="145" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="405" y="70" width="145" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="590" y="70" width="125" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="65" y="112" font-size="21">भाज्य</text>
      <text x="250" y="112" font-size="21">भाजक</text>
      <text x="425" y="112" font-size="21">भागफल</text>
      <text x="610" y="112" font-size="21">शेषफल</text>

      <text x="75" y="190" font-size="25">
        भाज्य = भाजक × भागफल + शेषफल
      </text>
    `),

    "5-3": makeDiagram("Factor Hunt", `
      <text x="35" y="50" font-size="25">
        a² + 2ab + b²
      </text>

      <path d="M250 60 L250 95 L150 150"
        fill="none" stroke="#222" stroke-width="3"/>

      <path d="M250 95 L350 150"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="90" y="190" font-size="25">
        (a+b)
      </text>

      <text x="325" y="190" font-size="25">
        (a+b)
      </text>

      <text x="500" y="75" font-size="24">
        = (a+b)²
      </text>

      <text x="500" y="125" font-size="23">
        a²−b²
      </text>

      <text x="500" y="175" font-size="23">
        = (a+b)(a−b)
      </text>
    `),

    "5-4": makeDiagram("Middle Term Mystery", `
      <text x="35" y="50" font-size="25">
        6x² + 11x + 3
      </text>

      <text x="35" y="95" font-size="23">
        ac = 6×3 = 18
      </text>

      <text x="35" y="140" font-size="23">
        9×2 = 18  और  9+2 = 11
      </text>

      <text x="35" y="185" font-size="23">
        6x² + 9x + 2x + 3
      </text>

      <text x="35" y="225" font-size="23">
        = (3x+1)(2x+3)
      </text>
    `),

    "6-1": makeDiagram("Place Value House", `
      <rect x="70" y="55" width="180" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="250" y="55" width="180" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="430" y="55" width="180" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="115" y="105" font-size="23">सैकड़ा</text>
      <text x="295" y="105" font-size="23">दहाई</text>
      <text x="485" y="105" font-size="23">इकाई</text>

      <text x="145" y="145" font-size="25">3</text>
      <text x="325" y="145" font-size="25">4</text>
      <text x="515" y="145" font-size="25">7</text>

      <text x="210" y="220" font-size="25">
        347 = 300 + 40 + 7
      </text>
    `),

    "6-2": makeDiagram("Divisibility Game Board", `
      <text x="35" y="45" font-size="23">
        2 → अंतिम अंक सम
      </text>

      <text x="260" y="45" font-size="23">
        3 → अंकों का योग
      </text>

      <text x="520" y="45" font-size="23">
        5 → अंतिम अंक 0 या 5
      </text>

      <text x="35" y="105" font-size="23">
        9 → अंकों का योग 9 का गुणज
      </text>

      <text x="350" y="105" font-size="23">
        11 → alternating sum
      </text>

      <text x="35" y="165" font-size="23">
        7 → अंतिम अंक का दुगुना घटाएँ
      </text>

      <text x="400" y="165" font-size="23">
        13 → अंतिम अंक का 9 गुना जोड़ें
      </text>

      <text x="35" y="220" font-size="24">
        🎯 संख्या को देखकर नियम चुनो!
      </text>
    `),

    "6-3": makeDiagram("Number Puzzle", `
      <rect x="45" y="45" width="180" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="290" y="45" width="180" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="535" y="45" width="180" height="65"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="105" y="87" font-size="25">□ + 28 = 50</text>
      <text x="345" y="87" font-size="25">7 × □ = 63</text>
      <text x="580" y="87" font-size="25">81 ÷ □ = 9</text>

      <text x="95" y="160" font-size="25">
        □ = 22
      </text>

      <text x="340" y="160" font-size="25">
        □ = 9
      </text>

      <text x="585" y="160" font-size="25">
        □ = 9
      </text>

      <text x="205" y="220" font-size="24">
        🧩 खाली जगह भरें → नियम खोजें → उत्तर पाएँ
      </text>
    `)
  };

  function selectDiagram() {
    const data = getLessonData();

    const key =
      getChapterNumber() +
      "-" +
      Number(data && data.lesson);

    return diagrams[key] || "";
  }

  function render() {
    if (!isClass8()) return;

    const chapter = getChapterNumber();

    if (chapter < 5 || chapter > 6) return;

    const container = findContainer();

    if (!container) return;

    if (container.querySelector(".aadya-c8an-diagram")) {
      return;
    }

    const diagram = selectDiagram();

    if (!diagram) return;

    const wrap = document.createElement("div");

    wrap.innerHTML = diagram.trim();

    const node = wrap.firstElementChild;

    if (!node) return;

    const tryYourself =
      container.querySelector("#tryYourself");

    if (tryYourself) {
      tryYourself.parentNode.insertBefore(
        node,
        tryYourself
      );
    } else {
      container.appendChild(node);
    }
  }

  function start() {
    setTimeout(render, 150);

    const observer =
      new MutationObserver(function () {
        render();
      });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    window.AADYAClass8AlgebraNumbersDiagramEngine = {
      refresh: render
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      start
    );
  } else {
    start();
  }

})();
