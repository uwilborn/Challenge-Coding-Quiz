const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var start = document.getElementById('start');
var quizQuestion = document.createElement("div");
var listofAns = document.createElement("ol");
var answerA = document.createElement("li");// Create ordered list items
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");

  //Timer for quiz
  var timerCounter = document.getElementById('counter');
  var secondsLeft = 10;
  
  function setTimer() {
// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timerInterval = setInterval(function() {
// Decrement `secondsLeft` by 1
        secondsLeft--; 
    // Set the `textContent` of `timerCounter` to show the remaining seconds
      timerCounter.textContent = secondsLeft + "seconds";
  // As long as the `secondsLeft` is greater than 0
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

  setTimer();

//   function startQuiz () {
//     setTimer();
//     nextQuestion();
// }

//Array of Questions for quiz with objects for answers


const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

  function nextQuestion () {
    for(var i = 0; i < myQuestions.length; i++){
      
quizQuestion.textContent = myQuestions.question[i];// Add text for list items
answerA.textContent = myQuestions.answers.a[i];
answerB.textContent = myQuestions.answers.b[i];
answerC.textContent = myQuestions.answers.c[i];
answerD.textContent = myQuestions.answers.d[i];

quizQuestion.append(listofAns); // Append list items to ordered list element 
listofAns.append(answerA);
listofAns.append(answerB);
listofAns.append(answerC);
listofAns.append(answerD);}

}

nextQuestion



// upon clicking start button
// startQuiz.addEventListener('click', nextQuestion);

