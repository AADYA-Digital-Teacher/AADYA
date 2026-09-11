(function () {
  "use strict";

  function getData() {
    return window.lessonData || null;
  }

  function getChapter() {
    return Number(getData() && getData().chapter);
  }

  function getLesson() {
    return Number(getData() && getData().lesson);
  }

  function isClass8() {
    const data = getData();

    if (data && data.class !== undefined) {
      return Number(data.class) === 8;
    }

    const path =
      new URLSearchParams(location.search).get("lesson") || "";

    return /\/class8\//i.test(decodeURIComponent(path));
  }

  function findContainer() {
    return document.querySelector(
      "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
    );
  }

  function diagram(title, body) {
    return `
      <div class="aadya-c8cb-diagram"
        style="
          margin:18px 0;
          padding:14px;
          border-radius:16px;
          background:#fff;
          box-shadow:0 5px 18px rgba(0,0,0,.08);
          overflow:hidden;
        ">

        <div style="
          font-weight:800;
          font-size:16px;
          margin-bottom:10px;
        ">
          📊 ${title}
        </div>

        <svg
          viewBox="0 0 760 270"
          width="100%"
          role="img"
          aria-label="${title}"
          style="display:block;"
        >
          ${body}
        </svg>
      </div>
    `;
  }

  const diagrams = {

    "11-1": diagram("चक्रवृद्धि — पैसा बढ़ने की सीढ़ी", `
      <rect x="90" y="175" width="120" height="45" rx="8"
        fill="none" stroke="#222" stroke-width="3"/>
      <rect x="250" y="140" width="120" height="80" rx="8"
        fill="none" stroke="#222" stroke-width="3"/>
      <rect x="410" y="100" width="120" height="120" rx="8"
        fill="none" stroke="#222" stroke-width="3"/>
      <rect x="570" y="55" width="120" height="165" rx="8"
        fill="none" stroke="#222" stroke-width="3"/>

      <text x="110" y="202" font-size="20">P</text>
      <text x="270" y="180" font-size="20">P + I₁</text>
      <text x="430" y="165" font-size="20">+ I₂</text>
      <text x="590" y="145" font-size="20">+ I₃</text>

      <text x="260" y="250" font-size="24">
        ब्याज → अगली अवधि में ब्याज
      </text>
    `),

    "11-2": diagram("अर्धवार्षिक — 1 साल = 2 periods", `
      <line x1="100" y1="130" x2="660" y2="130"
        stroke="#222" stroke-width="5"/>

      <circle cx="240" cy="130" r="9" fill="#222"/>
      <circle cx="520" cy="130" r="9" fill="#222"/>

      <text x="210" y="100" font-size="22">6 महीने</text>
      <text x="490" y="100" font-size="22">6 महीने</text>

      <text x="90" y="175" font-size="22">0</text>
      <text x="650" y="175" font-size="22">1 वर्ष</text>

      <text x="250" y="225" font-size="25">
        दर ÷ 2 और समय × 2
      </text>
    `),

    "11-3": diagram("तिमाही — 1 साल = 4 periods", `
      <line x1="80" y1="130" x2="680" y2="130"
        stroke="#222" stroke-width="5"/>

      <circle cx="230" cy="130" r="8" fill="#222"/>
      <circle cx="380" cy="130" r="8" fill="#222"/>
      <circle cx="530" cy="130" r="8" fill="#222"/>

      <text x="130" y="100" font-size="20">3 माह</text>
      <text x="285" y="100" font-size="20">3 माह</text>
      <text x="435" y="100" font-size="20">3 माह</text>
      <text x="585" y="100" font-size="20">3 माह</text>

      <text x="220" y="205" font-size="24">
        वार्षिक दर ÷ 4
      </text>
      <text x="400" y="240" font-size="24">
        वर्ष × 4 = तिमाहियाँ
      </text>
    `),

    "11-4": diagram("कीमत में प्रतिशत वृद्धि और कमी", `
      <rect x="100" y="90" width="200" height="90"
        rx="12" fill="none" stroke="#222" stroke-width="4"/>

      <rect x="460" y="55" width="200" height="125"
        rx="12" fill="none" stroke="#222" stroke-width="4"/>

      <text x="145" y="145" font-size="25">₹500</text>
      <text x="515" y="125" font-size="25">₹550</text>

      <text x="310" y="115" font-size="30">↑</text>
      <text x="300" y="160" font-size="22">10%</text>

      <text x="210" y="230" font-size="24">
        पुरानी कीमत → नई कीमत
      </text>
    `),

    "12-1": diagram("बैंकिंग का सरल चक्र", `
      <circle cx="380" cy="130" r="65"
        fill="none" stroke="#222" stroke-width="4"/>

      <text x="335" y="140" font-size="25">BANK</text>

      <text x="90" y="70" font-size="23">जमा</text>
      <text x="600" y="70" font-size="23">निकासी</text>
      <text x="90" y="220" font-size="23">बचत</text>
      <text x="570" y="220" font-size="23">भुगतान</text>

      <line x1="140" y1="75" x2="320" y2="110"
        stroke="#222" stroke-width="3"/>
      <line x1="440" y1="110" x2="610" y2="75"
        stroke="#222" stroke-width="3"/>
      <line x1="140" y1="210" x2="320" y2="150"
        stroke="#222" stroke-width="3"/>
      <line x1="440" y1="150" x2="610" y2="210"
        stroke="#222" stroke-width="3"/>
    `),

    "12-2": diagram("बैंक लॉकर — सुरक्षित स्थान", `
      <rect x="260" y="45" width="240" height="170"
        rx="12" fill="none" stroke="#222" stroke-width="5"/>

      <rect x="320" y="80" width="120" height="90"
        rx="8" fill="none" stroke="#222" stroke-width="4"/>

      <circle cx="380" cy="125" r="18"
        fill="none" stroke="#222" stroke-width="4"/>

      <text x="295" y="245" font-size="24">
        महत्वपूर्ण वस्तुएँ → सुरक्षित लॉकर
      </text>
    `),

    "12-3": diagram("चेक के मुख्य हिस्से", `
      <rect x="80" y="55" width="600" height="155"
        rx="12" fill="none" stroke="#222" stroke-width="4"/>

      <text x="105" y="90" font-size="20">Date</text>
      <text x="105" y="130" font-size="20">Pay</text>
      <text x="105" y="170" font-size="20">Amount</text>

      <text x="500" y="175" font-size="20">Signature</text>

      <text x="210" y="245" font-size="24">
        चेक = बैंक को भुगतान का लिखित निर्देश
      </text>
    `),

    "12-4": diagram("पासबुक — पैसा कहाँ आया, कहाँ गया?", `
      <rect x="100" y="45" width="560" height="170"
        rx="10" fill="none" stroke="#222" stroke-width="4"/>

      <line x1="100" y1="90" x2="660" y2="90"
        stroke="#222" stroke-width="2"/>

      <line x1="230" y1="45" x2="230" y2="215"
        stroke="#222" stroke-width="2"/>

      <line x1="410" y1="45" x2="410" y2="215"
        stroke="#222" stroke-width="2"/>

      <line x1="530" y1="45" x2="530" y2="215"
        stroke="#222" stroke-width="2"/>

      <text x="125" y="75" font-size="18">Date</text>
      <text x="270" y="75" font-size="18">जमा</text>
      <text x="435" y="75" font-size="18">निकासी</text>
      <text x="555" y="75" font-size="18">Balance</text>

      <text x="250" y="250" font-size="23">
        Entry पढ़ो → Balance निकालो
      </text>
    `),

    "12-5": diagram("ATM से सुरक्षित निकासी", `
      <rect x="270" y="35" width="220" height="185"
        rx="15" fill="none" stroke="#222" stroke-width="5"/>

      <rect x="310" y="65" width="140" height="50"
        rx="6" fill="none" stroke="#222" stroke-width="3"/>

      <circle cx="330" cy="150" r="8" fill="none"
        stroke="#222" stroke-width="3"/>
      <circle cx="380" cy="150" r="8" fill="none"
        stroke="#222" stroke-width="3"/>
      <circle cx="430" cy="150" r="8" fill="none"
        stroke="#222" stroke-width="3"/>

      <text x="100" y="100" font-size="22">Card</text>
      <text x="535" y="100" font-size="22">PIN</text>
      <text x="535" y="155" font-size="22">Cash</text>

      <text x="175" y="250" font-size="24">
        PIN हमेशा गोपनीय रखें
      </text>
    `),

    "12-6": diagram("एक ही राशि के कई संयोजन", `
      <text x="330" y="45" font-size="28">₹100</text>

      <rect x="100" y="80" width="100" height="60"
        rx="8" fill="none" stroke="#222" stroke-width="3"/>
      <text x="130" y="118" font-size="22">₹100</text>

      <rect x="250" y="80" width="100" height="60"
        rx="8" fill="none" stroke="#222" stroke-width="3"/>
      <rect x="365" y="80" width="100" height="60"
        rx="8" fill="none" stroke="#222" stroke-width="3"/>
      <text x="280" y="118" font-size="22">₹50</text>
      <text x="395" y="118" font-size="22">₹50</text>

      <rect x="500" y="80" width="70" height="55"
        rx="8" fill="none" stroke="#222" stroke-width="3"/>
      <rect x="580" y="80" width="70" height="55"
        rx="8" fill="none" stroke="#222" stroke-width="3"/>

      <text x="515" y="115" font-size="18">₹20</text>
      <text x="595" y="115" font-size="18">₹20</text>

      <text x="300" y="195" font-size="24">
        ₹100 = कई सही combinations
      </text>
    `)
  };

  function render() {
    if (!isClass8()) return;

    const ch = getChapter();

    if (ch < 11 || ch > 12) return;

    const box = findContainer();

    if (!box) return;

    if (box.querySelector(".aadya-c8cb-diagram")) return;

    const key = ch + "-" + getLesson();
    const html = diagrams[key];

    if (!html) return;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = html.trim();

    const node = wrapper.firstElementChild;

    if (!node) return;

    const tryYourself = box.querySelector("#tryYourself");

    if (tryYourself) {
      tryYourself.parentNode.insertBefore(node, tryYourself);
    } else {
      box.appendChild(node);
    }
  }

  function start() {
    setTimeout(render, 150);

    const observer = new MutationObserver(function () {
      render();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    window.AADYAClass8CommerceBankingDiagramEngine = {
      refresh: render
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
