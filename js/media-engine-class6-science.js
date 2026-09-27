(function () {
  "use strict";

  let initialized = false;

  function getLessonPath() {
    try {
      const params = new URLSearchParams(
        window.location.search
      );

      return decodeURIComponent(
        params.get("lesson") || ""
      );
    } catch (error) {
      return "";
    }
  }

  function initScienceMedia() {

    if (initialized) return;

    const data = window.lessonData;

    if (!data) return;

    // केवल Class 6
    if (Number(data.class) !== 6) return;

    // केवल Science
    const subject =
      String(data.subject || "")
        .trim()
        .toLowerCase();

    if (
      subject !== "विज्ञान" &&
      subject !== "science"
    ) {
      return;
    }

    /*
     * Actual lesson path URL से लिया जाएगा।
     * इससे JSON के "source" field पर निर्भरता नहीं रहेगी।
     */

    const lessonPath = getLessonPath();

    const match = lessonPath.match(
      /content\/class6\/science\/chapter(\d+)\/lesson(\d+)\.json$/i
    );

    if (!match) return;

    const chapter = Number(match[1]);
    const lesson = Number(match[2]);

    if (
      chapter < 1 ||
      lesson < 1
    ) {
      return;
    }

    const lessonContainer =
      document.querySelector("#lessonContent") ||
      document.querySelector(".lesson-content") ||
      document.querySelector("main");

    if (!lessonContainer) return;

    /*
     * Duplicate protection
     */

    if (
      lessonContainer.querySelector(
        ".aadya-class6-science-media"
      )
    ) {
      initialized = true;
      return;
    }

    /*
     * Media wrapper
     */

    const mediaWrapper =
      document.createElement("section");

    mediaWrapper.className =
      "aadya-class6-science-media";

    mediaWrapper.style.width = "100%";
    mediaWrapper.style.margin = "24px 0";

    const mediaTitle =
      document.createElement("h3");

    mediaTitle.textContent =
      "🎬 देखें और समझें";

    mediaTitle.style.marginBottom =
      "16px";

    mediaWrapper.appendChild(
      mediaTitle
    );

    /*
     * Paths
     */

    const chapterNumber =
      String(chapter).padStart(2, "0");

    const lessonNumber =
      String(lesson).padStart(2, "0");

    const imageBasePath =
      "assets/images/class6/science/chapter" +
      chapterNumber;

    const videoBasePath =
      "assets/media/class6/science/chapter" +
      chapterNumber;

    /*
     * Lesson 1:
     *
     * 01 = विज्ञान का अनूठा संसार
     * 02 = कलम वाली वैज्ञानिक विधि
     * 03 = विज्ञान की यात्रा
     */

    for (let i = 1; i <= 3; i++) {

      const mediaNumber =
        String(i).padStart(2, "0");

      const fileName =
        "chapter" +
        chapterNumber +
        "-lesson" +
        lessonNumber +
        "-" +
        mediaNumber;

      const block =
        document.createElement("div");

      block.style.marginBottom =
        "32px";

      /*
       * VIDEO
       */

      const video =
        document.createElement("video");

      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      video.style.width = "100%";
      video.style.height = "auto";
      video.style.display = "block";
      video.style.borderRadius = "14px";
      video.style.background = "#000";

      const videoSource =
        document.createElement("source");

      videoSource.src =
        videoBasePath +
        "/" +
        fileName +
        ".mp4";

      videoSource.type =
        "video/mp4";

      video.appendChild(
        videoSource
      );

      /*
       * PNG
       */

      const image =
        document.createElement("img");

      image.src =
        imageBasePath +
        "/" +
        fileName +
        ".png";

      image.alt =
        "कक्षा 6 विज्ञान — " +
        data.title +
        " — दृश्य " +
        mediaNumber;

      image.loading = "lazy";

      image.style.width = "100%";
      image.style.height = "auto";
      image.style.display = "block";
      image.style.borderRadius = "14px";
      image.style.marginTop = "12px";

      /*
       * अगर दोनों files missing हों
       * तो पूरा block हट जाएगा।
       */

      let videoLoaded = false;
      let imageLoaded = false;

      video.addEventListener(
        "loadedmetadata",
        function () {

          videoLoaded = true;

        }
      );

      video.addEventListener(
        "error",
        function () {

          video.remove();

          if (!imageLoaded) {
            block.remove();
          }

        }
      );

      image.addEventListener(
        "load",
        function () {

          imageLoaded = true;

        }
      );

      image.addEventListener(
        "error",
        function () {

          image.remove();

          if (!videoLoaded) {
            block.remove();
          }

        }
      );

      block.appendChild(video);
      block.appendChild(image);

      mediaWrapper.appendChild(
        block
      );
    }

    /*
     * Try Yourself से पहले media दिखाएँ।
     */

    const tryYourself =
      document.querySelector(
        "#tryYourself"
      );

    if (tryYourself) {

      tryYourself.parentNode.insertBefore(
        mediaWrapper,
        tryYourself
      );

    } else {

      lessonContainer.appendChild(
        mediaWrapper
      );

    }

    initialized = true;
  }


  /*
   * LessonData asynchronous है,
   * इसलिए थोड़ी देर तक check करेंगे।
   *
   * इससे learning.html की existing
   * architecture को बदलने की जरूरत नहीं।
   */

  const timer =
    setInterval(
      function () {

        if (
          window.lessonData
        ) {

          initScienceMedia();

          if (initialized) {
            clearInterval(timer);
          }

        }

      },
      250
    );


  /*
   * Safety timeout:
   * 15 seconds बाद checking बंद।
   */

  setTimeout(
    function () {
      clearInterval(timer);
    },
    15000
  );

})();
