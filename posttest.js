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
answerContainers.forEach(e => e.style.color = "black");

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
question: "1. You are given pointers to first and last nodes of a singly linked list, which of the following operations are dependent on the length of the linked list?", ///// Write the question inside double quotes
answers: {
a: "Delete the first element ", ///// Write the option 1 inside double quotes
b: "Insert a new element as a first element ", ///// Write the option 2 inside double quotes
c: "Delete the last element of the list", ///// Write the option 3 inside double quotes
d: "Add a new element at the end of the list", ///// Write the option 4 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. Which of the following points is/ are true about Linked List data structure when it is compared?",  ///// Write the question inside double quotes
answers: {
a: "Arrays have better cache locality that can make them better in terms of performance",        ///// Write the option 1 inside double quotes
b: " It is easy to insert and delete elements in Linked List ",                  ///// Write the option 2 inside double quotes
c: "Random access is not allowed in a typical implementation of Linked Lists ", ///// Write the option 3 inside double quotes
d: " All of these ", ///// Write the option 4 inside double quotes
},
correctAnswer: "d"                ///// Write the correct option inside double quotes
},

{
question: "3. Pick one correct statement from the following?",  ///// Write the question inside double quotes
answers: {
a: " In doubly linked list, each node is linked to one node.",                  ///// Write the option 1 inside double quotes
b: "In doubly linked list, each node is linked to three nodes. ",                  ///// Write the option 2 inside double quotes
c: " In doubly linked list, each node is linked to two nodes. ", ///// Write the option 3 inside double quotes
d: " In doubly linked list, each node is linked to zero nodes. ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "4.  Is it possible to create a doubly linked list using only one pointer with every node? ",  ///// Write the question inside double quotes
answers: {
a: " Not Possible ",                  ///// Write the option 1 inside double quotes
b: "Yes, possible by storing XOR of addresses of previous and next nodes.  ",                  ///// Write the option 2 inside double quotes
c: " Yes, possible by storing XOR of addresses of current node and next node ", ///// Write the option 3 inside double quotes
d: " Yes, possible by storing XOR of addresses of current node and previous node ", ///// Write the option 4 inside double quotes

},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "5. What differentiates a circular linked list from a normal linked list? ",  ///// Write the question inside double quotes
answers: {
a: "You cannot have the ‘next’ pointer point to null in a circular linked list",                  ///// Write the option 1 inside double quotes
b: " It is faster to traverse the circular linked list ",                  ///// Write the option 2 inside double quotes
c: "You may or may not have the ‘next’ pointer point to null in a circular linked list  ", ///// Write the option 3 inside double quotes
d: "All of the mentioned", ///// Write the option 4 inside double quotes

},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "6. What is the time complexity of searching for an element in a circular linked list?  ",  ///// Write the question inside double quotes
answers: {
a: "O(n) ",                  ///// Write the option 1 inside double quotes
b: " O(nlogn)  ",                  ///// Write the option 2 inside double quotes
c: " O(1) ", ///// Write the option 3 inside double quotes
d: "None of the mentioned ", ///// Write the option 4 inside double quotes

},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "7. Which of the following is false about a circular linked list?",  ///// Write the question inside double quotes
answers: {
a: " Every node has a successor ",                  ///// Write the option 1 inside double quotes
b: " Time complexity of inserting a new node at the head of the list is O(1) ",                  ///// Write the option 2 inside double quotes
c: "Time complexity for deleting the last node is O(n) ", ///// Write the option 3 inside double quotes
d: "All of the mentioned", ///// Write the option 4 inside double quotes

},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "8. A circularly linked list is used to represent a Queue. A single variable p is used to access the Queue. To which node should p point such that both the operations enQueue and deQueue can be performed in constant time?  ",  ///// Write the question inside double quotes
answers: {
a: "rear node",                  ///// Write the option 1 inside double quotes
b: "  front node  ",                  ///// Write the option 2 inside double quotes
c: " not possible with a single pointer   ", ///// Write the option 3 inside double quotes
d: "node next to front ", ///// Write the option 4 inside double quotes

},
correctAnswer: "a"                ///// Write the correct option inside double quotes
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
