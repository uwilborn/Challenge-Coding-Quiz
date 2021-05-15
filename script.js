const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


//Questions for quiz
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

  //Timer for quiz

  var secondsLeft = 10;

  function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        
        console.log("Time is up.")
      }
  
    }, 1000);
  }

  function startQuiz () {
    setTimer();
    nextQuestion();
}

var quizIndex = 1

function nextQuestion () {
    quizIndex.innerHTML = '';
    

}

// Create ordered list element
var listofAns = document.createElement("ol");

// Create ordered list items
var answerA = document.createElement("li");
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");

// Add text for list items
answerA.textContent = myQuestions.answers.a
answerB.textContent = myQuestions.answers.b
answerC.textContent = myQuestions.answers.c
answerD.textContent = myQuestions.answers.d

// Append ordered list 
favoriteEl.appendChild(listofAns);

// Append list items to ordered list element 
listofAns.append(answerA);
listofAns.append(answerB);
listofAns.append(answerC);
listofAns.append(answerD);



