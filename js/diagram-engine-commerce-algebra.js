/*
===========================================================
AADYA DIGITAL TEACHER
Commerce + Algebra + Geometry Diagram Engine
Version 1.0
For Class 7 Mathematics — Chapters 7 to 10

IMPORTANT:
• This file is independent of diagram-engine.js
• Does NOT modify or replace old diagrams
• Designed to coexist with Diagram Engine v4.0
• SVG only — offline friendly
• Automatically detects Chapter / Lesson title
===========================================================
*/

(function () {
  "use strict";

  const ENGINE_NAME =
    "AADYA Commerce Algebra Diagram Engine v1.0";

  /* ======================================================
     BASIC HELPERS
  ====================================================== */

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function svgWrap(content, height = 250) {
    return `
      <div class="aadya-ca-diagram"
           style="
             margin:20px 0;
             padding:14px;
             background:#fff;
             border-radius:18px;
             border:1px solid #e5e5e5;
             overflow:hidden;
           ">
        <div style="
          font-weight:700;
          font-size:16px;
          margin-bottom:8px;
          color:#222;
        ">
          📐 AADYA Visual
        </div>

        <svg
          viewBox="0 0 800 ${height}"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="AADYA गणितीय चित्र"
        >
          ${content}
        </svg>
      </div>
    `;
  }

  function text(x, y, value, size = 20, weight = 500) {
    return `
      <text
        x="${x}"
        y="${y}"
        font-size="${size}"
        font-weight="${weight}"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="#222"
      >
        ${escapeHTML(value)}
      </text>
    `;
  }

  function line(x1, y1, x2, y2, width = 3) {
    return `
      <line
        x1="${x1}"
        y1="${y1}"
        x2="${x2}"
        y2="${y2}"
        stroke="#222"
        stroke-width="${width}"
        stroke-linecap="round"
      />
    `;
  }

  function rect(x, y, w, h, rx = 8, fill = "#f5f5f5") {
    return `
      <rect
        x="${x}"
        y="${y}"
        width="${w}"
        height="${h}"
        rx="${rx}"
        fill="${fill}"
        stroke="#222"
        stroke-width="2"
      />
    `;
  }

  function circle(cx, cy, r, fill = "#f5f5f5") {
    return `
      <circle
        cx="${cx}"
        cy="${cy}"
        r="${r}"
        fill="${fill}"
        stroke="#222"
        stroke-width="2"
      />
    `;
  }

  function arrow(x1, y1, x2, y2) {
    return `
      <defs>
        <marker
          id="aadyaArrow"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#222"/>
        </marker>
      </defs>

      <line
        x1="${x1}"
        y1="${y1}"
        x2="${x2}"
        y2="${y2}"
        stroke="#222"
        stroke-width="3"
        marker-end="url(#aadyaArrow)"
      />
    `;
  }

  /* ======================================================
     CHAPTER 7 — COMMERCE MATHEMATICS
  ====================================================== */

  function ratioDiagram() {
    return svgWrap(`
      ${text(400, 28, "समानुपात : दो राशियों का तुलनात्मक सम्बन्ध", 21, 700)}

      ${rect(90, 75, 230, 110, 14)}
      ${rect(480, 75, 230, 110, 14)}

      ${text(205, 105, "राशि A", 22, 700)}
      ${text(595, 105, "राशि B", 22, 700)}

      ${text(205, 145, "2", 34, 700)}
      ${text(595, 145, "3", 34, 700)}

      ${text(400, 130, ":", 38, 700)}

      ${arrow(320, 130, 475, 130)}

      ${text(400, 190, "A : B = 2 : 3", 25, 700)}
    `, 225);
  }

  function directInverseDiagram() {
    return svgWrap(`
      ${text(400, 28, "अनुलोम और प्रतिलोम समानुपात", 21, 700)}

      ${rect(55, 70, 300, 135, 14)}
      ${rect(445, 70, 300, 135, 14)}

      ${text(205, 95, "अनुलोम समानुपात", 21, 700)}
      ${text(595, 95, "प्रतिलोम समानुपात", 21, 700)}

      ${text(205, 135, "एक बढ़े → दूसरा बढ़े", 18)}
      ${text(205, 175, "x ∝ y", 27, 700)}

      ${text(595, 135, "एक बढ़े → दूसरा घटे", 18)}
      ${text(595, 175, "x ∝ 1/y", 27, 700)}
    `, 235);
  }

  function percentageDiagram() {
    return svgWrap(`
      ${text(400, 25, "प्रतिशतता का अनुप्रयोग", 22, 700)}

      ${rect(45, 65, 210, 125, 14)}
      ${rect(295, 65, 210, 125, 14)}
      ${rect(545, 65, 210, 125, 14)}

      ${text(150, 95, "क्रय मूल्य", 20, 700)}
      ${text(400, 95, "परिवर्तन", 20, 700)}
      ${text(650, 95, "परिणाम", 20, 700)}

      ${text(150, 145, "CP", 30, 700)}
      ${text(400, 145, "लाभ / हानि", 22, 700)}
      ${text(650, 145, "SP", 30, 700)}

      ${arrow(255, 130, 290, 130)}
      ${arrow(505, 130, 540, 130)}

      ${text(400, 220, "प्रतिशत = (परिवर्तन ÷ मूल मान) × 100", 20, 700)}
    `, 255);
  }

  function compoundInterestDiagram() {
    return svgWrap(`
      ${text(400, 25, "चक्रवृद्धि ब्याज : समय के साथ राशि में वृद्धि", 21, 700)}

      ${rect(50, 80, 145, 90, 12)}
      ${rect(230, 80, 145, 90, 12)}
      ${rect(410, 80, 145, 90, 12)}
      ${rect(590, 80, 145, 90, 12)}

      ${text(122, 110, "मूलधन", 19, 700)}
      ${text(122, 145, "P", 28, 700)}

      ${text(302, 110, "वर्ष 1", 19, 700)}
      ${text(302, 145, "P + I₁", 24, 700)}

      ${text(482, 110, "वर्ष 2", 19, 700)}
      ${text(482, 145, "P + I₁ + I₂", 21, 700)}

      ${text(662, 110, "अन्तिम राशि", 19, 700)}
      ${text(662, 145, "A", 30, 700)}

      ${arrow(195, 125, 225, 125)}
      ${arrow(375, 125, 405, 125)}
      ${arrow(555, 125, 585, 125)}

      ${text(400, 215, "A = P(1 + r/100)ⁿ", 26, 700)}
    `, 255);
  }

  function taxDiagram() {
    return svgWrap(`
      ${text(400, 25, "कर (Tax) की सरल प्रक्रिया", 22, 700)}

      ${rect(40, 75, 180, 105, 14)}
      ${rect(310, 75, 180, 105, 14)}
      ${rect(580, 75, 180, 105, 14)}

      ${text(130, 105, "मूल राशि", 20, 700)}
      ${text(130, 145, "₹1000", 27, 700)}

      ${text(400, 105, "कर दर", 20, 700)}
      ${text(400, 145, "10%", 27, 700)}

      ${text(670, 105, "कर", 20, 700)}
      ${text(670, 145, "₹100", 27, 700)}

      ${arrow(225, 127, 300, 127)}
      ${arrow(495, 127, 570, 127)}

      ${text(400, 220, "कर = कर योग्य राशि × कर दर ÷ 100", 20, 700)}
    `, 255);
  }

  /* ======================================================
     CHAPTER 8 — PRODUCT OF EXPRESSIONS & IDENTITIES
  ====================================================== */

  function algebraProductDiagram() {
    return svgWrap(`
      ${text(400, 25, "व्यंजकों का गुणनफल", 22, 700)}

      ${rect(80, 65, 280, 120, 12)}
      ${rect(440, 65, 280, 120, 12)}

      ${text(220, 95, "(a + b)", 29, 700)}
      ${text(220, 145, "(c + d)", 29, 700)}

      ${text(580, 95, "गुणा करें", 21, 700)}
      ${text(580, 145, "हर पद से हर पद", 20, 700)}

      ${arrow(365, 125, 435, 125)}

      ${text(400, 215, "(a+b)(c+d) = ac + ad + bc + bd", 23, 700)}
    `, 250);
  }

  function identitySquareDiagram() {
    return svgWrap(`
      ${text(400, 24, "(a + b)² = a² + 2ab + b²", 24, 700)}

      ${rect(160, 55, 400, 150, 0, "#f7f7f7")}

      <rect x="160" y="55" width="250" height="95"
             fill="#ffffff" stroke="#222" stroke-width="2"/>
      <rect x="410" y="55" width="150" height="95"
             fill="#eeeeee" stroke="#222" stroke-width="2"/>
      <rect x="160" y="150" width="250" height="55"
             fill="#eeeeee" stroke="#222" stroke-width="2"/>
      <rect x="410" y="150" width="150" height="55"
             fill="#ffffff" stroke="#222" stroke-width="2"/>

      ${text(285, 102, "a²", 30, 700)}
      ${text(485, 102, "ab", 26, 700)}
      ${text(285, 178, "ab", 26, 700)}
      ${text(485, 178, "b²", 30, 700)}

      ${text(360, 225, "कुल क्षेत्रफल = a² + ab + ab + b²", 20, 700)}
    `, 255);
  }

  function differenceSquareDiagram() {
    return svgWrap(`
      ${text(400, 25, "(a − b)² = a² − 2ab + b²", 24, 700)}

      ${rect(150, 65, 500, 135, 0)}

      ${rect(175, 90, 220, 85, 0, "#ffffff")}
      ${rect(395, 90, 125, 85, 0, "#eeeeee")}
      ${rect(520, 90, 105, 85, 0, "#ffffff")}

      ${text(285, 132, "a²", 30, 700)}
      ${text(457, 132, "−2ab", 24, 700)}
      ${text(572, 132, "b²", 27, 700)}

      ${text(400, 225, "बीजगणितीय सर्वसमिका", 20, 700)}
    `, 255);
  }

  function plusMinusIdentityDiagram() {
    return svgWrap(`
      ${text(400, 25, "(a+b)(a−b) = a²−b²", 24, 700)}

      ${rect(75, 70, 250, 105, 14)}
      ${rect(475, 70, 250, 105, 14)}

      ${text(200, 105, "(a+b)(a−b)", 28, 700)}
      ${text(200, 145, "गुणनफल", 19)}

      ${text(600, 105, "a² − b²", 29, 700)}
      ${text(600, 145, "अन्तिम रूप", 19)}

      ${arrow(330, 122, 465, 122)}

      ${text(400, 220, "सर्वसमिका का उपयोग करके गणना सरल होती है", 20, 700)}
    `, 250);
  }

  function equationVsIdentityDiagram() {
    return svgWrap(`
      ${text(400, 25, "समीकरण और सर्वसमिका में अन्तर", 22, 700)}

      ${rect(45, 65, 330, 140, 14)}
      ${rect(425, 65, 330, 140, 14)}

      ${text(210, 95, "समीकरण", 23, 700)}
      ${text(210, 135, "x + 3 = 7", 29, 700)}
      ${text(210, 175, "विशिष्ट मान के लिए सत्य", 18)}

      ${text(590, 95, "सर्वसमिका", 23, 700)}
      ${text(590, 135, "(a+b)² = a²+2ab+b²", 21, 700)}
      ${text(590, 175, "सभी मानों के लिए सत्य", 18)}
    `, 250);
  }

  /* ======================================================
     CHAPTER 9 — FACTORISATION
  ====================================================== */

  function factorCommonDiagram() {
    return svgWrap(`
      ${text(400, 25, "सामान्य गुणनखण्ड निकालना", 22, 700)}

      ${rect(70, 65, 280, 115, 14)}
      ${rect(450, 65, 280, 115, 14)}

      ${text(210, 105, "ax + ay", 31, 700)}
      ${text(210, 145, "सामान्य = a", 20)}

      ${text(590, 105, "a(x + y)", 31, 700)}
      ${text(590, 145, "गुणनखण्ड रूप", 20)}

      ${arrow(355, 122, 445, 122)}

      ${text(400, 220, "ax + ay = a(x+y)", 25, 700)}
    `, 250);
  }

  function factorGroupingDiagram() {
    return svgWrap(`
      ${text(400, 25, "गुणनखण्ड : समूह बनाकर", 22, 700)}

      ${rect(55, 70, 690, 100, 14)}

      ${text(160, 120, "ax² + ay²", 27, 700)}
      ${text(400, 120, "+", 30, 700)}
      ${text(610, 120, "bx² + by²", 27, 700)}

      ${line(80, 190, 350, 190, 3)}
      ${line(450, 190, 720, 190, 3)}

      ${text(215, 220, "a(x²+y²)", 23, 700)}
      ${text(585, 220, "b(x²+y²)", 23, 700)}

      ${text(400, 260, "(a+b)(x²+y²)", 26, 700)}
    `, 285);
  }

  /* ======================================================
     CHAPTER 10 — QUADRILATERALS
  ====================================================== */

  function quadrilateralBasicDiagram() {
    return svgWrap(`
      ${text(400, 25, "चतुर्भुज एवं इसके विभिन्न अंग", 22, 700)}

      <polygon
        points="180,175 300,65 620,80 680,180"
        fill="#f5f5f5"
        stroke="#222"
        stroke-width="4"
      />

      ${circle(180,175,5,"#222")}
      ${circle(300,65,5,"#222")}
      ${circle(620,80,5,"#222")}
      ${circle(680,180,5,"#222")}

      ${text(160, 195, "A", 20, 700)}
      ${text(300, 42, "B", 20, 700)}
      ${text(640, 62, "C", 20, 700)}
      ${text(705, 195, "D", 20, 700)}

       ${text(400, 215, "4 भुजाएँ • 4 कोण • 4 शीर्ष", 21, 700)}
    `, 255);
  }

  function quadrilateralTypesDiagram() {
    return svgWrap(`
      ${text(400, 22, "चतुर्भुज के प्रमुख प्रकार", 22, 700)}

      <!-- Square -->
      <rect x="55" y="65" width="110" height="110"
            fill="#fff" stroke="#222" stroke-width="3"/>
      ${text(110,195,"वर्ग",20,700)}

      <!-- Rectangle -->
      <rect x="205" y="80" width="145" height="80"
            fill="#fff" stroke="#222" stroke-width="3"/>
      ${text(277,195,"आयत",20,700)}

      <!-- Parallelogram -->
      <polygon points="390,160 430,80 575,80 535,160"
               fill="#fff" stroke="#222" stroke-width="3"/>
      ${text(482,195,"समान्तर चतुर्भुज",18,700)}

      <!-- Rhombus -->
      <polygon points="660,65 730,120 660,175 590,120"
               fill="#fff" stroke="#222" stroke-width="3"/>
      ${text(660,205,"समचतुर्भुज",18,700)}
    `, 235);
  }

    /* ======================================================
     LESSON DETECTION
  ====================================================== */

  function getLessonText() {
    let source = "";

    try {
      if (window.lessonData) {
        source += " " + JSON.stringify(window.lessonData);
      }
    } catch (e) {}

    source += " " + document.body.innerText;

    return source.toLowerCase();
  }

  function getLessonFileFromURL() {

  try {

    const params =
      new URLSearchParams(
        window.location.search
      );

    return (
      params.get("lesson") || ""
    );

  } catch (e) {

    return "";

  }

}


function getChapterNumber() {

  /* -----------------------------------------
     1. PRIMARY SOURCE:
        learning.html?lesson=...
  ----------------------------------------- */

  const lessonFile =
    getLessonFileFromURL();

  const queryMatch =
    lessonFile.match(
      /textbook(\d+)/i
    );

  if (queryMatch) {

    return Number(
      queryMatch[1]
    );

  }


  /* -----------------------------------------
     2. FALLBACK:
        pathname
  ----------------------------------------- */

  const path =
    window.location.pathname;

  const pathMatch =
    path.match(
      /textbook(\d+)/i
    );

  if (pathMatch) {

    return Number(
      pathMatch[1]
    );

  }


  /* -----------------------------------------
     3. FALLBACK:
        lessonData
  ----------------------------------------- */

  try {

    if (
      window.lessonData
    ) {

      const data =
        window.lessonData;

      if (
        data.chapter !== undefined
      ) {

        return Number(
          data.chapter
        );

      }

      if (
        data.chapter_number !== undefined
      ) {

        return Number(
          data.chapter_number
        );

      }

    }

  } catch (e) {}


  return 0;

}


function getLessonNumber() {

  /* -----------------------------------------
     1. PRIMARY SOURCE:
        learning.html?lesson=...
  ----------------------------------------- */

  const lessonFile =
    getLessonFileFromURL();

  const queryMatch =
    lessonFile.match(
      /lesson(\d+)\.json/i
    );

  if (queryMatch) {

    return Number(
      queryMatch[1]
    );

  }


  /* -----------------------------------------
     2. FALLBACK:
        pathname
  ----------------------------------------- */

  const path =
    window.location.pathname;

  const pathMatch =
    path.match(
      /lesson(\d+)\.json/i
    );

  if (pathMatch) {

    return Number(
      pathMatch[1]
    );

  }


  /* -----------------------------------------
     3. FALLBACK:
        lessonData
  ----------------------------------------- */

  try {

    if (
      window.lessonData &&
      window.lessonData.lesson !== undefined
    ) {

      return Number(
        window.lessonData.lesson
      );

    }

    if (
      window.lessonData &&
      window.lessonData.lesson_number !== undefined
    ) {

      return Number(
        window.lessonData.lesson_number
      );

    }

  } catch (e) {}


  return 0;

    }

  /* ======================================================
     DETERMINE DIAGRAM
  ====================================================== */

  function selectDiagram() {
    const chapter =
      getChapterNumber();

    const lesson =
      getLessonNumber();

    const content =
      getLessonText();

    /* CHAPTER 7 */

    if (chapter === 7) {

      if (lesson === 1)
        return ratioDiagram();

      if (lesson === 2)
        return directInverseDiagram();

      if (lesson === 3)
        return percentageDiagram();

      if (lesson === 4)
        return compoundInterestDiagram();

      if (lesson === 5)
        return compoundInterestDiagram();

      if (lesson === 6)
        return compoundInterestDiagram();

      if (lesson === 7)
        return taxDiagram();

      if (
        content.includes("अनुलोम") ||
        content.includes("प्रतिलोम")
      )
        return directInverseDiagram();

      if (
        content.includes("चक्रवृद्धि")
      )
        return compoundInterestDiagram();

      if (
        content.includes("कर (tax)") ||
        content.includes("कर एवं कर")
      )
        return taxDiagram();

      if (
        content.includes("प्रतिशत")
      )
        return percentageDiagram();

      if (
        content.includes("समानुपात")
      )
        return ratioDiagram();
    }

    /* CHAPTER 8 */

    if (chapter === 8) {

      if (lesson === 1)
        return algebraProductDiagram();

      if (lesson === 2)
        return identitySquareDiagram();

      if (lesson === 3)
        return equationVsIdentityDiagram();

      if (lesson === 4)
        return plusMinusIdentityDiagram();

      if (
        content.includes("(a + b)²") ||
        content.includes("(a+b)²")
      )
        return identitySquareDiagram();

      if (
        content.includes("(a − b)²") ||
        content.includes("(a-b)²")
      )
        return differenceSquareDiagram();

      if (
        content.includes("सर्वसमिका")
      )
        return plusMinusIdentityDiagram();
    }

    /* CHAPTER 9 */

    if (chapter === 9) {

      if (lesson === 1)
        return factorCommonDiagram();

      if (lesson === 2)
        return factorGroupingDiagram();

      if (
        content.includes("गुणनखण्ड")
      )
        return factorCommonDiagram();
    }

    /* CHAPTER 10 */

    if (chapter === 10) {

      if (lesson === 1)
        return quadrilateralBasicDiagram();

      if (lesson === 2)
        return quadrilateralTypesDiagram();

      if (
        content.includes("चतुर्भुज के प्रकार")
      )
        return quadrilateralTypesDiagram();

      if (
        content.includes("चतुर्भुज")
      )
        return quadrilateralBasicDiagram();
    }

    return "";
  }

  /* ======================================================
     INSERT SAFELY
  ====================================================== */

  function findLessonContainer() {

  const selectors = [
    "#content",
    "#lessonContent",
    "#lesson-container",
    ".lesson-content",
    ".lesson-container",
    "main"
  ];

  for (const selector of selectors) {
    const element =
      document.querySelector(selector);

    if (element) {
      return element;
    }
  }

  return null;
  }

  function render() {

  const chapter =
    getChapterNumber();

  if (
    chapter < 7 ||
    chapter > 10
  ) {
    return;
  }

  const container =
    findLessonContainer();

  if (!container) {
    return;
  }

  /*
   * यदि Diagram पहले से मौजूद है,
   * तो दोबारा उसे move/reinsert न करें।
   *
   * इससे MutationObserver loop नहीं बनेगा।
   */
  const existing =
    document.querySelector(
      ".aadya-ca-diagram"
    );

  if (existing) {
    return;
  }

  /*
   * नया Diagram बनाएं
   */
  const diagram =
    selectDiagram();

  if (!diagram) {
    return;
  }

  const wrapper =
    document.createElement("div");

  wrapper.innerHTML =
    diagram.trim();

  const newDiagram =
    wrapper.firstElementChild;

  if (!newDiagram) {
    return;
  }

  /*
   * Diagram को
   * "खुद करके देखें" से ठीक पहले रखें।
   */
  const tryYourself =
    container.querySelector(
      "#tryYourself"
    );

  if (tryYourself) {

    tryYourself.parentNode.insertBefore(
      newDiagram,
      tryYourself
    );

  } else {

    container.appendChild(
      newDiagram
    );

  }

  }
  
  function refresh() {

    const old =
      document.querySelector(
        ".aadya-ca-diagram"
      );

    if (old) {
      old.remove();
    }

    render();
  }

  /* ======================================================
     OBSERVER
  ====================================================== */
 let observerStarted = false;

  function startObserver() {

  if (observerStarted) {
    return;
  }

  observerStarted = true;

  if (!window.MutationObserver) {
    return;
  }

  const observer =
    new MutationObserver(function () {

      const chapter =
        getChapterNumber();

      if (
        chapter < 7 ||
        chapter > 10
      ) {
        return;
      }

      /*
       * Diagram पहले से मौजूद है तो
       * render() दोबारा नहीं चलाना है।
       *
       * यही MutationObserver loop को रोकता है।
       */
      const existing =
        document.querySelector(
          ".aadya-ca-diagram"
        );

      if (existing) {
        return;
      }

      render();

    });

  observer.observe(
    document.body,
    {
      childList: true,
      subtree: true
    }
  );
  }

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );
  }

  /* ======================================================
     INITIALIZE
  ====================================================== */

  function init() {

    setTimeout(
      render,
      500
    );

    setTimeout(
      render,
      1500
    );

    setTimeout(
      render,
      3000
    );

    startObserver();
  }

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

  /* ======================================================
     PUBLIC API
  ====================================================== */

  window.AADYACommerceAlgebraDiagramEngine = {

    name: ENGINE_NAME,

    render: render,

    refresh: refresh

  };

})();
