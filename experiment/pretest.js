 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Which of these best describes an array?", ///// Write the question inside double quotes
            answers: {
                a: " A data structure that shows a hierarchical behavior ", ///// Write the option 1 inside double quotes
                b: "Container of objects of similar types", ///// Write the option 2 inside double quotes
                c: "Container of objects of mixed types. ", ///// Write the option 2 inside double quotes
                d: " All of the mentioned ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. What is the time complexity of insertion at any point on an array?",  ///// Write the question inside double quotes
      answers: {
        a: "O(N)",                  ///// Write the option 1 inside double quotes
        b: "O(N^2) ",                  ///// Write the option 2 inside double quotes
	c: "O(NLogN)", ///// Write the option 3 inside double quotes
        d: "None of these", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Pick incorrect options from the following",  ///// Write the question inside double quotes
      answers: {
        a: "If structure contains 3 types of data then three pointers are required for that structure ",                  ///// Write the option 1 inside double quotes
        b: "One variable can be bound to many structures ",                  ///// Write the option 2 inside double quotes
	c: "Contents of a structure are stored in contiguous memory ", ///// Write the option 3 inside double quotes
        d: "None of these ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "4. What are the reason/ reasons for using pointers in a C program?",  ///// Write the question inside double quotes
      answers: {
        a: "Pointers allow different functions to share and modify their local variables ",                  ///// Write the option 1 inside double quotes
        b: " To pass large structures so that complete copy of the structure can be avoided",                  ///// Write the option 2 inside double quotes
	c: "Pointers enable complex “linked” data structures like linked lists and binary trees", ///// Write the option 3 inside double quotes
        d: " All of the above", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
{
      question: "5. Pick out incorrect statement from the following",  ///// Write the question inside double quotes
      answers: {
        a: " Linked list is a data structure ",                  ///// Write the option 1 inside double quotes
        b: " Linked list is made up of structures ",                  ///// Write the option 2 inside double quotes
	c: "The nodes of linked list will always be stored contiguously", ///// Write the option 3 inside double quotes
        d: "  Linked lists do not allow random access", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
