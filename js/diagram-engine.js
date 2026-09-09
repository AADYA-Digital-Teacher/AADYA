/* =========================================================
   AADYA DIGITAL TEACHER
   DIAGRAM ENGINE — COMMERCE + ALGEBRA EXTENSION v1.0

   Class 7 Mathematics
   Chapter 7 — वाणिज्य गणित
   Chapter 8 — व्यंजकों का गुणनफल एवं सर्वसमिकाएँ

   IMPORTANT:
   This is an extension only.
   Existing Diagram Engine v4.0 remains untouched.

   SVG only
   Offline-first
   No external library
   ========================================================= */

(function () {

  "use strict";

  const CARD_ID =
    "aadya-commerce-algebra-diagram";

  /* =======================================================
     ESCAPE
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
        class="card aadya-diagram-card aadya-commerce-algebra"
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

              .aa-line {
                fill:none;
                stroke:currentColor;
                stroke-width:5;
                stroke-linecap:round;
                stroke-linejoin:round;
              }

              .aa-thin {
                fill:none;
                stroke:currentColor;
                stroke-width:3;
                stroke-linecap:round;
                stroke-linejoin:round;
              }

              .aa-dash {
                fill:none;
                stroke:currentColor;
                stroke-width:3;
                stroke-dasharray:10 8;
              }

              .aa-fill {
                fill:currentColor;
                opacity:.10;
                stroke:currentColor;
                stroke-width:3;
              }

              .aa-fill2 {
                fill:currentColor;
                opacity:.18;
                stroke:currentColor;
                stroke-width:3;
              }

              .aa-text {
                fill:currentColor;
                font-size:24px;
                font-family:system-ui,sans-serif;
              }

              .aa-small {
                fill:currentColor;
                font-size:20px;
                font-family:system-ui,sans-serif;
              }

              .aa-big {
                fill:currentColor;
                font-size:30px;
                font-weight:700;
                font-family:system-ui,sans-serif;
              }

              .aa-point {
                fill:currentColor;
              }

            </style>

            ${body}

          </svg>

        </div>

      </section>
    `;

  }

  /* =======================================================
     HELPERS
  ======================================================= */

  function line(x1,y1,x2,y2,cls="aa-line") {

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

  function rect(x,y,w,h,cls="aa-fill",rx=10) {

    return `
      <rect
        x="${x}"
        y="${y}"
        width="${w}"
        height="${h}"
        rx="${rx}"
        class="${cls}"
      />
    `;

  }

  function circle(cx,cy,r,cls="aa-fill") {

    return `
      <circle
        cx="${cx}"
        cy="${cy}"
        r="${r}"
        class="${cls}"
      />
    `;

  }

  function text(
    x,
    y,
    value,
    cls="aa-text",
    anchor="middle"
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
     CHAPTER 7 — LESSON 1
     समानुपात
  ======================================================= */

  function proportion() {

    return wrap(
      "समानुपात — बराबर अनुपात का दृश्य",

      `

        ${text(200,70,"पहला अनुपात","aa-big")}

        ${rect(100,110,200,80)}
        ${text(200,160,"2 : 3","aa-big")}

        ${text(600,70,"दूसरा अनुपात","aa-big")}

        ${rect(500,110,200,80)}
        ${text(600,160,"4 : 6","aa-big")}

        ${line(300,150,500,150,"aa-dash")}

        ${text(
          400,
          235,
          "2 : 3 = 4 : 6",
          "aa-big"
        )}

        ${text(
          400,
          290,
          "क्योंकि 2 × 2 = 4 और 3 × 2 = 6",
          "aa-text"
        )}

        ${circle(250,365,42)}
        ${text(250,373,"2","aa-big")}

        ${circle(550,365,42)}
        ${text(550,373,"4","aa-big")}

        ${text(
          400,
          430,
          "दोनों अनुपातों का मान समान है",
          "aa-text"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 7 — LESSON 2
     अनुलोम और प्रतिलोम समानुपात
  ======================================================= */

  function directInverse() {

    return wrap(
      "अनुलोम और प्रतिलोम समानुपात",

      `

        ${text(
          200,
          60,
          "अनुलोम समानुपात",
          "aa-big"
        )}

        ${line(90,330,330,100)}

        ${circle(120,300,18)}
        ${circle(180,245,18)}
        ${circle(240,190,18)}
        ${circle(300,135,18)}

        ${text(120,350,"x बढ़े","aa-small")}
        ${text(300,350,"y बढ़े","aa-small")}

        ${text(
          200,
          405,
          "x ↑  ⇒  y ↑",
          "aa-big"
        )}

        ${text(
          600,
          60,
          "प्रतिलोम समानुपात",
          "aa-big"
        )}

        ${line(470,110,710,330)}

        ${circle(500,140,18)}
        ${circle(560,195,18)}
        ${circle(620,250,18)}
        ${circle(680,305,18)}

        ${text(500,365,"x बढ़े","aa-small")}
        ${text(680,365,"y घटे","aa-small")}

        ${text(
          600,
          415,
          "x ↑  ⇒  y ↓",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 7 — LESSON 3
     प्रतिशतता का अनुप्रयोग
  ======================================================= */

  function percentageApplication() {

    return wrap(
      "प्रतिशतता — लाभ, हानि, कर और ब्याज",

      `

        ${text(
          400,
          55,
          "प्रतिशत का वास्तविक जीवन में उपयोग",
          "aa-big"
        )}

        ${rect(80,100,180,100)}
        ${text(170,145,"क्रय मूल्य","aa-text")}
        ${text(170,180,"₹1000","aa-big")}

        ${line(260,150,330,150,"aa-dash")}
        ${text(295,130,"लाभ","aa-small")}

        ${rect(330,100,180,100,"aa-fill2")}
        ${text(420,145,"विक्रय मूल्य","aa-text")}
        ${text(420,180,"₹1200","aa-big")}

        ${line(510,150,580,150,"aa-dash")}
        ${text(545,130,"कर","aa-small")}

        ${rect(580,100,140,100)}
        ${text(650,145,"कुल","aa-text")}
        ${text(650,180,"₹1320","aa-big")}

        ${text(
          400,
          270,
          "लाभ = 1200 − 1000 = ₹200",
          "aa-text"
        )}

        ${text(
          400,
          315,
          "लाभ% = (200 / 1000) × 100 = 20%",
          "aa-text"
        )}

        ${text(
          400,
          360,
          "कर भी प्रतिशत के आधार पर जोड़ा जाता है।",
          "aa-text"
        )}

        ${text(
          400,
          415,
          "प्रतिशत = (भाग / कुल) × 100",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 7 — LESSON 4
     चक्रवृद्धि ब्याज का अर्थ
  ======================================================= */

  function compoundMeaning() {

    return wrap(
      "चक्रवृद्धि ब्याज — वर्ष दर वर्ष वृद्धि",

      `

        ${text(
          400,
          55,
          "मूलधन पर ब्याज जुड़ता है और अगला ब्याज बढ़ी हुई राशि पर लगता है",
          "aa-text"
        )}

        ${rect(90,300,120,60)}
        ${text(150,337,"₹1000","aa-big")}
        ${text(150,390,"आरम्भ","aa-small")}

        ${line(210,330,300,250,"aa-dash")}

        ${rect(300,220,120,60,"aa-fill2")}
        ${text(360,257,"₹1100","aa-big")}
        ${text(360,310,"1 वर्ष","aa-small")}

        ${line(420,250,510,180,"aa-dash")}

        ${rect(510,150,120,60,"aa-fill2")}
        ${text(570,187,"₹1210","aa-big")}
        ${text(570,240,"2 वर्ष","aa-small")}

        ${line(630,180,700,120,"aa-dash")}

        ${circle(700,100,32)}
        ${text(700,108,"₹1331","aa-small")}

        ${text(
          400,
          435,
          "हर वर्ष ब्याज मूलधन में जुड़ता जाता है।",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 7 — LESSON 5
     ऐकिक नियम द्वारा चक्रवृद्धि
  ======================================================= */

  function unitaryCompound() {

    return wrap(
      "ऐकिक नियम — चक्रवृद्धि मिश्रधन",

      `

        ${text(
          400,
          55,
          "राशि को क्रमिक चरणों में बढ़ाएँ",
          "aa-big"
        )}

        ${rect(90,100,180,75)}
        ${text(180,145,"मूलधन","aa-text")}
        ${text(180,168,"₹1000","aa-big")}

        ${line(270,138,340,138,"aa-dash")}
        ${text(305,115,"10%","aa-small")}

        ${rect(340,100,180,75,"aa-fill2")}
        ${text(430,145,"1 वर्ष बाद","aa-text")}
        ${text(430,168,"₹1100","aa-big")}

        ${line(520,138,590,138,"aa-dash")}
        ${text(555,115,"10%","aa-small")}

        ${rect(590,100,120,75)}
        ${text(650,145,"2 वर्ष","aa-text")}
        ${text(650,168,"₹1210","aa-big")}

        ${text(
          400,
          255,
          "₹1000 → ₹1100 → ₹1210",
          "aa-big"
        )}

        ${text(
          400,
          310,
          "पहले वर्ष का ब्याज = ₹100",
          "aa-text"
        )}

        ${text(
          400,
          350,
          "दूसरे वर्ष का ब्याज = ₹110",
          "aa-text"
        )}

        ${text(
          400,
          410,
          "कुल मिश्रधन = ₹1210",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 7 — LESSON 6
     चक्रवृद्धि सूत्र
  ======================================================= */

  function compoundFormula() {

    return wrap(
      "चक्रवृद्धि मिश्रधन का सूत्र",

      `

        ${rect(100,80,600,90)}
        ${text(
          400,
          137,
          "A = P(1 + r/100)ⁿ",
          "aa-big"
        )}

        ${text(
          180,
          235,
          "P",
          "aa-big"
        )}

        ${text(
          180,
          275,
          "मूलधन",
          "aa-small"
        )}

        ${text(
          330,
          235,
          "r",
          "aa-big"
        )}

        ${text(
          330,
          275,
          "दर (%)",
          "aa-small"
        )}

        ${text(
          480,
          235,
          "n",
          "aa-big"
        )}

        ${text(
          480,
          275,
          "समय",
          "aa-small"
        )}

        ${text(
          620,
          235,
          "A",
          "aa-big"
        )}

        ${text(
          620,
          275,
          "मिश्रधन",
          "aa-small"
        )}

        ${line(180,315,620,315)}

        ${text(
          400,
          360,
          "CI = A − P",
          "aa-big"
        )}

        ${text(
          400,
          410,
          "सूत्र में मान रखकर मिश्रधन तथा चक्रवृद्धि ब्याज निकालें।",
          "aa-text"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 7 — LESSON 7
     कर
  ======================================================= */

  function taxTypes() {

    return wrap(
      "कर (Tax) एवं कर के प्रकार",

      `

        ${text(
          400,
          55,
          "मूल कीमत → कर → कुल भुगतान",
          "aa-big"
        )}

        ${rect(70,130,180,90)}
        ${text(160,170,"वस्तु का मूल्य","aa-text")}
        ${text(160,205,"₹500","aa-big")}

        ${line(250,175,330,175,"aa-dash")}

        ${rect(330,130,140,90,"aa-fill2")}
        ${text(400,170,"कर","aa-text")}
        ${text(400,205,"10%","aa-big")}

        ${line(470,175,550,175,"aa-dash")}

        ${rect(550,130,180,90)}
        ${text(640,170,"कुल भुगतान","aa-text")}
        ${text(640,205,"₹550","aa-big")}

        ${text(
          200,
          305,
          "प्रत्यक्ष कर",
          "aa-big"
        )}

        ${text(
          200,
          345,
          "आयकर आदि",
          "aa-text"
        )}

        ${text(
          600,
          305,
          "अप्रत्यक्ष कर",
          "aa-big"
        )}

        ${text(
          600,
          345,
          "विक्रय/वस्तु पर कर",
          "aa-text"
        )}

        ${text(
          400,
          415,
          "कर की दर के अनुसार देय राशि बदलती है।",
          "aa-text"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 8 — LESSON 1
     व्यंजकों का गुणनफल
  ======================================================= */

  function expressionProduct() {

    return wrap(
      "व्यंजकों का गुणनफल — क्षेत्रफल मॉडल",

      `

        ${text(
          400,
          50,
          "(a + b)(c + d)",
          "aa-big"
        )}

        ${rect(140,100,260,120)}
        ${text(270,165,"ac","aa-big")}

        ${rect(400,100,180,120,"aa-fill2")}
        ${text(490,165,"bc","aa-big")}

        ${rect(140,220,260,110,"aa-fill2")}
        ${text(270,285,"ad","aa-big")}

        ${rect(400,220,180,110)}
        ${text(490,285,"bd","aa-big")}

        ${line(400,80,400,350,"aa-dash")}

        ${text(
          270,
          375,
          "a + b",
          "aa-text"
        )}

        ${text(
          490,
          375,
          "c + d",
          "aa-text"
        )}

        ${text(
          400,
          425,
          "(a+b)(c+d) = ac + ad + bc + bd",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 8 — LESSON 2
     सर्वसमिकाएँ
  ======================================================= */

  function identities() {

    return wrap(
      "सर्वसमिकाएँ — क्षेत्रफल से समझें",

      `

        ${text(
          400,
          45,
          "(a + b)² = a² + 2ab + b²",
          "aa-big"
        )}

        ${rect(130,80,260,260)}
        ${rect(390,80,180,260,"aa-fill2")}
        ${rect(130,340,260,80,"aa-fill2")}
        ${rect(390,340,180,80)}

        ${text(260,215,"a²","aa-big")}
        ${text(480,210,"ab","aa-big")}
        ${text(260,385,"ab","aa-big")}
        ${text(480,385,"b²","aa-big")}

        ${text(
          260,
          440,
          "कुल क्षेत्रफल = (a+b)²",
          "aa-text"
        )}

        ${text(
          650,
          170,
          "a²",
          "aa-big"
        )}

        ${text(
          650,
          220,
          "+ 2ab",
          "aa-big"
        )}

        ${text(
          650,
          270,
          "+ b²",
          "aa-big"
        )}

        ${text(
          650,
          330,
          "= (a+b)²",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 8 — LESSON 3
     समीकरण और सर्वसमिका
  ======================================================= */

  function equationVsIdentity() {

    return wrap(
      "समीकरण और सर्वसमिका में अन्तर",

      `

        ${text(
          200,
          60,
          "समीकरण",
          "aa-big"
        )}

        ${rect(70,100,260,100)}
        ${text(
          200,
          160,
          "2x + 4 = 10",
          "aa-big"
        )}

        ${text(
          200,
          245,
          "केवल x = 3 पर सत्य",
          "aa-text"
        )}

        ${circle(200,330,45)}
        ${text(
          200,
          340,
          "x = 3",
          "aa-small"
        )}

        ${text(
          600,
          60,
          "सर्वसमिका",
          "aa-big"
        )}

        ${rect(470,100,260,100,"aa-fill2")}
        ${text(
          600,
          160,
          "(a+b)² = a²+2ab+b²",
          "aa-small"
        )}

        ${text(
          600,
          245,
          "सभी मानों के लिए सत्य",
          "aa-text"
        )}

        ${circle(600,330,45)}
        ${text(
          600,
          340,
          "∀ a,b",
          "aa-small"
        )}

        ${text(
          400,
          415,
          "Equation → विशेष मान | Identity → सभी मान",
          "aa-big"
        )}

      `
    );

  }

  /* =======================================================
     CHAPTER 8 — LESSON 4
     सर्वसमिकाओं का अनुप्रयोग
  ======================================================= */

  function identityApplication() {

    return wrap(
      "सर्वसमिकाओं का अनुप्रयोग — तेज गणना",

      `

        ${text(
          400,
          55,
          "102 × 98 = (100+2)(100−2)",
          "aa-big"
        )}

        ${rect(100,100,180,90)}
        ${text(
          190,
          155,
          "100 + 2",
          "aa-big"
        )}

        ${rect(310,100,180,90,"aa-fill2")}
        ${text(
          400,
          155,
          "100 − 2",
          "aa-big"
        )}

        ${rect(520,100,180,90)}
        ${text(
          610,
          155,
          "100² − 2²",
          "aa-big"
        )}

        ${line(280,145,310,145,"aa-dash")}
        ${line(490,145,520,145,"aa-dash")}

        ${text(
          400,
          250,
          "a² − b² = (a+b)(a−b)",
          "aa-big"
        )}

        ${text(
          400,
          310,
          "102 × 98 = 10000 − 4",
          "aa-text"
        )}

        ${text(
          400,
          360,
          "= 9996",
          "aa-big"
        )}

        ${text(
          400,
          415,
          "सर्वसमिकाएँ कठिन गणनाओं को सरल बनाती हैं।",
          "aa-text"
        )}

      `
    );

  }

  /* =======================================================
     TITLE DETECTION
  ======================================================= */

  function getPageText() {

    return (
      document.body?.innerText ||
      document.body?.textContent ||
      ""
    ).replace(/\s+/g," ");

  }

  /* =======================================================
     FIND DIAGRAM
  ======================================================= */

  function getDiagram() {

    const page =
      getPageText();

    /*
      Chapter 7
    */

    if(page.includes("समानुपात")) {

      if(
        page.includes("अनुलोम और प्रतिलोम")
      ) {
        return directInverse();
      }

      if(
        page.includes("प्रतिशतता का अनुप्रयोग")
      ) {
        return percentageApplication();
      }

      if(
        page.includes("चक्रवृद्धि ब्याज का अर्थ")
      ) {
        return compoundMeaning();
      }

      if(
        page.includes("ऐकिक नियम द्वारा चक्रवृद्धि")
      ) {
        return unitaryCompound();
      }

      if(
        page.includes("चक्रवृद्धि मिश्रधन का सूत्र")
      ) {
        return compoundFormula();
      }

      if(
        page.includes("कर (Tax)")
      ) {
        return taxTypes();
      }

      return proportion();

    }

    /*
      Chapter 8
    */

    if(
      page.includes("व्यंजकों का गुणनफल")
    ) {

      if(
        page.includes("समीकरण एवं सर्वसमिका में अन्तर")
      ) {
        return equationVsIdentity();
      }

      if(
        page.includes("सर्वसमिकाओं का अनुप्रयोग")
      ) {
        return identityApplication();
      }

      if(
 page.includes("सर्वसमिकाएँ")
      ) {
        return identities();
      }

      return expressionProduct();

    }

    return "";

  }

  /* =======================================================
     RENDER
  ======================================================= */

  function render() {

    const old =
      document.getElementById(CARD_ID);

    if(old) {
      old.remove();
    }

    const diagram =
      getDiagram();

    if(!diagram) {
      return;
    }

    /*
      Existing lesson content को न छेड़ते हुए
      diagram को page के अंत में जोड़ते हैं।
    */

    document.body.insertAdjacentHTML(
      "beforeend",
      diagram
    );

  }

  /* =======================================================
     REFRESH
  ======================================================= */

  function refresh() {

    setTimeout(
      render,
      150
    );

  }

  /* =======================================================
     INITIAL LOAD
  ======================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      refresh();

      /*
        Lesson content dynamically आने पर
        diagram दोबारा render हो सके।
      */

      const observer =
        new MutationObserver(
          function () {

            if(
              !document.getElementById(CARD_ID)
            ) {
              refresh();
            }

          }
        );

      observer.observe(
        document.body,
        {
          childList:true,
          subtree:true
        }
      );

    }
  );

  /* =======================================================
     PUBLIC API
  ======================================================= */

  window.AADYACommerceAlgebraDiagramEngine = {

    render: render,
    refresh: refresh

  };

})();
