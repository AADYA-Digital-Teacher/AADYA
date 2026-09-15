/* =========================================================
   AADYA DIGITAL TEACHER
   CLASS 7 MATHEMATICS
   CHAPTER 1 + CHAPTER 2 DIAGRAM ENGINE

   STRICT ISOLATION:
   केवल:
   Class 7
   Mathematics
   textbook01
   textbook02

   Ch1 = परिमेय संख्याएँ
   Ch2 = घातांक

   Ch3–14 को यह engine touch नहीं करेगा।
========================================================= */

(function () {

  "use strict";

  const CARD_CLASS = "aadya-c7-ch1-2-diagram";


  /* =======================================================
     BASIC HELPERS
  ======================================================= */

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function getLessonFile() {
    return new URLSearchParams(
      window.location.search
    ).get("lesson") || "";
  }


  function isTargetLesson() {

    const data = window.lessonData;

    if (!data) return false;

    if (Number(data.class) !== 7) return false;

    if (
      String(data.subject || "").trim() !== "गणित"
    ) {
      return false;
    }

    const path =
      getLessonFile().replace(/^\.\/+/, "");

    return (
      /content\/class7\/mathematics\/textbook01\/lesson\d+\.json/i.test(path) ||
      /content\/class7\/mathematics\/textbook02\/lesson\d+\.json/i.test(path)
    );
  }


  function getChapterLesson() {

    const path =
      getLessonFile().replace(/^\.\/+/, "");

    const match = path.match(
      /textbook(\d+)\/lesson(\d+)\.json/i
    );

    if (!match) return null;

    return {
      chapter: Number(match[1]),
      lesson: Number(match[2])
    };
  }


  function svgWrap(title, body) {

    return `
      <section class="${CARD_CLASS}"
        style="
          margin:20px 0;
          padding:16px;
          background:#fff;
          border:1px solid #e5e5e5;
          border-radius:18px;
          overflow:hidden;
        ">

        <div style="
          font-weight:700;
          font-size:17px;
          margin-bottom:10px;
        ">
          📐 AADYA Visual — ${esc(title)}
        </div>

        <svg
          viewBox="0 0 800 430"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="${esc(title)}">

          <style>
            .ln{
              stroke:#222;
              stroke-width:4;
              fill:none;
              stroke-linecap:round;
              stroke-linejoin:round;
            }

            .thin{
              stroke:#555;
              stroke-width:2;
              fill:none;
            }

            .dash{
              stroke:#777;
              stroke-width:3;
              stroke-dasharray:9 7;
              fill:none;
            }

            .box{
              fill:#fafafa;
              stroke:#222;
              stroke-width:3;
            }

            .txt{
              fill:#222;
              font-size:24px;
              font-family:system-ui,sans-serif;
            }

            .big{
              fill:#222;
              font-size:31px;
              font-weight:700;
              font-family:system-ui,sans-serif;
            }

            .small{
              fill:#222;
              font-size:20px;
              font-family:system-ui,sans-serif;
            }

            .dot{
              fill:#222;
            }
          </style>

          ${body}

        </svg>
      </section>
    `;
  }


  function text(x,y,value,cls="txt") {

    return `
      <text
        x="${x}"
        y="${y}"
        class="${cls}"
        text-anchor="middle"
        dominant-baseline="middle">
        ${esc(value)}
      </text>
    `;
  }


  function line(x1,y1,x2,y2,cls="ln") {

    return `
      <line
        x1="${x1}"
        y1="${y1}"
        x2="${x2}"
        y2="${y2}"
        class="${cls}" />
    `;
  }


  function rect(x,y,w,h,cls="box") {

    return `
      <rect
        x="${x}"
        y="${y}"
        width="${w}"
        height="${h}"
        rx="12"
        class="${cls}" />
    `;
  }


  function dot(x,y,r=7) {

    return `
      <circle
        cx="${x}"
        cy="${y}"
        r="${r}"
        class="dot" />
    `;
  }


  /* =======================================================
     CLASS 7 — CHAPTER 1
     परिमेय संख्याएँ
  ======================================================= */


  function rationalMeaning() {

    return svgWrap(
      "परिमेय संख्या — p/q का अर्थ",

      `
        ${rect(90,75,620,240)}

        ${text(400,120,"परिमेय संख्या")}

        ${text(400,190,"p", "big")}
        ${line(345,215,455,215)}
        ${text(400,255,"q", "big")}

        ${text(400,355,"p और q पूर्णांक हैं तथा q ≠ 0","small")}
        ${text(400,395,"उदाहरण : 3/5, −7/2, 4/1","small")}
      `
    );
  }


  function rationalNumberLine() {

    return svgWrap(
      "दो पूर्णांकों के बीच परिमेय संख्याएँ",

      `
        ${line(90,230,710,230)}

        ${[110,210,310,410,510,610,690]
          .map(x => line(x,215,x,245))
          .join("")}

        ${text(110,275,"0","small")}
        ${text(210,275,"1/4","small")}
        ${text(310,275,"1/2","small")}
        ${text(410,275,"3/4","small")}
        ${text(510,275,"1","small")}
        ${text(610,275,"5/4","small")}
        ${text(690,275,"3/2","small")}

        ${text(
          400,
          110,
          "0 और 1 के बीच 1/4, 1/2, 3/4...",
          "big"
        )}

        ${text(
          400,
          360,
          "दो अलग संख्याओं के बीच अनंत परिमेय संख्याएँ हो सकती हैं।",
          "small"
        )}
      `
    );
  }


  function equivalentFractions() {

    return svgWrap(
      "समतुल्य परिमेय संख्याएँ",

      `
        ${rect(70,75,190,150)}
        ${rect(305,75,190,150)}
        ${rect(540,75,190,150)}

        ${text(165,115,"1/2","big")}
        ${text(165,175,"= 2/4","txt")}

        ${text(400,115,"2/4","big")}
        ${text(400,175,"= 4/8","txt")}

        ${text(635,115,"4/8","big")}
        ${text(635,175,"= 1/2","txt")}

        ${line(260,150,300,150)}
        ${line(495,150,535,150)}

        ${text(
          400,
          290,
          "अंश और हर को एक ही अशून्य संख्या से गुणा करें",
          "small"
        )}

        ${text(
          400,
          345,
          "1/2 = 2/4 = 4/8",
          "big"
        )}
      `
    );
  }


  function rationalComparison() {

    return svgWrap(
      "परिमेय संख्याओं का क्रम",

      `
        ${text(
          400,
          55,
          "2/3 और 3/4 की तुलना",
          "big"
        )}

        ${rect(100,100,250,170)}
        ${rect(450,100,250,170)}

        ${text(225,140,"2/3","big")}
        ${text(225,200,"= 8/12","txt")}

        ${text(575,140,"3/4","big")}
        ${text(575,200,"= 9/12","txt")}

        ${text(
          400,
          315,
          "8/12 < 9/12",
          "big"
        )}

        ${text(
          400,
          365,
          "अतः 2/3 < 3/4",
          "big"
        )}
      `
    );
  }


  /* =======================================================
     CLASS 7 — CHAPTER 2
     घातांक
  ======================================================= */


  function exponentRules() {

    return svgWrap(
      "घातांक का अर्थ और नियम",

      `
        ${text(
          400,
          55,
          "2⁴ = 2 × 2 × 2 × 2 = 16",
          "big"
        )}

        ${rect(70,105,210,150)}
        ${rect(295,105,210,150)}
        ${rect(520,105,210,150)}

        ${text(175,145,"aᵐ","big")}
        ${text(175,200,"× aⁿ","big")}

        ${text(400,145,"समान आधार","txt")}
        ${text(400,200,"घात जोड़ें","txt")}

        ${text(625,145,"aᵐ⁺ⁿ","big")}
        ${text(625,200,"नया घात","txt")}

        ${text(
          400,
          325,
          "aᵐ × aⁿ = aᵐ⁺ⁿ",
          "big"
        )}

        ${text(
          400,
          375,
          "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
          "small"
        )}
      `
    );
  }


  function rationalExponent() {

    return svgWrap(
      "परिमेय संख्या को घात द्वारा व्यक्त करना",

      `
        ${rect(90,80,250,150)}
        ${rect(455,80,250,150)}

        ${text(215,125,"(2/3)³","big")}
        ${text(215,185,"= (2/3)×(2/3)×(2/3)","small")}

        ${text(580,125,"8/27","big")}
        ${text(580,185,"= 2³/3³","small")}

        ${line(345,155,445,155)}

        ${text(
          400,
          290,
          "(a/b)ⁿ = aⁿ/bⁿ",
          "big"
        )}

        ${text(
          400,
          345,
          "ऋणात्मक आधार में सम और विषम घात का प्रभाव भी समझें।",
          "small"
        )}
      `
    );
  }


  function negativeExponent() {

    return svgWrap(
      "धनात्मक और ऋणात्मक घातांक",

      `
        ${rect(80,80,250,170)}
        ${rect(470,80,250,170)}

        ${text(205,125,"2³","big")}
        ${text(205,185,"= 8","big")}

        ${text(595,125,"2⁻³","big")}
        ${text(595,185,"= 1/2³ = 1/8","txt")}

        ${line(330,165,470,165)}

        ${text(
          400,
          305,
          "a⁻ⁿ = 1/aⁿ",
          "big"
        )}

        ${text(
          400,
          360,
          "ऋणात्मक घात = धनात्मक घात का व्युत्क्रम",
          "small"
        )}
      `
    );
  }


  function powersComparison() {

    return svgWrap(
      "बड़ी और छोटी संख्याओं की घातांकीय तुलना",

      `
        ${line(110,225,690,225)}

        ${[150,250,350,450,550,650]
          .map(x => line(x,210,x,240))
          .join("")}

        ${text(150,275,"10⁻³","small")}
        ${text(250,275,"10⁻²","small")}
        ${text(350,275,"10⁻¹","small")}
        ${text(450,275,"10⁰","small")}
        ${text(550,275,"10¹","small")}
        ${text(650,275,"10²","small")}

        ${text(
          400,
          70,
          "10⁻³ = 0.001",
          "big"
        )}

        ${text(
          400,
          125,
          "10⁵ = 100000",
          "big"
        )}

        ${text(
          400,
          350,
          "समान आधार होने पर घातों की तुलना से बड़ी-छोटी संख्या समझ सकते हैं।",
          "small"
        )}

        ${text(
          400,
          390,
          "10⁶ > 10⁴",
          "big"
        )}
      `
    );
  }


  /* =======================================================
     EXACT LESSON MAPPING
  ======================================================= */

  function selectDiagram(chapter, lesson) {

    if (chapter === 1) {

      if (lesson === 1) {
        return rationalMeaning();
      }

      if (lesson === 2) {
        return rationalNumberLine();
      }

      if (lesson === 3) {
        return equivalentFractions();
      }

      if (lesson === 4) {
        return rationalComparison();
      }
    }


    if (chapter === 2) {

      if (lesson === 1) {
        return exponentRules();
      }

      if (lesson === 2) {
        return rationalExponent();
      }

      if (lesson === 3) {
        return negativeExponent();
      }

      if (lesson === 4) {
        return powersComparison();
      }
    }

    return "";
  }


  /* =======================================================
     FIND LESSON CONTAINER
  ======================================================= */

  function findLessonContainer() {

    const ids = [
      "content",
      "lessonContent",
      "lesson-container"
    ];

    for (const id of ids) {

      const el =
        document.getElementById(id);

      if (el) return el;
    }


    const selectors = [
      ".lesson-content",
      ".lesson-container",
      "main"
    ];

    for (const selector of selectors) {

      const el =
        document.querySelector(selector);

      if (el) return el;
    }

    return null;
  }


  /* =======================================================
     RENDER
  ======================================================= */

  function render() {

    /* HARD ISOLATION */

    if (!isTargetLesson()) {
      return;
    }


    const info =
      getChapterLesson();

    if (!info) return;

    if (
      info.chapter !== 1 &&
      info.chapter !== 2
    ) {
      return;
    }


    const container =
      findLessonContainer();

    if (!container) return;


    /* Remove only OUR previous diagram */

    container
      .querySelectorAll("." + CARD_CLASS)
      .forEach(el => el.remove());


    const diagram =
      selectDiagram(
        info.chapter,
        info.lesson
      );

    if (!diagram) return;


    const wrapper =
      document.createElement("div");

    wrapper.innerHTML =
      diagram.trim();


    const newDiagram =
      wrapper.firstElementChild;

    if (!newDiagram) return;


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


  /* =======================================================
     START + OBSERVER
  ======================================================= */

  function start() {

    render();

    const observer =
      new MutationObserver(
        function () {
          render();
        }
      );


    const target =
      document.body ||
      document.documentElement;


    if (target) {

      observer.observe(
        target,
        {
          childList:true,
          subtree:true
        }
      );
    }
  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start,
      { once:true }
    );

  } else {

    start();
  }


  window.AADYAClass7Ch12DiagramEngine = {
    render
  };

})();
