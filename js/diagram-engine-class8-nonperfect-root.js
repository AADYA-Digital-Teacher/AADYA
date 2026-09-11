(function () {
  "use strict";

  function getLessonFile() {
    if (window.lessonData && window.lessonData.file) {
      return String(window.lessonData.file);
    }

    const params = new URLSearchParams(window.location.search);
    return decodeURIComponent(params.get("lesson") || "");
  }

  function isClass8() {
    const file = getLessonFile();

    if (/\/class8\//i.test(file)) {
      return true;
    }

    if (window.lessonData && window.lessonData.class !== undefined) {
      return Number(window.lessonData.class) === 8;
    }

    return false;
  }

  function getChapterNumber() {
    const file = getLessonFile();
    const match = file.match(/textbook(\d+)/i);
    return match ? Number(match[1]) : 0;
  }

  function getLessonNumber() {
    const file = getLessonFile();
    const match = file.match(/lesson(\d+)\.json/i);
    return match ? Number(match[1]) : 0;
  }

  function findLessonContainer() {
    return (
      document.querySelector("#content") ||
      document.querySelector("#lessonContent") ||
      document.querySelector("#lesson-container") ||
      document.querySelector(".lesson-content") ||
      document.querySelector(".lesson-container") ||
      document.querySelector("main")
    );
  }

  function diagram1() {
    return `
      <div class="aadya-c8nr-diagram card" style="margin:20px 0;padding:18px;border-radius:16px;background:linear-gradient(135deg,#fff8e1,#ffffff);border:2px solid #e0b84f;">
        <h3 style="margin-top:0;">📏 √2 को संख्या रेखा पर खोजें</h3>

        <div style="overflow-x:auto;">
          <svg viewBox="0 0 700 190" width="100%" role="img" aria-label="संख्या रेखा पर 1 और 2 के बीच √2">
            <line x1="70" y1="100" x2="630" y2="100" stroke="#333" stroke-width="4"/>

            <g stroke="#333" stroke-width="3">
              <line x1="70" y1="82" x2="70" y2="118"/>
              <line x1="350" y1="82" x2="350" y2="118"/>
              <line x1="630" y1="82" x2="630" y2="118"/>
            </g>

            <text x="64" y="145" font-size="24">1</text>
            <text x="344" y="145" font-size="24">2</text>
            <text x="624" y="145" font-size="24">3</text>

            <circle cx="186" cy="100" r="10" fill="#d32f2f"/>
            <text x="150" y="58" font-size="22" font-weight="bold">√2 ≈ 1.414</text>

            <path d="M186 78 Q280 35 350 78" fill="none" stroke="#d32f2f" stroke-width="3" stroke-dasharray="7 6"/>
            <text x="205" y="35" font-size="18">1 और 2 के बीच</text>
          </svg>
        </div>

        <p style="margin-bottom:0;">
          क्योंकि <strong>1² = 1</strong> और <strong>2² = 4</strong>,
          इसलिए <strong>√2</strong> की जगह 1 और 2 के बीच होगी।
        </p>
      </div>
    `;
  }

  function diagram2() {
    return `
      <div class="aadya-c8nr-diagram card" style="margin:20px 0;padding:18px;border-radius:16px;background:linear-gradient(135deg,#f3f7ff,#ffffff);border:2px solid #7b8fd6;">
        <h3 style="margin-top:0;">🏠 वर्गाकार फर्श और √5</h3>

        <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center;">

          <svg viewBox="0 0 260 260" width="240" role="img" aria-label="5 वर्ग मीटर क्षेत्रफल वाला वर्गाकार फर्श">
            <rect x="45" y="45" width="170" height="170" fill="#f5f5f5" stroke="#333" stroke-width="4"/>
            <text x="82" y="135" font-size="26" font-weight="bold">5 m²</text>

            <line x1="45" y1="225" x2="215" y2="225" stroke="#d32f2f" stroke-width="4"/>
            <text x="77" y="252" font-size="20">भुजा = √5 m</text>
          </svg>

          <div style="max-width:300px;">
            <div style="font-size:21px;margin-bottom:10px;">
              2² = 4
            </div>
            <div style="font-size:21px;margin-bottom:10px;">
              3² = 9
            </div>

            <div style="padding:12px;border-radius:12px;background:#fff3cd;border:1px solid #e0b84f;">
              <strong>5</strong>, 4 और 9 के बीच है।
              <br/>
              इसलिए:
              <br/>
              <strong>2 &lt; √5 &lt; 3</strong>
              <br/>
              <br/>
              √5 ≈ <strong>2.236 m</strong>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  function render() {
    if (!isClass8()) return;

    if (getChapterNumber() !== 2) return;
    if (getLessonNumber() !== 7) return;

    const container = findLessonContainer();
    if (!container) return;

    if (container.querySelector(".aadya-c8nr-nonperfect-wrapper")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "aadya-c8nr-nonperfect-wrapper";

    wrapper.innerHTML = diagram1() + diagram2();

    const tryYourself = container.querySelector("#tryYourself");

    if (tryYourself) {
      tryYourself.parentNode.insertBefore(wrapper, tryYourself);
    } else {
      container.appendChild(wrapper);
    }
  }

  function refresh() {
    setTimeout(render, 100);
  }

  window.AADYAClass8NonPerfectRootDiagramEngine = {
    render,
    refresh
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refresh);
  } else {
    refresh();
  }

  const observer = new MutationObserver(function () {
    render();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
