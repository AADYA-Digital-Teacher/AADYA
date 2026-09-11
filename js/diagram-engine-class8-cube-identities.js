/* =========================================================
   AADYA — Class 8 Cube Root & Identities Diagram Engine
   Chapters 3–4 only
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
      <div class="aadya-c8ci-diagram"
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

    "3-1": makeDiagram("घन और घनमूल", `
      <g fill="none" stroke="#222" stroke-width="3">
        <path d="M120 75 L230 35 L330 75 L220 115 Z"/>
        <path d="M120 75 L120 175 L220 215 L220 115"/>
        <path d="M220 215 L330 175 L330 75"/>
        <path d="M430 125 L540 125"/>
      </g>

      <text x="150" y="62" font-size="24">3</text>
      <text x="172" y="205" font-size="22">3</text>
      <text x="285" y="145" font-size="22">3</text>

      <text x="465" y="105" font-size="25">
        3 × 3 × 3 = 27
      </text>

      <text x="465" y="160" font-size="25">
        ∛27 = 3
      </text>
    `),

    "3-2": makeDiagram("पूर्ण घनों की सीढ़ी", `
      <g font-size="22" text-anchor="middle">
        <text x="80" y="55">1³=1</text>
        <text x="180" y="55">2³=8</text>
        <text x="280" y="55">3³=27</text>
        <text x="390" y="55">4³=64</text>
        <text x="510" y="55">5³=125</text>
        <text x="650" y="55">6³=216</text>
      </g>

      <g fill="none" stroke="#222" stroke-width="3">
        <path d="
          M50 205
          L170 205
          L170 175
          L270 175
          L270 145
          L390 145
          L390 115
          L510 115
          L510 85
          L700 85
        "/>
      </g>

      <text x="55" y="235" font-size="18">
        संख्या बढ़े → घन तेजी से बढ़ता है
      </text>
    `),

    "3-3": makeDiagram("गुणनखंड विधि: तीन-तीन के समूह", `
      <text x="35" y="55" font-size="25">
        216 = 2×2×2 × 3×3×3
      </text>

      <g font-size="22">
        <rect
          x="35" y="85"
          width="150" height="55"
          fill="none"
          stroke="#222"
          stroke-width="2"
        />

        <rect
          x="205" y="85"
          width="150" height="55"
          fill="none"
          stroke="#222"
          stroke-width="2"
        />

        <text x="65" y="120">2³ → 2</text>
        <text x="235" y="120">3³ → 3</text>

        <text x="400" y="120">
          ∛216 = 2×3 = 6
        </text>
      </g>
    `),

    "3-4": makeDiagram("ऋण घन और गुणनफल", `
      <text x="35" y="65" font-size="25">
        (-3)³ = -27 → ∛(-27) = -3
      </text>

      <text x="35" y="125" font-size="25">
        ∛(8×125) = ∛8 × ∛125
      </text>

      <text x="35" y="185" font-size="25">
        = 2 × 5 = 10
      </text>

      <line
        x1="500" y1="150"
        x2="710" y2="150"
        stroke="#222"
        stroke-width="3"
      />

      <text x="490" y="140" font-size="20">−</text>
      <text x="700" y="140" font-size="20">+</text>
    `),

    "3-5": makeDiagram("परिमेय संख्या का घनमूल", `
      <text x="35" y="65" font-size="28">
        ∛(27/64)
      </text>

      <path
        d="M190 75 L300 75"
        stroke="#222"
        stroke-width="3"
      />

      <text x="210" y="55" font-size="23">
        3³ / 4³
      </text>

      <path
        d="M320 75 L430 75"
        stroke="#222"
        stroke-width="3"
      />

      <text x="355" y="55" font-size="23">
        3 / 4
      </text>

      <text x="35" y="135" font-size="24">
        ∛(-8/125) = -2/5
      </text>
    `),

    "3-6": makeDiagram("दशमलव घनमूल", `
      <text x="35" y="65" font-size="27">
        0.008
      </text>

      <text x="160" y="65" font-size="25">
        = 8/1000
      </text>

      <text x="330" y="65" font-size="25">
        = 2³/10³
      </text>

      <text x="535" y="65" font-size="25">
        = 0.2³
      </text>

      <path
        d="M70 95 L650 95"
        stroke="#222"
        stroke-width="3"
      />

      <text x="250" y="150" font-size="27">
        ∛0.008 = 0.2
      </text>
    `),

    "3-7": makeDiagram("करणी और घातांक", `
      <text x="45" y="70" font-size="30">
        √2 ↔ 2^(1/2)
      </text>

      <text x="45" y="130" font-size="30">
        ∛5 ↔ 5^(1/3)
      </text>

      <text x="45" y="195" font-size="22">
        मूल चिन्ह के अंदर की संख्या = करणीगत राशि
      </text>
    `),

    "4-1": makeDiagram("(a+b)³ का विस्तार", `
      <text x="35" y="55" font-size="28">
        (a+b)³ = a³ + 3a²b + 3ab² + b³
      </text>

      <rect x="45" y="85" width="145" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="210" y="85" width="145" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="375" y="85" width="145" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <rect x="540" y="85" width="145" height="120"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="82" y="150" font-size="22">a³</text>
      <text x="235" y="150" font-size="22">3a²b</text>
      <text x="405" y="150" font-size="22">3ab²</text>
      <text x="585" y="150" font-size="22">b³</text>
    `),

    "4-2": makeDiagram("(a−b)³ में चिह्नों का क्रम", `
      <text x="35" y="60" font-size="27">
        (a−b)³ = a³ − 3a²b + 3ab² − b³
      </text>

      <text x="70" y="125" font-size="28">
        + a³
      </text>

      <text x="235" y="125" font-size="28">
        − 3a²b
      </text>

      <text x="430" y="125" font-size="28">
        + 3ab²
      </text>

      <text x="625" y="125" font-size="28">
        − b³
      </text>
    `),

    "4-3": makeDiagram("(a+b+c)² का area model", `
      <rect
        x="250" y="35"
        width="210"
        height="180"
        fill="none"
        stroke="#222"
        stroke-width="3"
      />

      <path
        d="M355 35 L355 215 M250 125 L460 125"
        stroke="#222"
        stroke-width="2"
      />

      <text x="285" y="90" font-size="22">a²</text>
      <text x="385" y="90" font-size="22">ab</text>
      <text x="285" y="175" font-size="22">ac</text>
      <text x="385" y="175" font-size="22">b²/c²</text>

      <text x="35" y="240" font-size="23">
        (a+b+c)² = a²+b²+c²+2ab+2bc+2ca
      </text>
    `),

    "4-4": makeDiagram("सर्वसमिका का ज्यामितीय सत्यापन", `
      <rect
        x="60" y="45"
        width="170" height="170"
        fill="none"
        stroke="#222"
        stroke-width="3"
      />

      <path
        d="M145 45 L145 215 M60 130 L230 130"
        stroke="#222"
        stroke-width="2"
      />

      <text x="80" y="95" font-size="21">a²</text>
      <text x="165" y="95" font-size="21">ab</text>
      <text x="80" y="180" font-size="21">ab</text>
      <text x="165" y="180" font-size="21">b²</text>

      <text x="300" y="105" font-size="27">
        (a+b)²
      </text>

      <text x="300" y="155" font-size="27">
        = a²+2ab+b²
      </text>
    `),

    "4-5": makeDiagram("सर्वसमिकाओं से तेज गणना", `
      <text x="35" y="60" font-size="28">
        99² = (100−1)² = 9801
      </text>

      <text x="35" y="120" font-size="28">
        101² = (100+1)² = 10201
      </text>

      <text x="35" y="180" font-size="25">
        100 के आसपास की संख्याएँ → मानसिक गणना आसान
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

    if (chapter < 3 || chapter > 4) return;

    const container = findContainer();

    if (!container) return;

    if (container.querySelector(".aadya-c8ci-diagram")) {
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

    window.AADYAClass8CubeIdentityDiagramEngine = {
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
