let score = 0;
let questions = [
  "What is 18 + 12?",
  "What is 16 + 18?",
  "What is 16 + 24?",
  "What is 22 + 22?",
];
let choices = [
  {
    answer: 1,
    choice1: "30",
    choice2: "32",
    choice3: "33",
    choice4: "29",
  },
  {
    answer: 2,
    choice1: "33",
    choice2: "34",
    choice3: "35",
    choice4: "32",
  },
  {
    answer: 3,
    choice1: "20",
    choice2: "30",
    choice3: "40",
    choice4: "14",
  },
  {
    answer: 4,
    choice1: "12",
    choice2: "20",
    choice3: "27",
    choice4: "44",
  },
];

let meter = [30, 50, 70, 100];

let scoreElement = document.querySelector(".score");
let meterElement = document.querySelector(".meter");
let questionPElement = document.querySelector(".question-p");
let firstContainer = document.querySelector(".first-container");
let secondContainer = document.querySelector(".second-container");
let bodyElement = document.querySelector("body");
let childElement = document.querySelector(".child");
let questionElement = document.querySelector(".question");
let choiceElement = document.querySelector(".choices");

let i = 0;

function updatePage() {
  if (i > 3) {
    console.log("end");
    firstContainer.parentNode.removeChild(firstContainer);
    secondContainer.parentNode.removeChild(secondContainer);
    bodyElement.innerHTML = `
        <h1 class="result" style="color: #ff7272;">Total score: ${score}</h1>
        <a href="quiz.html"><button class="start-btn" >Play Again</button></a>
      `;
    return;
  }
  questionPElement.innerHTML = `Question ${i + 1}/4`;
  meterElement.setAttribute("value", meter[i]);
  scoreElement.innerHTML = score;
  questionElement.innerHTML = questions[i];
  choiceElement.innerHTML = `
    <div class="parent">
        <div class="child1" onclick="checkAnswer(${choices[i].answer}, 1)"><div class="child-inner">A</div>${choices[i].choice1}</div>
        <div class="child2" onclick="checkAnswer(${choices[i].answer}, 2)"><div class="child-inner">B</div>${choices[i].choice2}</div>
        <div class="child3" onclick="checkAnswer(${choices[i].answer}, 3)"><div class="child-inner">C</div>${choices[i].choice3}</div>
        <div class="child4" onclick="checkAnswer(${choices[i].answer}, 4)"><div class="child-inner">D</div>${choices[i].choice4}</div>
    </div>
`;

  i++;
}

function checkAnswer(ans, clicked) {
  // 답을 클릭한 경우
  if (ans === clicked) {
    console.log("Correct");
    let choiceElement = document.querySelector(`.child${ans}`);
    console.log(choiceElement);
    choiceElement.style.backgroundColor = "green";
    score++;
    scoreElement.innerHTML = score;
  } else {
    console.log("Wrong");
    let choiceElement = document.querySelector(`.child${clicked}`);
    choiceElement.style.backgroundColor = "red";
  }
  //시간초과
  setTimeout(function () {
    updatePage();
  }, 1000);
}
