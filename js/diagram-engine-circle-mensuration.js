/*
===========================================================
AADYA DIGITAL TEACHER
Circle + Mensuration Diagram Engine
Class 7 Mathematics — Chapters 11 and 12
Independent engine: does not modify Chapters 7–10.
===========================================================
*/
(function () {
  "use strict";

  const ENGINE_NAME =
    "AADYA Circle Mensuration Diagram Engine v1.0";

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function svgWrap(content, height = 270) {
    return `
      <div class="aadya-cm-diagram"
           style="margin:20px 0;padding:14px;background:#fff;
                  border-radius:18px;border:1px solid #e5e5e5;
                  overflow:hidden;">
        <div style="font-weight:700;font-size:16px;margin-bottom:8px;color:#222;">
          📐 AADYA Visual
        </div>
        <svg viewBox="0 0 800 ${height}" width="100%" height="auto"
             xmlns="http://www.w3.org/2000/svg"
             role="img" aria-label="AADYA गणितीय चित्र">
          ${content}
        </svg>
      </div>`;
  }

  function text(x, y, value, size = 20, weight = 500) {
    return `<text x="${x}" y="${y}" font-size="${size}"
      font-weight="${weight}" text-anchor="middle"
      dominant-baseline="middle" fill="#222">${escapeHTML(value)}</text>`;
  }

  function line(x1, y1, x2, y2, width = 3) {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      stroke="#222" stroke-width="${width}" stroke-linecap="round"/>`;
  }

  function circle(cx, cy, r, fill = "#fff") {
    return `<circle cx="${cx}" cy="${cy}" r="${r}"
      fill="${fill}" stroke="#222" stroke-width="3"/>`;
  }

  function rect(x, y, w, h, rx = 8, fill = "#f5f5f5") {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}"
      rx="${rx}" fill="${fill}" stroke="#222" stroke-width="2"/>`;
  }

  function circleRightAngle() {
    return svgWrap(`
      ${text(400, 25, "अर्धवृत्त का कोण = 90°", 23, 700)}
      ${circle(400, 135, 100)}
      ${line(300, 135, 500, 135, 4)}
      ${line(300, 135, 365, 65, 3)}
      ${line(365, 65, 500, 135, 3)}
      ${text(285, 145, "A", 20, 700)}
      ${text(515, 145, "B", 20, 700)}
      ${text(365, 55, "C", 20, 700)}
      ${text(400, 150, "O", 18, 700)}
      ${text(365, 105, "90°", 20, 700)}
      ${text(400, 235, "AB व्यास  ⇒  ∠ACB = 90°", 21, 700)}
    `, 270);
  }

  function centerAngleDouble() {
    return svgWrap(`
      ${text(400, 25, "केन्द्र कोण = 2 × परिधीय कोण", 22, 700)}
      ${circle(400, 140, 105)}
      ${line(400, 140, 315, 78, 3)}
      ${line(400, 140, 485, 78, 3)}
      ${line(315, 78, 485, 78, 3)}
      ${line(315, 78, 400, 140, 3)}
      ${line(485, 78, 400, 140, 3)}
      ${text(400, 145, "O", 18, 700)}
      ${text(305, 68, "A", 20, 700)}
      ${text(495, 68, "B", 20, 700)}
      ${text(400, 50, "C", 20, 700)}
      ${text(400, 105, "∠AOB", 20, 700)}
      ${text(400, 220, "∠AOB = 2∠ACB", 24, 700)}
      ${text(400, 248, "उदाहरण: 80° = 2 × 40°", 19, 700)}
    `, 275);
  }

  function sameSegment() {
    return svgWrap(`
      ${text(400, 25, "एक ही वृत्तखंड के कोण बराबर", 22, 700)}
      ${circle(400, 140, 105)}
      ${line(315, 78, 485, 78, 4)}
      ${line(315, 78, 365, 220, 3)}
      ${line(485, 78, 365, 220, 3)}
      ${line(315, 78, 455, 205, 3)}
      ${line(485, 78, 455, 205, 3)}
      ${text(305, 68, "A", 20, 700)}
      ${text(495, 68, "B", 20, 700)}
      ${text(360, 225, "C", 20, 700)}
      ${text(460, 215, "D", 20, 700)}
      ${text(390, 112, "∠ACB", 17, 700)}
      ${text(420, 112, "∠ADB", 17, 700)}
      ${text(400, 255, "∠ACB = ∠ADB", 23, 700)}
    `, 285);
  }

  function rectangularPath() {
    return svgWrap(`
      ${text(400, 25, "आयताकार मार्ग का क्षेत्रफल", 22, 700)}
      ${rect(120, 65, 560, 150, 4, "#eeeeee")}
      ${rect(180, 95, 440, 90, 2, "#fff")}
      ${text(400, 82, "बाहरी आयत", 18, 700)}
      ${text(400, 135, "भीतरी आयत", 18, 700)}
      ${text(400, 235, "मार्ग = बाहरी क्षेत्रफल − भीतरी क्षेत्रफल", 20, 700)}
      ${text(400, 260, "A = LB − (L−2w)(B−2w)", 18, 700)}
    `, 290);
  }

  function triangleArea() {
    return svgWrap(`
      ${text(400, 25, "त्रिभुज का क्षेत्रफल", 22, 700)}
      <polygon points="220,210 580,210 430,65"
        fill="#f5f5f5" stroke="#222" stroke-width="3"/>
      ${line(430, 65, 430, 210, 3)}
      ${text(400, 235, "आधार = b", 19, 700)}
      ${text(455, 135, "ऊँचाई = h", 18, 700)}
      ${text(400, 265, "A = ½ × b × h", 23, 700)}
    `, 295);
  }

  function parallelogramArea() {
    return svgWrap(`
      ${text(400, 25, "समान्तर चतुर्भुज का क्षेत्रफल", 22, 700)}
      <polygon points="180,200 600,200 520,75 100,75"
        fill="#f5f5f5" stroke="#222" stroke-width="3"/>
      ${line(520, 75, 520, 200, 3)}
      ${text(390, 220, "आधार = b", 19, 700)}
      ${text(550, 140, "h", 19, 700)}
      ${text(400, 260, "A = b × h", 23, 700)}
    `, 290);
  }

  function rhombusArea() {
    return svgWrap(`
      ${text(400, 25, "समचतुर्भुज का क्षेत्रफल", 22, 700)}
      <polygon points="400,55 610,145 400,235 190,145"
        fill="#f5f5f5" stroke="#222" stroke-width="3"/>
      ${line(190, 145, 610, 145, 3)}
      ${line(400, 55, 400, 235, 3)}
      ${text(400, 142, "O", 18, 700)}
      ${text(400, 250, "d₁ और d₂ = विकर्ण", 18, 700)}
      ${text(400, 275, "A = ½ × d₁ × d₂", 23, 700)}
    `, 305);
  }

  function cubeCuboidArea() {
    return svgWrap(`
      ${text(400, 25, "घन एवं घनाभ का सम्पूर्ण पृष्ठ", 22, 700)}

      <polygon points="115,105 255,70 335,115 195,150"
        fill="#f5f5f5" stroke="#222" stroke-width="2"/>

      <polygon points="115,105 195,150 195,235 115,190"
        fill="#eeeeee" stroke="#222" stroke-width="2"/>

      <polygon points="195,150 335,115 335,200 195,235"
        fill="#fff" stroke="#222" stroke-width="2"/>

      ${text(225, 175, "घनाभ", 20, 700)}
      ${text(225, 255, "l, b, h", 19, 700)}

      ${text(570, 105, "घन", 21, 700)}

      <rect x="500" y="120" width="120" height="120"
        fill="#f5f5f5" stroke="#222" stroke-width="3"/>

      ${text(560, 180, "a", 22, 700)}
      ${text(560, 270, "घन: 6a²", 20, 700)}
      ${text(400, 295, "घनाभ: 2(lb + bh + hl)", 20, 700)}
    `, 320);
  }

  function getLessonFile() {
    try {
      return new URLSearchParams(window.location.search).get("lesson") || "";
    } catch (e) {
      return "";
    }
  }

  function getChapter() {
    const m = getLessonFile().match(/textbook(\d+)/i);

    if (m) {
      return Number(m[1]);
    }

    if (window.lessonData?.chapter !== undefined) {
      return Number(window.lessonData.chapter);
    }

    return 0;
  }

  function getLesson() {
    const m = getLessonFile().match(/lesson(\d+)\.json/i);

    if (m) {
      return Number(m[1]);
    }

    if (window.lessonData?.lesson !== undefined) {
      return Number(window.lessonData.lesson);
    }

    return 0;
  }

  function selectDiagram() {
    const ch = getChapter();
    const ls = getLesson();

    if (ch === 11) {
      if (ls === 1) return circleRightAngle();
      if (ls === 2) return centerAngleDouble();
      if (ls === 3) return sameSegment();
    }

    if (ch === 12) {
      if (ls === 1) return rectangularPath();
      if (ls === 2) return triangleArea();
      if (ls === 3) return parallelogramArea();
      if (ls === 4) return rhombusArea();
      if (ls === 5) return cubeCuboidArea();
    }

    return "";
  }

  function findContainer() {
    return document.querySelector("#content") ||
           document.querySelector("#lessonContent") ||
           document.querySelector("main");
  }

  function render() {
    const ch = getChapter();

    if (ch < 11 || ch > 12) return;

    const container = findContainer();

    if (!container) return;

    if (container.querySelector(".aadya-cm-diagram")) return;

    const diagram = selectDiagram();

    if (!diagram) return;

    const wrap = document.createElement("div");

    wrap.innerHTML = diagram.trim();

    const node = wrap.firstElementChild;

    if (!node) return;

    const tryBox = container.querySelector("#tryYourself");

    if (tryBox) {
      tryBox.parentNode.insertBefore(node, tryBox);
    } else {
      container.appendChild(node);
    }
  }

  function startObserver() {
    if (!window.MutationObserver) return;

    let scheduled = false;

    const observer = new MutationObserver(function () {
      if (scheduled) return;

      scheduled = true;

      setTimeout(function () {
        scheduled = false;
        render();
      }, 50);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function init() {
    render();

    setTimeout(render, 500);
    setTimeout(render, 1500);

    startObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.AADYACircleMensurationDiagramEngine = {
    name: ENGINE_NAME,

    render: render,

    refresh: function () {
      const old = document.querySelector(".aadya-cm-diagram");

      if (old) old.remove();

      render();
    }
  };

})();
