// select all elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");




//TIMER FOR QUIZ
var timerCounter = document.getElementById('counter');
var secondsLeft = 10;

function setTimer() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timerInterval = setInterval(function () {
    // Decrement `secondsLeft` by 1
    secondsLeft--;
    // Set the `textContent` of `timerCounter` to show the remaining seconds
    timerCounter.textContent = secondsLeft + "seconds";
    // As long as the `secondsLeft` is greater than 0
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTimer();



//Array of Questions for quiz with objects for answers


let challengeQuestions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    answers: {
      a: "JavaScript is complementary to and integrated with HTML",
      b: "JavaScript is open and cross-platform",
      c: "Both of the above",
      d: "All of the above.",
      correct: "Both of the above",
    }
  },

  {
    question: "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "Both of the above",
      d: "All of the above.",
      correct: "named function",
    }
  },

  {
    question: "Which of the following is correct about callbacks?",
    answers: {
      a: "A callback is a plain JavaScript function passed to some method as an argument or option.",
      b: "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
      c: "Both of the above",
      d: "None of the above.",
      correct: "None of the above",

    }
  }
];



var questionIndex = 0
var lastQuestion = challengeQuestions.length - 1;

//Create current question, 
function getQuestion(questionIndex){
  
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

listofAns.append(answerA);
listofAns.append(answerB);
listofAns.append(answerC);
listofAns.append(answerD);

quiz.append(listofAns); }


function nextQuestion(){
  for(var i = 0; i < lastQuestion; i++){
questionIndex = i;
getQuestion(i);
  }
}





// upon clicking start button
start.addEventListener("click",nextQuestion);
