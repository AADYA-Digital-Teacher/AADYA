(function () {
  "use strict";

  let initialized = false;

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


    /*
     * Title
     */

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


    /*
     * PNG IMAGE
     */

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


    /*
     * VIDEO
     */

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


    /*
     * File error handling
     */

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


    /*
     * PNG पहले
     * Video उसके नीचे
     */

    wrapper.appendChild(
      image
    );

    wrapper.appendChild(
      video
    );


    return wrapper;
  }


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


  function initScienceMedia() {

    if (initialized) {
      return;
    }


    const data =
      window.lessonData;


    if (!data) {
      return;
    }


    /*
     * केवल Class 6
     */

    if (
      Number(data.class) !== 6
    ) {

      return;

    }


    /*
     * केवल Science
     */

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


    /*
     * Lesson path
     */

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


    /*
     * केवल Chapter 1 / Lesson 1
     *
     * क्योंकि अभी हमारे पास
     * इसी lesson के 3 media हैं।
     */

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


    /*
     * Duplicate protection
     */

    if (
      explanation.querySelector(
        ".aadya-science-media-block"
      )
    ) {

      initialized =
        true;

      return;

    }


    /*
     * Paths
     */

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


    /*
     * ----------------------------------------
     * MEDIA 1
     * विज्ञान हर जगह
     * Explanation item 1 के बाद
     * ----------------------------------------
     */

    const media1 =
      createMediaBlock(
        chapterNumber,
        lessonNumber,
        1,
        "🔍 देखें और समझें — विज्ञान हमारे आसपास",
        imageBasePath,
        videoBasePath
      );


    /*
     * ----------------------------------------
     * MEDIA 2
     * कलम वाली वैज्ञानिक जाँच
     * Explanation item 5 के बाद
     * ----------------------------------------
     */

    const media2 =
      createMediaBlock(
        chapterNumber,
        lessonNumber,
        2,
        "🧪 देखें और समझें — कलम वाली वैज्ञानिक विधि",
        imageBasePath,
        videoBasePath
      );


    /*
     * ----------------------------------------
     * MEDIA 3
     * विज्ञान एक यात्रा है
     * Explanation item 8 के बाद
     * ----------------------------------------
     */

    const media3 =
      createMediaBlock(
        chapterNumber,
        lessonNumber,
        3,
        "🚀 देखें और समझें — विज्ञान की यात्रा",
        imageBasePath,
        videoBasePath
      );


    /*
     * Insert positions
     *
     * explanation[] में:
     *
     * 0 = विज्ञान हर जगह है
     * 4 = कलम वाली छोटी-सी वैज्ञानिक जाँच
     * 7 = विज्ञान एक यात्रा है
     */

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


    /*
     * अगर कम से कम एक media
     * successfully insert हो गया
     * तो engine complete माना जाएगा।
     */

    if (
      inserted1 ||
      inserted2 ||
      inserted3
    ) {

      initialized =
        true;

    }

  }


  /*
   * LessonData asynchronous है।
   */

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


  /*
   * Safety timeout
   */

  setTimeout(
    function () {

      clearInterval(
        timer
      );

    },
    15000
  );

})();
