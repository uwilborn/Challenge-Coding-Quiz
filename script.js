// select all elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const message = document.createElement("p")
const message2 = document.createElement("p")
const finalscore = document.getElementById("finalscore");
const rules = document.getElementById("rules");

//TIMER FOR QUIZ
var timerCounter = document.getElementById('counter');
var secondsLeft = 30;

function setTimer() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timerInterval = setInterval(function () {
    // Decrement `secondsLeft` by 1
    secondsLeft--;
    // Set the `textContent` of `timerCounter` to show the remaining seconds
    timerCounter.textContent = "TIMER: " + secondsLeft + " seconds";
    // As long as the `secondsLeft` is greater than 0
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}



//Array of Questions for quiz with objects for answers


let challengeQuestions = [
  {
    question: "Question #1: Which of the following is correct about features of JavaScript?",
    answers: {
      a: "JavaScript is complementary to and integrated with HTML",
      b: "JavaScript is open and cross-platform",
      c: "Both of the above",
      d: "All of the above.",
      correct: "Both of the above",
    }
  },

  {
    question: "Question #2: Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "Both of the above",
      d: "All of the above.",
      correct: "named function",
    }
  },

  {
    question: "Question #3: Which of the following is correct about callbacks?",
    answers: {
      a: "A callback is a plain JavaScript function passed to some method as an argument or option.",
      b: "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
      c: "Both of the above",
      d: "None of the above.",
      correct: "None of the above.",
    }
    },

    {
      question: "Question #4: Which best describes Function Scope?",
      answers: {
        a: "Function will only run one time.",
        b: "A variable defined inside function is only available inside of that function.",
        c: "A function can be named with a variable.",
        d: "When several For loops are doing similar things.",
        correct: "A variable defined inside function is only available inside of that function.",
  
      }
  },

  {
    question: "Question #5: Which is a function attached to an object?",
    answers: {
      a: "Array",
      b: "Object",
      c: "Method",
      d: "Scope",
      correct: "Method",

    }
},
{
  question: "Question #6: Which are true about the DOM?",
  answers: {
    a: "Displays the document as browser sees it.",
    b: "Allows to create/move things on the HTML.",
    c: "Process of maneuvering through HTML.",
    d: "All of the Above",
    correct: "All of the Above",

  }
},
{
  question: "Question #7: Which of the following means declared but not defined?",
  answers: {
    a: "Error",
    b: "Method",
    c: "Null",
    d: "Undefined",
    correct: "Null",

  }
},
{
  question: "Question #8: Which of the following is a block of code designed to perform a particular task?",
  answers: {
    a: "Object",
    b: "For Loop",
    c: "Function",
    d: "Arrays",
    correct: "Function",

  }
},
{
  question: "Question #9: Which of the following creates an equivalent HTML tag?",
  answers: {
    a: "document.getElementById",
    b: "document.createElement",
    c: "document.getElementByClassName",
    d: "document.getElementByTagName",
    correct: "document.createElement",

  }
},
{
  question: "Question #10: Which HTML tag supports an image?",
  answers: {
    a: "<section>",
    b: "<img>",
    c: "<strong>",
    d: "<span>",
    correct: "<img>",

  }
},
];



var questionIndex = 0
var lastQuestion = challengeQuestions.length - 1;

//Create current question, 
function getQuestion(){

  start.style.display='none';
  rules.innerHTML = "";
  
quiz.textContent =  challengeQuestions[questionIndex].question

var listofAns = document.createElement("ol");
var answerA = document.createElement("li");
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");

answerA.textContent = challengeQuestions[questionIndex].answers.a;
answerB.textContent = challengeQuestions[questionIndex].answers.b;
answerC.textContent = challengeQuestions[questionIndex].answers.c;
answerD.textContent = challengeQuestions[questionIndex].answers.d;

answerA.addEventListener("click",handleAnswer);
answerB.addEventListener("click",handleAnswer);
answerC.addEventListener("click",handleAnswer);
answerD.addEventListener("click",handleAnswer);

listofAns.append(answerA);
listofAns.append(answerB);
listofAns.append(answerC);
listofAns.append(answerD);

quiz.append(listofAns); }


function nextQuestion(){
  setTimer();
getQuestion();

  }


  //Score Counter Process
let score = 0;
var countEl = document.querySelector("#score");

// Updates count on page
function setCounterText() {
  countEl.textContent = score;
}

function handleAnswer(event){
message.textContent = ""
// console.log("click");
// console.log(event.target.innerText);
if(event.target.innerText === challengeQuestions[questionIndex].answers.correct){
score++;
setCounterText();
  questionIndex++;
  getQuestion();
} else{ 
    //console.log("Wrong Answer")
  message.textContent = "Wrong Answer, click again. Time reduced by 3 seconds."
  quiz.append(message)
secondsLeft = secondsLeft - 3;
handleAnswer()
}

}

// upon clicking start button
start.addEventListener("click",nextQuestion);
