(function () {
  "use strict";

  function initScienceMedia() {
    const data = window.lessonData;

    if (!data) return;

    // केवल Class 6
    if (Number(data.class) !== 6) return;

    // केवल Science
    const subject = String(data.subject || "").trim().toLowerCase();

    if (
      subject !== "विज्ञान" &&
      subject !== "science"
    ) {
      return;
    }

    /*
      Expected lesson source/path:
      content/class6/science/chapter01/lesson01.json
    */

    const source = String(
      data.source ||
      data.path ||
      data.lesson_path ||
      ""
    ).trim();

    const match = source.match(
      /content\/class6\/science\/chapter(\d+)\/lesson(\d+)\.json$/i
    );

    if (!match) return;

    const chapter = Number(match[1]);
    const lesson = Number(match[2]);

    if (chapter < 1 || lesson < 1) return;

    const lessonContainer =
      document.querySelector("#lessonContent") ||
      document.querySelector(".lesson-content") ||
      document.querySelector("main");

    if (!lessonContainer) return;

    // पुराने render से duplicate रोकें
    if (
      lessonContainer.querySelector(
        ".aadya-class6-science-media"
      )
    ) {
      return;
    }

    const mediaWrapper = document.createElement("section");

    mediaWrapper.className =
      "aadya-class6-science-media";

    mediaWrapper.style.width = "100%";
    mediaWrapper.style.margin = "24px 0";

    const mediaTitle = document.createElement("h3");

    mediaTitle.textContent = "🎬 देखें और समझें";

    mediaTitle.style.marginBottom = "12px";

    mediaWrapper.appendChild(mediaTitle);

    let mediaFound = false;

    /*
      Lesson 1 के लिए:
      01 = विज्ञान का अनूठा संसार
      02 = कलम वाली वैज्ञानिक विधि
      03 = विज्ञान की यात्रा

      भविष्य में इसी pattern से अन्य lessons भी जोड़े जा सकते हैं।
    */

    const basePath =
      "assets/media/class6/science/chapter" +
      String(chapter).padStart(2, "0");

    const imageBasePath =
      "assets/images/class6/science/chapter" +
      String(chapter).padStart(2, "0");

    const mediaItems = [];

    /*
      पहले तीन visual slots.
      यदि file उपलब्ध है तो अपने-आप दिखाई जाएगी।
    */

    for (let i = 1; i <= 3; i++) {
      const number = String(i).padStart(2, "0");

      mediaItems.push({
        number: number,
        video:
          basePath +
          "/chapter" +
          String(chapter).padStart(2, "0") +
          "-lesson" +
          String(lesson).padStart(2, "0") +
          "-" +
          number +
          ".mp4",
        image:
          imageBasePath +
          "/chapter" +
          String(chapter).padStart(2, "0") +
          "-lesson" +
          String(lesson).padStart(2, "0") +
          "-" +
          number +
          ".png"
      });
    }

    mediaItems.forEach(function (item) {
      const block = document.createElement("div");

      block.style.marginBottom = "28px";

      const video = document.createElement("video");

      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      video.style.width = "100%";
      video.style.maxWidth = "100%";
      video.style.height = "auto";
      video.style.display = "block";
      video.style.borderRadius = "12px";

      const sourceElement =
        document.createElement("source");

      sourceElement.src = item.video;
      sourceElement.type = "video/mp4";

      video.appendChild(sourceElement);

      const image = document.createElement("img");

      image.src = item.image;
      image.alt =
        "Class 6 Science Chapter " +
        chapter +
        " Lesson " +
        lesson +
        " visual " +
        item.number;

      image.loading = "lazy";

      image.style.width = "100%";
      image.style.height = "auto";
      image.style.display = "block";
      image.style.borderRadius = "12px";
      image.style.marginTop = "12px";

      let videoOK = false;
      let imageOK = false;

      video.addEventListener("loadedmetadata", function () {
        videoOK = true;
        mediaFound = true;
      });

      video.addEventListener("error", function () {
        video.remove();
        checkBlock();
      });

      image.addEventListener("load", function () {
        imageOK = true;
        mediaFound = true;
      });

      image.addEventListener("error", function () {
        image.remove();
        checkBlock();
      });

      block.appendChild(video);
      block.appendChild(image);

      mediaWrapper.appendChild(block);

      function checkBlock() {
        if (!videoOK && !imageOK) {
          block.remove();
        }
      }
    });

    /*
      थोड़ी देर बाद देखें कि कोई media मिला या नहीं।
      Media न मिले तो खाली heading भी नहीं दिखेगी।
    */

    setTimeout(function () {
      if (!mediaFound) {
        mediaWrapper.remove();
        return;
      }

      const tryYourself =
        document.querySelector("#tryYourself");

      if (tryYourself) {
        tryYourself.parentNode.insertBefore(
          mediaWrapper,
          tryYourself
        );
      } else {
        lessonContainer.appendChild(mediaWrapper);
      }
    }, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initScienceMedia
    );
  } else {
    initScienceMedia();
  }
})();
