(function(){

  "use strict";

  const CARD =
    "aadya-c6-ch19-diagram";

  function isCh19(){

    const d =
      window.lessonData;

    if(
      !d ||
      Number(d.class) !== 6 ||
      String(d.subject || "").trim() !== "गणित"
    ){
      return false;
    }

    const p =
      new URLSearchParams(
        location.search
      ).get("lesson") || "";

    return /content\/class6\/mathematics\/textbook17\/lesson\d+\.json/i
      .test(
        p.replace(/^.\//,"")
      );
  }

  function lessonNo(){

    const p =
      new URLSearchParams(
        location.search
      ).get("lesson") || "";

    const m =
      p.match(
        /textbook17\/lesson(\d+)\.json/i
      );

    return m
      ? Number(m[1])
      : 0;
  }

  function text(
    x,
    y,
    s,
    size = 26,
    color = "#17324d"
  ){

    return `
      <text
        x="${x}"
        y="${y}"
        text-anchor="middle"
        font-family="Noto Sans Devanagari,Arial,sans-serif"
        font-size="${size}"
        font-weight="700"
        fill="${color}"
      >
        ${s}
      </text>
    `;
  }

  function line(
    x1,y1,x2,y2,
    color="#17324d",
    width=5,
    dash=""
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
        ${dash
          ? `stroke-dasharray="${dash}"`
          : ""}
      />
    `;
  }

  function circle(
    cx,cy,r,
    fill="#fff",
    stroke="#17324d",
    width=4
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

  function box(
    x,y,w,h,
    fill,
    stroke
  ){

    return `
      <rect
        x="${x}"
        y="${y}"
        width="${w}"
        height="${h}"
        rx="16"
        fill="${fill}"
        stroke="${stroke}"
        stroke-width="4"
      />
    `;
  }

  function diagram(n){

    if(n === 1){

      return `
        ${text(
          400,55,
          "12 × 13 — खड़ा और तिरछा गुणन",
          28
        )}

        ${text(
          300,135,
          "1   2",
          42,
          "#457b9d"
        )}

        ${text(
          300,205,
          "1   3",
          42,
          "#e76f51"
        )}

        ${line(
          270,150,
          245,190,
          "#2a9d8f",
          6
        )}

        ${line(
          330,150,
          270,205,
          "#2a9d8f",
          6
        )}

        ${line(
          270,205,
          330,150,
          "#2a9d8f",
          6
        )}

        ${box(
          450,105,
          220,180,
          "#eef6ff",
          "#457b9d"
        )}

        ${text(
          560,150,
          "2 × 3 = 6",
          24
        )}

        ${text(
          560,205,
          "1×3 + 2×1 = 5",
          23,
          "#2a9d8f"
        )}

        ${text(
          560,260,
          "1 × 1 = 1",
          24
        )}

        ${text(
          400,355,
          "उत्तर  →  156",
          34,
          "#e63946"
        )}
      `;
    }

    if(n === 2){

      return `
        ${text(
          400,55,
          "हासिल वाला ऊर्ध्वतिर्यक गुणा",
          30
        )}

        ${text(
          260,125,
          "15",
          44,
          "#457b9d"
        )}

        ${text(
          260,195,
          "× 37",
          44,
          "#e76f51"
        )}

        ${line(
          170,220,
          350,220,
          "#17324d",
          4
        )}

        ${box(
          430,95,
          250,210,
          "#fff7e8",
          "#e9c46a"
        )}

        ${text(
          555,145,
          "3 / 22 / 35",
          28
        )}

        ${text(
          555,200,
          "हासिल",
          24,
          "#e76f51"
        )}

        ${text(
          555,250,
          "3 / 25 / 5",
          28,
          "#2a9d8f"
        )}

        ${text(
          400,355,
          "15 × 37 = 555",
          34,
          "#e63946"
        )}
      `;
    }

    if(n === 3){

      return `
        ${text(
          400,48,
          "111 × 111 — पाँच चरण",
          29
        )}

        ${text(
          400,105,
          "1   1   1",
          40,
          "#457b9d"
        )}

        ${text(
          400,165,
          "× 1   1   1",
          40,
          "#e76f51"
        )}

        ${box(
          100,220,
          600,95,
          "#eefaf5",
          "#2a9d8f"
        )}

        ${text(
          400,260,
          "1  →  2  →  3  →  2  →  1",
          31,
          "#2a9d8f"
        )}

        ${text(
          400,355,
          "उत्तर  →  12321",
          35,
          "#e63946"
        )}
      `;
    }

    return `
      ${text(
        400,55,
        "दैनिक जीवन में गुणा",
        30
      )}

      ${box(
        100,110,
        230,150,
        "#eef6ff",
        "#457b9d"
      )}

      ${text(
        215,155,
        "26 टोकरी",
        27
      )}

      ${text(
        215,205,
        "× 16 आम",
        27
      )}

      ${box(
        470,110,
        230,150,
        "#eefaf5",
        "#2a9d8f"
      )}

      ${text(
        585,155,
        "26 × 16",
        29
      )}

      ${text(
        585,210,
        "= 416",
        30,
        "#e63946"
      )}

      ${text(
        400,350,
        "गुणा → वास्तविक जीवन की गणना",
        28,
        "#2a9d8f"
      )}
    `;
  }

  function render(){

    if(!isCh19()){
      return;
    }

    /*
     * यदि generic engine ने कोई diagram
     * बना दिया हो तो केवल Ch19 पर हटाएँ।
     */

    const generic =
      document.getElementById(
        "aadya-auto-diagram"
      );

    if(generic){
      generic.remove();
    }

    if(
      document.querySelector(
        "." + CARD
      )
    ){
      return;
    }

    const container =
      document.getElementById(
        "content"
      );

    if(!container){
      return;
    }

    const wrapper =
      document.createElement("section");

    wrapper.className =
      CARD;

    wrapper.style.cssText = `
      background:#fff;
      border:1px solid #dbe4ee;
      border-radius:18px;
      padding:14px;
      margin:18px 0;
      box-shadow:0 4px 16px rgba(0,0,0,.08);
    `;

    wrapper.innerHTML = `
      <div style="
        font-weight:800;
        font-size:18px;
        color:#17324d;
        margin-bottom:10px;
      ">
        📐 ऊर्ध्वतिर्यक गुणा
      </div>

      <div style="
        overflow:hidden;
        border-radius:14px;
        background:#f7fbff;
      ">

        <svg
          viewBox="0 0 800 430"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${diagram(lessonNo())}
        </svg>

      </div>
    `;

    const anchor =
      document.getElementById(
        "tryYourself"
      );

    if(
      anchor &&
      anchor.parentNode
    ){

      anchor.parentNode.insertBefore(
        wrapper,
        anchor
      );

    }
    else{

      container.appendChild(
        wrapper
      );

    }
  }

  window.AADYAClass6Ch19DiagramEngine = {
    render,
    refresh:()=>{
      setTimeout(render,120);
    }
  };

  document.addEventListener(
    "DOMContentLoaded",
    ()=>{
      setTimeout(render,200);
    }
  );

  const observer =
    new MutationObserver(
      ()=>{
        setTimeout(
          render,
          100
        );
      }
    );

  document.addEventListener(
    "DOMContentLoaded",
    ()=>{

      const content =
        document.getElementById(
          "content"
        );

      if(content){

        observer.observe(
          content,
          {
            childList:true,
            subtree:true
          }
        );

      }

    }
  );

})();
