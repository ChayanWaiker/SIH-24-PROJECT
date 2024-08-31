const quizData = [
    {
        question: "Who is the father of the Indian Constitution?",
        choices: ["Jawaharlal Nehru","B. R. Ambedkar", "Mahatma Gandhi", "Dadabhai Naoroji"],
        correct: "B. R. Ambedkar"
    },
    {
        question: "A group of college students decides to organize a peaceful protest on campus against a recent university policy they believe is unfair. The university administration, however, issues a notice that prohibits all forms of protest on campus. Which Fundamental Right can the students invoke to challenge the university's decision?",
        choices: ["Right to Freedom of Assembly (Article 19(1)(b))", "Right to Freedom of Religion (Article 25)", "Right to Equality before the Law (Article 14)", "Right to Education (Article 21A)"],
        correct: "Right to Freedom of Assembly (Article 19(1)(b))"
    },
    {
        question: "A 12-year-old child is working at a factory to support their family. The factory owner argues that the child is helping their family, so it's acceptable. Which Fundamental Right can be invoked to protect the child from this situation?",
        choices: ["Right to Education (Article 21A)", "Right to Freedom of Speech and Expression (Article 19(1)(a))", "Right Against Exploitation (Article 24)", "Right to Freedom of Religion (Article 25)"],
        correct: "Right Against Exploitation (Article 24)"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');
const medalElement = document.getElementById('medal');
const quizElement = document.getElementById('quiz');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';
    currentQuizData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => selectAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function selectAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];
    if (choice === currentQuizData.correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function submitAnswer() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizElement.style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}`;
    if (score === quizData.length) {
        medalElement.innerText = "🏅 Gold Medal!";
    } else if (score === quizData.length - 1) {
        medalElement.innerText = "🥈 Silver Medal!";
    } else if (score === quizData.length-2 ) {
        medalElement.innerText = "🥉 Bronze Medal!";
    } else {
        medalElement.innerText = "Better luck next time!";
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizElement.style.display = 'block';
    resultElement.style.display = 'none';
    loadQuestion();
}

window.onload = () => {
    loadQuestion();
};