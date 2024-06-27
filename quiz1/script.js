const questions = [
  {
    question:
      "Fill in the blank: _____, has an impact on the learner's mental health, confidence, and self-esteem.",
    answers: [
      { text: "Studying", correct: false },
      { text: "Bullying", correct: true },
      { text: "Gaming", correct: false },
      { text: "Being Lazy", correct: false },
    ],
  },
  {
    question:
      "On average, how many people in the Philippines are being bullied a year?",
    answers: [
      { text: "30%", correct: false },
      { text: "80%", correct: false },
      { text: "50%", correct: false },
      { text: "40%", correct: true },
    ],
  },
  {
    question: "Fill in the blank: _____ the bully and walk away",
    answers: [
      { text: "Taunt", correct: false },
      { text: "Report", correct: false },
      { text: "Ignore", correct: true },
      { text: "Agitate", correct: false },
    ],
  },
  {
    //Be confident
    question:
      "Bullying always target people who are easy to befriend with and lack of confidence also those that think they are not good looking and showing his or her weak points",
    answers: [
      { text: "Seek Professional help", correct: false },
      { text: "Be ignorant", correct: false },
      { text: "Focus on self care", correct: false },
      { text: "Be confident", correct: true },
    ],
  },
  {
    //Seek Professional help
    question:
      "They can offer guidance, support, and appropriate interventions.",
    answers: [
      { text: "Be confident", correct: false },
      { text: "Focus on self care", correct: false },
      { text: "Seek Professional help", correct: true },
      { text: "Create a safety plan", correct: false },
    ],
  },
  {
    //FOcus on self-care
    question:
      "Engage in activities that promote your well-being, such as exercise, meditation, or hobbies you enjoy.",
    answers: [
      { text: "Seek Professional help", correct: false },
      { text: "Create a safety plan", correct: false },
      { text: "Focus on self care", correct: true },
      { text: "Be confident", correct: false },
    ],
  },
  {
    //Create a safety plan
    question:
      "Includes a list of people to call, places to go for safety, and a ctivities that help you feel better.",
    answers: [
      { text: "Create a safety plan", correct: true },
      { text: "Seek Professional help", correct: false },
      { text: "Focus on self care", correct: false },
      { text: "Be confident", correct: false },
    ],
  },
  {
    question:
      "Fill in the blank: _____ harmful objects within your vicinity to avoid self-harm.",
    answers: [
      { text: "Use", correct: false },
      { text: "Remove", correct: true },
      { text: "Throw", correct: false },
      { text: "Ignore", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
