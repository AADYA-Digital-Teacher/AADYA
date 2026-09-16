/* =========================================================
   AADYA — UNIVERSAL QUESTION NORMALIZER
   Version: 1.0

   Practice + Quiz + Future Social Science
   सभी question formats के लिए एक common layer.
========================================================= */

(function(window){

  "use strict";


  /* =======================================================
     BASIC TEXT CLEANER
  ======================================================= */

  function clean(value){

    return String(value ?? "")
      .replace(/\u00A0/g," ")
      .replace(/[\u200B-\u200D\uFEFF]/g,"")
      .trim()
      .replace(/\s+/g," ");

  }


  /* =======================================================
     ANSWER TEXT CLEANER

     "C. सूर्य"
     "C) सूर्य"
     "C - सूर्य"

     → "सूर्य"
  ======================================================= */

  function cleanAnswerText(value){

    return clean(value)
      .replace(
        /^[A-Fa-f][\s.)-]+/,
        ""
      )
      .trim();

  }


  /* =======================================================
     OPTIONS NORMALIZER

     String options:
       ["पृथ्वी","चंद्रमा","सूर्य"]

     Object options:
       [
         {"text":"पृथ्वी"},
         {"label":"चंद्रमा"}
       ]
  ======================================================= */

  function getOptions(question){

    if(
      !question ||
      !Array.isArray(question.options)
    ){
      return [];
    }

    return question.options.map(
      function(option){

        if(
          option &&
          typeof option === "object"
        ){

          return clean(
            option.text ??
            option.label ??
            option.value ??
            option.answer ??
            ""
          );

        }

        return clean(option);

      }
    );

  }


  /* =======================================================
     FIND RAW ANSWER

     सभी पुराने / नए key formats
  ======================================================= */

  function getRawAnswer(question){

    if(!question){
      return null;
    }

    const candidates = [

      question.correct_answer,

      question.correctAnswer,

      question.answer_index,

      question.answerIndex,

      question.correct,

      question.answer

    ];

    for(
      let i=0;
      i<candidates.length;
      i++
    ){

      if(
        candidates[i] !== undefined &&
        candidates[i] !== null
      ){

        return candidates[i];

      }

    }

    return null;

  }


  /* =======================================================
     NUMERIC ANSWER

     0
     1
     2
     3

     "0"
     "1"
     "2"
     "3"
  ======================================================= */

  function numericIndex(
    value,
    options
  ){

    if(
      typeof value === "number"
    ){

      if(
        Number.isInteger(value) &&
        value >= 0 &&
        value < options.length
      ){

        return value;

      }

      return -1;

    }


    if(
      typeof value === "string" &&
      value.trim() !== ""
    ){

      const text =
        value.trim();

      if(
        /^\d+$/.test(text)
      ){

        const n =
          Number(text);

        if(
          Number.isInteger(n) &&
          n >= 0 &&
          n < options.length
        ){

          return n;

        }

      }

    }

    return -1;

  }


  /* =======================================================
     LETTER ANSWER

     A / B / C / D
     a / b / c / d

     A.
     B)
     C -
  ======================================================= */

  function letterIndex(
    value,
    options
  ){

    if(
      typeof value !== "string"
    ){

      return -1;

    }

    const map = {

      A:0,
      B:1,
      C:2,
      D:3,
      E:4,
      F:5

    };


    const text =
      value
        .trim()
        .toUpperCase();


    if(
      Object.prototype.hasOwnProperty.call(
        map,
        text
      ) &&
      map[text] < options.length
    ){

      return map[text];

    }


    const match =
      value
        .trim()
        .match(
          /^([A-Fa-f])[\s.)-]+/
        );


    if(match){

      const key =
        match[1].toUpperCase();

      if(
        map[key] !== undefined &&
        map[key] < options.length
      ){

        return map[key];

      }

    }

    return -1;

  }


  /* =======================================================
     TEXT ANSWER

     answer: "सूर्य"

     options:
     ["पृथ्वी","चंद्रमा","सूर्य","बृहस्पति"]

     → 2
  ======================================================= */

  function textIndex(
    value,
    options
  ){

    const wanted =
      cleanAnswerText(value);

    if(!wanted){

      return -1;

    }


    return options.findIndex(
      function(option){

        return (
          cleanAnswerText(option) ===
          wanted
        );

      }
    );

  }


  /* =======================================================
     OBJECT ANSWER

     Future-safe support:

     {
       "answer":{
         "index":2
       }
     }

     {
       "answer":{
         "text":"सूर्य"
       }
     }
  ======================================================= */

  function objectAnswerIndex(
    value,
    options
  ){

    if(
      !value ||
      typeof value !== "object"
    ){

      return -1;

    }


    const candidates = [

      value.index,

      value.answer_index,

      value.correct_answer,

      value.correctAnswer,

      value.letter,

      value.text,

      value.label,

      value.value,

      value.answer

    ];


    for(
      let i=0;
      i<candidates.length;
      i++
    ){

      const item =
        candidates[i];


      const numeric =
        numericIndex(
          item,
          options
        );

      if(numeric >= 0){

        return numeric;

      }


      const letter =
        letterIndex(
          item,
          options
        );

      if(letter >= 0){

        return letter;

      }


      const text =
        textIndex(
          item,
          options
        );

      if(text >= 0){

        return text;

      }

    }


    return -1;

  }


  /* =======================================================
     MAIN FUNCTION

     यही AADYA का universal answer resolver है।
  ======================================================= */

  function getCorrectIndex(question){

    const options =
      getOptions(question);

    const raw =
      getRawAnswer(question);


    if(
      !options.length ||
      raw === null
    ){

      return -1;

    }


    /* 1. Object */

    const objectIndex =
      objectAnswerIndex(
        raw,
        options
      );

    if(objectIndex >= 0){

      return objectIndex;

    }


    /* 2. Numeric */

    const numeric =
      numericIndex(
        raw,
        options
      );

    if(numeric >= 0){

      return numeric;

    }


    /* 3. A/B/C/D */

    const letter =
      letterIndex(
        raw,
        options
      );

    if(letter >= 0){

      return letter;

    }


    /* 4. Answer text */

    const text =
      textIndex(
        raw,
        options
      );

    if(text >= 0){

      return text;

    }


    return -1;

  }


  /* =======================================================
     COMPLETE NORMALIZED QUESTION

     Renderer को यही object मिलेगा।
  ======================================================= */

  function normalizeQuestion(question){

    const source =
      question || {};

    const options =
      getOptions(source);

    const correctIndex =
      getCorrectIndex(source);


    return {

      ...source,

      question:
        source.question ??
        source.q ??
        source.text ??
        "",

      options:

        options,

      correct_answer:

        correctIndex,

      correctIndex:

        correctIndex,

      correct_answer_text:

        correctIndex >= 0
          ? options[correctIndex]
          : "",

      explanation:

        source.explanation ??
        source.explain ??
        source.reason ??
        ""

    };

  }


  /* =======================================================
     QUICK CHECK
  ======================================================= */

  function isCorrect(
    question,
    selectedIndex
  ){

    const normalized =
      normalizeQuestion(
        question
      );

    return (

      normalized.correctIndex >= 0 &&

      Number(selectedIndex) ===
      normalized.correctIndex

    );

  }


  /* =======================================================
     PUBLIC API

     window.AADYAQuestionNormalizer
  ======================================================= */

  window.AADYAQuestionNormalizer = {

    clean:

      clean,

    getOptions:

      getOptions,

    getRawAnswer:

      getRawAnswer,

    getCorrectIndex:

      getCorrectIndex,

    normalizeQuestion:

      normalizeQuestion,

    isCorrect:

      isCorrect

  };


})(window);
