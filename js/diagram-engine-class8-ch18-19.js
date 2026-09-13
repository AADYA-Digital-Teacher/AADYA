/* =========================================================
   AADYA CLASS 8
   CHAPTER 18 + 19 DIAGRAM ENGINE
   SAFE ISOLATED ENGINE
   Does NOT touch Chapters 1–17
========================================================= */

(function(){

  "use strict";

  function getChapterNumber(){

    const data = window.lessonData;

    if(data && String(data.class) === "8"){
      return Number(data.chapter || 0);
    }

    const path = window.location.pathname;

    const match = path.match(
      /textbook(\d+)\/lesson\d+\.json$/
    );

    if(match){
      return Number(match[1]);
    }

    return 0;
  }


  function getLessonNumber(){

    const data = window.lessonData;

    if(data){
      return Number(data.lesson || 0);
    }

    return 0;
  }


  function findContainer(){

    return (
      document.querySelector("#content") ||
      document.querySelector("#lessonContent") ||
      document.querySelector("#lesson-container") ||
      document.querySelector(".lesson-content") ||
      document.querySelector(".lesson-container") ||
      document.querySelector("main")
    );

  }


  function svgBox(title, body){

    return `
      <div
        class="aadya-c1819-diagram"
        style="
          background:#fff;
          border-radius:18px;
          padding:16px;
          margin:18px 0;
          box-shadow:0 3px 14px rgba(0,0,0,.08);
          overflow:hidden;
        "
      >
        <div
          style="
            font-size:19px;
            font-weight:700;
            margin-bottom:10px;
            text-align:center;
          "
        >
          ${title}
        </div>

        ${body}

      </div>
    `;

  }


  /* =====================================================
     CHAPTER 18 DIAGRAMS
  ===================================================== */

  function chapter18Diagram(lesson){

    if(lesson === 1){

      return svgBox(
        "📐 समलम्ब का क्षेत्रफल",
        `
        <svg viewBox="0 0 420 240"
             width="100%"
             role="img">

          <polygon
            points="90,70 310,70 360,190 40,190"
            fill="#f1f1f1"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="90" y1="70"
            x2="310" y2="70"
            stroke="#111"
            stroke-width="5"
          />

          <line
            x1="40" y1="190"
            x2="360" y2="190"
            stroke="#111"
            stroke-width="5"
          />

          <line
            x1="200" y1="70"
            x2="200" y2="190"
            stroke="#d4af37"
            stroke-width="3"
            stroke-dasharray="7 6"
          />

          <text x="185" y="58"
                font-size="18"
                font-weight="700">
            a
          </text>

          <text x="198" y="218"
                font-size="18"
                font-weight="700">
            b
          </text>

          <text x="212" y="135"
                font-size="18"
                font-weight="700">
            h
          </text>

          <text x="95" y="238"
                font-size="17">
            क्षेत्रफल = ½(a+b)h
          </text>

        </svg>
        `
      );

    }


    if(lesson === 2){

      return svgBox(
        "⭕ वृत्त — त्रिज्या, व्यास और परिधि",
        `
        <svg viewBox="0 0 420 260"
             width="100%">

          <circle
            cx="205"
            cy="125"
            r="85"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <circle
            cx="205"
            cy="125"
            r="5"
            fill="#111"
          />

          <line
            x1="205" y1="125"
            x2="290" y2="125"
            stroke="#d4af37"
            stroke-width="4"
          />

          <line
            x1="120" y1="125"
            x2="290" y2="125"
            stroke="#111"
            stroke-width="2"
            stroke-dasharray="8 5"
          />

          <text x="244" y="116"
                font-size="18"
                font-weight="700">
            r
          </text>

          <text x="198" y="108"
                font-size="18"
                font-weight="700">
            d
          </text>

          <text x="75" y="235"
                font-size="17">
            d = 2r
          </text>

          <text x="200" y="235"
                font-size="17">
            C = πd = 2πr
          </text>

        </svg>
        `
      );

    }


    if(lesson === 3){

      return svgBox(
        "🔵 वृत्त का क्षेत्रफल",
        `
        <svg viewBox="0 0 420 270"
             width="100%">

          <circle
            cx="200"
            cy="125"
            r="90"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="200" y1="125"
            x2="290" y2="125"
            stroke="#d4af37"
            stroke-width="4"
          />

          <circle
            cx="200"
            cy="125"
            r="5"
            fill="#111"
          />

          <text x="235" y="115"
                font-size="18"
                font-weight="700">
            r
          </text>

          <text x="130" y="235"
                font-size="18"
                font-weight="700">
            A = πr²
          </text>

          <text x="120" y="258"
                font-size="15">
            अंदर की पूरी जगह = क्षेत्रफल
          </text>

        </svg>
        `
      );

    }


    if(lesson === 4){

      return svgBox(
        "🥫 बेलन — आयतन और सम्पूर्ण पृष्ठ",
        `
        <svg viewBox="0 0 420 300"
             width="100%">

          <ellipse
            cx="210"
            cy="65"
            rx="85"
            ry="25"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="125" y1="65"
            x2="125" y2="220"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="295" y1="65"
            x2="295" y2="220"
            stroke="#111"
            stroke-width="3"
          />

          <ellipse
            cx="210"
            cy="220"
            rx="85"
            ry="25"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="210" y1="65"
            x2="210" y2="220"
            stroke="#d4af37"
            stroke-width="3"
            stroke-dasharray="7 6"
          />

          <text x="218" y="145"
                font-size="18"
                font-weight="700">
            h
          </text>

          <text x="215" y="58"
                font-size="17"
                font-weight="700">
            r
          </text>

          <text x="105" y="265"
                font-size="16">
            V = πr²h
          </text>

          <text x="230" y="265"
                font-size="16">
            TSA = 2πr(h+r)
          </text>

        </svg>
        `
      );

    }


    if(lesson === 5){

      return svgBox(
        "🍦 शंकु — आयतन और सम्पूर्ण पृष्ठ",
        `
        <svg viewBox="0 0 420 310"
             width="100%">

          <line
            x1="210" y1="35"
            x2="110" y2="230"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="210" y1="35"
            x2="310" y2="230"
            stroke="#111"
            stroke-width="3"
          />

          <ellipse
            cx="210"
            cy="230"
            rx="100"
            ry="28"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="210" y1="35"
            x2="210" y2="230"
            stroke="#d4af37"
            stroke-width="3"
            stroke-dasharray="7 6"
          />

          <line
            x1="210" y1="230"
            x2="310" y2="230"
            stroke="#111"
            stroke-width="3"
          />

          <text x="218" y="140"
                font-size="18"
                font-weight="700">
            h
          </text>

          <text x="258" y="220"
                font-size="18"
                font-weight="700">
            r
          </text>

          <text x="258" y="125"
                font-size="18"
                font-weight="700">
            l
          </text>

          <text x="75" y="275"
                font-size="16">
            V = ⅓πr²h
          </text>

          <text x="230" y="275"
                font-size="16">
            TSA = πr(l+r)
          </text>

        </svg>
        `
      );

    }

    return "";

  }


  /* =====================================================
     CHAPTER 19 DIAGRAMS
  ===================================================== */

  function chapter19Diagram(lesson){

    if(lesson === 1){

      return svgBox(
        "🧩 आनुकल्पेण — (a+b)²",
        `
        <svg viewBox="0 0 420 260"
             width="100%">

          <rect
            x="60" y="45"
            width="190" height="190"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="170" y1="45"
            x2="170" y2="235"
            stroke="#111"
            stroke-width="2"
          />

          <line
            x1="60" y1="150"
            x2="250" y2="150"
            stroke="#111"
            stroke-width="2"
          />

          <text x="105" y="105"
                font-size="20"
                font-weight="700">
            a²
          </text>

          <text x="185" y="105"
                font-size="18">
            ab
          </text>

          <text x="105" y="190"
                font-size="18">
            ab
          </text>

          <text x="185" y="190"
                font-size="18"
                font-weight="700">
            b²
          </text>

          <text x="275" y="115"
                font-size="19">
            (a+b)²
          </text>

          <text x="275" y="145"
                font-size="18">
            = a² + 2ab + b²
          </text>

        </svg>
        `
      );

    }


    if(lesson === 2){

      return svgBox(
        "⚡ 45² — एकाधिकेन पूर्वेण",
        `
        <svg viewBox="0 0 420 240"
             width="100%">

          <text x="65" y="70"
                font-size="30"
                font-weight="700">
            45²
          </text>

          <text x="65" y="115"
                font-size="20">
            4 × 5
          </text>

          <text x="65" y="150"
                font-size="17">
            (एक अधिक)
          </text>

          <line
            x1="180" y1="45"
            x2="180" y2="175"
            stroke="#111"
            stroke-width="2"
          />

          <text x="215" y="85"
                font-size="28"
                font-weight="700">
            20
          </text>

          <text x="215" y="140"
                font-size="28"
                font-weight="700">
            25
          </text>

          <text x="310" y="115"
                font-size="30"
                font-weight="700">
            2025
          </text>

        </svg>
        `
      );

    }


    if(lesson === 3){

      return svgBox(
        "🎯 98² — आधार 100",
        `
        <svg viewBox="0 0 420 270"
             width="100%">

          <text x="55" y="55"
                font-size="22"
                font-weight="700">
            आधार = 100
          </text>

          <text x="55" y="95"
                font-size="21">
            98 → 2 कम
          </text>

          <text x="55" y="135"
                font-size="21">
            विचलन = −2
          </text>

          <line
            x1="55" y1="160"
            x2="365" y2="160"
            stroke="#111"
            stroke-width="2"
          />

          <text x="75" y="205"
                font-size="24"
                font-weight="700">
            98−2 = 96
          </text>

          <text x="250" y="205"
                font-size="24"
                font-weight="700">
            (−2)² = 04
          </text>

          <text x="135" y="250"
                font-size="27"
                font-weight="700">
            98² = 9604
          </text>

        </svg>
        `
      );

    }


    if(lesson === 4){

      return svgBox(
        "🧊 15³ — चार पदों का खेल",
        `
        <svg viewBox="0 0 420 300"
             width="100%">

          <text x="60" y="45"
                font-size="22"
                font-weight="700">
            15 = 10 + 5
          </text>

          <rect
            x="55" y="70"
            width="310"
            height="165"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <text x="75" y="105"
                font-size="18">
            10³
          </text>

          <text x="75" y="140"
                font-size="18">
            3×10²×5
          </text>

          <text x="75" y="175"
                font-size="18">
            3×10×5²
          </text>

          <text x="75" y="210"
                font-size="18">
            5³
          </text>

          <text x="220" y="105"
                font-size="18">
            = 1000
          </text>

          <text x="220" y="140"
                font-size="18">
            = 1500
          </text>

          <text x="220" y="175"
                font-size="18">
            = 750
          </text>

          <text x="220" y="210"
                font-size="18">
            = 125
          </text>

          <text x="120" y="270"
                font-size="24"
                font-weight="700">
            15³ = 3375
          </text>

        </svg>
        `
      );

    }


    if(lesson === 5){

      return svgBox(
        "🏆 (a+b)³ — घन का चार-भाग मॉडल",
        `
        <svg viewBox="0 0 420 300"
             width="100%">

          <rect
            x="50" y="55"
            width="315" height="175"
            fill="#f5f5f5"
            stroke="#111"
            stroke-width="3"
          />

          <line
            x1="155" y1="55"
            x2="155" y2="230"
            stroke="#111"
            stroke-width="2"
          />

          <line
            x1="260" y1="55"
            x2="260" y2="230"
            stroke="#111"
            stroke-width="2"
          />

          <line
            x1="50" y1="145"
            x2="365" y2="145"
            stroke="#111"
            stroke-width="2"
          />

          <text x="80" y="105"
                font-size="19">
            a³
          </text>

          <text x="175" y="105"
                font-size="17">
            3a²b
          </text>

          <text x="275" y="105"
                font-size="17">
            3ab²
          </text>

          <text x="80" y="195"
                font-size="19">
            b³
          </text>

          <text x="175" y="195"
                font-size="18">
            चार मुख्य पद
          </text>

          <text x="80" y="270"
                font-size="19"
                font-weight="700">
            (a+b)³=a³+3a²b+3ab²+b³
          </text>

        </svg>
        `
      );

    }

    return "";

  }


  function render(){

    const chapter = getChapterNumber();

    /* STRICT SAFETY GUARD */
    if(chapter !== 18 && chapter !== 19){
      return;
    }

    const lesson = getLessonNumber();

    const container = findContainer();

    if(!container){
      return;
    }

    if(
      container.querySelector(
        ".aadya-c1819-diagram"
      )
    ){
      return;
    }

    let diagram = "";

    if(chapter === 18){
      diagram = chapter18Diagram(lesson);
    }

    if(chapter === 19){
      diagram = chapter19Diagram(lesson);
    }

    if(!diagram){
      return;
    }

    const wrapper =
      document.createElement("div");

    wrapper.innerHTML =
      diagram.trim();

    const node =
      wrapper.firstElementChild;

    if(!node){
      return;
    }

    const tryYourself =
      container.querySelector(
        "#tryYourself"
      );

    if(tryYourself){

      tryYourself.parentNode.insertBefore(
        node,
        tryYourself
      );

    }else{

      container.appendChild(node);

    }

  }


  function refresh(){

    setTimeout(render,100);
    setTimeout(render,500);
    setTimeout(render,1000);

  }


  window.AADYAClass8Ch1819DiagramEngine = {
    refresh: refresh,
    render: render
  };


  if(document.readyState === "loading"){

    document.addEventListener(
      "DOMContentLoaded",
      refresh
    );

  }else{

    refresh();

  }


  const observer =
    new MutationObserver(function(){

      refresh();

    });


  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );

})();
