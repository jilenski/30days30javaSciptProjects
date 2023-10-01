const questions = [
  {
    question: 'Which is the largest animal in the world?',
    answers: [
      { text: 'Shark', correct: false },
      { text: 'Blue whale', correct: true },
      { text: 'Elephant', correct: false },
      { text: 'Giraffe', correct: false },
    ],
  },
  {
    question: 'Which is the smallest country in the world?',
    answers: [
      { text: 'Vatican', correct: true },
      { text: 'Bhutan', correct: false },
      { text: 'Nepal', correct: false },
      { text: 'Shri Lanka', correct: false },
    ],
  },
  {
    question: 'Which is the largest desert in the world?',
    answers: [
      { text: 'Kalahari', correct: false },
      { text: 'Gobi', correct: false },
      { text: 'Sahara', correct: false },
      { text: 'Antarctica', correct: true },
    ],
  },
  {
    question: 'Which is the smallest continent in the world?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Australia', correct: true },
      { text: 'Arctic', correct: false },
      { text: 'Africa', correct: false },
    ],
  },
];

const questionEl = document.getElementById('question');
const answersBtns = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIdx = 0;
let score = 0;

function startQuiz() {
  resetState();
  currentQuestionIdx = 0;
  score = 0;
  nextBtn.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIdx];
  let questionNum = currentQuestionIdx + 1;
  questionEl.innerHTML = `${questionNum}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answersBtns.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = 'none';
  while (answersBtns.firstChild) {
    answersBtns.removeChild(answersBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';

  if (isCorrect) {
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answersBtns.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextBtn.style.display = 'block';
}

startQuiz();
