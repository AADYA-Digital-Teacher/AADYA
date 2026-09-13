(function(){
  'use strict';

  const CARD = 'aadya-c6-diagram-card';

  function isClass6Math(){
    const d = window.lessonData;

    if(
      !d ||
      Number(d.class) !== 6 ||
      String(d.subject || '').trim() !== 'गणित'
    ){
      return false;
    }

    const p =
      new URLSearchParams(
        location.search
      ).get('lesson') || '';

    return /content\/class6\/mathematics\/(chapter\d+|textbook\d+)\/lesson\d+\.json/i
      .test(
        p.replace(/^\.\//,'')
      );
  }

  function pathKey(){

    const p =
      new URLSearchParams(
        location.search
      ).get('lesson') || '';

    let m =
      p.match(
        /chapter(\d+)\/lesson(\d+)\.json/i
      );

    if(m){
      return `c${Number(m[1])}-${Number(m[2])}`;
    }

    m =
      p.match(
        /textbook(\d+)\/lesson(\d+)\.json/i
      );

    if(m){
      return `t${Number(m[1])}-${Number(m[2])}`;
    }

    return '';
  }

  function title(){

    const d =
      window.lessonData || {};

    return (
      d?.lesson?.title ||
      d?.title ||
      ''
    );
  }

  function esc(v){

    return String(v ?? '')
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#039;');
  }

  function T(
    x,
    y,
    s,
    size = 25,
    color = '#17324d',
    w = 700
  ){

    return `
      <text
        x="${x}"
        y="${y}"
        text-anchor="middle"
        font-family="Noto Sans Devanagari,system-ui,sans-serif"
        font-size="${size}"
        font-weight="${w}"
        fill="${color}"
      >
        ${esc(s)}
      </text>
    `;
  }

  function L(
    x1,
    y1,
    x2,
    y2,
    color = '#17324d',
    width = 5,
    dash = ''
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
        ${dash ? `stroke-dasharray="${dash}"` : ''}
      />
    `;
  }

  function C(
    cx,
    cy,
    r,
    fill = 'none',
    stroke = '#17324d',
    width = 5
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

  function R(
    x,
    y,
    w,
    h,
    fill = '#eef6ff',
    stroke = '#457b9d',
    sw = 4,
    rx = 14
  ){

    return `
      <rect
        x="${x}"
        y="${y}"
        width="${w}"
        height="${h}"
        rx="${rx}"
        fill="${fill}"
        stroke="${stroke}"
        stroke-width="${sw}"
      />
    `;
  }

  function P(
    points,
    fill = '#eef6ff',
    stroke = '#17324d',
    sw = 5
  ){

    return `
      <polygon
        points="${points}"
        fill="${fill}"
        stroke="${stroke}"
        stroke-width="${sw}"
        stroke-linejoin="round"
      />
    `;
  }

  function wrap(body){

    return `
      <section
        class="${CARD}"
        style="
          background:#fff;
          border:1px solid #dbe4ee;
          border-radius:18px;
          padding:14px;
          margin:18px 0;
          box-shadow:0 4px 16px rgba(0,0,0,.08)
        "
      >

        <div
          style="
            font-weight:800;
            font-size:18px;
            color:#17324d;
            margin-bottom:10px
          "
        >
          📐 ${esc(title())}
        </div>

        <div
          style="
            overflow:hidden;
            border-radius:14px;
            background:#f7fbff
          "
        >

          <svg
            viewBox="0 0 800 430"
            width="100%"
            role="img"
            aria-label="${esc(title())}"
            xmlns="http://www.w3.org/2000/svg"
          >

            ${body}

          </svg>

        </div>

      </section>
    `;
  }

  /*
   * प्रत्येक lesson का स्पष्ट mapping
   * chapter number पर generic guessing नहीं
   */

  const MAP = {

    /* AADYA Special */
    'c1-1':'smart-c1',
    'c1-2':'smart-c1',

    'c2-1':'smart-c2',
    'c2-2':'angle',

    /* Ch 3 — प्राकृतिक संख्याएँ */
    't1-1':'number-place',
    't1-2':'number-place',
    't1-3':'number-line',
    't1-4':'number-line',
    't1-5':'sequence',

    /* Ch 4 — पूर्ण संख्याएँ */
    't2-1':'number-line',
    't2-2':'number-line',
    't2-3':'sequence',
    't2-4':'number-line',

    /* Ch 5 — पूर्णांक */
    't3-1':'integer',
    't3-2':'integer',
    't3-3':'integer',
    't3-4':'integer',
    't3-5':'integer',
    't3-6':'integer',

    /* Ch 6 — सांख्यिकी */
    't4-1':'stats',
    't4-2':'stats',
    't4-3':'stats',
    't4-4':'pictograph',
    't4-5':'bar',
    't4-6':'bar',

    /* Ch 7 — बीजीय अवधारणाएँ */
    't5-1':'algebra',
    't5-2':'algebra',
    't5-3':'algebra',
    't5-4':'algebra',

    /* Ch 8 — बीजीय व्यंजक */
    't6-1':'algebra',
    't6-2':'algebra',
    't6-3':'algebra',
    't6-4':'algebra',
    't6-5':'algebra',
    't6-6':'algebra',
    't6-7':'algebra',
    't6-8':'algebra',

    /* Ch 9 — ज्यामितीय अवधारणाएँ */
    't7-1':'geometry',
    't7-2':'geometry',
    't7-3':'geometry',
    't7-4':'geometry',
    't7-5':'geometry',

    /* Ch 10 — कोण */
    't8-1':'angle',
    't8-2':'angle',
    't8-3':'angle',
    't8-4':'angle',

    /* Ch 11 — लम्ब और समान्तर रेखाएँ */
    't9-1':'parallel',
    't9-2':'parallel',
    't9-3':'parallel',
    't9-4':'parallel',

    /* Ch 12 — LCM / HCF */
    't10-1':'lcm-hcf',
    't10-2':'lcm-hcf',
    't10-3':'lcm-hcf',
    't10-4':'lcm-hcf',
    't10-5':'lcm-hcf',
    't10-6':'lcm-hcf',
    't10-7':'lcm-hcf',

    /* Ch 13 — समीकरण */
    't11-1':'equation',
    't11-2':'equation',
    't11-3':'equation',
    't11-4':'equation',
    't11-5':'equation',

    /* Ch 14 — वाणिज्य गणित */
    't12-1':'commerce',
    't12-2':'commerce',
    't12-3':'commerce',
    't12-4':'commerce',
    't12-5':'commerce',
    't12-6':'commerce',
    't12-7':'commerce',
    't12-8':'commerce',

    /* Ch 15 — त्रिभुज */
    't13-1':'triangle',
    't13-2':'triangle',
    't13-3':'congruence',
    't13-4':'congruence',
    't13-5':'congruence',

    /* Ch 16 — वृत्त */
    't14-1':'circle',
    't14-2':'circle',
    't14-3':'circle',
    't14-4':'circle',

    /* Ch 17 — सममितता */
    't15-1':'symmetry',
    't15-2':'symmetry',

    /* Ch 18 — क्षेत्रमिति */
    't16-1':'solids',
    't16-2':'solids',
    't16-3':'solids'
  };

  function body(kind){

    /*
     * Custom lessons के actual JSON को प्राथमिकता
     */

    if(kind === 'smart-c1'){

      return /पैटर्न|क्रम/.test(title())
        ? body('sequence')
        : body('algebra');
    }

    if(kind === 'smart-c2'){

      return /रेखा|रेखाखंड|किरण/.test(title())
        ? body('line-ray')
        : body('angle');
    }

    switch(kind){

      case 'sequence':

        return `
          ${T(400,70,'क्रम को पहचानें',30)}

          ${L(
            90,220,
            710,220,
            '#457b9d',
            5
          )}

          ${[2,4,6,8,10]
            .map((n,i)=>
              `${C(
                130+i*130,
                220,
                9,
                '#e76f51',
                '#e76f51',
                2
              )}
              ${T(
                130+i*130,
                275,
                String(n),
                27
              )}`
            ).join('')}

          ${T(
            400,
            350,
            'हर बार +2 → अगली संख्या = 12',
            28,
            '#2a9d8f'
          )}
        `;

      case 'line-ray':

        return `
          ${L(
            100,110,
            700,110,
            '#457b9d',
            5
          )}

          ${L(
            100,215,
            620,215,
            '#e76f51',
            5
          )}

          ${L(
            180,335,
            700,335,
            '#2a9d8f',
            5
          )}

          ${T(80,115,'←',28)}
          ${T(720,115,'→',28)}

          ${C(
            100,215,
            8,
            '#e76f51',
            '#e76f51',
            2
          )}

          ${T(
            400,75,
            'रेखा',
            26,
            '#457b9d'
          )}

          ${T(
            360,180,
            'रेखाखंड',
            26,
            '#e76f51'
          )}

          ${T(
            420,300,
            'किरण',
            26,
            '#2a9d8f'
          )}
        `;

      case 'angle':

        return `
          ${L(
            160,320,
            650,320,
            '#e76f51',
            7
          )}

          ${L(
            160,320,
            410,105,
            '#457b9d',
            7
          )}

          ${C(
            160,320,
            8,
            '#17324d',
            '#17324d',
            2
          )}

          ${T(
            160,365,
            'शीर्ष',
            22
          )}

          <path
            d="M255 320 A95 95 0 0 0 230 255"
            fill="none"
            stroke="#2a9d8f"
            stroke-width="8"
          />

          ${T(
            280,245,
            '30°',
            28,
            '#2a9d8f'
          )}

          ${T(
            400,70,
            'न्यून • सम • अधिक कोण',
            28
          )}
        `;

      case 'number-place':

        return `
          ${R(
            100,105,
            600,190,
            '#eef6ff',
            '#457b9d'
          )}

          ${T(
            400,70,
            '4  5  8  2',
            36
          )}

          ${T(175,150,'हजार',22,'#e63946')}
          ${T(325,150,'सैकड़ा',22,'#2a9d8f')}
          ${T(475,150,'दहाई',22,'#f4a261')}
          ${T(625,150,'इकाई',22,'#457b9d')}

          ${T(175,235,'4000',28,'#e63946')}
          ${T(325,235,'500',28,'#2a9d8f')}
          ${T(475,235,'80',28,'#f4a261')}
          ${T(625,235,'2',28,'#457b9d')}

          ${T(
            400,
            365,
            '4,582 = 4000 + 500 + 80 + 2',
            27
          )}
        `;

      case 'number-line':

        return `
          ${L(
            80,220,
            720,220,
            '#17324d',
            6
          )}

          ${
            Array.from(
              {length:11},
              (_,i)=>
                `${L(
                  100+i*60,
                  205,
                  100+i*60,
                  235,
                  '#457b9d',
                  4
                )}
                ${T(
                  100+i*60,
                  275,
                  String(i),
                  21
                )}`
            ).join('')
          }

          ${C(
            340,220,
            10,
            '#e63946',
            '#e63946',
            2
          )}

          ${T(
            400,
            75,
            'संख्या रेखा',
            30
          )}
        `;

      case 'integer':

        return `
          ${L(
            70,220,
            730,220,
            '#17324d',
            6
          )}

          ${
            Array.from(
              {length:11},
              (_,i)=>{
                const n=i-5;

                return `
                  ${L(
                    100+i*60,
                    205,
                    100+i*60,
                    235,
                    n<0
                      ? '#e76f51'
                      : '#2a9d8f',
                    4
                  )}

                  ${T(
                    100+i*60,
                    275,
                    String(n),
                    21,
                    n<0
                      ? '#e76f51'
                      : '#17324d'
                  )}
                `;
              }
            ).join('')
          }

          ${T(
            400,
            75,
            'ऋणात्मक ← 0 → धनात्मक',
            28
          )}
        `;

      case 'stats':

        return `
          ${R(
            110,95,
            580,250,
            '#fff',
            '#457b9d'
          )}

          ${L(110,155,690,155)}
          ${L(110,215,690,215)}
          ${L(110,275,690,275)}
          ${L(350,95,350,345)}

          ${T(230,135,'मान',23)}
          ${T(515,135,'बारंबारता',23)}

          ${T(230,195,'2',24,'#457b9d')}
          ${T(515,195,'4',24,'#2a9d8f')}

          ${T(230,255,'3',24,'#457b9d')}
          ${T(515,255,'5',24,'#2a9d8f')}

          ${T(
            400,
            390,
            'आँकड़े → तालिका → समझ',
            27,
            '#e76f51'
          )}
        `;

      case 'bar':

        return `
          ${L(
            100,350,
            100,80,
            '#17324d',
            5
          )}

          ${L(
            100,350,
            720,350,
            '#17324d',
            5
          )}

          <rect
            x="170" y="240"
            width="80" height="110"
            rx="8"
            fill="#457b9d"
          />

          <rect
            x="310" y="180"
            width="80" height="170"
            rx="8"
            fill="#2a9d8f"
          />

          <rect
            x="450" y="120"
            width="80" height="230"
            rx="8"
            fill="#e9c46a"
          />

          <rect
            x="590" y="210"
            width="80" height="140"
            rx="8"
            fill="#e76f51"
          />

          ${T(210,385,'A',22)}
          ${T(350,385,'B',22)}
          ${T(490,385,'C',22)}
          ${T(630,385,'D',22)}

          ${T(
            400,
            55,
            'दण्ड आलेख',
            30
          )}
        `;

      case 'pictograph':

        return `
          ${T(
            400,
            70,
            'चित्र ग्राफ',
            30
          )}

          ${
            [0,1,2,3]
              .map(
                r =>
                  T(
                    180+r*140,
                    190,
                    '●',
                    48,
                    [
                      '#e63946',
                      '#457b9d',
                      '#2a9d8f',
                      '#e9c46a'
                    ][r]
                  )
              )
              .join('')
          }

          ${T(
            400,
            270,
            '● = 5 विद्यार्थी',
            26
          )}

          ${T(
            400,
            350,
            'चित्रों की संख्या × कुंजी = आँकड़ा',
            26,
            '#e76f51'
          )}
        `;

      case 'algebra':

        return `
          ${R(
            100,105,
            600,190,
            '#f4f9ff',
            '#457b9d'
          )}

          ${T(
            250,230,
            '3x',
            48,
            '#e63946'
          )}

          ${T(
            400,230,
            '+',
            42
          )}

          ${T(
            550,230,
            '5',
            48,
            '#2a9d8f'
          )}

          ${T(
            250,165,
            'गुणांक × चर',
            21,
            '#e63946'
          )}

          ${T(
            550,165,
            'अचर',
            21,
            '#2a9d8f'
          )}

          ${T(
            400,370,
            '3x + 5',
            34
          )}
        `;

      case 'geometry':

        return `
          ${C(
            180,150,
            8,
            '#e63946',
            '#e63946',
            2
          )}

          ${T(
            180,115,
            'बिन्दु',
            23
          )}

          ${L(
            280,150,
            650,150,
            '#457b9d',
            5
          )}

          ${T(
            465,115,
            'रेखा',
            23,
            '#457b9d'
          )}

          ${L(
            300,285,
            520,285,
            '#e76f51',
            6
          )}

          ${L(
            410,220,
            410,350,
            '#2a9d8f',
            6
          )}

          ${T(
            410,395,
            'समतल में आकृतियाँ',
            27
          )}
        `;

      case 'parallel':

        return `
          ${L(
            120,140,
            680,140,
            '#457b9d',
            6
          )}

          ${L(
            120,300,
            680,300,
            '#457b9d',
            6
          )}

          ${L(
            250,360,
            550,80,
            '#e76f51',
            6
          )}

          ${T(
            650,125,
            'ℓ₁',
            23,
            '#457b9d'
          )}

          ${T(
            650,285,
            'ℓ₂',
            23,
            '#457b9d'
          )}

          ${T(
            400,
            55,
            'लम्ब / समान्तर / तिर्यक रेखा',
            28
          )}
        `;

      case 'lcm-hcf':

        return `
          ${T(
            220,65,
            '4 के गुणज',
            26,
            '#457b9d'
          )}

          ${T(
            580,65,
            '6 के गुणज',
            26,
            '#2a9d8f'
          )}

          ${
            [4,8,12,16,20]
              .map(
                (n,i)=>
                  `${C(
                    150+i*115,
                    150,
                    10,
                    n===12
                      ? '#e63946'
                      : '#457b9d',
                    n===12
                      ? '#e63946'
                      : '#457b9d',
                    2
                  )}
                  ${T(
                    150+i*115,
                    195,
                    String(n),
                    21
                  )}`
              )
              .join('')
          }

          ${
            [6,12,18,24,30]
              .map(
                (n,i)=>
                  `${C(
                    150+i*115,
                    270,
                    10,
                    n===12
                      ? '#e63946'
                      : '#2a9d8f',
                    n===12
                      ? '#e63946'
                      : '#2a9d8f',
                    2
                  )}
                  ${T(
                    150+i*115,
                    315,
                    String(n),
                    21
                  )}`
              )
              .join('')
          }

          ${T(
            400,
            385,
            'पहला साझा गुणज = 12 → ल.स. = 12',
            27,
            '#e63946'
          )}
        `;

      case 'equation':

        return `
          ${R(
            120,180,
            230,80,
            '#eef6ff',
            '#457b9d'
          )}

          ${R(
            450,180,
            230,80,
            '#fff3e6',
            '#e76f51'
          )}

          ${L(
            350,220,
            450,220,
            '#17324d',
            7
          )}

          ${T(
            235,230,
            'x + 5',
            32
          )}

          ${T(
            565,230,
            '12',
            32
          )}

          ${T(
            400,
            130,
            '⚖️ दोनों पक्ष बराबर',
            28
          )}

          ${T(
            400,
            335,
            'x + 5 = 12  →  x = 7',
            30,
            '#2a9d8f'
          )}
        `;

      case 'commerce':{

        const s =
          title();

        if(/अनुपात/.test(s)){

          return `
            ${R(
              120,100,
              220,190,
              '#eef6ff',
              '#457b9d'
            )}

            ${T(
              230,145,
              '12',
              34,
              '#457b9d'
            )}

            ${T(
              230,205,
              ' : ',
              28
            )}

            ${T(
              230,265,
              '8',
              34,
              '#2a9d8f'
            )}

            ${T(
              510,155,
              '12 : 8',
              34
            )}

            ${T(
              510,220,
              '= 3 : 2',
              34,
              '#e63946'
            )}

            )}

            ${T(
              400,
              355,
              'दो समान प्रकार की राशियों की तुलना',
              26
            )}
          `;
        }

        if(/समानुपात/.test(s)){

          return `
            ${T(
              400,70,
              '2 : 3  =  4 : 6',
              34
            )}

            ${L(
              160,145,
              640,145,
              '#457b9d',
              5
            )}

            ${C(
              220,145,
              12,
              '#457b9d',
              '#457b9d',
              2
            )}

            ${C(
              400,145,
              12,
              '#2a9d8f',
              '#2a9d8f',
              2
            )}

            ${C(
              580,145,
              12,
              '#e9c46a',
              '#e9c46a',
              2
            )}

            ${T(
              400,
              235,
              '2×6 = 3×4',
              30,
              '#2a9d8f'
            )}

            ${T(
              400,
              330,
              'समानुपात में दोनों अनुपात बराबर होते हैं',
              25
            )}
          `;
        }

        if(/प्रतिशत/.test(s)){

          return `
            ${R(
              110,120,
              580,85,
              '#eee',
              '#bbb',
              2,
              12
            )}

            <rect
              x="110"
              y="120"
              width="145"
              height="85"
              rx="12"
              fill="#2a9d8f"
            />

            ${T(
              400,
              85,
              '25%',
              34,
              '#2a9d8f'
            )}

            ${T(
              400,
              270,
              '100 में से 25 = 25%',
              28
            )}

            ${T(
              400,
              345,
              'प्रतिशत = प्रति 100',
              25,
              '#e63946'
            )}
          `;
        }

        if(/लाभ|हानि/.test(s)){

          return `
            ${R(
              120,110,
              210,120,
              '#eef6ff',
              '#457b9d'
            )}

            ${T(
              225,150,
              'क्रय मूल्य',
              23
            )}

            ${T(
              225,195,
              '₹500',
              34
            )}

            ${R(
              470,110,
              210,120,
              '#fff3e6',
              '#e76f51'
            )}

            ${T(
              575,150,
              'विक्रय मूल्य',
              23
            )}

            ${T(
              575,195,
              '₹600',
              34,
              '#e76f51'
            )}

            ${T(
              400,
              300,
              '₹600 − ₹500 = ₹100 लाभ',
              29,
              '#2a9d8f'
            )}

            ${T(
              400,
              355,
              'लाभ % = (लाभ/क्रय मूल्य) × 100',
              23
            )}
          `;
        }
         if(/ब्याज/.test(s)){

          return `
            ${C(
              220,190,
              70,
              '#eef6ff',
              '#457b9d',
              5
            )}

            ${T(
              220,198,
              'मूलधन P',
              24
            )}

            ${C(
              400,190,
              70,
              '#eefaf5',
              '#2a9d8f',
              5
            )}

            ${T(
              400,198,
              'ब्याज I',
              24,
              '#2a9d8f'
            )}

            ${C(
              580,190,
              70,
              '#fff3e6',
              '#e76f51',
              5
            )}

            ${T(
              580,198,
              'राशि A',
              24,
              '#e76f51'
            )}

            ${T(
              400,
              330,
              'साधारण ब्याज → P, R, T से I',
              27
            )}
          `;
        }

        if(/मुद्रा/.test(s)){

          return `
            ${R(
              100,120,
              600,150,
              '#fff9df',
              '#e9c46a'
            )}

            ${T(
              220,175,
              '₹',
              58,
              '#e9a900'
            )}

            ${T(
              400,175,
              '₹10  ₹20  ₹50  ₹100',
              28
            )}

            ${T(
              400,
              250,
              'भारतीय मुद्रा के मूल्यवर्ग',
              26
            )}

            ${T(
              400,
              350,
              'रुपये = दैनिक लेन-देन की गणित',
              25
            )}
          `;
        }

        if(/बिल|कैशमेमो/.test(s)){

          return `
            ${R(
              170,70,
              460,300,
              '#fff',
              '#17324d',
              4,
              8
            )}

            ${T(
              400,105,
              'कैशमेमो',
              28
            )}

            ${L(
              200,130,
              600,130
            )}

            ${T(
              250,165,
              'वस्तु',
              22
            )}

            ${T(
              470,165,
              'राशि',
              22
            )}

            ${T(
              250,215,
              'किताब × 2',
              22
            )}

            ${T(
              470,215,
              '₹200',
              22
            )}

            ${T(
              250,260,
              'पेन × 3',
              22
            )}

            ${T(
              470,260,
              '₹60',
              22
            )}

            ${L(
              200,285,
              600,285
            )}

            ${T(
              470,325,
              'कुल ₹260',
              25,
              '#e63946'
            )}
          `;
        }

        return `
          ${R(
            90,95,
            200,100,
            '#eef6ff',
            '#457b9d'
          )}

          ${T(190,135,'3 : 2',32)}
          ${T(190,175,'अनुपात',22)}

          ${R(
            310,95,
            200,100,
            '#eefaf5',
            '#2a9d8f'
          )}

          ${T(
            410,135,
            '25%',
            32,
            '#2a9d8f'
          )}

          ${T(
            410,175,
            'प्रतिशत',
            22
          )}

          ${R(
            530,95,
            180,100,
            '#fff3e6',
            '#e76f51'
          )}

          ${T(
            620,135,
            '₹100',
            30,
            '#e76f51'
          )}

          ${T(
            620,175,
            'मूल्य',
            22
          )}

          ${L(
            120,290,
            680,290,
            '#17324d',
            5
          )}

          ${T(
            400,
            350,
            'लाभ/हानि • ब्याज • बिल/कैशमेमो',
            26
          )}
        `;
      }
          case 'triangle':

        return `
          ${P(
            '400,75 150,340 650,340',
            '#eef6ff',
            '#457b9d',
            6
          )}

          ${T(
            400,60,
            'A',
            25,
            '#e63946'
          )}

          ${T(
            130,370,
            'B',
            25,
            '#2a9d8f'
          )}

          ${T(
            670,370,
            'C',
            25,
            '#e76f51'
          )}

          ${T(
            400,
            405,
            '3 शीर्ष • 3 भुजाएँ • 3 कोण',
            27
          )}
        `;

      case 'congruence':

        return `
          ${P(
            '190,300 300,110 410,300',
            '#eef6ff',
            '#457b9d',
            6
          )}

          ${P(
            '470,300 580,110 690,300',
            '#fff3e6',
            '#e76f51',
            6
          )}

          ${T(
            300,355,
            '△ABC',
            25,
            '#457b9d'
          )}

          ${T(
            580,355,
            '△PQR',
            25,
            '#e76f51'
          )}

          ${T(
            400,
            75,
            'समान आकार और समान माप',
            29,
            '#2a9d8f'
          )}
        `;

      case 'circle':

        return `
          ${C(
            400,220,
            145,
            '#eef6ff',
            '#457b9d',
            6
          )}

          ${C(
            400,220,
            8,
            '#e63946',
            '#e63946',
            2
          )}

          ${L(
            400,220,
            545,220,
            '#2a9d8f',
            7
          )}

          ${L(
            255,220,
            545,220,
            '#e76f51',
            5
          )}

          ${T(
            400,260,
            'केन्द्र O',
            22,
            '#e63946'
          )}

          ${T(
            475,200,
            'त्रिज्या',
            22,
            '#2a9d8f'
          )}

          ${T(
            400,180,
            'व्यास',
            22,
            '#e76f51'
          )}

          ${T(
            400,
            400,
            'जीवा • चाप • अर्धवृत्त • वृत्तखंड',
            25
          )}
        `;

      case 'symmetry':

        return `
          ${P(
            '400,70 300,160 325,160 250,315 400,265 550,315 475,160 500,160',
            '#e9c46a',
            '#17324d',
            5
          )}

          ${L(
            400,50,
            400,350,
            '#e63946',
            4,
            '10 8'
          )}

          ${T(
            400,
            405,
            'लाल रेखा = सममिति अक्ष',
            27,
            '#e63946'
          )}
        `;

      case 'solids':{

        const s =
          title();

        if(/अंग/.test(s)){

          return `
            ${P(
              '120,145 300,95 430,150 250,205',
              '#eef6ff',
              '#457b9d',
              5
            )}

            ${P(
              '120,145 250,205 250,350 120,290',
              '#dff5f0',
              '#2a9d8f',
              5
            )}

            ${P(
              '250,205 430,150 430,295 250,350',
              '#fff0df',
              '#e76f51',
              5
            )}

            ${T(
              200,390,
              'घनाभ',
              25
            )}

            ${P(
              '500,270 600,150 700,270',
              '#fff3e6',
              '#e76f51',
              5
            )}

            ${T(
              600,310,
              'पिरामिड',
              23
            )}

            ${T(
              400,
              55,
              'फलक • किनारे • शीर्ष • प्रिज्म • पिरामिड',
              27
            )}
          `;
        }
         if(/आयतन की अवधारणा/.test(s)){

          return `
            ${R(
              120,115,
              560,210,
              '#eef6ff',
              '#457b9d'
            )}

            ${
              Array.from(
                {length:24},
                (_,i)=>{
                  const col=i%6;
                  const row=Math.floor(i/6);

                  return `
                    <rect
                      x="${150+col*85}"
                      y="${140+row*45}"
                      width="70"
                      height="35"
                      fill="${
                        row%2
                          ? '#dff5f0'
                          : '#fff3e6'
                      }"
                      stroke="#457b9d"
                    />
                  `;
                }
              ).join('')
            }

            ${T(
              400,
              370,
              'छोटे 1 cm³ घन मिलाकर पूरा आयतन',
              27,
              '#2a9d8f'
            )}
          `;
        }

        return `
          ${P(
            '150,150 420,95 650,170 380,225',
            '#eef6ff',
            '#457b9d',
            5
          )}

          ${P(
            '150,150 380,225 380,370 150,295',
            '#dff5f0',
            '#2a9d8f',
            5
          )}

          ${P(
            '380,225 650,170 650,315 380,370',
            '#fff0df',
            '#e76f51',
            5
          )}

          ${T(
            400,
            55,
            'घनाभ का आयतन = l × b × h',
            28
          )}

          ${T(
            400,
            410,
            'घन का आयतन = a × a × a',
            27,
            '#2a9d8f'
          )}
        `;
      }

      default:
        return '';
    }
  }

  function render(){

    if(!isClass6Math()) return;

    const container =
      document.getElementById('content') ||
      document.querySelector('main');

    if(!container) return;

    /*
     * पुराने generic engine का diagram
     * यदि cache से आया हो तो हटाएँ
     */

    const old =
      document.getElementById(
        'aadya-auto-diagram'
      );

    if(old){
      old.remove();
    }

    if(
      container.querySelector(
        '.' + CARD
      )
    ){
      return;
    }

    const kind =
      MAP[pathKey()];

    /*
     * अब कोई generic fallback नहीं।
     * Mapping नहीं है तो diagram भी नहीं।
     */

    if(!kind) return;

    const html =
      wrap(
        body(kind)
      );

    const box =
      document.createElement('div');

    box.innerHTML =
      html.trim();

    const card =
      box.firstElementChild;

    const anchor =
      document.getElementById(
        'tryYourself'
      );

    if(
      anchor &&
      anchor.parentNode
    ){

      anchor.parentNode.insertBefore(
        card,
        anchor
      );

    }
    else{

      container.appendChild(
        card
      );

    }
  }

  window.AADYAClass6MathematicsDiagramEngine = {

    render,

    refresh:()=>{
      setTimeout(
        render,
        120
      );
    }

  };

  document.addEventListener(
    'DOMContentLoaded',
    ()=>{
      setTimeout(
        render,
        180
      );
    }
  );

  const obs =
    new MutationObserver(
      ()=>{
        setTimeout(
          render,
          80
        );
      }
    );

  document.addEventListener(
    'DOMContentLoaded',
    ()=>{
      const c =
        document.getElementById(
          'content'
        );

      if(c){

        obs.observe(
          c,
          {
            childList:true,
            subtree:true
          }
        );

      }
    }
  );

})();
   
