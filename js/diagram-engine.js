/* =========================================================
   AADYA DIGITAL TEACHER
   Offline Diagram Engine
   Version 2.0
   ---------------------------------------------------------
   Supports:
   • Circle diagrams
   • Triangle diagrams
   • Responsive inline SVG
   • Offline-first
   • Automatic lesson-title detection
   ========================================================= */

(function () {

  "use strict";

  /* =======================================================
     BASIC SVG HELPERS
     ======================================================= */

  function esc(value) {

    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function svgWrap(content, label) {

    return `
      <section class="card aadya-diagram-card">

        <div class="aadya-diagram-title">
          📐 ${esc(label || "दृश्य उदाहरण")}
        </div>

        <div class="aadya-svg-wrap">

          <svg
            viewBox="0 0 800 460"
            role="img"
            aria-label="${esc(label || "गणितीय आकृति")}"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >

            ${content}

          </svg>

        </div>

      </section>
    `;

  }


  /* =======================================================
     CIRCLE DIAGRAMS
     ======================================================= */

  function circleConcept() {

    return svgWrap(`

      <circle
        cx="400"
        cy="230"
        r="145"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="400"
        cy="230"
        r="6"
        fill="currentColor"
      />

      <line
        x1="400"
        y1="230"
        x2="545"
        y2="230"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="470"
        y="215"
        font-size="28"
        text-anchor="middle"
      >
        त्रिज्या
      </text>

      <text
        x="400"
        y="255"
        font-size="25"
        text-anchor="middle"
      >
        केंद्र O
      </text>

      <text
        x="400"
        y="420"
        font-size="30"
        text-anchor="middle"
      >
        वृत्त और उसका केंद्र
      </text>

    `, "वृत्त की मूल अवधारणा");

  }


  function radiusDiameterChordArc() {

    return svgWrap(`

      <circle
        cx="400"
        cy="230"
        r="150"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Center -->

      <circle
        cx="400"
        cy="230"
        r="6"
        fill="currentColor"
      />

      <text
        x="385"
        y="215"
        font-size="26"
      >
        O
      </text>

      <!-- Radius -->

      <line
        x1="400"
        y1="230"
        x2="550"
        y2="230"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="475"
        y="215"
        font-size="25"
        text-anchor="middle"
      >
        त्रिज्या
      </text>

      <!-- Diameter -->

      <line
        x1="250"
        y1="230"
        x2="550"
        y2="230"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="10 7"
      />

      <text
        x="400"
        y="195"
        font-size="24"
        text-anchor="middle"
      >
        व्यास
      </text>

      <!-- Chord -->

      <line
        x1="290"
        y1="135"
        x2="515"
        y2="300"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="420"
        y="135"
        font-size="24"
      >
        जीवा
      </text>

      <!-- Arc -->

      <path
        d="M 285 150
           A 150 150 0 0 1 525 165"
        fill="none"
        stroke="currentColor"
        stroke-width="7"
      />

      <text
        x="405"
        y="105"
        font-size="24"
        text-anchor="middle"
      >
        चाप
      </text>

    `, "त्रिज्या, व्यास, जीवा और चाप");

  }


  function semicircle() {

    return svgWrap(`

      <path
        d="
          M 180 300
          A 220 220 0 0 1 620 300
          Z
        "
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <line
        x1="180"
        y1="300"
        x2="620"
        y2="300"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="400"
        cy="300"
        r="6"
        fill="currentColor"
      />

      <text
        x="400"
        y="350"
        font-size="27"
        text-anchor="middle"
      >
        व्यास
      </text>

      <text
        x="400"
        y="110"
        font-size="30"
        text-anchor="middle"
      >
        अर्धवृत्त
      </text>

    `, "अर्धवृत्त");

  }


  function segmentAndSector() {

    return svgWrap(`

      <!-- Circle -->

      <circle
        cx="250"
        cy="230"
        r="145"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Chord -->

      <line
        x1="145"
        y1="170"
        x2="355"
        y2="170"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Segment shading -->

      <path
        d="
          M 145 170
          A 145 145 0 0 0 355 170
          Z
        "
        fill="currentColor"
        opacity="0.12"
      />

      <text
        x="250"
        y="125"
        font-size="25"
        text-anchor="middle"
      >
        वृत्तखण्ड
      </text>


      <!-- Sector -->

      <circle
        cx="570"
        cy="230"
        r="145"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="570"
        y1="230"
        x2="570"
        y2="85"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="570"
        y1="230"
        x2="705"
        y2="285"
        stroke="currentColor"
        stroke-width="5"
      />

      <path
        d="
          M 570 85
          A 145 145 0 0 1 705 285
          L 570 230
          Z
        "
        fill="currentColor"
        opacity="0.12"
      />

      <text
        x="625"
        y="155"
        font-size="25"
        text-anchor="middle"
      >
        त्रिज्याखण्ड
      </text>

    `, "वृत्तखण्ड और त्रिज्याखण्ड");

  }


  function genericCircle() {

    return svgWrap(`

      <circle
        cx="400"
        cy="230"
        r="150"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <circle
        cx="400"
        cy="230"
        r="6"
        fill="currentColor"
      />

      <line
        x1="400"
        y1="230"
        x2="550"
        y2="230"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="475"
        y="210"
        font-size="25"
        text-anchor="middle"
      >
        त्रिज्या
      </text>

    `, "वृत्त");

  }


  /* =======================================================
     TRIANGLE DIAGRAMS
     ======================================================= */

  function triangleBasic() {

    return svgWrap(`

      <!-- Triangle -->

      <polygon
        points="400,80 190,350 610,350"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Vertices -->

      <circle cx="400" cy="80" r="6" fill="currentColor"/>
      <circle cx="190" cy="350" r="6" fill="currentColor"/>
      <circle cx="610" cy="350" r="6" fill="currentColor"/>

      <text
        x="400"
        y="55"
        font-size="30"
        text-anchor="middle"
      >
        A
      </text>

      <text
        x="170"
        y="380"
        font-size="30"
      >
        B
      </text>

      <text
        x="620"
        y="380"
        font-size="30"
      >
        C
      </text>

      <!-- Side labels -->

      <text
        x="285"
        y="205"
        font-size="25"
        text-anchor="middle"
      >
        AB
      </text>

      <text
        x="515"
        y="205"
        font-size="25"
        text-anchor="middle"
      >
        AC
      </text>

      <text
        x="400"
        y="390"
        font-size="25"
        text-anchor="middle"
      >
        BC
      </text>

    `, "त्रिभुज की पहचान");

  }


  function triangleTypes() {

    return svgWrap(`

      <!-- Equilateral -->

      <polygon
        points="130,250 210,110 290,250"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="210"
        y="295"
        font-size="22"
        text-anchor="middle"
      >
        समबाहु
      </text>

      <!-- Isosceles -->

      <polygon
        points="400,100 320,250 480,250"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="400"
        y="295"
        font-size="22"
        text-anchor="middle"
      >
        समद्विबाहु
      </text>

      <!-- Scalene -->

      <polygon
        points="610,110 520,260 710,240"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="615"
        y="295"
        font-size="22"
        text-anchor="middle"
      >
        विषमबाहु
      </text>

    `, "त्रिभुज के प्रकार");

  }


  function triangleConstruction() {

    return svgWrap(`

      <!-- Base -->

      <line
        x1="170"
        y1="330"
        x2="630"
        y2="330"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="170"
        cy="330"
        r="6"
        fill="currentColor"
      />

      <circle
        cx="630"
        cy="330"
        r="6"
        fill="currentColor"
      />

      <text
        x="155"
        y="365"
        font-size="25"
      >
        B
      </text>

      <text
        x="635"
        y="365"
        font-size="25"
      >
        C
      </text>

      <!-- Construction arcs -->

      <path
        d="
          M 170 330
          A 210 210 0 0 1 380 120
        "
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="10 8"
      />

      <path
        d="
          M 630 330
          A 210 210 0 0 0 420 120
        "
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="10 8"
      />

      <!-- Triangle -->

      <line
        x1="170"
        y1="330"
        x2="400"
        y2="115"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="630"
        y1="330"
        x2="400"
        y2="115"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="400"
        cy="115"
        r="6"
        fill="currentColor"
      />

      <text
        x="400"
        y="85"
        font-size="27"
        text-anchor="middle"
      >
        A
      </text>

      <text
        x="400"
        y="420"
        font-size="27"
        text-anchor="middle"
      >
        आधार BC और रचना चाप
      </text>

    `, "त्रिभुज की रचना");

  }


  function congruentShapes() {

    return svgWrap(`

      <!-- Shape 1 -->

      <polygon
        points="230,100 130,310 330,310"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Tick marks -->

      <line
        x1="175"
        y1="205"
        x2="195"
        y2="215"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="405"
        y1="205"
        x2="425"
        y2="215"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Equality -->

      <text
        x="400"
        y="150"
        font-size="42"
        text-anchor="middle"
      >
        ≅
      </text>

      <!-- Shape 2 -->

      <polygon
        points="570,100 470,310 670,310"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <text
        x="400"
        y="385"
        font-size="28"
        text-anchor="middle"
      >
        समान आकार और समान माप
      </text>

    `, "आकृतियों की सर्वांगसमता");

  }


  function congruentTriangles() {

    return svgWrap(`

      <!-- Triangle 1 -->

      <polygon
        points="210,90 100,320 320,320"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Equal side marks -->

      <line
        x1="145"
        y1="205"
        x2="165"
        y2="215"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="255"
        y1="205"
        x2="275"
        y2="215"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="190"
        y1="320"
        x2="190"
        y2="300"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Congruent sign -->

      <text
        x="400"
        y="220"
        font-size="50"
        text-anchor="middle"
      >
        ≅
      </text>

      <!-- Triangle 2 -->

      <polygon
        points="590,90 480,320 700,320"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <line
        x1="525"
        y1="205"
        x2="545"
        y2="215"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="635"
        y1="205"
        x2="655"
        y2="215"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="570"
        y1="320"
        x2="570"
        y2="300"
        stroke="currentColor"
        stroke-width="5"
      />

    `, "त्रिभुजों की सर्वांगसमता");

  }


  function similarShapes() {

    return svgWrap(`

      <!-- Small rectangle -->

      <rect
        x="110"
        y="140"
        width="170"
        height="120"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Large rectangle -->

      <rect
        x="450"
        y="100"
        width="250"
        height="180"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Similar sign -->

      <text
        x="365"
        y="220"
        font-size="50"
        text-anchor="middle"
      >
        ∼
      </text>

      <text
        x="400"
        y="370"
        font-size="28"
        text-anchor="middle"
      >
        समान आकृति — आकार अलग, अनुपात समान
      </text>

    `, "आकृतियों की समरूपता");

  }


  function similarTriangles() {

    return svgWrap(`

      <!-- Small triangle -->

      <polygon
        points="205,110 115,300 295,300"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Side labels -->

      <text
        x="145"
        y="205"
        font-size="22"
      >
        3
      </text>

      <text
        x="260"
        y="205"
        font-size="22"
      >
        3
      </text>

      <text
        x="205"
        y="330"
        font-size="22"
        text-anchor="middle"
      >
        4
      </text>


      <!-- Similar sign -->

      <text
        x="400"
        y="220"
        font-size="50"
        text-anchor="middle"
      >
        ∼
      </text>


      <!-- Large triangle -->

      <polygon
        points="590,70 450,320 730,320"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <text
        x="505"
        y="205"
        font-size="22"
      >
        6
      </text>

      <text
        x="670"
        y="205"
        font-size="22"
      >
        6
      </text>

      <text
        x="590"
        y="350"
        font-size="22"
        text-anchor="middle"
      >
        8
      </text>

      <text
        x="400"
        y="420"
        font-size="27"
        text-anchor="middle"
      >
        संगत भुजाओं का अनुपात समान
      </text>

    `, "त्रिभुजों की समरूपता");

  }


  function triangleRevision() {

    return svgWrap(`

      <!-- Triangle -->

      <polygon
        points="400,70 190,330 610,330"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Height -->

      <line
        x1="400"
        y1="70"
        x2="400"
        y2="330"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="9 7"
      />

      <!-- Midpoint -->

      <circle
        cx="400"
        cy="330"
        r="6"
        fill="currentColor"
      />

      <!-- Angle marks -->

      <path
        d="M 370 110 A 45 45 0 0 1 430 110"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <!-- Labels -->

      <text
        x="400"
        y="48"
        font-size="28"
        text-anchor="middle"
      >
        A
      </text>

      <text
        x="165"
        y="360"
        font-size="28"
      >
        B
      </text>

      <text
        x="620"
        y="360"
        font-size="28"
      >
        C
      </text>

      <text
        x="430"
        y="220"
        font-size="23"
      >
        ऊँचाई
      </text>

      <text
        x="400"
        y="410"
        font-size="27"
        text-anchor="middle"
      >
        Triangle Application & Revision
      </text>

    `, "त्रिभुज — मिश्रित पुनरावृत्ति");

  }


  /* =======================================================
     DIAGRAM SELECTION
     ======================================================= */

  function getDiagram(title) {

    const text =
      String(title || "")
        .trim()
        .toLowerCase();


    /* -----------------------------------------------------
       TRIANGLE
       ----------------------------------------------------- */

    if (
      text.includes("त्रिभुज की पहचान") ||
      text.includes("मूल अवधारणा")
    ) {

      return triangleBasic();

    }


    if (
      text.includes("त्रिभुज के प्रकार")
    ) {

      return triangleTypes();

    }


    if (
      text.includes("त्रिभुज की रचना")
    ) {

      return triangleConstruction();

    }


    if (
      text.includes("आकृतियों की सर्वांगसमता")
    ) {

      return congruentShapes();

    }


    if (
      text.includes("त्रिभुजों की सर्वांगसमता")
    ) {

      return congruentTriangles();

    }


    if (
      text.includes("आकृतियों की समरूपता")
    ) {

      return similarShapes();

    }


    if (
      text.includes("त्रिभुजों की समरूपता")
    ) {

      return similarTriangles();

    }


    if (
      text.includes("मिश्रित") &&
      text.includes("revision")
    ) {

      return triangleRevision();

    }


    if (
      text.includes("मिश्रित") &&
      text.includes("application")
    ) {

      return triangleRevision();

    }


    /* -----------------------------------------------------
       CIRCLE
       ----------------------------------------------------- */

    if (
      text.includes("वृत्त की अवधारणा")
    ) {

      return circleConcept();

    }


    if (
      text.includes("त्रिज्या") &&
      text.includes("व्यास") &&
      text.includes("जीवा")
    ) {

      return radiusDiameterChordArc();

    }


    if (
      text.includes("अर्धवृत्त")
    ) {

      return semicircle();

    }


    if (
      text.includes("वृत्तखण्ड") ||
      text.includes("त्रिज्याखण्ड")
    ) {

      return segmentAndSector();

    }


    if (
      text.includes("वृत्त")
    ) {

      return genericCircle();

    }


    return "";

  }


  /* =======================================================
     RENDER DIAGRAM
     ======================================================= */

  function renderDiagram(title) {

    const existing =
      document.querySelector(
        ".aadya-diagram-card"
      );

    /*
     * Prevent duplicate diagrams.
     */

    if (existing) {

      return;

    }


    const diagram =
      getDiagram(title);


    if (!diagram) {

      return;

    }


    /*
     * Prefer examples section.
     */

    const examples =
      document.getElementById(
        "examples"
      );


    if (examples) {

      examples.insertAdjacentHTML(
        "afterend",
        diagram
      );

      return;

    }


    /*
     * Fallback:
     * insert after main content title.
     */

    const mainTitle =
      document.getElementById(
        "mainTitle"
      );


    if (mainTitle) {

      mainTitle.insertAdjacentHTML(
        "afterend",
        diagram
      );

      return;

    }


    /*
     * Final fallback:
     * insert inside body.
     */

    if (document.body) {

      document.body.insertAdjacentHTML(
        "beforeend",
        diagram
      );

    }

  }


  /* =======================================================
     STYLES
     ======================================================= */

  function injectStyles() {

    if (
      document.getElementById(
        "aadya-diagram-engine-style"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "aadya-diagram-engine-style";


    style.textContent = `

      .aadya-diagram-card {

        margin-top: 20px;
        margin-bottom: 20px;
        overflow: hidden;

      }


      .aadya-diagram-title {

        font-size: 20px;
        font-weight: 700;
        padding: 14px 16px;
        text-align: center;

      }


      .aadya-svg-wrap {

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 10px 18px;
        box-sizing: border-box;

      }


      .aadya-svg-wrap svg {

        width: 100%;
        max-width: 800px;
        height: auto;
        display: block;

      }


      .aadya-svg-wrap text {

        font-family:
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          "Noto Sans Devanagari",
          "Mangal",
          sans-serif;

        fill: currentColor;

      }


      @media (max-width: 600px) {

        .aadya-diagram-title {

          font-size: 18px;

        }

        .aadya-svg-wrap {

          padding-left: 4px;
          padding-right: 4px;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     TITLE DETECTION
     ======================================================= */

  function findLessonTitle() {

    /*
     * Most reliable:
     * learning page's main title.
     */

    const mainTitle =
      document.getElementById(
        "mainTitle"
      );


    if (
      mainTitle &&
      mainTitle.textContent.trim()
    ) {

      return mainTitle.textContent.trim();

    }


    /*
     * Chapter title fallback.
     */

    const chapterTitle =
      document.getElementById(
        "chapterTitle"
      );


    if (
      chapterTitle &&
      chapterTitle.textContent.trim()
    ) {

      return chapterTitle.textContent.trim();

    }


    /*
     * Search common heading elements.
     */

    const headings =
      document.querySelectorAll(
        "h1, h2, h3"
      );


    for (
      let i = 0;
      i < headings.length;
      i++
    ) {

      const value =
        headings[i].textContent.trim();


      if (!value) {

        continue;

      }


      if (
        value.includes("त्रिभुज") ||
        value.includes("वृत्त")
      ) {

        return value;

      }

    }


    return "";

  }


  /* =======================================================
     START
     ======================================================= */

  function start() {

    injectStyles();


    const title =
      findLessonTitle();


    if (title) {

      renderDiagram(title);

      return;

    }


    /*
     * Lesson content may load asynchronously.
     * Watch for DOM changes for a short period.
     */

    let attempts = 0;


    const observer =
      new MutationObserver(
        function () {

          attempts++;


          const currentTitle =
            findLessonTitle();


          if (currentTitle) {

            renderDiagram(
              currentTitle
            );

            observer.disconnect();

            return;

          }


          /*
           * Avoid observing forever.
           */

          if (attempts > 80) {

            observer.disconnect();

          }

        }
      );


    if (document.body) {

      observer.observe(
        document.body,
        {
          childList: true,
          subtree: true
        }
      );

    }

  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.AADYADiagramEngine = {

    render: renderDiagram,
    start: start

  };


  /* =======================================================
     INITIALIZE
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }

})();
