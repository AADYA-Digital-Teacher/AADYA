(function () {
  "use strict";

  function getData() {
    return window.lessonData || null;
  }

  function getChapter() {
    return Number(getData() && getData().chapter);
  }

  function getLesson() {
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

  function findContainer() {
    return document.querySelector(
      "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
    );
  }

  function makeDiagram(title, svg) {
    return `
      <div class="aadya-c8ct-diagram"
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
          viewBox="0 0 760 300"
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

    "13-1": makeDiagram(
      "केंद्र से जीवा पर लंब",
      `
        <circle cx="380" cy="145" r="105"
          fill="none" stroke="#222" stroke-width="4"/>

        <circle cx="380" cy="145" r="5" fill="#222"/>

        <line x1="300" y1="205" x2="460" y2="205"
          stroke="#222" stroke-width="4"/>

        <line x1="380" y1="145" x2="380" y2="205"
          stroke="#222" stroke-width="4"/>

        <text x="365" y="135" font-size="22">O</text>
        <text x="285" y="230" font-size="22">A</text>
        <text x="450" y="230" font-size="22">B</text>
        <text x="365" y="230" font-size="22">M</text>

        <text x="235" y="275" font-size="24">
          AM = MB
        </text>

        <text x="470" y="275" font-size="24">
          OM ⟂ AB
        </text>
      `
    ),

    "13-2": makeDiagram(
      "समान जीवा → समान केंद्रीय कोण",
      `
        <circle cx="380" cy="145" r="105"
          fill="none" stroke="#222" stroke-width="4"/>

        <circle cx="380" cy="145" r="5" fill="#222"/>

        <line x1="380" y1="145" x2="295" y2="105"
          stroke="#222" stroke-width="3"/>

        <line x1="380" y1="145" x2="465" y2="105"
          stroke="#222" stroke-width="3"/>

        <line x1="300" y1="205" x2="460" y2="205"
          stroke="#222" stroke-width="4"/>

        <text x="365" y="135" font-size="22">O</text>

        <text x="270" y="100" font-size="22">A</text>
        <text x="470" y="100" font-size="22">B</text>

        <text x="360" y="250" font-size="24">
          समान जीवाएँ
        </text>

        <text x="365" y="280" font-size="22">
          ⇒ समान केंद्रीय कोण
        </text>
      `
    ),

    "13-3": makeDiagram(
      "चक्रीय चतुर्भुज",
      `
        <circle cx="380" cy="145" r="105"
          fill="none" stroke="#222" stroke-width="4"/>

        <polygon
          points="315,75 455,85 485,190 290,195"
          fill="none"
          stroke="#222"
          stroke-width="4"/>

        <circle cx="315" cy="75" r="5" fill="#222"/>
        <circle cx="455" cy="85" r="5" fill="#222"/>
        <circle cx="485" cy="190" r="5" fill="#222"/>
        <circle cx="290" cy="195" r="5" fill="#222"/>

        <text x="300" y="65" font-size="22">A</text>
        <text x="460" y="75" font-size="22">B</text>
        <text x="495" y="200" font-size="22">C</text>
        <text x="270" y="210" font-size="22">D</text>

        <text x="255" y="270" font-size="24">
          A, B, C, D एक ही वृत्त पर
        </text>
      `
    ),

    "13-4": makeDiagram(
      "सम्मुख कोणों का योग = 180°",
      `
        <circle cx="380" cy="145" r="105"
          fill="none" stroke="#222" stroke-width="4"/>

        <polygon
          points="315,75 455,85 485,190 290,195"
          fill="none"
          stroke="#222"
          stroke-width="4"/>

        <text x="295" y="65" font-size="22">A</text>
        <text x="460" y="75" font-size="22">B</text>
        <text x="495" y="200" font-size="22">C</text>
        <text x="265" y="210" font-size="22">D</text>

        <text x="270" y="250" font-size="25">
          ∠A + ∠C = 180°
        </text>

        <text x="475" y="250" font-size="25">
          ∠B + ∠D = 180°
        </text>
      `
    ),

    "14-1": makeDiagram(
      "छेदिका और स्पर्श रेखा",
      `
        <circle cx="380" cy="145" r="95"
          fill="none" stroke="#222" stroke-width="4"/>

        <line x1="150" y1="145" x2="610" y2="145"
          stroke="#222" stroke-width="4"/>

        <line x1="160" y1="255" x2="600" y2="255"
          stroke="#222" stroke-width="4"/>

        <circle cx="300" cy="145" r="5" fill="#222"/>
        <circle cx="460" cy="145" r="5" fill="#222"/>

        <circle cx="380" cy="255" r="5" fill="#222"/>

        <text x="180" y="125" font-size="22">
          छेदिका
        </text>

        <text x="425" y="240" font-size="22">
          स्पर्श रेखा
        </text>

        <text x="395" y="285" font-size="20">
          स्पर्श बिंदु
        </text>
      `
    ),

    "14-2": makeDiagram(
      "वृत्त पर दिए बिंदु से स्पर्श रेखा",
      `
        <circle cx="380" cy="145" r="100"
          fill="none" stroke="#222" stroke-width="4"/>

        <circle cx="380" cy="45" r="5" fill="#222"/>

        <line x1="380" y1="145" x2="380" y2="45"
          stroke="#222" stroke-width="3"/>

        <line x1="240" y1="45" x2="520" y2="45"
          stroke="#222" stroke-width="4"/>

        <circle cx="380" cy="145" r="5" fill="#222"/>

        <text x="365" y="170" font-size="22">O</text>
        <text x="390" y="40" font-size="22">P</text>

        <text x="245" y="275" font-size="24">
          P पर स्पर्श रेखा की रचना
        </text>
      `
    ),

    "14-3": makeDiagram(
      "स्पर्श रेखा ⟂ त्रिज्या",
      `
        <circle cx="300" cy="150" r="95"
          fill="none" stroke="#222" stroke-width="4"/>

        <circle cx="300" cy="150" r="5" fill="#222"/>

        <circle cx="395" cy="150" r="5" fill="#222"/>

        <line x1="300" y1="150" x2="395" y2="150"
          stroke="#222" stroke-width="4"/>

        <line x1="395" y1="55" x2="395" y2="245"
          stroke="#222" stroke-width="4"/>

        <text x="280" y="140" font-size="22">O</text>
        <text x="405" y="145" font-size="22">P</text>

        <text x="410" y="90" font-size="22">
          Tangent
        </text>

        <text x="215" y="275" font-size="25">
          OP ⟂ Tangent
        </text>

        <text x="470" y="275" font-size="25">
          90°
        </text>
      `
    )
  };

  function render() {
    if (!isClass8()) return;

    const ch = getChapter();

    if (ch < 13 || ch > 14) return;

    const container = findContainer();

    if (!container) return;

    if (container.querySelector(".aadya-c8ct-diagram")) {
      return;
    }

    const key = ch + "-" + getLesson();
    const html = diagrams[key];

    if (!html) return;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = html.trim();

    const node = wrapper.firstElementChild;

    if (!node) return;

    const tryYourself = container.querySelector("#tryYourself");

    if (tryYourself) {
      tryYourself.parentNode.insertBefore(node, tryYourself);
    } else {
      container.appendChild(node);
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

    window.AADYAClass8CircleTangentDiagramEngine = {
      refresh: render
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
