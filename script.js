const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: 2
  },
  {
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    options: ["head", "<h1>", "<h6>", "<heading>"],
    answer: 1
  },
  {
    question: "Which element is used to get highlighted text in HTML5?",
    options: ["<u>", "<highlight>", "<mark>", "<b>"],
    answer: 2
  },
  {
    question: "Which of the following tag is used to embed CSS in html page?",
    options: ["<CSS>", "<!DOCTYPE html>", "<script>", "<style>"],
    answer: 3
  },
  {
    question: " Which of the following CSS framework is used to create a responsive design?",
    options: ["bootstrap", "mongodb", "django", "larawell"],
    answer: 0
  },
  {
    question: "Which of the following function defines a linear gradient as a CSS image?",
    options: ["image()", "linear-gradinet()", "gradient()", "grayscale()"],
    answer: 1
  },
  {
    question: "What will typeof null return in JavaScript?",
    options: ["null", "object", "boolean", "undefined"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["number", "boolean", "string", "character"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.addEventListener("click", () => checkAnswer(i, li));
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected, li) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    li.classList.add("correct");
    score++;
  } else {
    li.classList.add("wrong");
    optionsEl.children[correct].classList.add("correct");
  }
  Array.from(optionsEl.children).forEach(opt => opt.style.pointerEvents = "none");
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your score: ${score}/${questions.length}`;
}

loadQuestion();
