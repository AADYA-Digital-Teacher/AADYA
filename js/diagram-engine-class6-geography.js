(function () {

  "use strict";


  function getLessonPath() {

    const params =
      new URLSearchParams(
        window.location.search
      );

    let path =
      params.get("lesson");

    if (!path) {
      return "";
    }

    return path.replace(
      /^\.\/+/,
      ""
    );

  }


  function getTargetLesson() {

    const data =
      window.lessonData;

    const path =
      getLessonPath();

    if (!data) {
      return null;
    }


    /* केवल Class 6 */

    if (
      Number(data.class) !== 6
    ) {

      return null;

    }


    /* केवल Geography */

    const subject =
      String(
        data.subject || ""
      ).trim();


    if (
      subject !== "भूगोल" &&
      subject.toLowerCase() !==
      "geography"
    ) {

      return null;

    }


    /*
     * Class 6 Geography lesson path
     */

    const match =
      path.match(
        /^content\/class6\/geography\/chapter(\d+)\/lesson(\d+)\.json$/i
      );


    if (!match) {
      return null;
    }


    return {

      chapter:
        Number(match[1]),

      lesson:
        Number(match[2])

    };

  }


  function findLessonContainer() {

    return (

      document.getElementById(
        "content"
      )

      ||

      document.getElementById(
        "lessonContent"
      )

      ||

      document.getElementById(
        "lesson-container"
      )

      ||

      document.querySelector(
        ".lesson-content"
      )

      ||

      document.querySelector(
        ".lesson-container"
      )

      ||

      document.querySelector(
        "main"
      )

    );

  }


  function render() {

    const target =
      getTargetLesson();


    if (!target) {
      return;
    }


    const container =
      findLessonContainer();


    if (!container) {
      return;
    }


    /*
     * Duplicate diagram रोकें
     */

    if (
      container.querySelector(
        ".aadya-geography-diagram"
      )
    ) {

      return;

    }


    /*
     * Class 6 Geography
     *
     * अब Chapter 1–4 तक
     * automatic PNG support।
     */

    if (
      target.chapter < 1 ||
      target.chapter > 4 ||
      target.lesson < 1
    ) {

      return;

    }


    const fileName =

      "chapter" +

      String(
        target.chapter
      ).padStart(
        2,
        "0"
      ) +

      "-lesson" +

      String(
        target.lesson
      ).padStart(
        2,
        "0"
      ) +

      ".png";


    const imagePath =

      "./assets/images/class6/geography/" +
      fileName;


    const wrapper =
      document.createElement(
        "div"
      );


    wrapper.className =
      "aadya-geography-diagram";


    wrapper.style.cssText = `
      width:100%;
      margin:18px 0 24px;
      border-radius:18px;
      overflow:hidden;
      background:#fff;
      box-shadow:0 8px 24px rgba(0,0,0,0.10);
    `;


    const image =
      document.createElement(
        "img"
      );


    image.src =
      imagePath;


    image.alt =
      "कक्षा 6 भूगोल अध्याय " +
      target.chapter +
      " पाठ " +
      target.lesson;


    image.loading =
      "lazy";


    image.style.cssText = `
      display:block;
      width:100%;
      height:auto;
      aspect-ratio:16/9;
      object-fit:cover;
    `;


    /*
     * यदि PNG मौजूद नहीं है,
     * तो खाली box न दिखाएँ।
     */

    image.onerror =
      function () {

        wrapper.remove();

      };


    wrapper.appendChild(
      image
    );


    /*
     * Diagram को
     * "खुद करके देखें" से ठीक पहले
     * रखा जाएगा।
     */

    const tryYourself =
      container.querySelector(
        "#tryYourself"
      );


    if (tryYourself) {

      tryYourself
        .parentNode
        .insertBefore(
          wrapper,
          tryYourself
        );

    }
    else {

      container.appendChild(
        wrapper
      );

    }

  }


  function startEngine() {

    let attempts = 0;


    const timer =
      setInterval(
        function () {

          attempts++;


          render();


          if (
            document.querySelector(
              ".aadya-geography-diagram"
            )
            ||
            attempts >= 120
          ) {

            clearInterval(
              timer
            );

          }

        },
        250
      );

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startEngine
    );

  }
  else {

    startEngine();

  }


  window.AADYAGeographyDiagramEngine = {

    refresh:
      render

  };

})();
