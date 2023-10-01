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
const answerBtns = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIdx = 0;
let score = 0;

function restartQuiz() {
  nextBtn.style.display = 'none';
  currentQuestionIdx = 0;
  score = 0;

  showQuestion();
}

function showQuestion() {
  let questionNum = currentQuestionIdx + 1;
  let currentQuestion = questions[currentQuestionIdx];
  questionEl.innerHTML = `${questionNum}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('btn');
    buttonEl.innerHTML = answer.text;
    buttonEl.dataset.correct = answer.correct;
    answerBtns.appendChild(buttonEl);

    buttonEl.addEventListener('click', selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === 'true';

  selectedBtn.classList.add(correct ? 'correct' : 'incorrect');
  if (correct) {
    score++;
  }

  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = 'true';
  });

  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  answerBtns.innerHTML = '';
  nextBtn.style.display = 'none';

  if (currentQuestionIdx >= questions.length) {
    resetQuiz();
    return;
  }

  currentQuestionIdx++;

  if (currentQuestionIdx < questions.length) {
    showQuestion();
  } else {
    questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
  }
});

restartQuiz();
