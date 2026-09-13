/* =========================================================
   AADYA DIGITAL TEACHER
   CLASS 6 MATHEMATICS — COLOUR DIAGRAM ENGINE
   ---------------------------------------------------------
   IMPORTANT SAFETY RULES

   1. ONLY Class 6
   2. ONLY Mathematics
   3. ONLY /content/class6/mathematics/
   4. Never uses chapter number alone
   5. Reads actual lessonData title/concept/content
   6. Class 7 / Class 8 are completely ignored
   7. SVG based
   8. Colourful educational diagrams
========================================================= */

(function(){

  "use strict";

  const CARD_CLASS =
    "aadya-c6-diagram-card";

  const SCRIPT_NAME =
    "AADYAClass6MathematicsDiagramEngine";


  /* =====================================================
     CLASS 6 PATH GUARD
  ===================================================== */

  function isClass6MathematicsLesson(){

    const data =
      window.lessonData;

    if(!data){
      return false;
    }

    if(Number(data.class) !== 6){
      return false;
    }

    if(String(data.subject || "").trim() !== "गणित"){
      return false;
    }

    const params =
      new URLSearchParams(
        window.location.search
      );

    const path =
      params.get("lesson") || "";

    if(
      !/content\/class6\/mathematics\/
        (chapter\d+|textbook\d+)\/lesson\d+\.json/i
        .test(path.replace(/^\.\//,""))
    ){
      return false;
    }

    return true;
  }


  /* =====================================================
     TEXT HELPERS
  ===================================================== */

  function getLessonTitle(data){

    if(
      data &&
      typeof data.lesson === "object"
    ){
      return (
        data.lesson.title ||
        data.lesson.name ||
        ""
      );
    }

    return data?.title || "";
  }


  function getChapterTitle(data){

    if(
      data &&
      typeof data.chapter === "object"
    ){
      return (
        data.chapter.title ||
        data.chapter.name ||
        ""
      );
    }

    return (
      data?.chapter_title ||
      ""
    );
  }


  function collectText(data){

    const parts = [];

    parts.push(
      getLessonTitle(data)
    );

    parts.push(
      getChapterTitle(data)
    );

    if(data?.concept){
      parts.push(
        data.concept
      );
    }

    if(Array.isArray(data?.objectives)){
      parts.push(
        data.objectives.join(" ")
      );
    }

    if(Array.isArray(data?.learning_objectives)){
      parts.push(
        data.learning_objectives.join(" ")
      );
    }

    if(Array.isArray(data?.explanation)){

      data.explanation.forEach(
        item => {

          if(typeof item === "string"){
            parts.push(item);
          }

          if(item && typeof item === "object"){

            parts.push(
              item.heading || ""
            );

            parts.push(
              item.title || ""
            );

            parts.push(
              item.content || ""
            );

            parts.push(
              item.text || ""
            );

          }

        }
      );

    }

    if(Array.isArray(data?.simple_explanation)){

      data.simple_explanation.forEach(
        item => {

          if(typeof item === "string"){
            parts.push(item);
          }

          if(item && typeof item === "object"){

            parts.push(
              item.title || ""
            );

            parts.push(
              item.text || ""
            );

          }

        }
      );

    }

    return parts
      .join(" ")
      .toLowerCase();

  }


  /* =====================================================
     CONTAINER
  ===================================================== */

  function findLessonContainer(){

    const ids = [
      "content",
      "lessonContent",
      "lesson-container"
    ];

    for(
      const id of ids
    ){

      const el =
        document.getElementById(id);

      if(el){
        return el;
      }

    }

    const classes = [
      ".lesson-content",
      ".lesson-container",
      "main"
    ];

    for(
      const selector of classes
    ){

      const el =
        document.querySelector(
          selector
        );

      if(el){
        return el;
      }

    }

    return null;
  }


  /* =====================================================
     SVG HELPERS
  ===================================================== */

  function esc(value){

    return String(value ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");

  }


  function text(
    x,
    y,
    value,
    size = 24,
    color = "#222",
    weight = "600"
  ){

    return `
      <text
        x="${x}"
        y="${y}"
        text-anchor="middle"
        font-size="${size}"
        font-weight="${weight}"
        font-family="system-ui, sans-serif"
        fill="${color}"
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
    color = "#222",
    width = 4,
    dash = ""
  ){

    return `
      <line
        x1="${x1}"
        y1="${y1}"
        x2="${x2}"
        y2="${y2}"
        stroke="${color}"
        stroke-width="${width}"
        stroke-linecap="round"
        ${dash ? `stroke-dasharray="${dash}"` : ""}
      />
    `;

  }


  function circle(
    cx,
    cy,
    r,
    fill = "none",
    stroke = "#222",
    width = 4
  ){

    return `
      <circle
        cx="${cx}"
        cy="${cy}"
        r="${r}"
        fill="${fill}"
        stroke="${stroke}"
        stroke-width="${width}"
      />
    `;

  }


  function point(
    x,
    y,
    color = "#e63946"
  ){

    return `
      <circle
        cx="${x}"
        cy="${y}"
        r="7"
        fill="${color}"
      />
    `;

  }


  function wrap(
    title,
    body
  ){

    return `
      <section
        class="${CARD_CLASS}"
        style="
          background:#ffffff;
          border-radius:18px;
          padding:16px;
          margin:18px 0;
          box-shadow:0 4px 16px rgba(0,0,0,.08);
          border:1px solid #e5e7eb;
        "
      >

        <div
          style="
            font-weight:700;
            font-size:18px;
            margin-bottom:12px;
            color:#1d3557;
          "
        >
          📐 ${esc(title)}
        </div>

        <div
          style="
            width:100%;
            overflow:hidden;
            border-radius:14px;
            background:#f8fbff;
          "
        >

          <svg
            viewBox="0 0 800 440"
            width="100%"
            role="img"
            aria-label="${esc(title)}"
            xmlns="http://www.w3.org/2000/svg"
          >

            ${body}

          </svg>

        </div>

      </section>
    `;

  }


  /* =====================================================
     DIAGRAM 1 — NUMBER LINE
  ===================================================== */

  function numberLine(){

    let body = "";

    body += line(
      90,260,
      710,260,
      "#1d3557",
      5
    );

    for(
      let i=0;
      i<=10;
      i++
    ){

      const x =
        100 + i*60;

      body += line(
        x,245,
        x,275,
        "#457b9d",
        4
      );

      body += text(
        x,
        310,
        i,
        22,
        "#1d3557"
      );

    }

    body += point(
      340,
      260,
      "#e63946"
    );

    body += text(
      340,
      210,
      "संख्या रेखा",
      30,
      "#1d3557",
      "700"
    );

    return wrap(
      "संख्या रेखा — संख्याओं का रास्ता",
      body
    );

  }


  /* =====================================================
     DIAGRAM 2 — PLACE VALUE
  ===================================================== */

  function placeValue(){

    return wrap(
      "स्थानीय मान — 4,582 को समझें",

      `
        <rect
          x="100"
          y="100"
          width="600"
          height="220"
          rx="16"
          fill="#eef6ff"
          stroke="#457b9d"
          stroke-width="4"
        />

        ${text(
          400,80,
          "4  5  8  2",
          38,
          "#1d3557",
          "700"
        )}

        ${text(
          170,165,
          "हजार",
          22,
          "#e63946"
        )}

        ${text(
          315,165,
          "सैकड़ा",
          22,
          "#2a9d8f"
        )}

        ${text(
          470,165,
          "दहाई",
          22,
          "#f4a261"
        )}

        ${text(
          625,165,
          "इकाई",
          22,
          "#457b9d"
        )}

        ${text(
          170,230,
          "4000",
          28,
          "#e63946",
          "700"
        )}

        ${text(
          315,230,
          "500",
          28,
          "#2a9d8f",
          "700"
        )}

        ${text(
          470,230,
          "80",
          28,
          "#f4a261",
          "700"
        )}

        ${text(
          625,230,
          "2",
          28,
          "#457b9d",
          "700"
        )}

        ${text(
          400,385,
          "4,582 = 4000 + 500 + 80 + 2",
          28,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 3 — INTEGER NUMBER LINE
  ===================================================== */

  function integerLine(){

    let body =
      line(
        80,250,
        720,250,
        "#1d3557",
        5
      );

    for(
      let n=-5;
      n<=5;
      n++
    ){

      const x =
        100 + (n+5)*60;

      body += line(
        x,235,
        x,265,
        n<0
          ? "#e76f51"
          : "#2a9d8f",
        4
      );

      body += text(
        x,
        305,
        n,
        21,
        n<0
          ? "#e76f51"
          : "#1d3557"
      );

    }

    body += text(
      400,
      100,
      "ऋणात्मक ← 0 → धनात्मक",
      30,
      "#1d3557",
      "700"
    );

    return wrap(
      "पूर्णांक — संख्या रेखा पर",
      body
    );

  }


  /* =====================================================
     DIAGRAM 4 — BAR GRAPH
  ===================================================== */

  function barGraph(){

    return wrap(
      "दण्ड आलेख — आँकड़ों को चित्र में देखें",

      `
        ${line(
          110,350,
          110,80,
          "#1d3557",
          5
        )}

        ${line(
          110,350,
          700,350,
          "#1d3557",
          5
        )}

        <rect
          x="180"
          y="230"
          width="70"
          height="120"
          rx="8"
          fill="#457b9d"
        />

        <rect
          x="320"
          y="170"
          width="70"
          height="180"
          rx="8"
          fill="#2a9d8f"
        />

        <rect
          x="460"
          y="110"
          width="70"
          height="240"
          rx="8"
          fill="#e9c46a"
        />

        <rect
          x="600"
          y="200"
          width="70"
          height="150"
          rx="8"
          fill="#e76f51"
        />

        ${text(
          215,385,
          "A",
          22,
          "#1d3557"
        )}

        ${text(
          355,385,
          "B",
          22,
          "#1d3557"
        )}

        ${text(
          495,385,
          "C",
          22,
          "#1d3557"
        )}

        ${text(
          635,385,
          "D",
          22,
          "#1d3557"
        )}

        ${text(
          400,55,
          "दण्ड आलेख",
          30,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 5 — ALGEBRA
  ===================================================== */

  function algebraExpression(){

    return wrap(
      "बीजीय व्यंजक — पद, गुणांक और चर",

      `
        <rect
          x="100"
          y="120"
          width="600"
          height="180"
          rx="18"
          fill="#f4f9ff"
          stroke="#457b9d"
          stroke-width="4"
        />

        ${text(
          250,235,
          "3x",
          46,
          "#e63946",
          "700"
        )}

        ${text(
          400,235,
          "+",
          42,
          "#1d3557",
          "700"
        )}

        ${text(
          550,235,
          "5",
          46,
          "#2a9d8f",
          "700"
        )}

        ${text(
          250,165,
          "गुणांक × चर",
          22,
          "#e63946"
        )}

        ${text(
          550,165,
          "अचर",
          22,
          "#2a9d8f"
        )}

        ${text(
          400,370,
          "3x + 5",
          34,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 6 — ANGLE
  ===================================================== */

  function angleDiagram(){

    return wrap(
      "कोण — दो किरणों के बीच का खुलाव",

      `
        ${line(
          160,330,
          400,120,
          "#457b9d",
          6
        )}

        ${line(
          160,330,
          650,330,
          "#e76f51",
          6
        )}

        ${point(
          160,330,
          "#1d3557"
        )}

        <path
          d="
            M245 255
            A110 110 0 0 1 275 330
          "
          fill="none"
          stroke="#2a9d8f"
          stroke-width="7"
        />

        ${text(
          160,370,
          "O",
          26,
          "#1d3557",
          "700"
        )}

        ${text(
          400,90,
          "भुजा",
          22,
          "#457b9d"
        )}

        ${text(
          620,310,
          "भुजा",
          22,
          "#e76f51"
        )}

        ${text(
          285,245,
          "∠",
          32,
          "#2a9d8f",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 7 — TRIANGLE
  ===================================================== */

  function triangleDiagram(){

    return wrap(
      "त्रिभुज — तीन भुजाएँ और तीन कोण",

      `
        <polygon
          points="400,70 150,350 650,350"
          fill="#eef6ff"
          stroke="#1d3557"
          stroke-width="6"
        />

        ${point(
          400,70,
          "#e63946"
        )}

        ${point(
          150,350,
          "#2a9d8f"
        )}

        ${point(
          650,350,
          "#f4a261"
        )}

        ${text(
          400,50,
          "A",
          28,
          "#e63946",
          "700"
        )}

        ${text(
          125,380,
          "B",
          28,
          "#2a9d8f",
          "700"
        )}

        ${text(
          675,380,
          "C",
          28,
          "#f4a261",
          "700"
        )}

        ${text(
          400,415,
          "∠A + ∠B + ∠C = 180°",
          28,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 8 — QUADRILATERAL
  ===================================================== */

  function quadrilateralDiagram(){

    return wrap(
      "चतुर्भुज — चार भुजाओं की आकृति",

      `
        <polygon
          points="
            190,130
            610,130
            680,330
            120,330
          "
          fill="#fff3e6"
          stroke="#e76f51"
          stroke-width="6"
        />

        ${text(
          400,90,
          "चार भुजाएँ",
          30,
          "#e76f51",
          "700"
        )}

        ${text(
          400,410,
          "चारों आन्तरिक कोणों का योग = 360°",
          27,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 9 — CIRCLE
  ===================================================== */

  function circleDiagram(){

    return wrap(
      "वृत्त — केन्द्र, त्रिज्या और व्यास",

      `
        ${circle(
          400,
          220,
          145,
          "#eef6ff",
          "#457b9d",
          6
        )}

        ${point(
          400,
          220,
          "#e63946"
        )}

        ${line(
          400,220,
          545,220,
          "#2a9d8f",
          7
        )}

        ${line(
          255,220,
          545,220,
          "#e76f51",
          5
        )}

        ${text(
          400,245,
          "केन्द्र",
          21,
          "#e63946"
        )}

        ${text(
          475,205,
          "त्रिज्या r",
          23,
          "#2a9d8f"
        )}

        ${text(
          400,185,
          "व्यास d = 2r",
          25,
          "#e76f51",
          "700"
        )}

        ${text(
          400,405,
          "गोल वस्तुएँ → पहिया, प्लेट, घड़ी",
          25,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 10 — FRACTION
  ===================================================== */

  function fractionDiagram(){

    return wrap(
      "भिन्न — पूरे का एक हिस्सा",

      `
        ${text(
          400,80,
          "3/4",
          42,
          "#1d3557",
          "700"
        )}

        <rect
          x="160"
          y="140"
          width="480"
          height="180"
          rx="15"
          fill="#ffffff"
          stroke="#1d3557"
          stroke-width="5"
        />

        <rect
          x="160"
          y="140"
          width="120"
          height="180"
          fill="#457b9d"
        />

        <rect
          x="280"
          y="140"
          width="120"
          height="180"
          fill="#2a9d8f"
        />

        <rect
          x="400"
          y="140"
          width="120"
          height="180"
          fill="#e9c46a"
        />

        <rect
          x="520"
          y="140"
          width="120"
          height="180"
          fill="#eeeeee"
        />

        ${text(
          340,370,
          "3 भाग रंगे हुए",
          27,
          "#1d3557",
          "700"
        )}

        ${text(
          560,370,
          "1 भाग शेष",
          22,
          "#555"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 11 — SYMMETRY
  ===================================================== */

  function symmetryDiagram(){

    return wrap(
      "सममिति — दर्पण जैसा संतुलन",

      `
        <polygon
          points="
            400,70
            300,180
            330,180
            250,320
            400,270
            550,320
            470,180
            500,180
          "
          fill="#e9c46a"
          stroke="#1d3557"
          stroke-width="5"
        />

        ${line(
          400,50,
          400,350,
          "#e63946",
          4,
          "10 8"
        )}

        ${text(
          400,410,
          "लाल रेखा = सममिति अक्ष",
          27,
          "#e63946",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 12 — COORDINATE PLANE
  ===================================================== */

  function coordinatePlane(){

    let body = "";

    body += line(
      90,220,
      710,220,
      "#1d3557",
      4
    );

    body += line(
      400,50,
      400,390,
      "#1d3557",
      4
    );

    for(
      let i=-5;
      i<=5;
      i++
    ){

      if(i===0) continue;

      const x =
        400 + i*55;

      const y =
        220 - i*55;

      body += line(
        x,213,
        x,227,
        "#457b9d",
        3
      );

      body += line(
        393,y,
        407,y,
        "#457b9d",
        3
      );

    }

    body += point(
      565,
      110,
      "#e63946"
    );

    body += text(
      585,105,
      "(3,2)",
      25,
      "#e63946",
      "700"
    );

    body += text(
      400,35,
      "Y",
      25,
      "#1d3557",
      "700"
    );

    body += text(
      735,220,
      "X",
      25,
      "#1d3557",
      "700"
    );

    return wrap(
      "कार्तीय तल — बिंदु का पता",
      body
    );

  }


  /* =====================================================
     DIAGRAM 13 — 3D CUBE
  ===================================================== */

  function cubeDiagram(){

    return wrap(
      "घन — 3D आकृति",

      `
        <polygon
          points="
            250,150
            450,100
            620,180
            420,230
          "
          fill="#eef6ff"
          stroke="#457b9d"
          stroke-width="5"
        />

        <polygon
          points="
            250,150
            420,230
            420,390
            250,310
          "
          fill="#dff5f0"
          stroke="#2a9d8f"
          stroke-width="5"
        />

        <polygon
          points="
            420,230
            620,180
            620,340
            420,390
          "
          fill="#fff0df"
          stroke="#e76f51"
          stroke-width="5"
        />

        ${text(
          400,60,
          "घन",
          34,
          "#1d3557",
          "700"
        )}

        ${text(
          400,420,
          "सभी किनारे बराबर",
          26,
          "#1d3557",
          "700"
        )}
      `
    );

  }


  /* =====================================================
     DIAGRAM 14 — DATA TABLE
  ===================================================== */

  function tallyDiagram(){

    return wrap(
      "बारंबारता — गिनती को व्यवस्थित करें",

      `
        <rect
          x="130"
          y="90"
          width="540"
          height="250"
          fill="#ffffff"
          stroke="#1d3557"
          stroke-width="4"
        />

        ${line(
          130,150,
          670,150,
          "#1d3557",
          3
        )}

        ${line(
          130,215,
          670,215,
          "#1d3557",
          3
        )}

        ${line(
          130,280,
          670,280,
          "#1d3557",
          3
        )}

        ${line(
          360,90,
          360,340,
          "#1d3557",
          3
        )}

        ${text(
          245,130,
          "मान",
          23,
          "#1d3557",
          "700"
        )}

        ${text(
          515,130,
          "बारंबारता",
          23,
          "#1d3557",
          "700"
        )}

        ${text(
          245,195,
          "2",
          25,
          "#457b9d"
        )}

        ${text(
          515,195,
          "4",
          25,
          "#2a9d8f"
        )}

        ${text(
          245,260,
          "3",
          25,
          "#457b9d"
        )}

        ${text(
          515,260,
          "5",
          25,
          "#2a9d8f"
        )}

        ${text(
          400,390,
          "सबसे अधिक बार आने वाला मान → बहुलक",
          24,
          "#e76f51",
          "700"
        )}
      `
    );

  }


  /* =====================================================
  DIAGRAM SELECTOR
     IMPORTANT:
     Based on actual lesson content,
     NOT merely chapter number.
  ===================================================== */

  function selectDiagram(data){

    const h =
      collectText(data);

    /* Number / place value */

    if(
      /स्थानीय मान|संख्यांक|अंक.*प्रयोग|दशमलव|स्थानिक मान/.test(h)
    ){
      return placeValue();
    }


    if(
      /संख्या रेखा|प्राकृतिक संख्या|पूर्ण संख्या/.test(h)
    ){
      return numberLine();
    }


    if(
      /पूर्णांक|ऋणात्मक|धनात्मक|निरपेक्ष मान/.test(h)
    ){
      return integerLine();
    }


    /* Statistics */

    if(
      /बार ग्राफ|दण्ड आलेख|बारम्बारता.*आलेख|ग्राफ/.test(h)
    ){
      return barGraph();
    }


    if(
      /बारम्बारता|आँकड़ों.*सारणी|आवृत्ति/.test(h)
    ){
      return tallyDiagram();
    }


    /* Algebra */

    if(
      /बीजीय व्यंजक|व्यंजक|गुणांक|चर और अचर|पद.*गुणनखण्ड/.test(h)
    ){
      return algebraExpression();
    }


    /* Geometry */

    if(
      /कोण|कोणमापी|समकोण|न्यून कोण|अधिक कोण/.test(h)
    ){
      return angleDiagram();
    }


    if(
      /त्रिभुज|तीन भुजा|तीन कोण/.test(h)
    ){
      return triangleDiagram();
    }


    if(
      /चतुर्भुज|चार भुजा|समांतर चतुर्भुज|आयत|वर्ग/.test(h)
    ){
      return quadrilateralDiagram();
    }


    if(
      /वृत्त|गोल|त्रिज्या|व्यास|परिधि/.test(h)
    ){
      return circleDiagram();
    }


    if(
      /बिंदु|बिन्दु|रेखा|रेखाखंड|तल|समतल/.test(h)
    ){
      return triangleDiagram();
    }


    /* Fraction */

    if(
      /भिन्न|अंश|हर|मिश्र भिन्न|दशमलव भिन्न/.test(h)
    ){
      return fractionDiagram();
    }


    /* Symmetry */

    if(
      /सममिति|सममित|दर्पण प्रतिबिम्ब/.test(h)
    ){
      return symmetryDiagram();
    }


    /* Coordinate */

    if(
      /निर्देशांक|कार्तीय|x-अक्ष|y-अक्ष|चतुर्थांश/.test(h)
    ){
      return coordinatePlane();
    }


    /* 3D */

    if(
      /घनाभ|घन|त्रिविमीय|आयतन|ठोस आकृति/.test(h)
    ){
      return cubeDiagram();
    }


    /* Generic mathematics fallback */

    return numberLine();

  }


  /* =====================================================
     RENDER
  ===================================================== */

  function render(){

    if(
      !isClass6MathematicsLesson()
    ){
      return;
    }

    const container =
      findLessonContainer();

    if(!container){
      return;
    }

    if(
      container.querySelector(
        "." + CARD_CLASS
      )
    ){
      return;
    }

    const diagram =
      selectDiagram(
        window.lessonData
      );

    if(!diagram){
      return;
    }

    const wrapper =
      document.createElement("div");

    wrapper.innerHTML =
      diagram.trim();

    const newDiagram =
      wrapper.firstElementChild;

    if(!newDiagram){
      return;
    }

    const tryYourself =
      container.querySelector(
        "#tryYourself"
      );

    if(
      tryYourself &&
      tryYourself.parentNode
    ){

      tryYourself.parentNode.insertBefore(
        newDiagram,
        tryYourself
      );

    }
    else{

      container.appendChild(
        newDiagram
      );

    }

  }


  /* =====================================================
     REFRESH
  ===================================================== */

  function refresh(){

    setTimeout(
      render,
      120
    );

  }


  /* =====================================================
     GLOBAL API
  ===================================================== */

  window[
    SCRIPT_NAME
  ] = {

    render:render,

    refresh:refresh

  };


  /* =====================================================
     DOM READY
  ===================================================== */

  document.addEventListener(
    "DOMContentLoaded",
    function(){

      refresh();

    }
  );


  /* =====================================================
     LESSON RENDER WATCHER
  ===================================================== */

  const observer =
    new MutationObserver(
      function(){

        refresh();

      }
    );


  function startObserver(){

    const target =
      document.getElementById(
        "content"
      );

    if(!target){
      return;
    }

    observer.observe(
      target,
      {
        childList:true,
        subtree:true
      }
    );

  }


  document.addEventListener(
    "DOMContentLoaded",
    startObserver
  );


})();
