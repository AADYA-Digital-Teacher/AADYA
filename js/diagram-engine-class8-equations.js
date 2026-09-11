/* =========================================================
   AADYA — Class 8 Equations Diagram Engine
   Chapters 7–8
========================================================= */

(function () {
  "use strict";

  function getData() {
    return window.lessonData || null;
  }

  function chapter() {
    return Number(getData() && getData().chapter);
  }

  function lesson() {
    return Number(getData() && getData().lesson);
  }

  function isClass8() {
    const data = getData();

    if (data && data.class !== undefined) {
      return Number(data.class) === 8;
    }

    const path =
      new URLSearchParams(location.search).get("lesson") || "";

    return /\/class8\//i.test(decodeURIComponent(path));
  }

  function container() {
    return document.querySelector(
      "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
    );
  }

  function diagram(title, svg) {
    return `
      <div class="aadya-c8eq-diagram"
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
          🧠 ${title}
        </div>

        <svg
          viewBox="0 0 760 250"
          width="100%"
          role="img"
          aria-label="${title}"
          style="display:block;"
        >
          ${svg}
        </svg>
      </div>
    `;
  }

  const diagrams = {

    "7-1": diagram("Two Clues → One Answer", `
      <rect x="35" y="45" width="300" height="70"
        fill="none" stroke="#222" stroke-width="3"/>
      <rect x="425" y="45" width="300" height="70"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="125" y="88" font-size="25">x + y = 10</text>
      <text x="500" y="88" font-size="25">x − y = 2</text>

      <path d="M335 80 L425 80"
        stroke="#222" stroke-width="4"
        marker-end="url(#arrow)"/>

      <text x="205" y="165" font-size="27">
        x = 6 , y = 4
      </text>

      <text x="170" y="215" font-size="22">
        दो clues → एक common solution
      </text>
    `),

    "7-2": diagram("विलोपन विधि", `
      <text x="55" y="55" font-size="25">x + y = 10</text>
      <text x="55" y="100" font-size="25">x − y = 2</text>

      <line x1="45" y1="125" x2="300" y2="125"
        stroke="#222" stroke-width="3"/>

      <text x="55" y="165" font-size="25">
        2x = 12
      </text>

      <text x="55" y="210" font-size="25">
        x = 6
      </text>

      <text x="400" y="100" font-size="24">
        + y और − y
      </text>

      <text x="400" y="145" font-size="24">
        एक-दूसरे को हटाते हैं
      </text>
    `),

    "7-3": diagram("प्रतिस्थापन विधि", `
      <text x="45" y="55" font-size="24">
        x + y = 9
      </text>

      <text x="45" y="100" font-size="24">
        x = 9 − y
      </text>

      <path d="M250 90 L360 90"
        stroke="#222" stroke-width="4"/>

      <text x="390" y="100" font-size="24">
        दूसरे equation में रखें
      </text>

      <text x="45" y="170" font-size="24">
        2x + y = 12
      </text>

      <text x="45" y="215" font-size="24">
        x = 3, y = 6
      </text>
    `),

    "7-4": diagram("Real Life → Equation", `
      <rect x="35" y="45" width="180" height="80"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="78" y="95" font-size="25">🛒 कीमत</text>

      <path d="M215 85 L310 85"
        stroke="#222" stroke-width="4"/>

      <rect x="310" y="45" width="180" height="80"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="355" y="95" font-size="25">x + y = 70</text>

      <path d="M490 85 L585 85"
        stroke="#222" stroke-width="4"/>

      <rect x="585" y="45" width="140" height="80"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="610" y="95" font-size="25">उत्तर</text>

      <text x="150" y="190" font-size="25">
        कहानी → दो equations → दो unknowns
      </text>
    `),

    "8-1": diagram("Quadratic की पहचान", `
      <text x="45" y="65" font-size="26">
        x² + 5x + 6 = 0
      </text>

      <text x="45" y="115" font-size="24">
        ↑
      </text>

      <text x="45" y="165" font-size="24">
        x की highest power = 2
      </text>

      <rect x="430" y="55" width="240" height="100"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="470" y="115" font-size="26">
        Quadratic
      </text>

      <text x="200" y="220" font-size="24">
        ax² + bx + c = 0
      </text>
    `),

    "8-2": diagram("x² = k → Square Root", `
      <rect x="45" y="60" width="180" height="110"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="100" y="125" font-size="28">
        x² = 25
      </text>

      <path d="M225 115 L350 115"
        stroke="#222" stroke-width="4"/>

      <text x="380" y="125" font-size="28">
        x = ±5
      </text>

      <text x="165" y="215" font-size="24">
        5² = 25 और (−5)² = 25
      </text>
    `),

    "8-3": diagram("Quadratic → Factors → Roots", `
      <text x="35" y="50" font-size="23">
        x² − 5x + 6 = 0
      </text>

      <path d="M270 55 L350 55"
        stroke="#222" stroke-width="4"/>

      <text x="370" y="60" font-size="23">
        (x−2)(x−3)=0
      </text>

      <path d="M520 70 L520 115"
        stroke="#222" stroke-width="4"/>

      <text x="370" y="160" font-size="23">
        x−2=0 या x−3=0
      </text>

      <text x="370" y="210" font-size="26">
        x=2 या x=3
      </text>
    `),

    "8-4": diagram("Real Life → Quadratic", `
      <rect x="45" y="45" width="160" height="100"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="78" y="102" font-size="25">
        आयत
      </text>

      <path d="M205 95 L300 95"
        stroke="#222" stroke-width="4"/>

      <text x="315" y="105" font-size="23">
        x(x+3)=40
      </text>

      <path d="M475 110 L560 110"
        stroke="#222" stroke-width="4"/>

      <text x="575" y="105" font-size="23">
        x²+3x−40=0
      </text>

      <text x="240" y="205" font-size="25">
        सही physical answer चुनें
      </text>
    `)
  };

  function render() {
    if (!isClass8()) return;

    const ch = chapter();

    if (ch < 7 || ch > 8) return;

    const box = container();

    if (!box) return;

    if (box.querySelector(".aadya-c8eq-diagram")) {
      return;
    }

    const key = ch + "-" + lesson();

    const html = diagrams[key];

    if (!html) return;

    const wrapper = document.createElement("div");

    wrapper.innerHTML = html.trim();

    const node = wrapper.firstElementChild;

    if (!node) return;

    const tryYourself =
      box.querySelector("#tryYourself");

    if (tryYourself) {
      tryYourself.parentNode.insertBefore(
        node,
        tryYourself
      );
    } else {
      box.appendChild(node);
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

    window.AADYAClass8EquationsDiagramEngine = {
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
