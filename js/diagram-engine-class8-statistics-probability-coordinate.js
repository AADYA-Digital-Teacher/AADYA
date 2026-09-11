(function () {
  "use strict";

  function data() {
    return window.lessonData || {};
  }

  function chapter() {
    return Number(data().chapter);
  }

  function lesson() {
    return Number(data().lesson);
  }

  function isClass8() {
    if (data().class !== undefined) {
      return Number(data().class) === 8;
    }

    const p = new URLSearchParams(location.search).get("lesson") || "";
    return /\/class8\//i.test(decodeURIComponent(p));
  }

  function container() {
    return document.querySelector(
      "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
    );
  }

  function wrap(title, svg) {
    return `
      <div class="aadya-c8spc-diagram"
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
        ">📊 ${title}</div>

        <svg viewBox="0 0 760 330"
          width="100%"
          style="display:block;">
          ${svg}
        </svg>
      </div>
    `;
  }

  const diagrams = {

    "15-1": wrap(
      "माध्यिका और बहुलक",
      `
        <line x1="80" y1="240" x2="680" y2="240"
          stroke="#222" stroke-width="3"/>

        <circle cx="160" cy="240" r="12"/>
        <circle cx="250" cy="240" r="12"/>
        <circle cx="340" cy="240" r="12"/>
        <circle cx="430" cy="240" r="12"/>
        <circle cx="520" cy="240" r="12"/>

        <text x="145" y="285" font-size="20">3</text>
        <text x="235" y="285" font-size="20">5</text>
        <text x="325" y="285" font-size="20">6</text>
        <text x="415" y="285" font-size="20">7</text>
        <text x="505" y="285" font-size="20">9</text>

        <text x="310" y="100" font-size="26">
          माध्यिका = 6
        </text>

        <rect x="170" y="125" width="55" height="45"/>
        <rect x="260" y="95" width="55" height="75"/>
        <rect x="350" y="65" width="55" height="105"/>

        <text x="440" y="135" font-size="24">
          बहुलक = सबसे अधिक बार
        </text>
      `
    ),

    "15-2": wrap(
      "बारंबारता सारणी",
      `
        <rect x="100" y="70" width="560" height="180"
          fill="none" stroke="#222" stroke-width="3"/>

        <line x1="300" y1="70" x2="300" y2="250"
          stroke="#222" stroke-width="3"/>

        <line x1="100" y1="120" x2="660" y2="120"
          stroke="#222" stroke-width="3"/>

        <text x="150" y="105" font-size="23">मान</text>
        <text x="410" y="105" font-size="23">बारंबारता</text>

        <text x="180" y="155" font-size="22">1</text>
        <text x="180" y="195" font-size="22">2</text>
        <text x="180" y="235" font-size="22">3</text>

        <text x="430" y="155" font-size="22">3</text>
        <text x="430" y="195" font-size="22">4</text>
        <text x="430" y="235" font-size="22">2</text>
      `
    ),

    "15-3": wrap(
      "आयत चित्र",
      `
        <line x1="100" y1="270" x2="680" y2="270"
          stroke="#222" stroke-width="3"/>

        <line x1="100" y1="270" x2="100" y2="50"
          stroke="#222" stroke-width="3"/>

        <rect x="150" y="190" width="80" height="80"/>
        <rect x="280" y="150" width="80" height="120"/>
        <rect x="410" y="110" width="80" height="160"/>
        <rect x="540" y="70" width="80" height="200"/>

        <text x="165" y="300" font-size="20">सोम</text>
        <text x="295" y="300" font-size="20">मंगल</text>
        <text x="425" y="300" font-size="20">बुध</text>
        <text x="555" y="300" font-size="20">गुरु</text>

        <text x="275" y="40" font-size="24">
          ऊँचाई = बारंबारता
        </text>
      `
    ),

    "16-1": wrap(
      "सिक्का — चित या पट",
      `
        <circle cx="260" cy="155" r="90"
          fill="none" stroke="#222" stroke-width="5"/>

        <text x="220" y="165" font-size="30">चित</text>

        <circle cx="500" cy="155" r="90"
          fill="none" stroke="#222" stroke-width="5"/>

        <text x="460" y="165" font-size="30">पट</text>

        <text x="295" y="300" font-size="24">
          दो संभावित परिणाम
        </text>
      `
    ),

    "16-2": wrap(
      "पासा — 1 से 6",
      `
        <rect x="285" y="65" width="190" height="190"
          rx="18" fill="none" stroke="#222" stroke-width="5"/>

        <circle cx="330" cy="110" r="10"/>
        <circle cx="430" cy="110" r="10"/>
        <circle cx="330" cy="205" r="10"/>
        <circle cx="430" cy="205" r="10"/>
        <circle cx="380" cy="157" r="10"/>

        <text x="210" y="300" font-size="24">
          संभावित परिणाम: 1,2,3,4,5,6
        </text>
      `
    ),

    "16-3": wrap(
      "प्रायिकता : 0 से 1",
      `
        <line x1="120" y1="170" x2="640" y2="170"
          stroke="#222" stroke-width="5"/>

        <circle cx="120" cy="170" r="10"/>
        <circle cx="380" cy="170" r="10"/>
        <circle cx="640" cy="170" r="10"/>

        <text x="105" y="220" font-size="24">0</text>
        <text x="365" y="220" font-size="24">1/2</text>
        <text x="630" y="220" font-size="24">1</text>

        <text x="75" y="120" font-size="22">असंभव</text>
        <text x="300" y="120" font-size="22">संभावित</text>
        <text x="570" y="120" font-size="22">निश्चित</text>
      `
    ),

    "17-1": wrap(
      "कार्तीय तल",
      `
        <line x1="100" y1="170" x2="660" y2="170"
          stroke="#222" stroke-width="4"/>

        <line x1="380" y1="300" x2="380" y2="40"
          stroke="#222" stroke-width="4"/>

        <text x="645" y="160" font-size="24">X</text>
        <text x="390" y="55" font-size="24">Y</text>
        <text x="385" y="190" font-size="22">O</text>

        <text x="240" y="100" font-size="22">II</text>
        <text x="490" y="100" font-size="22">I</text>
        <text x="240" y="245" font-size="22">III</text>
        <text x="490" y="245" font-size="22">IV</text>
      `
    ),

    "17-2": wrap(
      "बिंदु का पता : (x,y)",
      `
        <line x1="100" y1="240" x2="680" y2="240"
          stroke="#222" stroke-width="4"/>

        <line x1="180" y1="310" x2="180" y2="50"
          stroke="#222" stroke-width="4"/>

        <circle cx="450" cy="130" r="10"/>

        <line x1="180" y1="130" x2="450" y2="130"
          stroke="#222" stroke-width="2"
          stroke-dasharray="8 8"/>

        <line x1="450" y1="240" x2="450" y2="130"
          stroke="#222" stroke-width="2"
          stroke-dasharray="8 8"/>

        <text x="455" y="120" font-size="25">
          (4,2)
        </text>

        <text x="270" y="290" font-size="24">
          पहले X → फिर Y
        </text>
      `
    ),

    "17-3": wrap(
      "चार चतुर्थांश",
      `
        <line x1="100" y1="170" x2="660" y2="170"
          stroke="#222" stroke-width="4"/>

        <line x1="380" y1="300" x2="380" y2="40"
          stroke="#222" stroke-width="4"/>

        <text x="250" y="110" font-size="25">II (-,+)</text>
        <text x="455" y="110" font-size="25">I (+,+)</text>
        <text x="220" y="235" font-size="25">III (-,-)</text>
        <text x="455" y="235" font-size="25">IV (+,-)</text>
      `
    ),

    "17-4": wrap(
      "ग्राफ पढ़कर कहानी समझें",
      `
        <line x1="100" y1="270" x2="680" y2="270"
          stroke="#222" stroke-width="4"/>

        <line x1="100" y1="270" x2="100" y2="50"
          stroke="#222" stroke-width="4"/>

        <circle cx="180" cy="230" r="8"/>
        <circle cx="300" cy="200" r="8"/>
        <circle cx="420" cy="150" r="8"/>
        <circle cx="540" cy="95" r="8"/>

        <polyline
          points="180,230 300,200 420,150 540,95"
          fill="none"
          stroke="#222"
          stroke-width="4"/>

        <text x="270" y="40" font-size="24">
          मान लगातार बढ़ रहा है
        </text>
      `
    )
  };

  function render() {
    if (!isClass8()) return;

    const ch = chapter();

    if (ch < 15 || ch > 17) return;

    const box = container();

    if (!box) return;

    if (box.querySelector(".aadya-c8spc-diagram")) return;

    const key = ch + "-" + lesson();
    const html = diagrams[key];

    if (!html) return;

    const holder = document.createElement("div");
    holder.innerHTML = html.trim();

    const diagram = holder.firstElementChild;

    if (!diagram) return;

    const tryYourself = box.querySelector("#tryYourself");

    if (tryYourself) {
      tryYourself.parentNode.insertBefore(diagram, tryYourself);
    } else {
      box.appendChild(diagram);
    }
  }

  function start() {
    setTimeout(render, 150);

    const observer = new MutationObserver(function () {
      render();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    window.AADYAClass8StatisticsProbabilityCoordinateEngine = {
      refresh: render
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
