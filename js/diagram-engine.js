/* =========================================================
   AADYA DIGITAL TEACHER — DIAGRAM ENGINE v4.0

   Offline SVG Visual Engine
   ---------------------------------------------------------
   Designed for:
   Class 6, 7, 8
   Future: Class 1–5 + Pre-Primary

   Supports:
   • Statistics
   • Pie Chart
   • Central Tendency
   • Mean calculation
   • Geometrical constructions
   • Line segment bisector
   • Equal angle construction
   • Angle bisector
   • Parallel lines
   • Perpendicular
   • Triangle
   • Pythagoras theorem
   • Pythagorean triples
   • Altitude
   • Median
   • Perpendicular bisector
   • Angle bisectors
   • Four centres of triangle
   • Similar triangles
   • Linear equation graph
   • Equation solving steps
   • Word problems
   • Circle support
   • Responsive SVG
   • Offline-first
   • Automatic lesson-title detection

   No external library
   No PNG dependency
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     BASIC SETTINGS
  ======================================================= */

  const CARD_ID =
    "aadya-auto-diagram";


  /* =======================================================
     HTML ESCAPE
  ======================================================= */

  function esc(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =======================================================
     SVG WRAPPER
  ======================================================= */

  function wrap(label, body) {

    return `

      <section
        id="${CARD_ID}"
        class="card aadya-diagram-card"
      >

        <div class="aadya-diagram-title">

          📐 ${esc(label)}

        </div>

        <div class="aadya-svg-wrap">

          <svg
            viewBox="0 0 800 460"
            role="img"
            aria-label="${esc(label)}"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >

            <style>

              .a {
                fill:none;
                stroke:currentColor;
                stroke-width:5;
                stroke-linecap:round;
                stroke-linejoin:round;
              }

              .d {
                fill:none;
                stroke:currentColor;
                stroke-width:3;
                stroke-dasharray:10 8;
              }

              .p {
                fill:currentColor;
                opacity:.10;
              }

              .t {
                fill:currentColor;
                font-size:25px;
                font-family:system-ui,sans-serif;
              }

              .s {
                fill:currentColor;
                font-size:21px;
                font-family:system-ui,sans-serif;
              }

              .pt {
                fill:currentColor;
                font-size:28px;
                font-weight:700;
                font-family:system-ui,sans-serif;
              }

            </style>

            ${body}

          </svg>

        </div>

      </section>

    `;

  }


  /* =======================================================
     SVG HELPERS
  ======================================================= */

  function point(x, y, r = 6) {

    return `
      <circle
        cx="${x}"
        cy="${y}"
        r="${r}"
        fill="currentColor"
      />
    `;

  }


  function line(
    x1,
    y1,
    x2,
    y2,
    cls = "a"
  ) {

    return `
      <line
        x1="${x1}"
        y1="${y1}"
        x2="${x2}"
        y2="${y2}"
        class="${cls}"
      />
    `;

  }


  function text(
    x,
    y,
    value,
    cls = "t",
    anchor = "middle"
  ) {

    return `
      <text
        x="${x}"
        y="${y}"
        class="${cls}"
        text-anchor="${anchor}"
      >
        ${esc(value)}
      </text>
    `;

  }


  /* =======================================================
     CHAPTER 3 — STATISTICS
  ======================================================= */


  function pieChart() {

    return wrap(
      "पाई चार्ट (वृत्तारेख)",

      `

        <circle
          cx="400"
          cy="230"
          r="155"
          class="a"
        />

        <path
          d="
            M400 230
            L400 75
            A155 155 0 0 1 550 305
            Z
          "
          class="p"
        />

        ${line(400, 230, 400, 75)}

        ${line(400, 230, 550, 305)}

        ${line(400, 230, 245, 230)}

        ${text(490, 155, "30%", "s")}

        ${text(300, 185, "25%", "s")}

        ${text(420, 335, "45%", "s")}

        ${text(
          400,
          405,
          "360° = पूरा वृत्त",
          "pt"
        )}

      `
    );

  }


  function centralTendency() {

    return wrap(
      "केन्द्रीय प्रवृत्ति — माध्य, माध्यिका, बहुलक",

      `

        ${line(110, 320, 690, 320)}

        ${[150, 250, 350, 450, 550, 650]
          .map(x =>
            line(x, 313, x, 327)
          )
          .join("")
        }

        ${[1, 2, 2, 3, 3, 3]
          .map(
            (v, i) =>
              point(
                150 + i * 100,
                320 - v * 55,
                7
              )
          )
          .join("")
        }

        ${text(
          400,
          80,
          "आँकड़ों का दृश्य प्रदर्शन",
          "pt"
        )}

        ${text(150, 365, "1", "s")}

        ${text(250, 365, "2", "s")}

        ${text(350, 365, "2", "s")}

        ${text(450, 365, "3", "s")}

        ${text(550, 365, "3", "s")}

        ${text(650, 365, "3", "s")}

        ${text(
          400,
          415,
          "बहुलक = 3  |  माध्यिका = 2.5",
          "t"
        )}

      `
    );

  }


  function meanTable() {

    return wrap(
      "समान्तर माध्य की गणना",

      `

        <rect
          x="130"
          y="90"
          width="540"
          height="250"
          rx="14"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
        />

        ${line(130, 155, 670, 155)}

        ${line(130, 220, 670, 220)}

        ${line(130, 285, 670, 285)}

        ${line(265, 90, 265, 340)}

        ${line(480, 90, 480, 340)}

        ${text(195, 132, "x", "pt")}

        ${text(370, 132, "आवृत्ति f", "s")}

        ${text(575, 132, "fx", "s")}

        ${text(195, 195, "2", "t")}

        ${text(370, 195, "2", "t")}

        ${text(575, 195, "4", "t")}

        ${text(195, 260, "4", "t")}

        ${text(370, 260, "3", "t")}

        ${text(575, 260, "12", "t")}

        ${text(195, 325, "6", "t")}

        ${text(370, 325, "1", "t")}

        ${text(575, 325, "6", "t")}

        ${text(
          400,
          390,
          "माध्य = Σfx / Σf = 22 / 6 ≈ 3.67",
          "pt"
        )}

      `
    );

  }


  /* =======================================================
     CHAPTER 4 — CONSTRUCTIONS
  ======================================================= */


  function segmentBisector() {

    return wrap(
      "रेखाखंड का समद्विभाजन",

      `

        ${line(150, 300, 650, 300)}

        ${point(150, 300)}

        ${point(650, 300)}

        ${point(400, 300)}

        ${text(140, 340, "A", "pt")}

        ${text(660, 340, "B", "pt")}

        ${text(400, 345, "M", "pt")}

        <path
          d="
            M150 300
            A250 250 0 0 1 400 100
            A250 250 0 0 1 650 300
          "
          class="d"
        />

        ${line(
          400,
          95,
          400,
          365,
          "d"
        )}

        ${text(
          400,
          65,
          "AM = MB",
          "pt"
        )}

      `
    );

  }


  function equalAngle() {

    return wrap(
      "दिए हुए कोण के बराबर कोण की रचना",

      `

        ${line(160, 320, 360, 180)}

        ${line(160, 320, 365, 365)}

        ${point(160, 320)}

        ${text(140, 355, "O", "pt")}

        <path
          d="
            M220 278
            A75 75 0 0 1 225 365
          "
          class="a"
        />

        ${line(500, 320, 700, 180)}

        ${line(500, 320, 700, 365)}

        ${point(500, 320)}

        ${text(480, 355, "P", "pt")}

        <path
          d="
            M560 278
            A75 75 0 0 1 565 365
          "
          class="a"
        />

        ${text(
          255,
          135,
          "दिया हुआ कोण",
          "s"
        )}

        ${text(
          595,
          135,
          "बराबर कोण",
          "s"
        )}

      `
    );

  }


  function angleBisector() {

    return wrap(
      "कोण का समद्विभाजन",

      `

        ${line(160, 330, 400, 120)}

        ${line(160, 330, 400, 330)}

        ${point(160, 330)}

        <path
          d="
            M235 264
            A105 105 0 0 1 265 330
          "
          class="a"
        />

        ${line(
          160,
          330,
          285,
          270
        )}

        ${text(140, 365, "O", "pt")}

        ${text(285, 255, "M", "pt")}

        ${text(
          400,
          395,
          "∠AOM = ∠MOB",
          "pt"
        )}

      `
    );

  }


  function parallelLines() {

    return wrap(
      "दी हुई रेखा के समान्तर रेखा",

      `

        ${line(120, 160, 680, 160)}

        ${line(120, 330, 680, 330)}

        ${text(
          105,
          150,
          "l",
          "pt",
          "end"
        )}

        ${text(
          105,
          320,
          "m",
          "pt",
          "end"
        )}

        ${line(
          350,
          80,
          350,
          400,
          "d"
        )}

        ${text(
          350,
          65,
          "दोनों रेखाएँ समान्तर हैं",
          "s"
        )}

        ${text(
          400,
          215,
          "l ∥ m",
          "pt"
        )}

      `
    );

  }


  function perpendicular() {

    return wrap(
      "दिए गए बिन्दु से लम्ब की रचना",

      `

        ${line(110, 300, 690, 300)}

        ${point(400, 300)}

        ${point(400, 150)}

        ${line(
          400,
          110,
          400,
          390
        )}

        ${text(
          420,
          135,
          "P",
          "pt"
        )}

        ${text(
          400,
          345,
          "90°",
          "pt"
        )}

        <path
          d="
            M400 300
            h35
            v-35
          "
          class="a"
        />

        ${text(
          400,
          420,
          "लम्ब रेखा ⟂ आधार रेखा",
          "pt"
        )}

      `
    );

  }


  /* =======================================================
     CHAPTER 5 — TRIANGLES
  ======================================================= */


  function triangleBasic() {

    return wrap(
      "त्रिभुज",

      `

        <polygon
          points="400,75 170,360 630,360"
          class="a"
        />

        ${point(400, 75)}

        ${point(170, 360)}

        ${point(630, 360)}

        ${text(400, 55, "A", "pt")}

        ${text(150, 390, "B", "pt")}

        ${text(650, 390, "C", "pt")}

        ${text(285, 205, "AB", "s")}

        ${text(515, 205, "AC", "s")}

        ${text(400, 395, "BC", "s")}

      `
    );

  }


  function pythagoras() {

    return wrap(
      "पाइथागोरस प्रमेय",

      `

        <polygon
          points="220,350 220,120 600,350"
          class="a"
        />

        <path
          d="
            M220 350
            h45
            v-45
          "
          class="a"
        />

        ${text(195, 235, "a", "pt")}

        ${text(410, 375, "b", "pt")}

        ${text(420, 215, "c", "pt")}

        ${text(
          400,
          85,
          "c² = a² + b²",
          "pt"
        )}

        ${text(
          400,
          425,
          "समकोण त्रिभुज में कर्ण² = अन्य दो भुजाओं के वर्गों का योग",
          "s"
        )}

      `
    );

  }


  function pythagoreanTriple() {

    return wrap(
      "पाइथागोरियन त्रिक",

      `

        <rect
          x="130"
          y="90"
          width="540"
          height="260"
          rx="16"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
        />

        ${text(265, 145, "3", "pt")}

        ${text(400, 145, "4", "pt")}

        ${text(535, 145, "5", "pt")}

        ${text(
          265,
          205,
          "3² = 9",
          "t"
        )}

        ${text(
          400,
          205,
          "4² = 16",
          "t"
        )}

        ${text(
          535,
          205,
          "5² = 25",
          "t"
        )}

        ${text(
          400,
          275,
          "9 + 16 = 25",
          "pt"
        )}

        ${text(
          400,
          320,
          "(3, 4, 5) एक पाइथागोरियन त्रिक है।",
          "s"
        )}

      `
    );

  }


  function triangleConstruction() {

    return wrap(
      "त्रिभुज की रचना",

      `

        ${line(
          170,
          330,
          630,
          330
        )}

        ${point(170, 330)}

        ${point(630, 330)}

        ${text(
          155,
          365,
          "B",
          "pt"
        )}

        ${text(
          645,
          365,
          "C",
          "pt"
        )}

        <path
          d="
            M170 330
            A210 210 0 0 1 380 120
          "
          class="d"
        />

        <path
          d="
            M630 330
            A210 210 0 0 0 420 120
          "
          class="d"
        />

        ${line(
          170,
          330,
          400,
          115
        )}

        ${line(
          630,
          330,
          400,
          115
        )}

        ${point(400, 115)}

        ${text(
          400,
          85,
          "A",
          "pt"
        )}

      `
    );

  }


  function altitude() {

    return wrap(
      "त्रिभुज का शीर्षलम्ब",

      `

        <polygon
          points="400,75 170,360 630,360"
          class="a"
        />

        ${line(
          400,
          75,
          400,
          360,
          "d"
        )}

        ${point(400, 360)}

        ${text(400, 55, "A", "pt")}

        ${text(155, 390, "B", "pt")}

        ${text(645, 390, "C", "pt")}

        ${text(425, 350, "D", "pt")}

        <path
          d="
            M400 360
            h28
            v-28
          "
          class="a"
        />

        ${text(
          400,
          425,
          "AD ⟂ BC — AD शीर्षलम्ब है",
          "pt"
        )}

      `
    );

  }


  function median() {

    return wrap(
      "त्रिभुज की माध्यिका",

      `

        <polygon
          points="400,75 170,360 630,360"
          class="a"
        />

        ${point(400, 75)}

        ${point(170, 360)}

        ${point(630, 360)}

        ${point(400, 360)}

        ${line(
          400,
          75,
          400,
          360
        )}

        ${text(400, 55, "A", "pt")}

        ${text(155, 390, "B", "pt")}

        ${text(645, 390, "C", "pt")}

        ${text(400, 390, "M", "pt")}

        ${text(
          400,
          425,
          "BM = MC — AM माध्यिका है",
          "pt"
        )}

      `
    );

  }


  function perpendicularBisector() {

    return wrap(
      "त्रिभुज की लम्बार्धक",

      `

        ${line(
          170,
          300,
          630,
          300
        )}

        ${point(170, 300)}

        ${point(630, 300)}

        ${point(400, 300)}

        ${line(
          400,
          100,
          400,
          400,
          "d"
        )}

        ${text(150, 340, "A", "pt")}

        ${text(650, 340, "B", "pt")}

        ${text(400, 350, "M", "pt")}

        <path
          d="
            M400 300
            h30
            v-30
          "
          class="a"
        />

        ${text(
          400,
          75,
          "AM = MB और लम्बार्धक AB पर 90° बनाता है",
          "pt"
        )}

      `
    );

  }


  function triangleAngleBisectors() {

    return wrap(
      "त्रिभुज के कोणों के समद्विभाजक",

      `

        <polygon
          points="400,75 170,360 630,360"
          class="a"
        />

        ${line(
          400,
          75,
          400,
          360,
          "d"
        )}

        ${line(
          170,
          360,
          430,
          235,
          "d"
        )}

        ${line(
          630,
          360,
          370,
          235,
          "d"
        )}

        ${point(400, 245, 8)}

        ${text(
          430,
          245,
          "अन्तःकेन्द्र",
          "s",
          "start"
        )}

        ${text(
          400,
          425,
          "तीनों कोण समद्विभाजक एक बिन्दु पर मिलते हैं।",
          "pt"
        )}

      `
    );

  }


  function fourCenters() {

    return wrap(
      "त्रिभुज के चार प्रमुख केन्द्र",

      `

        <polygon
          points="400,75 170,360 630,360"
          class="a"
        />

        ${point(400, 220, 8)}

        ${point(400, 290, 8)}

        ${point(325, 285, 8)}

        ${point(475, 285, 8)}

        ${text(
          425,
          215,
          "लम्ब केन्द्र",
          "s",
          "start"
        )}

        ${text(
          425,
          295,
          "अन्तःकेन्द्र",
          "s",
          "start"
        )}

        ${text(
          315,
          280,
          "केन्द्रक",
          "s",
          "end"
        )}

        ${text(
          485,
          345,
          "परिकेन्द्र",
          "s",
          "start"
        )}

        ${text(
          400,
          425,
          "लम्ब केन्द्र • केन्द्रक • परिकेन्द्र • अन्तःकेन्द्र",
          "pt"
        )}

      `
    );

  }


  function similarTriangles() {

    return wrap(
      "समरूप त्रिभुज",

      `

        <polygon
          points="210,340 210,170 360,340"
          class="a"
        />

        <polygon
          points="470,340 470,90 690,340"
          class="a"
        />

        ${text(
          285,
          390,
          "△ABC",
          "pt"
        )}

        ${text(
          580,
          390,
          "△DEF",
          "pt"
        )}

        ${text(
          285,
          130,
          "छोटा त्रिभुज",
          "s"
        )}

        ${text(
          580,
          65,
          "बड़ा त्रिभुज",
          "s"
        )}

        ${text(
          400,
          435,
          "संगत भुजाओं के अनुपात समान होते हैं।",
          "s"
        )}

      `
    );

  }


  /* =======================================================
     CHAPTER 6 — LINEAR EQUATIONS
  ======================================================= */


  function linearGraph() {

    return wrap(
      "रेखीय समीकरण का आलेख",

      `

        ${line(
          130,
          360,
          680,
          360
        )}

        ${line(
          220,
          410,
          220,
          70
        )}

        <polygon
          points="675,360 660,352 660,368"
          fill="currentColor"
        />

        <polygon
          points="220,75 212,90 228,90"
          fill="currentColor"
        />

        ${line(
          270,
          325,
          610,
          115
        )}

        ${point(350, 275)}

        ${point(520, 175)}

        ${text(
          355,
          260,
          "(x₁,y₁)",
          "s"
        )}

        ${text(
          525,
          160,
          "(x₂,y₂)",
          "s"
        )}

        ${text(
          610,
          105,
          "y = ax + b",
          "pt"
        )}

        ${text(
          650,
          390,
          "x",
          "pt"
        )}

        ${text(
          205,
          85,
          "y",
          "pt"
        )}

      `
    );

  }


  function equationSteps() {

    return wrap(
      "समीकरण हल करने के चरण",

      `

        ${text(
          400,
          85,
          "2x + 5 = 17",
          "pt"
        )}

         ${text(
          400,
          155,
          "2x = 17 − 5",
          "t"
        )}

        ${text(
          400,
          225,
          "2x = 12",
          "t"
        )}

        ${text(
          400,
          295,
          "x = 12 ÷ 2",
          "t"
        )}

        ${text(
          400,
          365,
          "x = 6  ✓",
          "pt"
        )}

        ${text(
          400,
          425,
          "दोनों पक्षों पर समान क्रिया करें।",
          "s"
        )}

      `
    );

  }


  function wordEquation() {

    return wrap(
      "वार्तिक प्रश्न → रेखीय समीकरण",

      `

        <rect
          x="120"
          y="95"
          width="560"
          height="105"
          rx="16"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
        />

        ${text(
          400,
          140,
          "किसी संख्या में 7 जोड़ने पर 19 मिलता है।",
          "s"
        )}

        ${text(
          400,
          180,
          "संख्या = x  →  x + 7 = 19",
          "pt"
        )}

        ${text(
          400,
          275,
          "x = 12",
          "pt"
        )}

        ${text(
          400,
          350,
          "जाँच: 12 + 7 = 19 ✓",
          "t"
        )}

      `
    );

  }


  /* =======================================================
     CIRCLE SUPPORT
  ======================================================= */


  function circleConcept() {

    return wrap(
      "वृत्त की मूल अवधारणा",

      `

        <circle
          cx="400"
          cy="230"
          r="145"
          class="a"
        />

        ${point(400, 230)}

        ${line(
          400,
          230,
          545,
          230
        )}

        ${text(
          475,
          215,
          "त्रिज्या",
          "t"
        )}

        ${text(
          400,
          270,
          "केंद्र O",
          "pt"
        )}

      `
    );

  }


  function radiusDiameterChordArc() {

    return wrap(
      "त्रिज्या, व्यास, जीवा और चाप",

      `

        <circle
          cx="400"
          cy="230"
          r="150"
          class="a"
        />

        ${point(400, 230)}

        ${line(
          250,
          230,
          550,
          230,
          "d"
        )}

        ${line(
          400,
          230,
          550,
          230
        )}

        ${line(
          290,
          135,
          515,
          300
        )}

        <path
          d="
            M285 150
            A150 150 0 0 1 525 165
          "
          fill="none"
          stroke="currentColor"
          stroke-width="7"
        />

        ${text(
          400,
          195,
          "व्यास",
          "s"
        )}

        ${text(
          475,
          210,
          "त्रिज्या",
          "s"
        )}

        ${text(
          420,
          135,
          "जीवा",
          "s"
        )}

        ${text(
          405,
          105,
          "चाप",
          "s"
        )}

      `
    );

  }


  function semicircle() {

    return wrap(
      "अर्धवृत्त",

      `

        <path
          d="
            M180 300
            A220 220 0 0 1 620 300
            Z
          "
          class="a"
        />

        ${line(
          180,
          300,
          620,
          300
        )}

        ${point(400, 300)}

        ${text(
          400,
          350,
          "व्यास",
          "pt"
        )}

        ${text(
          400,
          100,
          "अर्धवृत्त",
          "pt"
        )}

      `
    );

  }


  /* =======================================================
     TITLE DETECTION
  ======================================================= */

  function getTitle() {

    const ids = [

      "mainTitle",

      "lessonTitle",

      "chapterTitle"

    ];

    return ids

      .map(
        id =>
          document
            .getElementById(id)
            ?.textContent || ""
      )

      .join(" ")

      .trim();

  }


  /* =======================================================
     AUTOMATIC DIAGRAM SELECTION
  ======================================================= */
 function choose(title) {

    const t =
      title.toLowerCase();


    /* ---------- Chapter 3 ---------- */

    if (
      /पाई चार्ट|वृत्तारेख/.test(t)
    ) {

      return pieChart();

    }


    if (
      /केन्द्रीय प्रवृत्ति|माध्यिका|बहुलक/.test(t)
    ) {

      return centralTendency();

    }


    if (
      /समान्तर माध्य|औसत|माध्य की गणना/.test(t)
    ) {

      return meanTable();

    }


    /* ---------- Chapter 4 ---------- */

    if (
      /रेखाखंड.*समद्विभाज|रेखा खंड.*समद्विभाज/.test(t)
    ) {

      return segmentBisector();

    }


    if (
      /बराबर कोण/.test(t)
    ) {

      return equalAngle();

    }


    if (
      /कोण.*समद्विभाजित/.test(t)
    ) {

      return angleBisector();

    }


    if (
      /समान्तर रेखा/.test(t)
    ) {

      return parallelLines();

    }


    if (
      /लम्ब खींचना|लम्ब रचना/.test(t)
    ) {

      return perpendicular();

    }


    /* ---------- Chapter 5 ---------- */

    if (
      /पाइथागोरियन त्रिक/.test(t)
    ) {

      return pythagoreanTriple();

    }


    if (
      /पाइथागोरस प्रमेय/.test(t)
    ) {

      return pythagoras();

    }


    if (
      /त्रिभुज.*रचना|त्रिभुजों की रचना/.test(t)
    ) {

      return triangleConstruction();

    }


    if (
      /शीर्षलम्ब/.test(t)
    ) {

      return altitude();

    }


    if (
      /माध्यिक/.test(t)
    ) {

      return median();

    }


    if (
      /लम्बार्धक/.test(t)
    ) {

      return perpendicularBisector();

    }


    if (
      /कोणों.*समद्विभाजक/.test(t)
    ) {

      return triangleAngleBisectors();

    }


    if (
      /चार.*केन्द्र|केन्द्रक.*लम्ब केन्द्र|लम्ब केन्द्र.*परिकेन्द्र/.test(t)
    ) {

      return fourCenters();

    }


    if (
      /समरूप त्रिभुज/.test(t)
    ) {

      return similarTriangles();

    }


    /* ---------- Chapter 6 ---------- */

    if (
      /समीकरण.*आलेख|रेखीय समीकरण.*आलेख/.test(t)
    ) {

      return linearGraph();

    }


    if (
      /समीकरण.*हल|बक्रगुणन|प्रतिस्थापन विधि/.test(t)
    ) {

      return equationSteps();

    }


    if (
      /वार्तिक|शाब्दिक|दैनिक जीवन/.test(t) &&
      /समीकरण/.test(t)
    ) {

      return wordEquation();

    }


    /* ---------- Circle ---------- */

    if (
      /त्रिज्या.*व्यास.*जीवा.*चाप/.test(t)
    ) {

      return radiusDiameterChordArc();

    }


    if (
      /अर्धवृत्त/.test(t)
    ) {

      return semicircle();

    }


    if (
      /वृत्त की मूल|वृत्त की अवधारणा/.test(t)
    ) {

      return circleConcept();

    }


    return "";

  }


  /* =======================================================
     STYLE
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

        margin-top:18px;

        overflow:hidden;

      }


      .aadya-diagram-title {

        font-weight:800;

        font-size:1.05rem;

        padding:12px 14px;

      }


      .aadya-svg-wrap {

        width:100%;

        overflow:hidden;

        padding:8px 10px 14px;

      }


      .aadya-svg-wrap svg {

        display:block;

        width:100%;

        height:auto;

        max-height:460px;

      }


      @media(max-width:600px) {

        .aadya-diagram-title {

          font-size:1rem;

        }


        .aadya-svg-wrap {

          padding:4px;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     RENDER
  ======================================================= */

  function render() {

    if (
      document.getElementById(
        CARD_ID
      )
    ) {

      return;

    }


    const title =
      getTitle();


    if (!title) {

      return;

    }


    const html =
      choose(title);


    if (!html) {

      return;

    }


    const examples =
      document.getElementById(
        "examples"
      );


    const explanation =
      document.getElementById(
        "explanation"
      );


    const content =
      document.getElementById(
        "content"
      );


    const anchor =
      examples ||
      explanation ||
      content;


    if (!anchor) {

      return;

    }


    anchor.insertAdjacentHTML(
      "afterend",
      html
    );

  }


  /* =======================================================
     START ENGINE
  ======================================================= */

  function start() {

    injectStyles();

    render();


    const observer =
      new MutationObserver(
        function () {

          render();

        }
      );


    observer.observe(
      document.body,
      {
        childList:true,
        subtree:true,
        characterData:true
      }
    );


    window.AADYADiagramEngine = {

      render:render,

      refresh:render

    };

  }


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

  }

  else {

    start();

  }

})();
