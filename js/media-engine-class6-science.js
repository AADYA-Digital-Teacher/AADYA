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
     
     केवल Chapter 1 के पुराने
     PNG + MP4 के लिए।
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
       PNG
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
       MP4
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


    wrapper.appendChild(
      image
    );


    wrapper.appendChild(
      video
    );


    return wrapper;
  }


  /* =====================================================
     INSERT AFTER EXPLANATION
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
     MAIN ENGINE
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

       ONLY PNG
       NO MP4
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


      const media1 =
        createChapter02Image(
          1,
          "🔬 देखें और समझें — पदार्थों का वर्गीकरण"
        );


      const media2 =
        createChapter02Image(
          2,
          "🔎 देखें और समझें — पदार्थों के गुण"
        );


      const boxes =
        explanation.querySelectorAll(
          ".example"
        );


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
       CHAPTER 3
       पदार्थों का पृथक्करण

       ONLY PNG
       NO MP4
    ===================================================== */

    if (
      chapter === 3 &&
      lesson === 1
    ) {

      const explanation =
        document.querySelector(
          "#explanation"
        );


      if (!explanation) {
        return;
      }


      if (
        explanation.querySelector(
          ".aadya-science-chapter03-media"
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


      function createChapter03Image(
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
          "aadya-science-chapter03-media";


        wrapper.style.margin =
          "24px 0 30px 0";


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


      const media1 =
        createChapter03Image(
          1,
          "🔬 देखें और समझें — तत्व, यौगिक एवं मिश्रण"
        );


      const media2 =
        createChapter03Image(
          2,
          "🧪 देखें और समझें — पृथक्करण की सामान्य विधियाँ"
        );


      const boxes =
        explanation.querySelectorAll(
          ".example"
        );


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

       Chapter 4, 5, 6...
       बाद में इसी pattern पर जोड़ेंगे।

       अभी कोई बदलाव नहीं।
    ===================================================== */


    /* =====================================================
       CHAPTER 1
       विज्ञान का अनूठा संसार

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


    if (
      explanation.querySelector(
        ".aadya-science-media-block"
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


    const videoBasePath =
      "assets/media/class6/science/chapter" +
      chapterNumber;


    /* =================================================
       CHAPTER 1 — MEDIA 1
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
     ASYNCHRONOUS LESSON DATA
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
