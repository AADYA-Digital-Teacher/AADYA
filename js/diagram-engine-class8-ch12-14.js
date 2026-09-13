(function(){

"use strict";


function data(){
  return window.lessonData || {};
}


function isClass8(){

  if(data().class !== undefined){
    return Number(data().class) === 8;
  }

  const p =
    new URLSearchParams(location.search)
      .get("lesson") || "";

  return /\/class8\//i.test(
    decodeURIComponent(p)
  );
}


function chapter(){
  return Number(data().chapter || 0);
}


function lesson(){
  return Number(data().lesson || 0);
}


function container(){

  return document.querySelector(
    "#content, #lessonContent, #lesson-container, .lesson-content, .lesson-container, main"
  );
}


function esc(v){

  return String(v ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}


function wrap(title,body){

  return `

  <div class="aadya-c8-c12-14-diagram"
       style="
       margin:18px 0;
       padding:14px;
       background:#fff;
       border:1px solid #ddd;
       border-radius:18px;
       overflow:hidden;
       ">

    <div style="
      font-weight:800;
      font-size:16px;
      margin-bottom:10px;
    ">
      📐 ${esc(title)}
    </div>

    <svg
      viewBox="0 0 760 320"
      width="100%"
      style="display:block;"
      xmlns="http://www.w3.org/2000/svg">

      ${body}

    </svg>

  </div>

  `;
}


function text(x,y,value,size=20,weight=600){

  return `
    <text
      x="${x}"
      y="${y}"
      text-anchor="middle"
      dominant-baseline="middle"
      font-size="${size}"
      font-weight="${weight}"
      fill="#222">
      ${esc(value)}
    </text>
  `;
}


function rect(x,y,w,h){

  return `
    <rect
      x="${x}"
      y="${y}"
      width="${w}"
      height="${h}"
      rx="12"
      fill="#f5f5f5"
      stroke="#222"
      stroke-width="3"/>
  `;
}


function line(x1,y1,x2,y2,width=3){

  return `
    <line
      x1="${x1}"
      y1="${y1}"
      x2="${x2}"
      y2="${y2}"
      stroke="#222"
      stroke-width="${width}"
      stroke-linecap="round"/>
  `;
}


function circle(cx,cy,r){

  return `
    <circle
      cx="${cx}"
      cy="${cy}"
      r="${r}"
      fill="#fff"
      stroke="#222"
      stroke-width="3"/>
  `;
}


/* =====================================================
   CHAPTER 12 — BANKING
   ===================================================== */


function c12l1(){

  return wrap(
    "बैंक और बैंक खाता",

    `

    ${rect(120,80,180,100)}
    ${rect(460,80,180,100)}

    ${text(210,115,"🏦 बैंक",24,700)}
    ${text(210,150,"पैसा सुरक्षित",18)}

    ${text(550,115,"💳 खाता",24,700)}
    ${text(550,150,"जमा • निकासी",18)}

    ${text(380,215,"बैंक → खाता → जमा / निकासी",22,700)}

    ${text(
      380,
      270,
      "बचत और सुरक्षित धन प्रबंधन",
      19,
      600
    )}

    `
  );
}


function c12l2(){

  return wrap(
    "बैंक ड्राफ्ट और लॉकर",

    `

    ${rect(80,75,270,150)}

    ${text(215,110,"🏦 बैंक ड्राफ्ट",23,700)}
    ${text(215,150,"बैंक द्वारा जारी",19)}
    ${text(215,185,"भुगतान का साधन",19)}

    ${rect(410,75,270,150)}

    ${text(545,110,"🔐 लॉकर",23,700)}
    ${text(545,150,"सुरक्षित स्थान",19)}
    ${text(545,185,"कीमती वस्तुओं के लिए",19)}

    ${text(
      380,
      270,
      "ड्राफ्ट = भुगतान | लॉकर = सुरक्षा",
      21,
      700
    )}

    `
  );
}


function c12l3(){

  return wrap(
    "चेक और चेक के प्रकार",

    `

    ${rect(80,70,600,175)}

    ${text(380,105,"CHEQUE / चेक",25,700)}

    ${text(170,155,"दिनांक",18)}
    ${text(330,155,"प्राप्तकर्ता",18)}
    ${text(510,155,"राशि",18)}

    ${line(120,180,640,180,2)}

    ${text(190,215,"Bearer",19)}
    ${text(380,215,"Crossed",19)}
    ${text(570,215,"Account Payee",19)}

    ${text(
      380,
      280,
      "चेक के प्रकार पहचानें और सावधानी से भरें",
      19,
      600
    )}

    `
  );
}


function c12l4(){

  return wrap(
    "पासबुक — लेन-देन का रिकॉर्ड",

    `

    ${rect(100,55,560,205)}

    ${text(380,82,"PASSBOOK",25,700)}

    ${text(160,125,"तारीख",18,700)}
    ${text(300,125,"जमा",18,700)}
    ${text(440,125,"निकासी",18,700)}
    ${text(570,125,"शेष",18,700)}

    ${line(120,145,640,145,2)}
    ${line(120,190,640,190,2)}
    ${line(120,235,640,235,2)}

    ${text(160,168,"01/01",16)}
    ${text(300,168,"₹2000",17)}
    ${text(440,168,"—",17)}
    ${text(570,168,"₹7000",17)}

    ${text(160,213,"05/01",16)}
    ${text(300,213,"—",17)}
    ${text(440,213,"₹1500",17)}
    ${text(570,213,"₹5500",17)}

    ${text(
      380,
      290,
      "हर entry के बाद balance बदलता है",
      19,
      700
    )}

    `
  );
}


function c12l5(){

  return wrap(
    "ATM और ऑनलाइन बैंकिंग",

    `

    ${rect(90,55,230,205)}

    ${text(205,90,"🏧 ATM",25,700)}

    ${text(205,135,"Card",19)}
    ${text(205,170,"PIN",19)}
    ${text(205,205,"Cash",19)}

    ${line(205,220,205,245,3)}

    ${rect(440,55,230,205)}

    ${text(555,90,"📱 Online",25,700)}

    ${text(555,135,"Login",19)}
    ${text(555,170,"OTP",19)}
    ${text(555,205,"Payment",19)}

    ${text(
      380,
      290,
      "PIN और OTP कभी साझा न करें",
      21,
      700
    )}

    `
  );
}


function c12l6(){

  return wrap(
    "भारतीय नोटों के मूल्यवर्ग",

    `

    ${rect(70,75,150,80)}
    ${rect(245,75,150,80)}
    ${rect(420,75,150,80)}
    ${rect(595,75,100,80)}

    ${text(145,115,"₹10",28,700)}
    ${text(320,115,"₹50",28,700)}
    ${text(495,115,"₹100",28,700)}
    ${text(645,115,"₹500",25,700)}

    ${text(
      380,
      205,
      "एक ही राशि अलग-अलग संयोजनों से बनाई जा सकती है",
      20,
      700
    )}

    ${text(
      380,
      250,
      "₹100 = ₹50 + ₹50 = ₹20×5",
      21,
      700
    )}

    `
  );
}


/* =====================================================
   CHAPTER 13 — CIRCLE & CYCLIC QUADRILATERAL
   ===================================================== */


function c13l1(){

  return wrap(
    "केंद्र से जीवा पर लंब",

    `

    ${circle(380,160,105)}

    ${line(190,210,570,210,4)}
    ${line(380,160,380,210,3)}

    ${text(380,145,"O",20,700)}
    ${text(380,225,"M",19,700)}
    ${text(190,235,"A",19,700)}
    ${text(570,235,"B",19,700)}

    ${text(
      380,
      65,
      "OM ⟂ AB",
      24,
      700
    )}

    ${text(
      380,
      285,
      "लंब केंद्र से खींची जाए तो जीवा दो बराबर भागों में बँटती है",
      18,
      600
    )}

    `
  );
}


function c13l2(){

  return wrap(
    "समान जीवाएँ और समान कोण",

    `

    ${circle(380,160,105)}

    ${line(275,160,485,160,3)}
    ${line(305,105,455,215,3)}

    ${text(380,65,"O",20,700)}

    ${text(
      380,
      270,
      "समान जीवाएँ ↔ केंद्र पर समान कोण",
      21,
      700
    )}

    ${text(
      380,
      300,
      "वृत्त में समानता का संबंध",
      18,
      600
    )}

    `
  );
}


function c13l3(){

  return wrap(
    "चक्रीय चतुर्भुज",

    `

    ${circle(380,160,115)}

    ${line(300,75,475,95,3)}
    ${line(475,95,505,220,3)}
    ${line(505,220,270,235,3)}
    ${line(270,235,300,75,3)}

    ${text(300,62,"A",19,700)}
    ${text(475,82,"B",19,700)}
    ${text(505,238,"C",19,700)}
    ${text(270,253,"D",19,700)}

    ${text(
      380,
      285,
      "A, B, C, D चारों एक ही वृत्त पर",
      20,
      700
    )}

    `
  );
}


function c13l4(){

  return wrap(
    "चक्रीय चतुर्भुज के सम्मुख कोण",

    `

    ${circle(380,160,115)}

    ${line(300,75,475,95,3)}
    ${line(475,95,505,220,3)}
    ${line(505,220,270,235,3)}
    ${line(270,235,300,75,3)}

    ${text(300,62,"A",19,700)}
    ${text(475,82,"B",19,700)}
    ${text(505,238,"C",19,700)}
    ${text(270,253,"D",19,700)}

    ${text(
      380,
      285,
      "∠A + ∠C = 180°",
      24,
      700
    )}

    `
  );
}


/* =====================================================
   CHAPTER 14 — TANGENTS
   ===================================================== */


function c14l1(){

  return wrap(
    "छेदिका, स्पर्श रेखा और स्पर्श बिंदु",

    `

    ${circle(380,160,95)}

    ${line(90,80,670,80,3)}
    ${line(90,250,670,250,3)}

    ${line(90,80,670,250,4)}

    ${text(570,65,"स्पर्श रेखा",19,700)}
    ${text(530,275,"छेदिका",19,700)}

    ${circle(475,115,6)}

    ${text(
      475,
      105,
      "P",
      18,
      700
    )}

    ${text(
      380,
      300,
      "स्पर्श रेखा वृत्त को एक बिंदु पर छूती है",
      19,
      600
    )}

    `
  );
}


function c14l2(){

  return wrap(
    "दिए गए बिंदु से स्पर्श रेखा की रचना",

    `

    ${circle(380,165,90)}

    ${text(380,165,"O",20,700)}

    ${circle(470,165,6)}

    ${text(485,165,"P",20,700)}

    ${line(470,65,470,265,3)}

    ${text(
      470,
      45,
      "P पर स्पर्श रेखा",
      20,
      700
    )}

    ${line(380,165,470,165,2)}

    ${text(
      380,
      285,
      "OP = त्रिज्या",
      20,
      700
    )}

    `
  );
}


function c14l3(){

  return wrap(
    "स्पर्श रेखा और त्रिज्या — 90°",

    `

    ${circle(300,165,90)}

    ${line(390,165,680,165,4)}
    ${line(300,165,390,165,3)}

    ${line(390,165,390,70,3)}

    ${text(300,165,"O",20,700)}
    ${text(390,165,"P",19,700)}
    ${text(390,55,"T",19,700)}

    ${text(
      450,
      110,
      "90°",
      25,
      700
    )}

    ${text(
      380,
      275,
      "OP ⟂ PT",
      24,
      700
    )}

    `
  );
}


/* =====================================================
   DIAGRAM MAP
   ===================================================== */

const diagrams = {

  "12-1": c12l1,
  "12-2": c12l2,
  "12-3": c12l3,
  "12-4": c12l4,
  "12-5": c12l5,
  "12-6": c12l6,

  "13-1": c13l1,
  "13-2": c13l2,
  "13-3": c13l3,
  "13-4": c13l4,

  "14-1": c14l1,
  "14-2": c14l2,
  "14-3": c14l3

};


function render(){

  if(!isClass8()) return;

  const ch =
    chapter();

  if(ch < 12 || ch > 14){
    return;
  }

  const box =
    container();

  if(!box) return;

  if (
  box.querySelector(
    ".aadya-c8-c12-14-diagram, .aadya-c8cb-diagram"
  )
) {
  return;
  }

  const key =
    ch + "-" + lesson();

  const builder =
    diagrams[key];

  if(!builder) return;

  const holder =
    document.createElement("div");

  holder.innerHTML =
    builder().trim();

  const diagram =
    holder.firstElementChild;

  if(!diagram) return;

  /*
   * IMPORTANT:
   * Diagram goes into
   * "उदाहरण देखें"
   */
  const examples =
    box.querySelector("#examples");

  if(examples){

    examples.appendChild(diagram);

  }
  else{

    box.appendChild(diagram);

  }

}


function start(){

  setTimeout(render,300);

  const observer =
    new MutationObserver(function(){

      render();

    });

  observer.observe(
    document.body,
    {
      childList:true,
      subtree:true
    }
  );

  window.AADYAClass8Ch12To14Engine = {
    refresh:render
  };

}


if(
  document.readyState === "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    start
  );

}
else{

  start();

}

})();
