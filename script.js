// Quiz categories and data
const quizCategories = {
    interview: {
        name: "Interview Keigo",
        description: "Formal language for job interviews and business meetings",
        questions: [
            {
                question: "How would you politely introduce yourself in a job interview?",
                options: [
                    "田中です (Tanaka desu)",
                    "田中でございます (Tanaka de gozaimasu)",
                    "田中と申します (Tanaka to moushimasu)",
                    "田中だ (Tanaka da)"
                ],
                correct: 2,
                explanation: "田中と申します (Tanaka to moushimasu) is the humble form used in formal introductions."
            },
            {
                question: "What is the proper keigo way to say 'I understand' in an interview?",
                options: [
                    "分かりました (wakarimashita)",
                    "承知いたしました (shouchi itashimashita)",
                    "了解しました (ryoukai shimashita)",
                    "オッケー (okke)"
                ],
                correct: 1,
                explanation: "承知いたしました (shouchi itashimashita) is the most formal humble form."
            },
            {
                question: "How would you say 'I will do my best' in interview keigo?",
                options: [
                    "頑張ります (ganbarimasu)",
                    "精一杯努力いたします (seiippai doryoku itashimasu)",
                    "頑張る (ganbaru)",
                    "努力します (doryoku shimasu)"
                ],
                correct: 1,
                explanation: "精一杯努力いたします (seiippai doryoku itashimasu) is the most formal humble form."
            },
            {
                question: "What is the proper way to say 'thank you for your time' in an interview?",
                options: [
                    "ありがとう (arigatou)",
                    "お忙しい中、お時間をいただき、ありがとうございました (oisogashii naka, ojikan wo itadaki, arigatou gozaimashita)",
                    "時間をくれてありがとう (jikan wo kurete arigatou)",
                    "ありがとうございます (arigatou gozaimasu)"
                ],
                correct: 1,
                explanation: "お忙しい中、お時間をいただき、ありがとうございました is the most formal way to thank someone for their time."
            },
            {
                question: "How would you say 'I am interested in this position' in interview keigo?",
                options: [
                    "このポジションに興味があります (kono position ni kyoumi ga arimasu)",
                    "この職務に大変興味を持っております (kono shokumu ni taihen kyoumi wo motte orimasu)",
                    "この仕事が好きです (kono shigoto ga suki desu)",
                    "このポジションが欲しいです (kono position ga hoshii desu)"
                ],
                correct: 1,
                explanation: "この職務に大変興味を持っております is the formal keigo way to express interest."
            }
        ]
    },
    office: {
        name: "Office Keigo",
        description: "Polite language for workplace communication",
        questions: [
            {
                question: "How would you say 'I will submit the report' in office keigo?",
                options: [
                    "レポートを提出します (report wo teishutsu shimasu)",
                    "レポートを提出いたします (report wo teishutsu itashimasu)",
                    "レポートを出す (report wo dasu)",
                    "レポートを提出する (report wo teishutsu suru)"
                ],
                correct: 1,
                explanation: "レポートを提出いたします (report wo teishutsu itashimasu) is the humble form used in office settings."
            },
            {
                question: "What is the proper way to say 'I will check with my supervisor'?",
                options: [
                    "上司に確認します (joushi ni kakunin shimasu)",
                    "上司にご確認いただきます (joushi ni go-kakunin itadakimasu)",
                    "上司に聞きます (joushi ni kikimasu)",
                    "上司に確認いたします (joushi ni kakunin itashimasu)"
                ],
                correct: 3,
                explanation: "上司に確認いたします (joushi ni kakunin itashimasu) is the humble form for 'I will check'."
            },
            {
                question: "How would you say 'Please review this document' in office keigo?",
                options: [
                    "この書類を確認してください (kono shorui wo kakunin shite kudasai)",
                    "この書類をご確認いただけますでしょうか (kono shorui wo go-kakunin itadakemasu deshou ka)",
                    "この書類を見て (kono shorui wo mite)",
                    "この書類をチェックして (kono shorui wo check shite)"
                ],
                correct: 1,
                explanation: "この書類をご確認いただけますでしょうか is the most polite way to ask someone to review a document."
            },
            {
                question: "What is the proper way to say 'I apologize for the delay' in office keigo?",
                options: [
                    "遅れてすみません (okurete sumimasen)",
                    "遅延いたしまして、申し訳ございません (chien itashimashite, moushiwake gozaimasen)",
                    "遅れてごめん (okurete gomen)",
                    "遅れてしまいました (okurete shimaimashita)"
                ],
                correct: 1,
                explanation: "遅延いたしまして、申し訳ございません is the most formal apology for delays."
            },
            {
                question: "How would you say 'I will attend the meeting' in office keigo?",
                options: [
                    "会議に参加します (kaigi ni sanka shimasu)",
                    "会議に出席いたします (kaigi ni shusseki itashimasu)",
                    "会議に行きます (kaigi ni ikimasu)",
                    "会議に出ます (kaigi ni demasu)"
                ],
                correct: 1,
                explanation: "会議に出席いたします (kaigi ni shusseki itashimasu) is the formal humble form."
            }
        ]
    },
    customer: {
        name: "Customer Service Keigo",
        description: "Polite language for customer interactions",
        questions: [
            {
                question: "How would you say 'Welcome' to a customer in keigo?",
                options: [
                    "いらっしゃい (irasshai)",
                    "いらっしゃいませ (irasshaimase)",
                    "ようこそ (youkoso)",
                    "お越しください (okoshi kudasai)"
                ],
                correct: 1,
                explanation: "いらっしゃいませ (irasshaimase) is the standard keigo greeting for customers."
            },
            {
                question: "What is the proper way to say 'I will help you' to a customer?",
                options: [
                    "お手伝いします (otetsudai shimasu)",
                    "ご案内いたします (go-annai itashimasu)",
                    "助けます (tasukemasu)",
                    "サポートします (support shimasu)"
                ],
                correct: 1,
                explanation: "ご案内いたします (go-annai itashimasu) is the humble form for 'I will guide/help you'."
            },
            {
                question: "How would you say 'Please wait a moment' to a customer?",
                options: [
                    "ちょっと待って (chotto matte)",
                    "少々お待ちください (shoushou omachi kudasai)",
                    "待ってください (matte kudasai)",
                    "ちょっと待ってください (chotto matte kudasai)"
                ],
                correct: 1,
                explanation: "少々お待ちください (shoushou omachi kudasai) is the most polite way to ask customers to wait."
            },
            {
                question: "What is the proper way to say 'Thank you for your purchase'?",
                options: [
                    "買ってくれてありがとう (katte kurete arigatou)",
                    "ご購入いただき、ありがとうございます (go-kounyuu itadaki, arigatou gozaimasu)",
                    "買ってくれてありがとうございます (katte kurete arigatou gozaimasu)",
                    "購入ありがとう (kounyuu arigatou)"
                ],
                correct: 1,
                explanation: "ご購入いただき、ありがとうございます is the most formal way to thank customers."
            },
            {
                question: "How would you say 'I apologize for the inconvenience' to a customer?",
                options: [
                    "迷惑かけてすみません (meiwaku kakete sumimasen)",
                    "ご迷惑をおかけいたしまして、申し訳ございません (go-meiwaku wo okake itashimashite, moushiwake gozaimasen)",
                    "すみません (sumimasen)",
                    "ごめんなさい (gomen nasai)"
                ],
                correct: 1,
                explanation: "ご迷惑をおかけいたしまして、申し訳ございません is the most formal apology for inconveniencing someone."
            }
        ]
    },
    formal: {
        name: "Formal Ceremony Keigo",
        description: "Most formal keigo for ceremonies and official events",
        questions: [
            {
                question: "How would you say 'I am honored to be here' in formal ceremony keigo?",
                options: [
                    "ここにいることを光栄に思います (koko ni iru koto wo kouei ni omoimasu)",
                    "この場に出席させていただき、光栄でございます (kono ba ni shusseki sasete itadaki, kouei de gozaimasu)",
                    "ここに来れて嬉しい (koko ni korarete ureshii)",
                    "出席できて光栄です (shusseki dekite kouei desu)"
                ],
                correct: 1,
                explanation: "この場に出席させていただき、光栄でございます is the most formal way to express honor."
            },
            {
                question: "What is the most formal way to say 'I deeply appreciate this opportunity'?",
                options: [
                    "この機会に感謝します (kono kikai ni kansha shimasu)",
                    "このような機会を賜り、深く感謝いたしております (kono you na kikai wo tamawari, fukaku kansha itashite orimasu)",
                    "この機会にありがとう (kono kikai ni arigatou)",
                    "機会をありがとうございます (kikai wo arigatou gozaimasu)"
                ],
                correct: 1,
                explanation: "このような機会を賜り、深く感謝いたしております is the most formal expression of gratitude."
            },
            {
                question: "How would you say 'I will do my utmost' in formal ceremony keigo?",
                options: [
                    "頑張ります (ganbarimasu)",
                    "最善を尽くします (saizen wo tsukushimasu)",
                    "精一杯努力いたします (seiippai doryoku itashimasu)",
                    "全力で取り組みます (zenryoku de torikumimasu)"
                ],
                correct: 2,
                explanation: "精一杯努力いたします (seiippai doryoku itashimasu) is the most formal humble form."
            },
            {
                question: "What is the proper way to say 'I humbly accept' in formal ceremony keigo?",
                options: [
                    "受け取ります (uketorimasu)",
                    "謹んでお受けいたします (tsutsushinde o-uke itashimasu)",
                    "受けます (ukemasu)",
                    "承諾します (shoudaku shimasu)"
                ],
                correct: 1,
                explanation: "謹んでお受けいたします (tsutsushinde o-uke itashimasu) is the most formal humble acceptance."
            },
            {
                question: "How would you say 'I express my deepest gratitude' in formal ceremony keigo?",
                options: [
                    "ありがとうございます (arigatou gozaimasu)",
                    "深く感謝いたします (fukaku kansha itashimasu)",
                    "心より感謝申し上げます (kokoro yori kansha moushiagemasu)",
                    "感謝します (kansha shimasu)"
                ],
                correct: 2,
                explanation: "心より感謝申し上げます (kokoro yori kansha moushiagemasu) is the most formal expression of gratitude."
            }
        ]
    }
};

let currentCategory = null;
let currentQuestion = 0;
let score = 0;
let answered = false;

// Initialize the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showCategorySelection();
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('category-screen').classList.add('active');
}

// Show category selection
function showCategorySelection() {
    const categoryContainer = document.getElementById('category-options');
    categoryContainer.innerHTML = '';

    Object.keys(quizCategories).forEach(categoryKey => {
        const category = quizCategories[categoryKey];
        const button = document.createElement('div');
        button.className = 'category-option';
        button.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        button.onclick = () => selectCategory(categoryKey);
        categoryContainer.appendChild(button);
    });
}

// Select category and start quiz
function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    showQuestion();
    document.getElementById('category-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
}

// Display current question
function showQuestion() {
    const category = quizCategories[currentCategory];
    const question = category.questions[currentQuestion];

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
    document.getElementById('score').textContent = `Question ${currentQuestion + 1} of ${category.questions.length}`;

    // Update progress bar
    const progress = ((currentQuestion + 1) / category.questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';

    answered = false;
}

// Handle option selection
function selectOption(selectedIndex) {
    if (answered) return;

    answered = true;
    const category = quizCategories[currentCategory];
    const question = category.questions[currentQuestion];
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
    const category = quizCategories[currentCategory];

    if (currentQuestion < category.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Display final results
function showResults() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    const category = quizCategories[currentCategory];
    const percentage = Math.round((score / category.questions.length) * 100);
    document.getElementById('final-score').textContent = `Your Score: ${score}/${category.questions.length} (${percentage}%)`;

    let message = '';
    if (percentage >= 90) {
        message = `Excellent! You have mastered ${category.name}! 素晴らしい！${category.name}を完璧に理解しています！`;
    } else if (percentage >= 70) {
        message = `Good job! You have a solid understanding of ${category.name}. よくできました！${category.name}の理解がしっかりしています！`;
    } else if (percentage >= 50) {
        message = `Not bad! Keep practicing ${category.name}. 悪くないです！${category.name}の練習を続けてください！`;
    } else {
        message = `Keep studying! ${category.name} takes time to master. 勉強を続けてください！${category.name}は時間がかかります！`;
    }

    document.getElementById('result-message').textContent = message;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}

// Go back to previous screen
function goBack() {
    // Hide all screens
    document.querySelectorAll('.quiz-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show appropriate screen based on current state
    if (currentCategory && currentQuestion > 0) {
        // If we're in the middle of a quiz, go back to category selection
        document.getElementById('category-screen').classList.add('active');
        currentQuestion = 0;
        score = 0;
        currentCategory = null;
    } else if (currentCategory) {
        // If we're at the start of a quiz, go back to category selection
        document.getElementById('category-screen').classList.add('active');
        currentCategory = null;
    } else {
        // Go back to start screen
        document.getElementById('start-screen').classList.add('active');
    }
}
