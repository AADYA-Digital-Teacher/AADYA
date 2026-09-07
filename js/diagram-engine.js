/* ==========================================
   AADYA EDUCATIONAL DIAGRAM ENGINE
   Version: 1.0
   Offline • SVG • No external images
========================================== */

(function () {

  "use strict";


  function safeText(value) {

    return String(value ?? "");

  }


  /* ==========================================
     COMMON DIAGRAM CARD
  ========================================== */

  function svgWrap(title, svg) {

    return `
      <section
        class="card aadya-diagram-card"
        id="aadyaDiagramCard"
      >

        <h3>
          📐 चित्र से समझें
        </h3>

        <div class="aadya-diagram-title">
          ${title}
        </div>

        <div class="aadya-diagram-box">
          ${svg}
        </div>

        <p class="aadya-diagram-note">
          चित्र को ध्यान से देखें और ऊपर समझाए गए
          बिंदुओं से मिलाएँ।
        </p>

      </section>
    `;

  }


  /* ==========================================
     CHAPTER 16 — LESSON 1
     वृत्त की अवधारणा
  ========================================== */

  function circleConcept() {

    return svgWrap(

      "वृत्त का केंद्र और सीमा",

      `
      <svg
        viewBox="0 0 420 280"
        role="img"
        aria-label="वृत्त का केंद्र और सीमा"
      >

        <circle
          cx="210"
          cy="140"
          r="92"
          fill="none"
          stroke="#111"
          stroke-width="5"
        />

        <line
          x1="210"
          y1="140"
          x2="302"
          y2="140"
          stroke="#d4af37"
          stroke-width="5"
        />

        <circle
          cx="210"
          cy="140"
          r="7"
          fill="#111"
        />

        <circle
          cx="302"
          cy="140"
          r="7"
          fill="#111"
        />

        <text
          x="196"
          y="130"
          font-size="20"
          font-weight="bold"
        >
          O
        </text>

        <text
          x="312"
          y="132"
          font-size="19"
        >
          A
        </text>

        <text
          x="245"
          y="128"
          font-size="17"
        >
          समान दूरी
        </text>

        <text
          x="207"
          y="36"
          font-size="18"
          font-weight="bold"
        >
          वृत्त की सीमा
        </text>

        <text
          x="173"
          y="177"
          font-size="17"
        >
          केंद्र
        </text>

      </svg>
      `

    );

  }


  /* ==========================================
     CHAPTER 16 — LESSON 2
     त्रिज्या, व्यास, जीवा और चाप
  ========================================== */

  function radiusDiameterChordArc() {

    return svgWrap(

      "त्रिज्या, व्यास, जीवा और चाप",

      `
      <svg
        viewBox="0 0 520 330"
        role="img"
        aria-label="त्रिज्या व्यास जीवा और चाप का चित्र"
      >

        <!-- वृत्त -->

        <circle
          cx="260"
          cy="165"
          r="112"
          fill="none"
          stroke="#111"
          stroke-width="5"
        />


        <!-- व्यास -->

        <line
          x1="148"
          y1="165"
          x2="372"
          y2="165"
          stroke="#111"
          stroke-width="4"
        />


        <!-- त्रिज्या -->

        <line
          x1="260"
          y1="165"
          x2="342"
          y2="89"
          stroke="#d4af37"
          stroke-width="5"
        />


        <!-- जीवा -->

        <line
          x1="184"
          y1="98"
          x2="326"
          y2="112"
          stroke="#555"
          stroke-width="5"
        />


        <!-- चाप -->

        <path
          d="M184 98 A112 112 0 0 1 326 112"
          fill="none"
          stroke="#c33"
          stroke-width="7"
        />


        <!-- केंद्र -->

        <circle
          cx="260"
          cy="165"
          r="6"
          fill="#111"
        />


        <text
          x="245"
          y="190"
          font-size="19"
          font-weight="bold"
        >
          O
        </text>

        <text
          x="253"
          y="153"
          font-size="16"
        >
          केंद्र
        </text>

        <text
          x="298"
          y="119"
          font-size="17"
        >
          त्रिज्या
        </text>

        <text
          x="212"
          y="153"
          font-size="17"
        >
          व्यास
        </text>

        <text
          x="214"
          y="92"
          font-size="17"
        >
          जीवा
        </text>

        <text
          x="238"
          y="70"
          font-size="17"
        >
          चाप
        </text>

      </svg>
      `

    );

  }


  /* ==========================================
     CHAPTER 16 — LESSON 3
     अर्धवृत्त
  ========================================== */

  function semicircle() {

    return svgWrap(

      "व्यास से बना अर्धवृत्त",

      `
      <svg
        viewBox="0 0 460 300"
        role="img"
        aria-label="अर्धवृत्त"
      >

        <path
          d="M90 190 A140 140 0 0 1 370 190"
          fill="none"
          stroke="#111"
          stroke-width="6"
        />

        <line
          x1="90"
          y1="190"
          x2="370"
          y2="190"
          stroke="#d4af37"
          stroke-width="6"
        />

        <circle
          cx="230"
          cy="190"
          r="6"
          fill="#111"
        />

        <text
          x="218"
          y="180"
          font-size="18"
          font-weight="bold"
        >
          O
        </text>

        <text
          x="214"
          y="218"
          font-size="18"
        >
          व्यास
        </text>

        <text
          x="190"
          y="70"
          font-size="22"
          font-weight="bold"
        >
          अर्धवृत्त
        </text>

      </svg>
      `

    );

  }


  /* ==========================================
     CHAPTER 16 — LESSON 4
     वृत्तखण्ड और त्रिज्याखण्ड
  ========================================== */

  function segmentAndSector() {

    return svgWrap(

      "वृत्तखण्ड और त्रिज्याखण्ड — अंतर देखें",

      `
      <svg
        viewBox="0 0 620 330"
        role="img"
        aria-label="वृत्तखण्ड और त्रिज्याखण्ड"
      >

        <!-- =========================
             वृत्तखण्ड
        ========================== -->

        <text
          x="85"
          y="30"
          font-size="20"
          font-weight="bold"
        >
          वृत्तखण्ड
        </text>


        <circle
          cx="155"
          cy="170"
          r="105"
          fill="none"
          stroke="#111"
          stroke-width="5"
        />


        <path
          d="M92 87 Q155 115 218 94"
          fill="none"
          stroke="#c33"
          stroke-width="6"
        />


        <path
          d="
            M92 87
            Q155 115 218 94
            A105 105 0 0 1 92 87
          "
          fill="#f3e4a8"
          opacity="0.65"
        />


        <line
          x1="92"
          y1="87"
          x2="218"
          y2="94"
          stroke="#111"
          stroke-width="5"
        />


        <text
          x="103"
          y="128"
          font-size="15"
        >
          जीवा + चाप
        </text>


        <!-- =========================
             त्रिज्याखण्ड
        ========================== -->

        <text
          x="380"
          y="30"
          font-size="20"
          font-weight="bold"
        >
          त्रिज्याखण्ड
        </text>


        <circle
          cx="465"
          cy="170"
          r="105"
          fill="none"
          stroke="#111"
          stroke-width="5"
        />


        <path
          d="
            M465 170
            L465 65
            A105 105 0 0 1 556 117
            Z
          "
          fill="#f3e4a8"
          opacity="0.65"
        />


        <line
          x1="465"
          y1="170"
          x2="465"
          y2="65"
          stroke="#d4af37"
          stroke-width="5"
        />


        <line
          x1="465"
          y1="170"
          x2="556"
          y2="117"
          stroke="#d4af37"
          stroke-width="5"
        />


        <path
          d="M465 65 A105 105 0 0 1 556 117"
          fill="none"
          stroke="#c33"
          stroke-width="6"
        />


        <circle
          cx="465"
          cy="170"
          r="6"
          fill="#111"
        />


        <text
          x="449"
          y="195"
          font-size="17"
          font-weight="bold"
        >
          O
        </text>


        <text
          x="395"
          y="238"
          font-size="15"
        >
          दो त्रिज्याएँ + चाप
        </text>

      </svg>
      `

    );

  }


  /* ==========================================
     GENERIC CIRCLE
  ========================================== */

  function genericCircle() {

    return svgWrap(

      "वृत्त — चित्र द्वारा पुनरावृत्ति",

      `
      <svg
        viewBox="0 0 420 280"
        role="img"
        aria-label="वृत्त"
      >

        <circle
          cx="210"
          cy="140"
          r="95"
          fill="none"
          stroke="#111"
          stroke-width="5"
        />

        <circle
          cx="210"
          cy="140"
          r="6"
          fill="#111"
        />

        <text
          x="198"
          y="130"
          font-size="19"
          font-weight="bold"
        >
          O
        </text>

        <line
          x1="210"
          y1="140"
          x2="305"
          y2="140"
          stroke="#d4af37"
          stroke-width="5"
        />

        <text
          x="238"
          y="128"
          font-size="17"
        >
          त्रिज्या
        </text>

      </svg>
      `

    );

  }


  /* ==========================================
     DETERMINE DIAGRAM
  ========================================== */

  function getDiagram(title, chapterTitle) {

    const t = safeText(title);

    const c = safeText(chapterTitle);


    if (
      t.includes("त्रिज्या") ||
      t.includes("व्यास") ||
      t.includes("जीवा") ||
      t.includes("चाप")
    ) {

      return radiusDiameterChordArc();

    }


    if (
      t.includes("अर्धवृत्त")
    ) {

      return semicircle();

    }


    if (
      t.includes("वृत्तखण्ड") ||
      t.includes("त्रिज्याखण्ड")
    ) {

      return segmentAndSector();

    }


    if (
      t.includes("वृत्त की अवधारणा") ||
      t === "वृत्त"
    ) {

      return circleConcept();

    }


    if (
      c.includes("वृत्त")
    ) {

      return genericCircle();

    }


    return "";

  }


  /* ==========================================
     RENDER
  ========================================== */

  function renderDiagram() {

    const old =
      document.getElementById(
        "aadyaDiagramCard"
      );

    if (old) {

      old.remove();

    }


    const titleEl =
      document.getElementById(
        "mainTitle"
      );

    const chapterEl =
      document.getElementById(
        "chapterTitle"
      );

    const examplesEl =
      document.getElementById(
        "examples"
      );


    if (
      !titleEl ||
      !examplesEl
    ) {

      return;

    }


    const title =
      titleEl.textContent.trim();

    const chapter =
      chapterEl
        ? chapterEl.textContent.trim()
        : "";


    const html =
      getDiagram(
        title,
        chapter
      );


    if (!html) {

      return;

    }


    const wrapper =
      document.createElement(
        "div"
      );


    wrapper.innerHTML =
      html;


    const card =
      wrapper.firstElementChild;


    if (card) {

      const exampleSection =
        examplesEl.closest(
          "section.card"
        );


      if (exampleSection) {

        exampleSection.after(
          card
        );

      }

    }

  }


  /* ==========================================
     STYLES
  ========================================== */

  function injectStyles() {

    if (
      document.getElementById(
        "aadyaDiagramStyles"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "aadyaDiagramStyles";


    style.textContent = `

      .aadya-diagram-card{
        overflow:hidden;
      }

      .aadya-diagram-title{
        text-align:center;
        font-weight:bold;
        font-size:18px;
        margin:-4px 0 14px;
      }

      .aadya-diagram-box{
        width:100%;
        overflow-x:auto;
        border-radius:14px;
        background:#fafafa;
        border:1px solid #e5e5e5;
        padding:10px;
      }

      .aadya-diagram-box svg{
        display:block;
        width:100%;
        min-width:330px;
        height:auto;
      }

      .aadya-diagram-note{
        margin:12px 0 0;
        color:#666;
        font-size:14px;
        text-align:center;
      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ==========================================
     WATCH LEARNING PAGE
  ========================================== */

  function start() {

    injectStyles();


    let lastTitle = "";


    const observer =
      new MutationObserver(
        function () {

          const titleEl =
            document.getElementById(
              "mainTitle"
            );


          if (!titleEl) {

            return;

          }


          const title =
            titleEl.textContent.trim();


          if (
            !title ||
            title === lastTitle
          ) {

            return;

          }


          lastTitle =
            title;


          setTimeout(
            renderDiagram,
            50
          );

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


    setTimeout(
      renderDiagram,
      300
    );

  }


  /* ==========================================
     START
  ========================================== */

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


  window.AADYADiagramEngine = {

    render:
      renderDiagram

  };


})();
