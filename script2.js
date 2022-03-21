var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 55;

function setTime() {
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

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "time is up! ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "canoe.png");
  mainEl.appendChild(imgEl);

}
var counter = 0;

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz)
function startQuiz() {
    setTime();
displayQuestions(counter);
}
function displayQuestions(arg) {
  if(counter==Questions.length){
    prompt("Great job! please enter your initials")
    return;
  }
  var questionsDiv = document.getElementById("question");
  questionsDiv.innerHTML = Questions[arg].question;
  var ul = document.createElement("div");
  ul.innerHTML = `
  <button value="${Questions[arg].a[0].isCorrect}">${Questions[arg].a[0].text}</button>
  <button value="${Questions[arg].a[1].isCorrect}">${Questions[arg].a[1].text}</button>
  <button value="${Questions[arg].a[2].isCorrect}">${Questions[arg].a[2].text}</button>
  <button value="${Questions[arg].a[3].isCorrect}">${Questions[arg].a[3].text}</button>
  `
questionsDiv.appendChild(ul);
  
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
  counter++
displayQuestions(counter)

})

const Questions = [
  {
  id: 0,
  question: "what is a class in CSS?",
  a: [{ text: "attribute", isCorrect: true },
  { text: "boolean", isCorrect: false },
  { text: "English", isCorrect: false },
  { text: "style in css", isCorrect: false }
  ]

},
{
  id: 1,
  question: "what is JSON?",
  a: [{ text: "closed source", isCorrect: false },
  { text: "open standard file format in web applications", isCorrect: true },
  { text: "former boyfriend", isCorrect: false },
  { text: "logo", isCorrect: false }
  ]

},
{
  id: 2,
  question: "what is Bootstrap",
  a: [{ text: "a piece or leather ", isCorrect: true },
  { text: "a popular library of code for websites", isCorrect: true },
  { text: "pull yourself up with them", isCorrect: false },
  { text: "a brewery in Devide, Colorado", isCorrect: false }
  ]
},
{
  id: 3,
  question: "what is flexbox",
  a: [{ text: "allows for a flexble container in websites to fit page", isCorrect: true },
  { text: "what you can't do after 50", isCorrect: false },
  { text: "a dance in the 70s'", isCorrect: false },
  { text: "a logo", isCorrect: false }]}
  ]
