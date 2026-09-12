/*
===========================================================
AADYA DIGITAL TEACHER
Class 8 Mathematics
Chapters 11–14 Diagram Engine
ONLY FOR CLASS 8
===========================================================
*/

(function () {
  "use strict";

  function getData() {
    return window.lessonData || {};
  }

  function isClass8() {

    if (getData().class !== undefined) {
      return Number(getData().class) === 8;
    }

    const p =
      new URLSearchParams(location.search).get("lesson") || "";

    return /\/class8\//i.test(
      decodeURIComponent(p)
    );
  }

  function getChapter() {
    const data = getData();

    if (data.chapter !== undefined) {
      return Number(data.chapter);
    }

    const p =
      new URLSearchParams(location.search).get("lesson") || "";

    const m =
      decodeURIComponent(p).match(
        /textbook(\d+)/i
      );

    return m ? Number(m[1]) : 0;
  }

  function getLesson() {

    const data = getData();

    if (data.lesson !== undefined) {
      return Number(data.lesson);
    }

    const p =
      new URLSearchParams(location.search).get("lesson") || "";

    const m =
      decodeURIComponent(p).match(
        /lesson(\d+)\.json/i
      );

    return m ? Number(m[1]) : 0;
  }

  function container() {

    return document.querySelector(
      "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
    );
  }

  function esc(v) {

    return String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function wrap(title, body) {

    return `
      <div
        class="aadya-c8-ch11-14-diagram"
        style="
          margin:18px 0;
          padding:14px;
          background:#fff;
          border:1px solid #e5e5e5;
          border-radius:18px;
          overflow:hidden;
        "
      >

        <div style="
          font-weight:800;
          font-size:16px;
          margin-bottom:10px;
        ">
          📐 ${esc(title)}
        </div>

        <svg
          viewBox="0 0 760 300"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${body}
        </svg>

      </div>
    `;
  }

  function text(
    x,
    y,
    value,
    size = 20,
    weight = 600
  ) {

    return `
      <text
        x="${x}"
        y="${y}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${size}"
        font-weight="${weight}"
        fill="#222"
      >
        ${esc(value)}
      </text>
    `;
  }

  function line(
    x1,
    y1,
    x2,
    y2,
    width = 3
  ) {

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

  function rect(
    x,
    y,
    w,
    h,
    fill = "#f5f5f5"
  ) {

    return `
      <rect
        x="${x}"
        y="${y}"
        width="${w}"
        height="${h}"
        rx="10"
        fill="${fill}"
        stroke="#222"
        stroke-width="2"
      />
    `;
  }

  function circle(
    cx,
    cy,
    r,
    fill = "#fff"
  ) {

    return `
      <circle
        cx="${cx}"
        cy="${cy}"
        r="${r}"
        fill="${fill}"
        stroke="#222"
        stroke-width="3"
      />
    `;
  }


  /* =====================================================
     CHAPTER 11
     ===================================================== */

  function ch11l1() {

    return wrap(
      "चक्रवृद्धि ब्याज — पैसा कैसे बढ़ता है?",
      `
        ${text(380,35,"ब्याज पर भी ब्याज",24,700)}

        ${rect(80,75,180,70)}
        ${rect(290,75,180,70)}
        ${rect(500,75,180,70)}

        ${text(170,105,"मूलधन",19,700)}
        ${text(170,132,"₹10,000",25,700)}

        ${text(380,105,"पहला वर्ष",19,700)}
        ${text(380,132,"+ ₹1,000",25,700)}

        ${text(590,105,"नई राशि",19,700)}
        ${text(590,132,"₹11,000",25,700)}

        ${text(275,110,"→",35,700)}
        ${text(485,110,"→",35,700)}

        ${text(
          380,
          220,
          "अगले वर्ष ब्याज ₹11,000 पर लगेगा",
          21,
          700
        )}

        ${text(
          380,
          260,
          "यही चक्रवृद्धि ब्याज का मुख्य विचार है",
          19,
          600
        )}
      `
    );
  }


  function ch11l2() {

    return wrap(
      "वार्षिक और अर्धवार्षिक चक्रवृद्धि",
      `
        ${text(380,35,"अर्धवार्षिक = साल में 2 बार",24,700)}

        ${circle(180,145,65)}
        ${circle(380,145,65)}
        ${circle(580,145,65)}

        ${text(180,145,"6 माह",21,700)}
        ${text(380,145,"6 माह",21,700)}
        ${text(580,145,"6 माह",21,700)}

        ${line(245,145,315,145,3)}
        ${line(445,145,515,145,3)}

        ${text(380,230,"12% वार्षिक → 6% प्रति छमाही",22,700)}

        ${text(
          380,
          270,
          "1 वर्ष = 2 अर्धवर्ष",
          19,
          600
        )}
      `
    );
  }


  function ch11l3() {

    return wrap(
      "तिमाही चक्रवृद्धि ब्याज",
      `
        ${text(380,35,"एक वर्ष = 4 तिमाही",24,700)}

        ${circle(160,145,55)}
        ${circle(300,145,55)}
        ${circle(440,145,55)}
        ${circle(580,145,55)}

        ${text(160,145,"Q1",22,700)}
        ${text(300,145,"Q2",22,700)}
        ${text(440,145,"Q3",22,700)}
        ${text(580,145,"Q4",22,700)}

        ${text(
          380,
          225,
          "12% वार्षिक → 3% प्रति तिमाही",
          22,
          700
        )}

        ${text(
          380,
          265,
          "2 वर्ष = 8 तिमाही",
          19,
          600
        )}
      `
    );
  }


  function ch11l4() {

    return wrap(
      "वस्तु की कीमत में वृद्धि और कमी",
      `
        ${text(380,35,"बाजार की कीमत का बदलाव",24,700)}

        ${rect(80,80,220,100)}
        ${rect(460,80,220,100)}

        ${text(190,110,"पुरानी कीमत",19,700)}
        ${text(190,150,"₹500",30,700)}

        ${text(570,110,"नई कीमत",19,700)}
        ${text(570,150,"₹550",30,700)}

        ${text(380,130,"+10%",26,700)}

        ${text(
          380,
          235,
          "वृद्धि = ₹50",
          21,
          700
        )}

        ${text(
          380,
          270,
          "प्रतिशत वृद्धि = 50 ÷ 500 × 100 = 10%",
          18,
          600
        )}
      `
    );
  }


  /* =====================================================
     CHAPTER 12
     ===================================================== */

  function ch12l1() {

    return wrap(
      "आयताकार क्षेत्र का क्षेत्रफल",
      `
        ${rect(100,70,560,160,"#eeeeee")}
        ${rect(170,105,420,90,"#fff")}

        ${text(380,88,"बाहरी आयत",19,700)}
        ${text(380,150,"भीतरी आयत",19,700)}

        ${text(
          380,
          260,
          "मार्ग का क्षेत्रफल = बाहरी − भीतरी",
          21,
          700
        )}
      `
    );
  }


  function ch12l2() {

    return wrap(
      "त्रिभुज का क्षेत्रफल",
      `
        <polygon
          points="170,220 590,220 400,65"
          fill="#f5f5f5"
          stroke="#222"
          stroke-width="3"
        />

        ${line(400,65,400,220,3)}

        ${text(380,250,"आधार = b",19,700)}
        ${text(445,145,"ऊँचाई = h",18,700)}

        ${text(
          380,
          280,
          "A = ½ × b × h",
          23,
          700
        )}
      `
    );
  }


  function ch12l3() {

    return wrap(
      "समान्तर चतुर्भुज का क्षेत्रफल",
      `
        <polygon
          points="160,210 620,210 530,70 70,70"
          fill="#f5f5f5"
          stroke="#222"
          stroke-width="3"
        />

        ${line(530,70,530,210,3)}

        ${text(380,235,"आधार = b",19,700)}
        ${text(555,140,"h",20,700)}

        ${text(
          380,
          275,
          "A = b × h",
          23,
          700
        )}
      `
    );
  }


  function ch12l4() {

    return wrap(
      "समचतुर्भुज का क्षेत्रफल",
      `
        <polygon
          points="380,55 610,150 380,245 150,150"
          fill="#f5f5f5"
          stroke="#222"
          stroke-width="3"
        />

        ${line(150,150,610,150,3)}
        ${line(380,55,380,245,3)}

        ${text(380,150,"O",18,700)}

        ${text(
          380,
          275,
          "A = ½ × d₁ × d₂",
          23,
          700
        )}
      `
    );
  }


  function ch12l5() {

    return wrap(
      "घन और घनाभ",
      `
        ${rect(120,100,180,120)}
        ${text(210,160,"घनाभ",22,700)}
        ${text(210,250,"2(lb+bh+hl)",20,700)}

        <polygon
          points="470,100 590,70 650,105 530,135"
          fill="#eeeeee"
          stroke="#222"
          stroke-width="2"
        />

        <polygon
          points="470,100 530,135 530,225 470,190"
          fill="#dddddd"
          stroke="#222"
          stroke-width="2"
        />

        <polygon
          points="530,135 650,105 650,195 530,225"
          fill="#fff"
          stroke="#222"
          stroke-width="2"
        />

        ${text(585,155,"घन",21,700)}
        ${text(585,255,"6a²",20,700)}
      `
    );
  }


  function ch12l6() {

    return wrap(
      "मिश्रित आकृतियों का क्षेत्रफल",
      `
        ${rect(120,70,500,150,"#eeeeee")}

        <polygon
          points="120,220 250,90 380,220"
          fill="#fff"
          stroke="#222"
          stroke-width="3"
        />

        ${text(480,145,"आकृति को",20,700)}
        ${text(480,175,"छोटे भागों में बाँटें",20,700)}

        ${text(
          380,
          265,
          "कुल क्षेत्रफल = सभी भागों के क्षेत्रफलों का योग",
          18,
          600
        )}
      `
    );
  }


  /* =====================================================
     CHAPTER 13
     ===================================================== */

  function ch13l1() {

    return wrap(
      "संख्या श्रेणी",
      `
        ${text(380,35,"नियम पहचानिए",24,700)}

        ${rect(55,90,105,60)}
        ${rect(185,90,105,60)}
        ${rect(315,90,105,60)}
        ${rect(445,90,105,60)}
        ${rect(575,90,105,60)}

        ${text(107,120,"2",25,700)}
        ${text(237,120,"4",25,700)}
        ${text(367,120,"6",25,700)}
        ${text(497,120,"8",25,700)}
        ${text(627,120,"?",27,700)}

        ${text(380,210,"हर बार +2",24,700)}
        ${text(380,260,"अगली संख्या = 10",21,700)}
      `
    );
  }


  function ch13l2() {

    return wrap(
      "अक्षर श्रेणी",
      `
        ${text(380,35,"अक्षरों का क्रम",24,700)}

        ${rect(80,90,140,65)}
        ${rect(310,90,140,65)}
        ${rect(540,90,140,65)}

        ${text(150,123,"ABC",27,700)}
        ${text(380,123,"BCD",27,700)}
        ${text(610,123,"CDE",27,700)}

        ${text(380,215,"हर अक्षर एक स्थान आगे",22,700)}
      `
    );
  }


  function ch13l3() {

    return wrap(
      "आकृतियाँ और त्रिभुज गिनना",
      `
        <polygon
          points="380,55 150,235 610,235"
          fill="#f5f5f5"
          stroke="#222"
          stroke-width="3"
        />

        ${line(380,55,380,235,3)}
        ${line(150,235,510,145,3)}
        ${line(610,235,250,145,3)}

        ${text(380,270,"छोटे और बड़े दोनों त्रिभुज गिनें",20,700)}
      `
    );
  }


  function ch13l4() {

    return wrap(
      "कागज मोड़ना और लुप्त संख्या",
      `
        ${rect(80,75,220,140,"#fff")}
        ${line(190,75,190,215,4)}

        ${text(190,140,"↪",38,700)}

        ${text(380,145,"→",40,700)}

        ${rect(460,75,220,140,"#fff")}

        <circle
          cx="540"
          cy="145"
          r="10"
          fill="#222"
        />

        <circle
          cx="600"
          cy="145"
          r="10"
          fill="#222"
        />

        ${text(
          570,
          250,
          "खोलने पर सममिति",
          20,
          700
        )}
      `
    );
  }


  /* =====================================================
     CHAPTER 14
     ===================================================== */

  function ch14l1() {

    return wrap(
      "निखिलम् विधि — आधार और पूरक",
      `
        ${rect(80,80,170,75)}
        ${rect(295,80,170,75)}
        ${rect(510,80,170,75)}

        ${text(165,110,"भाजक",19,700)}
        ${text(165,140,"89",28,700)}

        ${text(380,110,"आधार",19,700)}
        ${text(380,140,"100",28,700)}

        ${text(595,110,"पूरक",19,700)}
        ${text(595,140,"11",28,700)}

        ${text(380,220,"100 − 89 = 11",27,700)}

        ${text(
          380,
          265,
          "आधार से भाजक घटाकर पूरक मिलता है",
          18,
          600
        )}
      `
    );
  }


  function ch14l2() {

    return wrap(
      "निखिलम् से भाग",
      `
        ${rect(130,80,500,80)}
        ${text(300,120,"101",32,700)}
        ${text(500,120,"82",32,700)}

        ${line(380,75,380,165,4)}

        ${text(380,210,"बाएँ भाग → भागफल",20,700)}
        ${text(380,245,"दाएँ भाग → शेषफल",20,700)}

        ${text(
          380,
          280,
          "आधार = 100",
          20,
          700
        )}
      `
    );
  }


  function ch14l3() {

    return wrap(
      "परावर्त्य योजयेत्",
      `
        ${rect(70,90,180,70)}
        ${rect(290,90,180,70)}
        ${rect(510,90,180,70)}

        ${text(160,125,"विचलन +d",20,700)}
        ${text(380,125,"परावर्तित −d",20,700)}
        ${text(600,125,"जोड़ते जाएँ",20,700)}

        ${text(380,220,"पहला अंक नीचे लाएँ",20,700)}
        ${text(380,255,"परावर्तित विचलन से गुणा",20,700)}
      `
    );
  }


  function selectDiagram() {

    const ch = getChapter();
    const ls = getLesson();

    const key =
      ch + "-" + ls;

    const map = {

      "11-1": ch11l1,
      "11-2": ch11l2,
      "11-3": ch11l3,
      "11-4": ch11l4,

      "12-1": ch12l1,
      "12-2": ch12l2,
      "12-3": ch12l3,
      "12-4": ch12l4,
      "12-5": ch12l5,
      "12-6": ch12l6,

      "13-1": ch13l1,
      "13-2": ch13l2,
      "13-3": ch13l3,
      "13-4": ch13l4,

      "14-1": ch14l1,
      "14-2": ch14l2,
      "14-3": ch14l3

    };

    return map[key]
      ? map[key]()
      : "";
  }


  function render() {

    if (!isClass8()) return;

    const ch = getChapter();

    if (ch < 11 || ch > 14) return;

    const box = container();

    if (!box) return;

    if (
      box.querySelector(
        ".aadya-c8-ch11-14-diagram"
      )
    ) {
      return;
    }

    const html =
      selectDiagram();

    if (!html) return;

    const holder =
      document.createElement("div");

    holder.innerHTML =
      html.trim();

    const diagram =
      holder.firstElementChild;

    if (!diagram) return;

    /*
      IMPORTANT:
      Diagram is inserted into the
      EXAMPLES section.
    */

    const examples =
      box.querySelector("#examples");

    if (examples) {

      examples.appendChild(
        diagram
      );

    } else {

      box.appendChild(
        diagram
      );

    }
  }


  function start() {

    setTimeout(render,150);
    setTimeout(render,700);
    setTimeout(render,1500);

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
        subtree:true
      }
    );

    window.AADYAClass8Ch11To14DiagramEngine = {
      refresh: function () {

        const old =
          document.querySelector(
            ".aadya-c8-ch11-14-diagram"
          );

        if (old) old.remove();

        render();
      }
    };
  }


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
