/* =========================================================
   AADYA DIGITAL TEACHER
   OFFLINE SVG DIAGRAM ENGINE
   Circle + Triangle
   ========================================================= */

(function () {

  "use strict";


  /* =========================================================
     COMMON SVG WRAPPER
     ========================================================= */

  function svgWrap(content, title) {

    return `
      <section class="card aadya-diagram-card">

        <div class="aadya-diagram-title">
          📐 ${title}
        </div>

        <div class="aadya-svg-container">
          <svg
            viewBox="0 0 600 360"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="${title}"
          >
            ${content}
          </svg>
        </div>

      </section>
    `;
  }


  /* =========================================================
     CIRCLE — BASIC CONCEPT
     ========================================================= */

  function circleConcept() {

    return svgWrap(`

      <circle
        cx="300"
        cy="180"
        r="110"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="300"
        cy="180"
        r="7"
        fill="currentColor"
      />

      <line
        x1="300"
        y1="180"
        x2="410"
        y2="180"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="305"
        y="165"
        font-size="22"
        fill="currentColor"
      >
        O
      </text>

      <text
        x="350"
        y="168"
        font-size="20"
        fill="currentColor"
      >
        त्रिज्या
      </text>

      <text
        x="300"
        y="325"
        text-anchor="middle"
        font-size="24"
        fill="currentColor"
      >
        वृत्त
      </text>

    `, "वृत्त की मूल अवधारणा");
  }


  /* =========================================================
     CIRCLE — RADIUS, DIAMETER, CHORD AND ARC
     ========================================================= */

  function radiusDiameterChordArc() {

    return svgWrap(`

      <!-- Circle -->

      <circle
        cx="300"
        cy="180"
        r="115"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Centre -->

      <circle
        cx="300"
        cy="180"
        r="6"
        fill="currentColor"
      />

      <text
        x="285"
        y="170"
        font-size="20"
        fill="currentColor"
      >
        O
      </text>


      <!-- Diameter -->

      <line
        x1="185"
        y1="180"
        x2="415"
        y2="180"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="300"
        y="165"
        text-anchor="middle"
        font-size="19"
        fill="currentColor"
      >
        व्यास
      </text>


      <!-- Radius -->

      <line
        x1="300"
        y1="180"
        x2="415"
        y2="180"
        stroke="currentColor"
        stroke-width="7"
      />

      <text
        x="355"
        y="205"
        font-size="18"
        fill="currentColor"
      >
        त्रिज्या
      </text>


      <!-- Chord -->

      <line
        x1="220"
        y1="100"
        x2="380"
        y2="115"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="300"
        y="95"
        text-anchor="middle"
        font-size="19"
        fill="currentColor"
      >
        जीवा
      </text>


      <!-- Arc -->

      <path
        d="M 220 100 A 115 115 0 0 1 380 115"
        fill="none"
        stroke="currentColor"
        stroke-width="9"
      />

      <text
        x="425"
        y="105"
        font-size="19"
        fill="currentColor"
      >
        चाप
      </text>

    `, "त्रिज्या, व्यास, जीवा और चाप");
  }


  /* =========================================================
     SEMICIRCLE
     ========================================================= */

  function semicircle() {

    return svgWrap(`

      <!-- Semicircle -->

      <path
        d="M 150 220
           A 150 150 0 0 1 450 220"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Diameter -->

      <line
        x1="150"
        y1="220"
        x2="450"
        y2="220"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="300"
        y="255"
        text-anchor="middle"
        font-size="22"
        fill="currentColor"
      >
        व्यास
      </text>

      <text
        x="300"
        y="90"
        text-anchor="middle"
        font-size="25"
        fill="currentColor"
      >
        अर्धवृत्त
      </text>

    `, "अर्धवृत्त");
  }


  /* =========================================================
     CIRCLE SEGMENT + SECTOR
     ========================================================= */

  function segmentAndSector() {

    return svgWrap(`

      <!-- LEFT : CIRCLE SEGMENT -->

      <circle
        cx="170"
        cy="180"
        r="95"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <line
        x1="110"
        y1="105"
        x2="235"
        y2="120"
        stroke="currentColor"
        stroke-width="5"
      />

      <path
        d="M110 105
           A95 95 0 0 1 235 120"
        fill="none"
        stroke="currentColor"
        stroke-width="8"
      />

      <text
        x="170"
        y="315"
        text-anchor="middle"
        font-size="21"
        fill="currentColor"
      >
        वृत्तखण्ड
      </text>


      <!-- RIGHT : SECTOR -->

      <circle
        cx="430"
        cy="180"
        r="95"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <path
        d="M430 180
           L430 85
           A95 95 0 0 1 510 225
           Z"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        stroke-width="4"
      />

      <line
        x1="430"
        y1="180"
        x2="430"
        y2="85"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="430"
        y1="180"
        x2="510"
        y2="225"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="430"
        y="315"
        text-anchor="middle"
        font-size="21"
        fill="currentColor"
      >
        त्रिज्याखण्ड
      </text>

    `, "वृत्तखण्ड और त्रिज्याखण्ड");
  }


  /* =========================================================
     TRIANGLE — BASIC
     ========================================================= */

  function triangleBasic() {

    return svgWrap(`

      <!-- Triangle -->

      <polygon
        points="300,65 155,285 445,285"
        fill="currentColor"
        fill-opacity="0.08"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Vertices -->

      <circle cx="300" cy="65" r="7" fill="currentColor"/>
      <circle cx="155" cy="285" r="7" fill="currentColor"/>
      <circle cx="445" cy="285" r="7" fill="currentColor"/>

      <!-- Labels -->

      <text
        x="300"
        y="45"
        text-anchor="middle"
        font-size="24"
        fill="currentColor"
      >
        A
      </text>

      <text
        x="135"
        y="305"
        font-size="24"
        fill="currentColor"
      >
        B
      </text>

      <text
        x="450"
        y="305"
        font-size="24"
        fill="currentColor"
      >
        C
      </text>

      <text
        x="300"
        y="345"
        text-anchor="middle"
        font-size="24"
        fill="currentColor"
      >
        त्रिभुज ABC
      </text>

    `, "त्रिभुज की मूल अवधारणा");
  }


  /* =========================================================
     TRIANGLE — TYPES
     ========================================================= */

  function triangleTypes() {

    return svgWrap(`

      <!-- Equilateral -->

      <polygon
        points="95,130 45,215 145,215"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="95"
        y="250"
        text-anchor="middle"
        font-size="18"
        fill="currentColor"
      >
        समबाहु
      </text>


      <!-- Isosceles -->

      <polygon
        points="300,105 245,215 355,215"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="300"
        y="250"
        text-anchor="middle"
        font-size="18"
        fill="currentColor"
      >
        समद्विबाहु
      </text>


      <!-- Scalene -->

      <polygon
        points="485,105 415,215 560,215"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="487"
        y="250"
        text-anchor="middle"
        font-size="18"
        fill="currentColor"
      >
        विषमबाहु
      </text>

    `, "त्रिभुज के प्रकार");
  }


  /* =========================================================
     TRIANGLE — CONGRUENCY
     ========================================================= */

  function triangleCongruency() {

    return svgWrap(`

      <!-- Triangle 1 -->

      <polygon
        points="145,90 75,240 215,240"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="145"
        y="70"
        text-anchor="middle"
        font-size="21"
        fill="currentColor"
      >
        ABC
      </text>


      <!-- Triangle 2 -->

      <polygon
        points="455,90 385,240 525,240"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="455"
        y="70"
        text-anchor="middle"
        font-size="21"
        fill="currentColor"
      >
        PQR
      </text>


      <!-- Equal side marks -->

      <line
        x1="105"
        y1="165"
        x2="115"
        y2="170"
        stroke="currentColor"
        stroke-width="4"
      />

      <line
        x1="415"
        y1="165"
        x2="425"
        y2="170"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="300"
        y="315"
        text-anchor="middle"
        font-size="22"
        fill="currentColor"
      >
        सर्वांगसम आकृतियाँ
      </text>

    `, "त्रिभुजों की सर्वांगसमता");
  }


  /* =========================================================
     TRIANGLE — SIMILARITY
     ========================================================= */

  function triangleSimilarity() {

    return svgWrap(`

      <!-- Small triangle -->

      <polygon
        points="135,120 80,230 190,230"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />


      <!-- Large triangle -->

      <polygon
        points="430,70 330,270 530,270"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />


      <text
        x="135"
        y="305"
        text-anchor="middle"
        font-size="21"
        fill="currentColor"
      >
        छोटा त्रिभुज
      </text>

      <text
        x="430"
        y="320"
        text-anchor="middle"
        font-size="21"
        fill="currentColor"
      >
        बड़ा त्रिभुज
      </text>


      <text
        x="300"
        y="45"
        text-anchor="middle"
        font-size="22"
        fill="currentColor"
      >
        समान आकार, अलग माप
      </text>

    `, "त्रिभुजों की समरूपता");
  }


  /* =========================================================
     GENERIC TRIANGLE
     ========================================================= */

  function genericTriangle() {

    return svgWrap(`

      <polygon
        points="300,65 150,285 455,285"
        fill="currentColor"
        fill-opacity="0.08"
        stroke="currentColor"
        stroke-width="5"
      />

      <text
        x="300"
        y="345"
        text-anchor="middle"
        font-size="23"
        fill="currentColor"
      >
        त्रिभुज
      </text>

    `, "त्रिभुज");
  }


  /* =========================================================
     GENERIC CIRCLE
     ========================================================= */

  function genericCircle() {

    return svgWrap(`

      <circle
        cx="300"
        cy="180"
        r="110"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="300"
        cy="180"
        r="6"
        fill="currentColor"
      />

    `, "वृत्त");
  }


  /* =========================================================
     DIAGRAM SELECTOR
     ========================================================= */

  function getDiagram(chapterTitle, lessonTitle) {

    const chapter =
      String(chapterTitle || "").trim();

    const lesson =
      String(lessonTitle || "").trim();


    /* -------------------------------------------------------
       CIRCLE — CHAPTER 16
       ------------------------------------------------------- */

    if (
      chapter.includes("वृत्त") &&
      !chapter.includes("सममित")
    ) {

      if (
        lesson.includes("त्रिज्या") ||
        lesson.includes("व्यास") ||
        lesson.includes("जीवा") ||
        lesson.includes("चाप")
      ) {
        return radiusDiameterChordArc();
      }

      if (
        lesson.includes("अर्धवृत्त")
      ) {
        return semicircle();
      }

      if (
        lesson.includes("वृत्तखण्ड") ||
        lesson.includes("त्रिज्याखण्ड")
      ) {
        return segmentAndSector();
      }

      if (
        lesson.includes("अवधारणा")
      ) {
        return circleConcept();
      }

      return genericCircle();
    }


    /* -------------------------------------------------------
       TRIANGLE — CHAPTER 15
       ------------------------------------------------------- */

    if (
      chapter.includes("त्रिभुज")
    ) {

      if (
        lesson.includes("प्रकार")
      ) {
        return triangleTypes();
      }

      if (
        lesson.includes("सर्वांगसम")
      ) {
        return triangleCongruency();
      }

      if (
        lesson.includes("समरूप")
      ) {
        return triangleSimilarity();
      }

      if (
        lesson.includes("पहचान") ||
        lesson.includes("मूल अवधारणा")
      ) {
        return triangleBasic();
      }

      return genericTriangle();
    }


    return "";
  }


  /* =========================================================
     RENDER DIAGRAM
     ========================================================= */

  function renderDiagram() {

    const mainTitle =
      document.getElementById("mainTitle");

    const chapterTitle =
      document.getElementById("chapterTitle");

    const examples =
      document.getElementById("examples");


    if (!mainTitle) {
      return;
    }


    const lessonTitle =
      mainTitle.textContent || "";


    const chapter =
      chapterTitle
        ? chapterTitle.textContent || ""
        : "";


    const diagram =
      getDiagram(
        chapter,
        lessonTitle
      );


    if (!diagram) {
      return;
    }


    const old =
      document.getElementById(
        "aadyaDiagramCard"
      );


    if (old) {
      old.remove();
    }


    const wrapper =
      document.createElement("div");


    wrapper.innerHTML =
      diagram.replace(
        '<section class="card aadya-diagram-card">',
        '<section class="card aadya-diagram-card" id="aadyaDiagramCard">'
      );


    const card =
      wrapper.firstElementChild;


    if (!card) {
      return;
    }


    if (examples) {

      examples.insertAdjacentElement(
        "afterend",
        card
      );

    } else {

      mainTitle.insertAdjacentElement(
        "afterend",
        card
      );

    }

  }


  /* =========================================================
     CSS
     ========================================================= */

  function injectStyles() {

    if (
      document.getElementById(
        "aadyaDiagramStyles"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");


    style.id =
      "aadyaDiagramStyles";


    style.textContent = `

      .aadya-diagram-card {

        margin-top: 18px;
        padding: 16px;
        overflow: hidden;

      }


      .aadya-diagram-title {

        font-size: 19px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 10px;

      }


      .aadya-svg-container {

        width: 100%;
        max-width: 650px;
        margin: 0 auto;

      }


      .aadya-svg-container svg {

        width: 100%;
        height: auto;
        display: block;

      }


      @media (max-width: 600px) {

        .aadya-diagram-card {

          padding: 10px;

        }

        .aadya-diagram-title {

          font-size: 17px;

        }

      }

    `;


    document.head.appendChild(style);

  }


  /* =========================================================
     START
     ========================================================= */

  function start() {

    injectStyles();

    renderDiagram();


    const observer =
      new MutationObserver(
        function () {

          renderDiagram();

        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  }


  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AADYADiagramEngine = {

    render:
      renderDiagram

  };


  /* =========================================================
     DOM READY
     ========================================================= */

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
