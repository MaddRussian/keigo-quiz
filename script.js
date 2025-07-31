// Quiz data
const quizData = [
    {
        question: "Which of the following is the most polite way to say 'I am Tanaka' in Japanese?",
        options: [
            "田中です (Tanaka desu)",
            "田中でございます (Tanaka de gozaimasu)",
            "田中だ (Tanaka da)",
            "田中 (Tanaka)"
        ],
        correct: 1,
        explanation: "田中でございます (Tanaka de gozaimasu) is the most polite form using 敬語 (keigo)."
    },
    {
        question: "What is the polite form of 行く (iku - to go)?",
        options: [
            "行きます (ikimasu)",
            "参ります (mairimasu)",
            "いらっしゃいます (irasshaimasu)",
            "お行きになります (o-iki ni narimasu)"
        ],
        correct: 0,
        explanation: "行きます (ikimasu) is the polite form, while 参ります (mairimasu) is humble form."
    },
    {
        question: "Which word means 'company' in polite Japanese?",
        options: [
            "会社 (kaisha)",
            "御社 (on-sha)",
            "弊社 (hei-sha)",
            "貴社 (ki-sha)"
        ],
        correct: 1,
        explanation: "御社 (on-sha) is the polite way to refer to someone else's company."
    },
    {
        question: "What is the humble form of 言う (iu - to say)?",
        options: [
            "おっしゃいます (osshaimasu)",
            "申します (moushimasu)",
            "言います (iimasu)",
            "お言いになります (o-ii ni narimasu)"
        ],
        correct: 1,
        explanation: "申します (moushimasu) is the humble form of 言う (iu)."
    },
    {
        question: "Which is the correct polite form of 'thank you'?",
        options: [
            "ありがとう (arigatou)",
            "ありがとうございます (arigatou gozaimasu)",
            "どうも (doumo)",
            "すみません (sumimasen)"
        ],
        correct: 1,
        explanation: "ありがとうございます (arigatou gozaimasu) is the polite form of thank you."
    },
    {
        question: "What does お疲れ様でした (otsukaresama deshita) mean?",
        options: [
            "Good morning",
            "Thank you for your hard work",
            "Goodbye",
            "Excuse me"
        ],
        correct: 1,
        explanation: "お疲れ様でした (otsukaresama deshita) means 'Thank you for your hard work' and is commonly used in workplace settings."
    },
    {
        question: "Which is the polite way to say 'I understand'?",
        options: [
            "分かった (wakatta)",
            "分かります (wakarimasu)",
            "承知いたしました (shouchi itashimashita)",
            "了解 (ryoukai)"
        ],
        correct: 2,
        explanation: "承知いたしました (shouchi itashimashita) is the most polite way to say 'I understand'."
    },
    {
        question: "What is the polite form of 見る (miru - to see/watch)?",
        options: [
            "見ます (mimasu)",
            "拝見します (haiken shimasu)",
            "ご覧になります (goran ni narimasu)",
            "見られます (miraremasu)"
        ],
        correct: 0,
        explanation: "見ます (mimasu) is the polite form, while 拝見します (haiken shimasu) is humble form."
    },
    {
        question: "Which word is used to politely refer to someone's family?",
        options: [
            "家族 (kazoku)",
            "ご家族 (go-kazoku)",
            "御家族 (on-kazoku)",
            "お宅 (otaku)"
        ],
        correct: 1,
        explanation: "ご家族 (go-kazoku) is the polite way to refer to someone's family."
    },
    {
        question: "What is the polite way to say 'I will do it'?",
        options: [
            "やる (yaru)",
            "します (shimasu)",
            "いたします (itashimasu)",
            "やります (yarimasu)"
        ],
        correct: 2,
        explanation: "いたします (itashimasu) is the most polite humble form meaning 'I will do it'."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

// Initialize the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
}

// Display current question
function showQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('score').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';

    answered = false;
}

// Handle option selection
function selectOption(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = quizData[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.correct) {
        score++;
    }

    document.getElementById('next-btn').style.display = 'inline-block';
}

// Move to next question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Display final results
function showResults() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    const percentage = Math.round((score / quizData.length) * 100);
    document.getElementById('final-score').textContent = `Your Score: ${score}/${quizData.length} (${percentage}%)`;

    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! You have mastered keigo! 素晴らしい！敬語を完璧に理解しています！';
    } else if (percentage >= 70) {
        message = 'Good job! You have a solid understanding of keigo. よくできました！敬語の理解がしっかりしています！';
    } else if (percentage >= 50) {
        message = 'Not bad! Keep practicing keigo. 悪くないです！敬語の練習を続けてください！';
    } else {
        message = 'Keep studying! Keigo takes time to master. 勉強を続けてください！敬語は時間がかかります！';
    }

    document.getElementById('result-message').textContent = message;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}
