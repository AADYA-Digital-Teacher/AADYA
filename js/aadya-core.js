/* =========================================================
   AADYA CORE
   Universal shared logic
   Curriculum + Progress + Saved + Quiz + Questions
========================================================= */

(function (window) {

  "use strict";

  const A = window.AADYA = window.AADYA || {};

  /* =====================================================
     STORAGE KEYS
  ===================================================== */

  A.KEYS = {

    PROFILE:
      "aadya_student_profile_v1",

    PROGRESS:
      "aadya_progress_v1",

    SAVED:
      "aadya_saved_lessons_v1",

    QUIZ:
      "aadya_quiz_history_v1",

    LAST_QUIZ:
      "aadya_last_quiz_score"

  };


  /* =====================================================
     CURRICULUM FILES
  ===================================================== */

  A.CURRICULUM_FILES = {

    6:
      "./data/curriculum.json",

    7:
      "./data/curriculum-class7.json",

    8:
      "./data/curriculum-class8.json"

  };


  /* =====================================================
     HTML ESCAPE
  ===================================================== */

  A.esc = function (value) {

    return String(
      value == null ? "" : value
    ).replace(
      /[&<>'"]/g,
      function (c) {

        return {

          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;"

        }[c];

      }
    );

  };


  /* =====================================================
     LOCAL STORAGE
  ===================================================== */

  A.read = function (key, fallback) {

    try {

      const raw =
        localStorage.getItem(key);

      return raw
        ? JSON.parse(raw)
        : fallback;

    } catch (e) {

      return fallback;

    }

  };


  A.write = function (key, value) {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  };


  /* =====================================================
     PROFILE
  ===================================================== */

  A.profile = function () {

    return A.read(
      A.KEYS.PROFILE,
      {}
    );

  };


  /* =====================================================
     CURRENT CLASS
     URL ?class=7 gets priority
     otherwise profile class
  ===================================================== */

  A.getClass = function () {

    const params =
      new URLSearchParams(
        window.location.search
      );

    const queryClass =
      Number(
        params.get("class")
      );

    const profile =
      A.profile();

    const profileClass =
      Number(profile.class);

    const n =
      queryClass ||
      profileClass ||
      6;

    return (
      Number.isFinite(n) &&
      n > 0
    )
      ? n
      : 6;

  };


  /* =====================================================
     CURRICULUM URL
     Future classes:
     curriculum-class9.json etc.
  ===================================================== */

  A.curriculumUrl = function (classNumber) {

    return (
      A.CURRICULUM_FILES[classNumber]
      ||
      "./data/curriculum-class" +
      classNumber +
      ".json"
    );

  };


  /* =====================================================
     LOAD CURRICULUM
  ===================================================== */

  A.loadCurriculum = async function (classNumber) {

    const response =
      await fetch(
        A.curriculumUrl(classNumber) +
        "?v=" +
        Date.now(),
        {
          cache: "no-store"
        }
      );

    if (!response.ok) {

      throw new Error(
        "Curriculum load failed"
      );

    }

    return response.json();

  };


  /* =====================================================
     CLASS DATA
  ===================================================== */

  A.classData = function (
    data,
    classNumber
  ) {

    return (
      data &&
      data.classes &&
      data.classes[
        "class" + classNumber
      ]
    ) || null;

  };


  /* =====================================================
     BUILD FLAT LESSON LIST
     Curriculum → one universal lesson array
  ===================================================== */

  A.buildLessons = function (
    data,
    classNumber
  ) {

    const classData =
      A.classData(
        data,
        classNumber
      );

    const result = [];

    if (
      !classData ||
      !classData.subjects
    ) {

      return result;

    }


    Object.entries(
      classData.subjects
    ).forEach(
      function (entry) {

        const subjectKey =
          entry[0];

        const subject =
          entry[1];


        (
          subject.chapters || []
        ).forEach(
          function (chapter) {

            (
              chapter.lessons || []
            ).forEach(
              function (lesson) {

                if (!lesson.file) {

                  return;

                }


                result.push({

                  file:
                    lesson.file,

                  title:
                    lesson.title ||
                    "पाठ",

                  number:
                    lesson.number,

                  chapterNumber:
                    chapter.number,

                  chapterTitle:
                    chapter.title ||
                    "अध्याय",

                  bookNumber:
                    chapter.book_number,

                  subjectKey:
                    subjectKey,

                  subjectName:
                    subject.name ||
                    subjectKey,

                  class:
                    classNumber

                });

              }
            );

          }
        );

      }
    );


    return result;

  };


  /* =====================================================
     PROGRESS
  ===================================================== */

  A.progress = function () {

    return A.read(
      A.KEYS.PROGRESS,
      {}
    );

  };


  A.isDone = function (
    file,
    progress
  ) {

    const p =
      (
        progress ||
        A.progress()
      )[file];

    return (
      p === true ||
      (
        p &&
        p.completed === true
      )
    );

  };


  /* =====================================================
     MARK LESSON COMPLETE
  ===================================================== */

  A.markComplete = function (
    lesson
  ) {

    if (
      !lesson ||
      !lesson.file
    ) {

      return;

    }


    const progress =
      A.progress();


    progress[
      lesson.file
    ] = {

      completed:
        true,

      timestamp:
        new Date().toISOString(),

      title:
        lesson.title,

      chapter:
        lesson.chapterTitle,

      subject:
        lesson.subjectName,

      class:
        lesson.class

    };


    A.write(
      A.KEYS.PROGRESS,
      progress
    );

  };


  /* =====================================================
     SAVED LESSONS
  ===================================================== */

  A.saved = function () {

    const data =
      A.read(
        A.KEYS.SAVED,
        []
      );

    return Array.isArray(data)
      ? data
      : [];

  };


  A.toggleSaved = function (
    lesson
  ) {

    if (
      !lesson ||
      !lesson.file
    ) {

      return false;

    }


    let saved =
      A.saved();


    const index =
      saved.findIndex(
        function (item) {

          return (
            item &&
            item.file ===
            lesson.file
          );

        }
      );


    /* REMOVE */

    if (index >= 0) {

      saved.splice(
        index,
        1
      );

      A.write(
        A.KEYS.SAVED,
        saved
      );

      return false;

    }


    /* ADD */

    saved.unshift({

      file:
        lesson.file,

      title:
        lesson.title,

      subject:
        lesson.subjectName ||
        "",

      chapterTitle:
        lesson.chapterTitle ||
        "",

      savedAt:
        new Date().toISOString()

    });


    A.write(
      A.KEYS.SAVED,
      saved
    );


    return true;

  };


  /* =====================================================
     RESUME LESSON
  ===================================================== */

  A.resumeLesson = function (
    lessons,
    progress
  ) {

    progress =
      progress ||
      A.progress();


    if (
      !lessons ||
      !lessons.length
    ) {

      return null;

    }


    const completed =
      lessons
        .map(
          function (lesson, index) {

            return {

              lesson:
                lesson,

              index:
                index,

              progress:
                progress[
                  lesson.file
                ]

            };

          }
        )
        .filter(
          function (item) {

            return A.isDone(
              item.lesson.file,
              progress
            );

          }
        );


    /* कोई Lesson पूरा नहीं */

    if (!completed.length) {

      return lessons[0];

    }


    /* सबसे हाल में पूरा हुआ Lesson */

    completed.sort(
      function (a, b) {

        const aTime =
          a.progress &&
          a.progress.timestamp
            ? new Date(
                a.progress.timestamp
              ).getTime()
            : 0;


        const bTime =
          b.progress &&
          b.progress.timestamp
            ? new Date(
                b.progress.timestamp
              ).getTime()
            : 0;


        return bTime - aTime;

      }
    );


    const last =
      completed[0];


    /* उसके बाद पहला अधूरा Lesson */

    for (
      let i =
        last.index + 1;

      i <
        lessons.length;

      i++
    ) {

      if (
        !A.isDone(
          lessons[i].file,
          progress
        )
      ) {

        return lessons[i];

      }

    }


    /*
      अगर उसके बाद कोई अधूरा Lesson नहीं है
      तो सबसे हाल का completed Lesson
      ही Resume में दिखे।
    */

    return last.lesson;

  };


  /* =====================================================
     LESSON URL
  ===================================================== */

  A.lessonUrl = function (
    file
  ) {

    return (
      "./learning.html?lesson=" +
      encodeURIComponent(file)
    );

  };


  A.goLesson = function (
    file
  ) {

    if (file) {

      window.location.href =
        A.lessonUrl(file);

    }

  };


  /* =====================================================
     UNIVERSAL ANSWER NORMALIZER
  ===================================================== */

  A.answerIndex = function (question) {

    if (!question) {

      return -1;

    }


    const options =
      Array.isArray(
        question.options
      )
        ? question.options
        : [];


    let answer =
      question.answer;


    if (
      answer == null
    ) {

      answer =
        question.correct_answer;

    }


    /*
      कभी answer object भी हो सकता है
    */

    if (
      answer &&
      typeof answer === "object"
    ) {

      answer =
        answer.index ??
        answer.value ??
        answer.text ??
        answer.answer;

    }


    /* numeric index */

    if (
      typeof answer === "number"
    ) {

      if (
        answer >= 0 &&
        answer < options.length
      ) {

        return answer;

      }

      if (
        answer >= 1 &&
        answer <= options.length
      ) {

        return answer - 1;

      }

    }


    if (
      typeof answer === "string"
    ) {

      const value =
        answer.trim();


      /* "0", "1", "2"... */

      if (
        /^\d+$/.test(value)
      ) {

        const n =
          Number(value);


        if (
          n >= 0 &&
          n < options.length
        ) {

          return n;

        }


        if (
          n >= 1 &&
          n <= options.length
        ) {

          return n - 1;

        }

      }


      /* A / B / C / D */

      const letter =
        value
          .toUpperCase()
          .match(
            /^([A-Z])$/
          );


      if (letter) {

        const index =
          letter[1]
            .charCodeAt(0) -
          65;


        if (
          index >= 0 &&
          index < options.length
        ) {

          return index;

        }

      }


      /* Exact option text */

      const exact =
        options.findIndex(
          function (option) {

            return (
              String(option)
                .trim() ===
              value
            );

          }
        );


      if (exact >= 0) {

        return exact;

      }


      /* Case-insensitive */

      const lower =
        options.findIndex(
          function (option) {

            return (
              String(option)
                .trim()
                .toLowerCase() ===
              value.toLowerCase()
            );

          }
        );


      if (lower >= 0) {

        return lower;

      }

    }


    return -1;

  };


  /* =====================================================
     NORMALIZE QUESTION
  ===================================================== */

  A.normalizeQuestion =
    function (question) {

      if (
        !question ||
        !question.question ||
        !Array.isArray(
          question.options
        ) ||
        !question.options.length
      ) {

        return null;

      }


      const options =
        question.options.map(
          function (x) {

            return String(x);

          }
        );


      const correctIndex =
        A.answerIndex({

          ...question,

          options:
            options

        });


      return {

        ...question,

        options:
          options,

        correctIndex:
          correctIndex,

        correct_answer_text:
          correctIndex >= 0
            ? options[
                correctIndex
              ]
            : ""

      };

    };


  /* =====================================================
     GET QUESTIONS
  ===================================================== */

  A.questions = function (
    data,
    preferPractice
  ) {

    const practice =
      Array.isArray(
        data &&
        data.practice
      )
        ? data.practice
        : [];


    const quiz =
      Array.isArray(
        data &&
        data.quiz &&
        data.quiz.questions
      )
        ? data.quiz.questions
        : [];


    let source = [];


    if (
      preferPractice !== false
    ) {

      source =
        practice.filter(
          function (q) {

            return (
              q &&
              Array.isArray(
                q.options
              ) &&
              q.options.length
            );

          }
        );

    }


    if (!source.length) {

      source =
        quiz;

    }


    return source
      .map(
        A.normalizeQuestion
      )
      .filter(Boolean);

  };


  /* =====================================================
     LESSON DATA
  ===================================================== */

  A.lessonData = function (
    file
  ) {

    return fetch(
      file +
      "?v=" +
      Date.now(),
      {
        cache:
          "no-store"
      }
    ).then(
      function (response) {

        if (!response.ok) {

          throw new Error(
            "Lesson load failed"
          );

        }

        return response.json();

      }
    );

  };


  /* =====================================================
     FIND LESSON META
  ===================================================== */

  A.lessonMeta = function (
    lessons,
    file
  ) {

    return lessons.find(
      function (lesson) {

        return (
          lesson.file ===
          file
        );

      }
    ) || null;

  };


  /* =====================================================
     SUBJECT ICONS
  ===================================================== */

  A.icon = function (
    key
  ) {

    return {

      mathematics:
        "➗",

      geography:
        "🌍",

      history:
        "🏺",

      civics:
        "🏛️",

      science:
        "🔬",

      hindi:
        "📖",

      english:
        "🔤",

      computer:
        "💻"

    }[key] || "📘";

  };


  /* =====================================================
     HOME
  ===================================================== */

  A.goHome = function () {

    window.location.href =
      "./index.html";

  };


  window.goHome =
    A.goHome;


})(window);
