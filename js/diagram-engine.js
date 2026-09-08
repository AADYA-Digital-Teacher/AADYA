/* =========================================================
   AADYA DIGITAL TEACHER
   OFFLINE VISUAL / DIAGRAM ENGINE
   Version 3.0
   ---------------------------------------------------------
   Supports:
   • Circle diagrams
   • Triangle diagrams
   • Pie Chart
   • Central Tendency visual
   • Mean calculation table
   • Line segment bisector
   • Equal angle construction
   • Angle bisector
   • Parallel line construction
   • Perpendicular construction
   • Responsive inline SVG
   • Offline-first
   • Automatic lesson-title detection
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     BASIC HELPERS
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


  function visualWrap(content, label) {

    return `
      <section class="card aadya-diagram-card">

        <div class="aadya-diagram-title">
          📊 ${esc(label || "दृश्य उदाहरण")}
        </div>

        <div class="aadya-visual-content">

          ${content}

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
        x="475"
        y="215"
        font-size="28"
        text-anchor="middle"
      >
        त्रिज्या
      </text>

      <text
        x="400"
        y="270"
        font-size="25"
        text-anchor="middle"
      >
        केंद्र O
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

      <circle
        cx="400"
        cy="230"
        r="6"
        fill="currentColor"
      />

      <text
        x="382"
        y="215"
        font-size="26"
      >
        O
      </text>

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
        font-size="24"
        text-anchor="middle"
      >
        त्रिज्या
      </text>

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
        y="100"
        font-size="30"
        text-anchor="middle"
      >
        अर्धवृत्त
      </text>

    `, "अर्धवृत्त");

  }


  function segmentAndSector() {

    return svgWrap(`

      <circle
        cx="250"
        cy="230"
        r="145"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="145"
        y1="170"
        x2="355"
        y2="170"
        stroke="currentColor"
        stroke-width="5"
      />

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

      <polygon
        points="400,80 190,350 610,350"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
      />

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

      <text x="155" y="365" font-size="25">B</text>
      <text x="635" y="365" font-size="25">C</text>

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

    `, "त्रिभुज की रचना");

  }


  /* =======================================================
     CHAPTER 3 — STATISTICS
     ======================================================= */

  function pieChart() {

    return svgWrap(`

      <!-- Full circle -->

      <circle
        cx="400"
        cy="225"
        r="150"
        fill="none"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- 90 degree sector -->

      <path
        d="
          M 400 225
          L 400 75
          A 150 150 0 0 1 550 225
          Z
        "
        fill="currentColor"
        opacity="0.18"
      />

      <!-- 180 degree sector -->

      <path
        d="
          M 400 225
          L 250 225
          A 150 150 0 0 1 400 375
          Z
        "
        fill="currentColor"
        opacity="0.10"
      />

      <!-- Radius lines -->

      <line
        x1="400"
        y1="225"
        x2="400"
        y2="75"
        stroke="currentColor"
        stroke-width="4"
      />

      <line
        x1="400"
        y1="225"
        x2="550"
        y2="225"
        stroke="currentColor"
        stroke-width="4"
      />

      <line
        x1="400"
        y1="225"
        x2="250"
        y2="225"
        stroke="currentColor"
        stroke-width="4"
      />

      <line
        x1="400"
        y1="225"
        x2="400"
        y2="375"
        stroke="currentColor"
        stroke-width="4"
      />

      <circle
        cx="400"
        cy="225"
        r="5"
        fill="currentColor"
      />

      <text
        x="475"
        y="150"
        font-size="25"
        text-anchor="middle"
      >
        90°
      </text>

      <text
        x="325"
        y="325"
        font-size="25"
        text-anchor="middle"
      >
        180°
      </text>

      <text
        x="400"
        y="425"
        font-size="27"
        text-anchor="middle"
      >
        पूरा वृत्त = 360°
      </text>

    `, "पाई चार्ट / वृत्तारेख");

  }


  function centralTendency() {

    return visualWrap(`

      <div class="aadya-stat-grid">

        <div class="aadya-stat-box">
          <div class="aadya-stat-symbol">Σ</div>
          <div class="aadya-stat-name">माध्य</div>
          <div class="aadya-stat-text">
            सभी मानों का योग ÷ कुल मान
          </div>
        </div>

        <div class="aadya-stat-box">
          <div class="aadya-stat-symbol">↕</div>
          <div class="aadya-stat-name">माध्यिका</div>
          <div class="aadya-stat-text">
            क्रम में बीच का मान
          </div>
        </div>

        <div class="aadya-stat-box">
          <div class="aadya-stat-symbol">★</div>
          <div class="aadya-stat-name">बहुलक</div>
          <div class="aadya-stat-text">
            सबसे अधिक बार आने वाला मान
          </div>
        </div>

      </div>

    `, "केन्द्रीय प्रवृत्ति के प्रमुख माप");

  }


  function meanVisual() {

    return visualWrap(`

      <div class="aadya-formula">
        समान्तर माध्य =
        <strong>
          सभी आँकड़ों का योग
        </strong>
        ÷
        <strong>
          आँकड़ों की संख्या
        </strong>
      </div>

      <table class="aadya-data-table">

        <thead>
          <tr>
            <th>आँकड़े</th>
            <th>योग</th>
            <th>संख्या</th>
            <th>माध्य</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>5, 7, 9</td>
            <td>21</td>
            <td>3</td>
            <td>7</td>
          </tr>

          <tr>
            <td>10, 20, 30</td>
            <td>60</td>
            <td>3</td>
            <td>20</td>
          </tr>
        </tbody>

      </table>

    `, "समान्तर माध्य की गणना");

  }


  /* =======================================================
     CHAPTER 4 — CONSTRUCTIONS
     ======================================================= */

  function lineSegmentBisector() {

    return svgWrap(`

      <!-- AB -->

      <line
        x1="170"
        y1="260"
        x2="630"
        y2="260"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="170"
        cy="260"
        r="6"
        fill="currentColor"
      />

      <circle
        cx="630"
        cy="260"
        r="6"
        fill="currentColor"
      />

      <text
        x="150"
        y="300"
        font-size="28"
      >
        A
      </text>

      <text
        x="635"
        y="300"
        font-size="28"
      >
        B
      </text>

      <!-- Construction arcs -->

      <path
        d="
          M 170 260
          A 230 230 0 0 1 400 30
        "
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="9 7"
      />

      <path
        d="
          M 630 260
          A 230 230 0 0 0 400 30
        "
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="9 7"
      />

      <path
        d="
          M 170 260
          A 230 230 0 0 0 400 490
        "
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="9 7"
      />

      <path
        d="
          M 630 260
          A 230 230 0 0 1 400 490
        "
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="9 7"
      />

      <!-- Bisector -->

      <line
        x1="400"
        y1="45"
        x2="400"
        y2="440"
        stroke="currentColor"
        stroke-width="5"
      />

      <circle
        cx="400"
        cy="260"
        r="6"
        fill="currentColor"
      />

      <text
        x="400"
        y="420"
        font-size="26"
        text-anchor="middle"
      >
        M = मध्य-बिन्दु
      </text>

    `, "रेखाखंड का समद्विभाजन");

  }


  function equalAngleConstruction() {

    return svgWrap(`

      <!-- Given angle -->

      <line
        x1="90"
        y1="330"
        x2="270"
        y2="330"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="90"
        y1="330"
        x2="220"
        y2="170"
        stroke="currentColor"
        stroke-width="5"
      />

      <path
        d="
          M 150 330
          A 60 60 0 0 0 135 285
        "
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="115"
        y="355"
        font-size="26"
      >
        O
      </text>

      <text
        x="170"
        y="245"
        font-size="24"
      >
        दिया कोण
      </text>


      <!-- New equal angle -->

      <line
        x1="500"
        y1="330"
        x2="700"
        y2="330"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="500"
        y1="330"
        x2="630"
        y2="170"
        stroke="currentColor"
        stroke-width="5"
      />

      <path
        d="
          M 560 330
          A 60 60 0 0 0 545 285
        "
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <text
        x="525"
        y="355"
        font-size="26"
      >
        P
      </text>

      <text
        x="610"
        y="245"
        font-size="24"
      >
        बराबर कोण
      </text>

      <text
        x="400"
        y="420"
        font-size="27"
        text-anchor="middle"
      >
        ∠AOB = ∠XPY
      </text>

    `, "दिए हुए कोण के बराबर कोण की रचना");

  }


  function angleBisector() {

    return svgWrap(`

      <!-- Original angle -->

      <line
        x1="400"
        y1="340"
        x2="170"
        y2="150"
        stroke="currentColor"
        stroke-width="5"
      />

      <line
        x1="400"
        y1="340"
        x2="630"
        y2="150"
        stroke="currentColor"
        stroke-width="5"
      />

      <!-- Arc -->

      <path
        d="
          M 300 255
          A 125 125 0 0 1 500 255
        "
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <!-- Bisector -->

      <line
        x1="400"
        y1="340"
        x2="400"
        y2="105"
        stroke="currentColor"
        stroke-width="6"
      />

      <circle
        cx="400"
        cy="340"
        r="6"
        fill="currentColor"
      />

      <text
        x="400"
        y="390"
        font-size="26"
        text-anchor="middle"
      >
        दोनों कोण बराबर
      </text>

      <text
        x="400"
        y="80"
        font-size="28"
        text-anchor="middle"
      >
        समद्विभाजक
      </text>

    `, "कोण का समद्विभाजन");

  }


  function parallelConstruction() {

    return svgWrap(`

      <!-- Given line -->

      <line
        x1="120"
        y1="160"
        x2="680"
        y2="160"
        stroke="currentColor"
        stroke-width="6"
      />

      <text
        x="700"
        y="165"
        font-size="28"
      >
        l
      </text>

      <!-- Guide -->

      <line
        x1="250"
        y1="100"
        x2="250"
        y2="370"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="8 7"
      />

      <!-- Parallel line -->

      <line
        x1="120"
        y1="330"
        x2="680"
        y2="330"
        stroke="currentColor"
        stroke-width="6"
      />

      <text
        x="700"
        y="335"
        font-size="28"
      >
        m
      </text>

      <!-- Direction arrows -->

      <path
        d="M 300 160 L 320 150 L 320 170 Z"
        fill="currentColor"
      />

      <path
        d="M 300 330 L 320 320 L 320 340 Z"
        fill="currentColor"
      />

      <text
        x="400"
        y="410"
        font-size="27"
        text-anchor="middle"
      >
        l ∥ m
      </text>

    `, "दी हुई रेखा के समान्तर रेखा");

  }


  function perpendicularConstruction() {

    return svgWrap(`

      <!-- Given line -->

      <line
        x1="120"
        y1="300"
        x2="680"
        y2="300"
        stroke="currentColor"
        stroke-width="6"
      />

      <text
        x="690"
        y="305"
        font-size="28"
      >
        l
      </text>

      <!-- Perpendicular -->

      <line
        x1="400"
        y1="80"
        x2="400"
        y2="420"
        stroke="currentColor"
        stroke-width="6"
      />

      <!-- Right angle -->

      <path
        d="
          M 400 300
          L 450 300
          L 450 250
          L 400 250
          Z
        "
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <circle
        cx="400"
        cy="300"
        r="6"
        fill="currentColor"
      />

      <text
        x="420"
        y="245"
        font-size="26"
      >
        90°
      </text>

      <text
        x="400"
        y="60"
        font-size="27"
        text-anchor="middle"
      >
        m
      </text>

      <text
        x="400"
        y="445"
        font-size="27"
        text-anchor="middle"
      >
        m ⟂ l
      </text>

    `, "दिए गए बिन्दु से लम्ब की रचना");

  }


  /*
   =======================================================
     DIAGRAM SELECTION
     ======================================================= */

  function getDiagram(title, chapterTitle) {

    const t = String(title || "").trim();
    const c = String(chapterTitle || "").trim();

    /* -----------------------------------------------------
       CIRCLE
       ----------------------------------------------------- */

    if (
      t.includes("त्रिज्या") &&
      (
        t.includes("व्यास") ||
        t.includes("जीवा") ||
        t.includes("चाप")
      )
    ) {
      return radiusDiameterChordArc();
    }

    if (t.includes("अर्धवृत्त")) {
      return semicircle();
    }

    if (
      t.includes("वृत्तखण्ड") ||
      t.includes("त्रिज्याखण्ड")
    ) {
      return segmentAndSector();
    }

    if (
      t.includes("वृत्त") &&
      (
        c.includes("वृत्त") ||
        t.includes("वृत्त")
      )
    ) {
      return circleConcept();
    }


    /* -----------------------------------------------------
       TRIANGLE
       ----------------------------------------------------- */

    if (t.includes("त्रिभुज के प्रकार")) {
      return triangleTypes();
    }

    if (t.includes("त्रिभुज की रचना")) {
      return triangleConstruction();
    }

    if (
      t.includes("त्रिभुज") &&
      (
        t.includes("सर्वांगसम") ||
        t.includes("समरूप") ||
        c.includes("त्रिभुज")
      )
    ) {
      return triangleBasic();
    }


    /* -----------------------------------------------------
       CLASS 7 — CHAPTER 3
       ----------------------------------------------------- */

    if (
      t.includes("पाई चार्ट") ||
      t.includes("वृत्तारेख")
    ) {
      return pieChart();
    }

    if (
      t.includes("केन्द्रीय प्रवृत्ति") ||
      t.includes("केंद्रीय प्रवृत्ति")
    ) {
      return centralTendency();
    }

    if (
      t.includes("समान्तर माध्य") ||
      t.includes("माध्य की गणना")
    ) {
      return meanVisual();
    }


    /* -----------------------------------------------------
       CLASS 7 — CHAPTER 4
       ----------------------------------------------------- */

    if (
      t.includes("रेखाखंड") &&
      (
        t.includes("समद्विभाजन") ||
        t.includes("समद्विभाजित")
      )
    ) {
      return lineSegmentBisector();
    }

    if (
      t.includes("बराबर कोण") ||
      t.includes("समान कोण")
    ) {
      return equalAngleConstruction();
    }

    if (
      t.includes("कोण") &&
      (
        t.includes("समद्विभाजन") ||
        t.includes("समद्विभाजित")
      )
    ) {
      return angleBisector();
    }

    if (
      t.includes("समान्तर रेखा") ||
      t.includes("समान्तर रेखाएँ")
    ) {
      return parallelConstruction();
    }

    if (
      t.includes("लम्ब") &&
      (
        t.includes("रेखाखंड") ||
        t.includes("बिन्दु")
      )
    ) {
      return perpendicularConstruction();
    }


    return null;

  }


  /* =======================================================
     INSERT DIAGRAM
     ======================================================= */
 function findTarget() {

    const examples =
      document.getElementById("examples");

    if (examples) {
      return examples;
    }

    const main =
      document.getElementById("mainContent");

    if (main) {
      return main;
    }

    const container =
      document.getElementById("lessonContent");

    if (container) {
      return container;
    }

    return document.body;

  }


  function renderDiagram() {

    /* Prevent duplicate rendering */

    if (
      document.querySelector(
        ".aadya-auto-visual"
      )
    ) {
      return;
    }


    const mainTitle =
      document.getElementById("mainTitle");

    const chapterTitle =
      document.getElementById("chapterTitle");

    const title =
      mainTitle
        ? mainTitle.textContent
        : "";

    const chapter =
      chapterTitle
        ? chapterTitle.textContent
        : "";


    if (!title && !chapter) {
      return;
    }


    const diagram =
      getDiagram(
        title,
        chapter
      );


    if (!diagram) {
      return;
    }


    const wrapper =
      document.createElement("div");

    wrapper.className =
      "aadya-auto-visual";

    wrapper.innerHTML =
      diagram;


    const target =
      findTarget();


    if (
      target &&
      target.parentNode
    ) {

      target.parentNode.insertBefore(
        wrapper,
        target.nextSibling
      );

    }

  }


  /* =======================================================
     CSS
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
      document.createElement("style");

    style.id =
      "aadya-diagram-engine-style";


    style.textContent = `

      .aadya-diagram-card {

        margin-top: 18px;
        margin-bottom: 18px;
        overflow: hidden;

      }


      .aadya-diagram-title {

        font-weight: 700;
        font-size: 18px;
        padding: 12px 14px;
        text-align: center;

      }


      .aadya-svg-wrap {

        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

      }


      .aadya-svg-wrap svg {

        width: 100%;
        max-width: 800px;
        height: auto;
        display: block;

      }


      .aadya-visual-content {

        width: 100%;
        padding: 12px;
        box-sizing: border-box;

      }


      .aadya-stat-grid {

        display: grid;
        grid-template-columns:
          repeat(
            3,
            minmax(0, 1fr)
          );

        gap: 12px;

      }


      .aadya-stat-box {

        border: 1px solid currentColor;
        border-radius: 14px;
        padding: 14px 10px;
        text-align: center;

      }


      .aadya-stat-symbol {

        font-size: 30px;
        font-weight: 700;
        margin-bottom: 5px;

      }


      .aadya-stat-name {

        font-size: 18px;
        font-weight: 700;
        margin-bottom: 6px;

      }


      .aadya-stat-text {

        font-size: 14px;
        line-height: 1.5;

      }


      .aadya-formula {

        text-align: center;
        font-size: 18px;
        line-height: 1.7;
        padding: 12px;
        margin-bottom: 12px;
        border-radius: 12px;
        border: 1px solid currentColor;

      }


      .aadya-data-table {

        width: 100%;
        border-collapse: collapse;
        text-align: center;
        font-size: 16px;

      }


      .aadya-data-table th,
      .aadya-data-table td {

        border: 1px solid currentColor;
        padding: 10px 6px;

      }


      .aadya-data-table th {

        font-weight: 700;

      }


      @media (max-width: 600px) {

        .aadya-stat-grid {

          grid-template-columns:
            1fr;

        }


        .aadya-stat-box {

          padding: 12px;

        }


        .aadya-diagram-title {

          font-size: 16px;

        }


        .aadya-svg-wrap svg {

          width: 100%;

        }


        .aadya-data-table {

          font-size: 14px;

        }

      }

    `;


    document.head.appendChild(style);

  }


  /* =======================================================
     START
     ======================================================= */

  function start() {

    injectStyles();

    renderDiagram();


    /*
     * learning.html content is loaded dynamically.
     * इसलिए DOM बदलने पर फिर से check करेंगे।
     */

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


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.AADYADiagramEngine = {

    render: renderDiagram,
    start: start

  };


  /* =======================================================
     DOM READY
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
