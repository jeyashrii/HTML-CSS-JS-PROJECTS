const questions = [
  {
    question: "which is larget animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Girafee", correct: false },
    ],
  },
  {
    question: "which is smallest city in the world?",
    answers: [
      { text: "Chennai", correct: false },
      { text: "New york", correct: false },
      { text: "China", correct: false },
      { text: "Vatican city", correct: true },
    ],
  },
  {
    question: "which is smallest continentin the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: false },
      { text: "Africa", correct: false },
      { text: "North America", correct: true },
    ],
  },
  {
    question: "which is larget desert the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Antartica", correct: true },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length} questions🫡`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNext();
  } else {
    startQuiz();
  }
});
startQuiz();
