(function () {
  "use strict";

  let initialized = false;


  /* =====================================================
     LESSON PATH
  ===================================================== */

  function getLessonPath() {
    try {
      const params =
        new URLSearchParams(
          window.location.search
        );

      return decodeURIComponent(
        params.get("lesson") || ""
      );

    } catch (error) {
      return "";
    }
  }


  /* =====================================================
     GENERIC MEDIA BLOCK
     
     यह Chapter 1 के पुराने
     PNG + MP4 के लिए है।
     
     Chapter 2 इसमें नहीं आएगा।
  ===================================================== */

  function createMediaBlock(
    chapterNumber,
    lessonNumber,
    mediaNumber,
    title,
    imageBasePath,
    videoBasePath
  ) {

    const mediaNumberText =
      String(mediaNumber).padStart(2, "0");


    const fileName =
      "chapter" +
      chapterNumber +
      "-lesson" +
      lessonNumber +
      "-" +
      mediaNumberText;


    const wrapper =
      document.createElement("div");


    wrapper.className =
      "aadya-science-media-block";


    wrapper.style.margin =
      "24px 0 30px 0";


    /* -------------------------------------------------
       TITLE
    ------------------------------------------------- */

    const titleElement =
      document.createElement("h4");


    titleElement.textContent =
      title;


    titleElement.style.margin =
      "0 0 14px 0";


    titleElement.style.fontSize =
      "19px";


    titleElement.style.color =
      "#172b4d";


    wrapper.appendChild(
      titleElement
    );


    /* -------------------------------------------------
       PNG IMAGE
    ------------------------------------------------- */

    const image =
      document.createElement("img");


    image.src =
      imageBasePath +
      "/" +
      fileName +
      ".png";


    image.alt =
      title;


    image.loading =
      "lazy";


    image.style.width =
      "100%";


    image.style.height =
      "auto";


    image.style.display =
      "block";


    image.style.borderRadius =
      "14px";


    image.style.marginBottom =
      "14px";


    /* -------------------------------------------------
       VIDEO
    ------------------------------------------------- */

    const video =
      document.createElement("video");


    video.controls =
      true;


    video.playsInline =
      true;


    video.preload =
      "metadata";


    video.style.width =
      "100%";


    video.style.height =
      "auto";


    video.style.display =
      "block";


    video.style.borderRadius =
      "14px";


    video.style.background =
      "#000";


    const source =
      document.createElement("source");


    source.src =
      videoBasePath +
      "/" +
      fileName +
      ".mp4";


    source.type =
      "video/mp4";


    video.appendChild(
      source
    );


    /* -------------------------------------------------
       ERROR HANDLING
    ------------------------------------------------- */

    let imageLoaded =
      false;


    let videoLoaded =
      false;


    image.addEventListener(
      "load",
      function () {

        imageLoaded =
          true;

      }
    );


    image.addEventListener(
      "error",
      function () {

        image.remove();


        if (!videoLoaded) {

          wrapper.remove();

        }

      }
    );


    video.addEventListener(
      "loadedmetadata",
      function () {

        videoLoaded =
          true;

      }
    );


    video.addEventListener(
      "error",
      function () {

        video.remove();


        if (!imageLoaded) {

          wrapper.remove();

        }

      }
    );


    /* -------------------------------------------------
       PNG पहले
       MP4 उसके नीचे
    ------------------------------------------------- */

    wrapper.appendChild(
      image
    );


    wrapper.appendChild(
      video
    );


    return wrapper;
  }


  /* =====================================================
     INSERT MEDIA AFTER EXPLANATION ITEM
  ===================================================== */

  function insertAfterExplanation(
    explanationContainer,
    index,
    mediaBlock
  ) {

    const boxes =
      explanationContainer.querySelectorAll(
        ".example"
      );


    if (
      boxes.length >
      index
    ) {

      const target =
        boxes[index];


      target.parentNode.insertBefore(
        mediaBlock,
        target.nextSibling
      );


      return true;
    }


    return false;
  }


  /* =====================================================
     CLASS 6 SCIENCE MEDIA ENGINE
  ===================================================== */

  function initScienceMedia() {

    if (initialized) {
      return;
    }


    const data =
      window.lessonData;


    if (!data) {
      return;
    }


    /* -------------------------------------------------
       ONLY CLASS 6
    ------------------------------------------------- */

    if (
      Number(data.class) !== 6
    ) {

      return;
    }


    /* -------------------------------------------------
       ONLY SCIENCE
    ------------------------------------------------- */

    const subject =
      String(
        data.subject || ""
      )
        .trim()
        .toLowerCase();


    if (
      subject !== "विज्ञान" &&
      subject !== "science"
    ) {

      return;
    }


    /* -------------------------------------------------
       LESSON PATH
    ------------------------------------------------- */

    const lessonPath =
      getLessonPath();


    const match =
      lessonPath.match(
        /content\/class6\/science\/chapter(\d+)\/lesson(\d+)\.json$/i
      );


    if (!match) {
      return;
    }


    const chapter =
      Number(match[1]);


    const lesson =
      Number(match[2]);


    if (
      chapter < 1 ||
      lesson < 1
    ) {

      return;
    }


    /* =====================================================
       CHAPTER 2
       पदार्थ एवं पदार्थ के समूह
       
       केवल PNG
       कोई MP4 नहीं
    ===================================================== */

    if (
      chapter === 2 &&
      lesson === 1
    ) {

      const explanation =
        document.querySelector(
          "#explanation"
        );


      if (!explanation) {
        return;
      }


      /* -------------------------------------------------
         DUPLICATE PROTECTION
      ------------------------------------------------- */

      if (
        explanation.querySelector(
          ".aadya-science-chapter02-media"
        )
      ) {

        initialized =
          true;

        return;
      }


      const chapterNumber =
        String(chapter).padStart(
          2,
          "0"
        );


      const lessonNumber =
        String(lesson).padStart(
          2,
          "0"
        );


      const imageBasePath =
        "assets/images/class6/science/chapter" +
        chapterNumber;


      /* -------------------------------------------------
         CHAPTER 2 PNG CREATOR
         
         ध्यान दें:
         यहां VIDEO ELEMENT बनाया ही नहीं जाता।
      ------------------------------------------------- */

      function createChapter02Image(
        mediaNumber,
        title
      ) {

        const mediaNumberText =
          String(mediaNumber).padStart(
            2,
            "0"
          );


        const fileName =
          "chapter" +
          chapterNumber +
          "-lesson" +
          lessonNumber +
          "-" +
          mediaNumberText;


        const wrapper =
          document.createElement(
            "div"
          );


        wrapper.className =
          "aadya-science-chapter02-media";


        wrapper.style.margin =
          "24px 0 30px 0";


        /* ---------------------------------------------
           TITLE
        --------------------------------------------- */

        const titleElement =
          document.createElement(
            "h4"
          );


        titleElement.textContent =
          title;


        titleElement.style.margin =
          "0 0 14px 0";


        titleElement.style.fontSize =
          "19px";


        titleElement.style.color =
          "#172b4d";


        wrapper.appendChild(
          titleElement
        );


        /* ---------------------------------------------
           PNG
        --------------------------------------------- */

        const image =
          document.createElement(
            "img"
          );


        image.src =
          imageBasePath +
          "/" +
          fileName +
          ".png";


        image.alt =
          title;


        image.loading =
          "lazy";


        image.style.width =
          "100%";


        image.style.height =
          "auto";


        image.style.display =
          "block";


        image.style.borderRadius =
          "14px";


        image.style.boxShadow =
          "0 5px 18px rgba(23,43,77,.10)";


        /* ---------------------------------------------
           IMAGE ERROR
        --------------------------------------------- */

        image.addEventListener(
          "error",
          function () {

            wrapper.remove();

          }
        );


        wrapper.appendChild(
          image
        );


        return wrapper;
      }


      /* =================================================
         CHAPTER 2 — PNG 1
         
         chapter02-lesson01-01.png
      ================================================= */

      const media1 =
        createChapter02Image(
          1,
          "🔬 देखें और समझें — पदार्थों का वर्गीकरण"
        );


      /* =================================================
         CHAPTER 2 — PNG 2
         
         chapter02-lesson01-02.png
      ================================================= */

      const media2 =
        createChapter02Image(
          2,
          "🔎 देखें और समझें — पदार्थों के गुण"
        );


      /* -------------------------------------------------
         CURRENT EXPLANATION BOXES
      ------------------------------------------------- */

      const boxes =
        explanation.querySelectorAll(
          ".example"
        );


      /* -------------------------------------------------
         PNG 1
         
         पहले explanation item के बाद
      ------------------------------------------------- */

      if (
        boxes.length > 0
      ) {

        boxes[0]
          .parentNode
          .insertBefore(
            media1,
            boxes[0].nextSibling
          );

      } else {

        explanation.appendChild(
          media1
        );

      }


      /* -------------------------------------------------
         PNG 2
         
         पांचवें explanation item के बाद
      ------------------------------------------------- */

      if (
        boxes.length > 4
      ) {

        boxes[4]
          .parentNode
          .insertBefore(
            media2,
            boxes[4].nextSibling
          );

      } else {

        explanation.appendChild(
          media2
        );

      }


      initialized =
        true;


      return;
    }


    /* =====================================================
       FUTURE CHAPTERS
       
       Chapter 3, 4, 5...
       यहां इसी pattern में जोड़े जाएंगे।
       
       अभी इनके लिए कोई media नहीं।
    ===================================================== */


    /*
     * उदाहरण:
     *
     * if (
     *   chapter === 3 &&
     *   lesson === 1
     * ) {
     *
     *   // Chapter 3 media code
     *
     *   initialized = true;
     *   return;
     * }
     */


    /* =====================================================
       CHAPTER 1
       विज्ञान का अनूठा संसार
       
       केवल Chapter 1 / Lesson 1
       
       पुराने 3 PNG + MP4
       बिल्कुल सुरक्षित
    ===================================================== */

    if (
      chapter !== 1 ||
      lesson !== 1
    ) {

      return;
    }


    const explanation =
      document.querySelector(
        "#explanation"
      );


    if (!explanation) {
      return;
    }


    /* -------------------------------------------------
       DUPLICATE PROTECTION
    ------------------------------------------------- */

    if (
      explanation.querySelector(
        ".aadya-science-media-block"
      )
    ) {

      initialized =
        true;

      return;
    }


    /* -------------------------------------------------
       PATHS
    ------------------------------------------------- */

    const chapterNumber =
      String(chapter).padStart(
        2,
        "0"
      );


    const lessonNumber =
      String(lesson).padStart(
        2,
        "0"
      );


    const imageBasePath =
      "assets/images/class6/science/chapter" +
      chapterNumber;


    const videoBasePath =
      "assets/media/class6/science/chapter" +
      chapterNumber;


    /* =================================================
       CHAPTER 1 — MEDIA 1
       
       विज्ञान हमारे आसपास
       Explanation item 1 के बाद
    ================================================= */

    const media1 =
      createMediaBlock(
        chapterNumber,
        lessonNumber,
        1,
        "🔍 देखें और समझें — विज्ञान हमारे आसपास",
        imageBasePath,
        videoBasePath
      );


    /* =================================================
       CHAPTER 1 — MEDIA 2
       
       कलम वाली वैज्ञानिक विधि
       Explanation item 5 के बाद
    ================================================= */

    const media2 =
      createMediaBlock(
        chapterNumber,
        lessonNumber,
        2,
        "🧪 देखें और समझें — कलम वाली वैज्ञानिक विधि",
        imageBasePath,
        videoBasePath
      );


    /* =================================================
       CHAPTER 1 — MEDIA 3
       
       विज्ञान की यात्रा
       Explanation item 8 के बाद
    ================================================= */

    const media3 =
      createMediaBlock(
        chapterNumber,
        lessonNumber,
        3,
        "🚀 देखें और समझें — विज्ञान की यात्रा",
        imageBasePath,
        videoBasePath
      );


    /* -------------------------------------------------
       INSERT POSITIONS
       
       0 = पहला explanation item
       4 = पांचवां explanation item
       7 = आठवां explanation item
    ------------------------------------------------- */

    const inserted1 =
      insertAfterExplanation(
        explanation,
        0,
        media1
      );


    const inserted2 =
      insertAfterExplanation(
        explanation,
        4,
        media2
      );


    const inserted3 =
      insertAfterExplanation(
        explanation,
        7,
        media3
      );


    /* -------------------------------------------------
       ENGINE COMPLETE
    ------------------------------------------------- */

    if (
      inserted1 ||
      inserted2 ||
      inserted3
    ) {

      initialized =
        true;
    }

  }


  /* =====================================================
     LESSON DATA ASYNCHRONOUS LOAD
     
     इसलिए हर 250ms पर check
  ===================================================== */

  const timer =
    setInterval(
      function () {

        if (
          window.lessonData
        ) {

          initScienceMedia();


          if (initialized) {

            clearInterval(
              timer
            );
          }
        }

      },
      250
    );


  /* =====================================================
     SAFETY TIMEOUT
     
     अधिकतम 15 सेकंड
  ===================================================== */

  setTimeout(
    function () {

      clearInterval(
        timer
      );

    },
    15000
  );

})();
