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
    question: "What do the letters IP stand for?",
    answers: [
      { text: "Internet Protocol", correct: false },
      { text: "Intellectual Property", correct: true },
      { text: "Interpolation", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "A social phenomennon where people are treated differently based on their gender, which can be cause by sexism or gender discrimination.",
    answers: [
      { text: "Racism", correct: false },
      { text: "Gender Issues", correct: true },
      { text: "Bullying", correct: false },
      { text: "Miscommunication", correct: false },
    ],
  },
  {
    question:
      "refers to the unauthorized duplication of copyrighted content that is then sold at substantially lower prices in the 'grey' market.",
    answers: [
      { text: "Piracy", correct: true },
      { text: "Copy and Paste", correct: false },
      { text: "Business", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Preventive Measures for Piracy",
    answers: [
      { text: "Tighten Port Policing", correct: true },
      { text: "Turn off your router", correct: false },
      { text: "Cooperation Among Agencies", correct: true },
      { text: "Turn off your PC", correct: false },
    ],
  },
  {
    question:
      "Ensure that girls have equitable access to high-quality education, particularly in disparate regions.",
    answers: [
      { text: "Social Media", correct: false },
      { text: "Community Engagement", correct: false },
      { text: "Girls Education", correct: true },
      { text: "Teacher Training", correct: false },
    ],
  },
  {
    question:
      "Involve parents, communities, and local leaders in promoting girls education",
    answers: [
      { text: "Teacher Training", correct: false },
      { text: "Community Engagement", correct: true },
      { text: "Girls Education", correct: false },
      { text: "Intellectual Property", correct: false },
    ],
  },
  {
    question:
      "Teach educators how to overcome gender prejudices and establish inclusive learning environments.",
    answers: [
      { text: "Tighten Port Policing", correct: false },
      { text: "Girls Education", correct: false },
      { text: "Community Engagement", correct: false },
      { text: "Teacher Training", correct: true },
    ],
  },
  {
    question:
      "Raise awareness of intellectual property among inventors, corporations, and the general public.",
    answers: [
      {
        text: "Balanced IP Policies",
        correct: false,
      },
      { text: "IP Education", correct: true },
      { text: "Internet Protocol", correct: false },
      { text: "None of the Above", correct: false },
    ],
  },
  {
    question:
      "Enact rules that respect creators rights without suffocating innovation.",
    answers: [
      {
        text: "Balanced IP Policies",
        correct: true,
      },
      { text: "IP Education", correct: false },
      { text: "Internet Protocol", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Promote gender-inclusive education policies and programs.",
    answers: [
      {
        text: "Events",
        correct: false,
      },
      { text: "Advertising", correct: false },
      { text: "Social Media", correct: false },
      { text: "Education Access", correct: true },
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
