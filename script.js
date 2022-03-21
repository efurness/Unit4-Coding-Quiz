var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
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






var startButton = document.querySelector(".startButton");
var Q1 = getElementById(op1);
var Q1 = getElementById(op2);
var Q1 = getElementById(op3);
var Q1 = getElementById(op4);
var score = 0;

// The startQuiz function is called when the startQuiz button is clicked

 // Questions that will be asked
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
        q: "what is JSON?",
        a: [{ text: "closed source", isCorrect: false },
        { text: "open standard file format in web applications", isCorrect: true },
        { text: "former boyfriend", isCorrect: false },
        { text: "logo", isCorrect: false }
        ]

    },
    {
        id: 2,
        q: "what is Bootstrap",
        a: [{ text: "a piece or leather ", isCorrect: true },
        { text: "a popular library of code for websites", isCorrect: true },
        { text: "pull yourself up with them", isCorrect: false },
        { text: "a brewery in Devide, Colorado", isCorrect: false }
        ]
    },
    {
        id: 3,
        q: "what is flexbox",
        a: [{ text: "allows for a flexble container in websites to fit page", isCorrect: true },
        { text: "what you can't do after 50", isCorrect: false },
        { text: "a dance in the 70s'", isCorrect: false },
        { text: "a logo", isCorrect: false }]}
        ]
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz)
function startQuiz() {
    setTime();

}
// set start
        var start = true;
// Iterate, 
        function iterate(id) {
// getting the result display section, getting the question and setting it
            var result = document.getElementsByClassName(".result");
            const question = document.getElementById("#question");
            question.innerText = Questions[id].q;


var selected = "";
op1.addEventListener("click", () => {
    
    selected = op1.value;
})
op2.addEventListener("click", () => {
    
    selected = op2.value;
})
op3.addEventListener("click", () => {
    
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    
    selected = op4.value;
})
    const evaluate = document.getElementsByClassName("evaluate");
//grabbing select button
                
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

// Questions will be asked



// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {

    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})