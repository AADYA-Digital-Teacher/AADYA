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

  function makeDiagram(title, body) {
    return `
      <div class="aadya-c8pq-diagram"
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
          viewBox="0 0 760 260"
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

    "9-1": makeDiagram("समान्तर रेखाएँ", `
      <line x1="70" y1="70" x2="690" y2="70"
        stroke="#222" stroke-width="4"/>
      <line x1="70" y1="170" x2="690" y2="170"
        stroke="#222" stroke-width="4"/>

      <line x1="180" y1="220" x2="570" y2="20"
        stroke="#222" stroke-width="4"/>

      <text x="80" y="55" font-size="25">l</text>
      <text x="80" y="155" font-size="25">m</text>
      <text x="580" y="45" font-size="22">transversal</text>

      <text x="220" y="235" font-size="23">
        l ∥ m
      </text>
    `),

    "9-2": makeDiagram("एक ही रेखा के समान्तर", `
      <line x1="80" y1="55" x2="680" y2="55"
        stroke="#222" stroke-width="4"/>

      <line x1="80" y1="125" x2="680" y2="125"
        stroke="#222" stroke-width="4"/>

      <line x1="80" y1="195" x2="680" y2="195"
        stroke="#222" stroke-width="4"/>

      <text x="95" y="45" font-size="25">l</text>
      <text x="95" y="115" font-size="25">m</text>
      <text x="95" y="185" font-size="25">n</text>

      <text x="255" y="240" font-size="25">
        m ∥ l और n ∥ l ⇒ m ∥ n
      </text>
    `),

    "9-3": makeDiagram("एक ही रेखा पर लम्ब", `
      <line x1="80" y1="135" x2="680" y2="135"
        stroke="#222" stroke-width="4"/>

      <line x1="220" y1="40" x2="220" y2="230"
        stroke="#222" stroke-width="4"/>

      <line x1="500" y1="40" x2="500" y2="230"
        stroke="#222" stroke-width="4"/>

      <text x="90" y="120" font-size="23">l</text>
      <text x="230" y="55" font-size="23">m</text>
      <text x="510" y="55" font-size="23">n</text>

      <text x="250" y="245" font-size="24">
        m ⟂ l और n ⟂ l ⇒ m ∥ n
      </text>
    `),

    "9-4": makeDiagram("रेखाखंड का अनुपात में विभाजन", `
      <line x1="90" y1="100" x2="670" y2="100"
        stroke="#222" stroke-width="5"/>

      <circle cx="322" cy="100" r="6" fill="#222"/>
      <circle cx="438" cy="100" r="6" fill="#222"/>

      <text x="80" y="80" font-size="25">A</text>
      <text x="675" y="80" font-size="25">B</text>

      <text x="205" y="150" font-size="23">
        2 भाग
      </text>

      <text x="470" y="150" font-size="23">
        3 भाग
      </text>

      <text x="220" y="210" font-size="25">
        AB को 2 : 3 में बाँटना
      </text>
    `),

    "10-1": makeDiagram("चार भुजाएँ + एक विकर्ण", `
      <polygon
        points="150,65 600,75 520,200 110,190"
        fill="none"
        stroke="#222"
        stroke-width="4"/>

      <line x1="150" y1="65" x2="520" y2="200"
        stroke="#222"
        stroke-width="4"/>

      <text x="130" y="55" font-size="23">A</text>
      <text x="605" y="70" font-size="23">B</text>
      <text x="525" y="220" font-size="23">C</text>
      <text x="85" y="200" font-size="23">D</text>

      <text x="270" y="115" font-size="23">
        diagonal AC
      </text>

      <text x="235" y="245" font-size="23">
        2 triangles → 1 quadrilateral
      </text>
    `),

    "10-2": makeDiagram("दोनों विकर्णों का उपयोग", `
      <polygon
        points="130,65 620,70 540,205 100,190"
        fill="none"
        stroke="#222"
        stroke-width="4"/>

      <line x1="130" y1="65" x2="540" y2="205"
        stroke="#222"
        stroke-width="4"/>

      <line x1="620" y1="70" x2="100" y2="190"
        stroke="#222"
        stroke-width="4"/>

      <circle cx="345" cy="135" r="7" fill="#222"/>

      <text x="355" y="130" font-size="22">O</text>

      <text x="235" y="245" font-size="23">
        AC और BD → intersection O
      </text>
    `),

    "10-3": makeDiagram("Sides + Angles से Construction", `
      <line x1="120" y1="180" x2="340" y2="180"
        stroke="#222" stroke-width="4"/>

      <line x1="120" y1="180" x2="250" y2="70"
        stroke="#222" stroke-width="4"/>

      <path d="M160 180 A40 40 0 0 1 145 150"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="145" y="160" font-size="22">
        angle
      </text>

      <path d="M250 70 L620 90 L540 205 L120 180"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="280" y="235" font-size="23">
        angle + sides → quadrilateral
      </text>
    `),

    "10-4": makeDiagram("तीन भुजाएँ + दो कोण", `
      <polygon
        points="120,180 250,65 620,85 530,205"
        fill="none"
        stroke="#222"
        stroke-width="4"/>

      <path d="M150 180 A45 45 0 0 1 135 145"
        fill="none" stroke="#222" stroke-width="3"/>

      <path d="M580 85 A45 45 0 0 0 555 120"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="145" y="145" font-size="22">∠1</text>
      <text x="550" y="125" font-size="22">∠2</text>

      <text x="270" y="245" font-size="23">
        sides + angles → exact shape
      </text>
    `),

    "10-5": makeDiagram("चार भुजाएँ + एक कोण", `
      <polygon
        points="120,180 250,70 630,90 520,205"
        fill="none"
        stroke="#222"
        stroke-width="4"/>

      <path d="M160 180 A50 50 0 0 1 145 145"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="150" y="150" font-size="22">
        given angle
      </text>

      <text x="250" y="245" font-size="23">
        4 sides + 1 angle → construction
      </text>
    `)
  };

  function render() {
    if (!isClass8()) return;

    const ch = getChapter();

    if (ch < 9 || ch > 10) return;

    const box = findContainer();

    if (!box) return;

    if (box.querySelector(".aadya-c8pq-diagram")) {
      return;
    }

    const key = ch + "-" + getLesson();

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

    window.AADYAClass8ParallelQuadrilateralDiagramEngine = {
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
