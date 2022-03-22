

var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft
// score is set to 0 when timer starts

var score = 0;
function setTime() {
  secondsLeft = 30
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append image
function sendMessage() {
  timeEl.textContent = "time is up! ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "canoe.png");
  mainEl.appendChild(imgEl);

}
// counter is set to 0 until quiz starts
var counter = 0;
// after start button is clicked it starts quiz

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz)
function startQuiz() {
  setTime();
  displayQuestions(counter);
}
// function display questions as an argument, when counter has gotten to the end of the questions
// a prompt message comes up to get initials and then give a score

function displayQuestions(arg) {
  if (counter == Questions.length) {
    var initials = prompt("Great job! please enter your initials");
    alert(initials + ":" + " Your Score :) " + score);
    // the items are set to storage
    localStorage.setItem(initials);
    localStorage.setItem(score);

  }
    // for each question, the values for each question are in an inner html div element with a ul list item below the question
  // here javascript is actually creating the elements on the page as they come up 

  var questionsDiv = document.getElementById("question");
  questionsDiv.innerHTML = Questions[arg].question;
  var ul = document.createElement("div");
  ul.innerHTML = `
  <button class="multiple"value="${Questions[arg].a[0].isCorrect}">${Questions[arg].a[0].text}</button>
  <button class="multiple"value="${Questions[arg].a[1].isCorrect}">${Questions[arg].a[1].text}</button>
  <button class="multiple"value="${Questions[arg].a[2].isCorrect}">${Questions[arg].a[2].text}</button>
  <button class="multiple"value="${Questions[arg].a[3].isCorrect}">${Questions[arg].a[3].text}</button>
  `
  questionsDiv.appendChild(ul);
  var multiple = document.getElementsByClassName("multiple");
  for (let index = 0; index < multiple.length; index++) {
    multiple[index].addEventListener("click", checkAnswer);

  }

}

// this function checks the answer event and it value is true, adds 1 to the score

function checkAnswer(event) {
  console.log(event.target.value);
  if (event.target.value == "true") {
    score++
  }
    // if answer is wrong then 5 seconds is deducted from the timer

  else {
    secondsLeft -= 5
  }
}

// each time the next button is clicked starting at 0 and then adds one displaying next question

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
  counter++
  displayQuestions(counter)

})

// for each question it gives the text of the answers and isCorrect is set to true or false, if the answer is correct or not

const Questions = [
  {
    id: 0,
    question: "WHAT IS A CLASS IN CSS?",
    a: [{ text: "selector", isCorrect: true },
    { text: "boolean", isCorrect: false },
    { text: "English", isCorrect: false },
    { text: "style in css", isCorrect: false }
    ]

  },
  {
    id: 1,
    question: "WHAT IS JSON?",
    a: [{ text: "closed source", isCorrect: false },
    { text: "open standard file format in web applications", isCorrect: true },
    { text: "former boyfriend", isCorrect: false },
    { text: "logo", isCorrect: false }
    ]

  },
  {
    id: 2,
    question: "WHAT IS BOOTSTRAP?",
    a: [{ text: "a piece or leather ", isCorrect: true },
    { text: "a popular library of code for websites", isCorrect: true },
    { text: "pull yourself up with them", isCorrect: false },
    { text: "a brewery in Divide, Colorado", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "WHAT IS FLEXBOX?",
    a: [{ text: "allows for a flexible containers in websites based on screen size", isCorrect: true },
    { text: "what you can't do after 50", isCorrect: false },
    { text: "a dance in the 70s'", isCorrect: false },
    { text: "a logo", isCorrect: false }]
  }
]
