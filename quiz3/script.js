// {
//   question:
//     "",
//   answers: [
//     { text: "", correct: false },
//     { text: "", correct: true },
//     { text: "", correct: false },
//     { text: "", correct: false },
//   ],
// },
const questions = [
  {
    question:
      "Efforts to develop universal standards for cyber activities have resulted in a splintered ecosystem.",
    answers: [
      { text: "Fragmented Norms", correct: true },
      { text: "Geopolitical Implications", correct: false },
      { text: "Research and Measurement", correct: false },
      { text: "Basic Cyber Hygiene", correct: false },
    ],
  },
  {
    question:
      "Concentrate on specific cyber norms to assess their conformity with actual cyberspace behavior and identify potential gaps",
    answers: [
      { text: "Basic Cyber Hygiene", correct: false },
      { text: "Geopolitical Implications", correct: false },
      { text: "Fragmented Norms", correct: false },
      { text: "Research and Measurement:", correct: true },
    ],
  },
  {
    question:
      "Cybersecurity impacts national security, economic progress, and societal values. Critical technologies like 5G, cloud computing, and AI raise new challenges for global security.",
    answers: [
      { text: "Fragmented Norms", correct: false },
      { text: "Geopolitical Implications", correct: true },
      { text: "Research and Measurement", correct: false },
      { text: "Basic Cyber Hygiene", correct: false },
    ],
  },
  {
    question:
      "Use fundamental security procedures such as multi-factorauthentication and zero trust principles. ",
    answers: [
      { text: "Fragmented Norms", correct: false },
      { text: "Research and Measurement", correct: false },
      { text: "Basic Cyber Hygiene", correct: true },
      { text: "Geopolitical Implications", correct: false },
    ],
  },
  {
    question:
      "As part of digital transformation risk management, assess technology-specific geopolitical threats",
    answers: [
      { text: "Fragmented Norms", correct: false },
      { text: "Risk Analysis", correct: true },
      { text: "Basic Cyber Hygiene", correct: false },
      { text: "Intellectual Property", correct: false },
    ],
  },
  {
    question:
      "Refresh and practice incident response strategies for global situations",
    answers: [
      { text: "Tighten Port Policing", correct: false },
      { text: "Internet Protocol", correct: false },
      { text: "Fragmented Norms", correct: false },
      { text: "Incident Response Preparedness", correct: true },
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
