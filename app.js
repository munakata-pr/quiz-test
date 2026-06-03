// Quiz Application Logic
// Contains Question Data, State, and UI Rendering Logic

const quizData = [
    {
        difficulty: "初級",
        question: "Q1. 株式会社くりえいとは、1988年の設立当初、どのような社名だったでしょうか？",
        choices: [
            { text: "赤間開発株式会社", isCorrect: true },
            { text: "宗像商業開発株式会社", isCorrect: false },
            { text: "赤間タウンマネジメント", isCorrect: false },
            { text: "くりえいと都市開発株式会社", isCorrect: false }
        ],
        explanation: "1988年6月8日、宗像市内への大型ショッピングセンター誘致を目的として設立されました。"
    },
    {
        difficulty: "初級",
        question: "Q2. 2000年11月に開業した、くりえいと宗像の中核となる大型スーパーマーケットの名称は何でしょうか？",
        choices: [
            { text: "サンリブくりえいと宗像店", isCorrect: true },
            { text: "イオンモール宗像", isCorrect: false },
            { text: "ゆめタウン宗像", isCorrect: false },
            { text: "マックスバリュくりえいと店", isCorrect: false }
        ],
        explanation: "サンリブ側が65億円の投資を行い開業し、後にグループ内で全国第2位の売り上げ規模を誇る優良店舗に成長しました。"
    },
    {
        difficulty: "初級",
        question: "Q3. 商業開発の成功により、全国的にも珍しい事例として開発地区の公的な新住所に採用された名称は何でしょうか？",
        choices: [
            { text: "くりえいと", isCorrect: true },
            { text: "赤間駅前東", isCorrect: false },
            { text: "くりえいとタウン", isCorrect: false },
            { text: "宗像ひかりヶ丘", isCorrect: false }
        ],
        explanation: "民間主導の開発が高く評価され、一過性の開発ではなく生活基盤を創生した証として、公的な住所にそのまま「くりえいと」が採用されました。"
    },
    {
        difficulty: "初級",
        question: "Q4. くりえいと宗像のロゴマークや街のシンボルは、宗像市に伝わる伝説の「天馬」と、ある地域の伝統工芸品（玩具）をモチーフにしています。その伝統工芸品は何でしょうか？",
        choices: [
            { text: "きじ馬（きじ車）", isCorrect: true },
            { text: "博多人形", isCorrect: false },
            { text: "津屋崎人形", isCorrect: false },
            { text: "木うそ", isCorrect: false }
        ],
        explanation: "宗像地域に古くから伝わる伝統工芸品・縁起物である木製玩具「きじ馬（きじ車）」と、伝説の天馬をシンボライズしたアイデンティティ計画が採用されています。"
    },
    {
        difficulty: "中級",
        question: "Q5. 当初、くりえいと宗像の核テナントとして誘致が予定されていたものの、業界再編の波により頓挫してしまったスーパーマーケットはどこでしょうか？",
        choices: [
            { text: "寿屋", isCorrect: true },
            { text: "ダイエー", isCorrect: false },
            { text: "ユニード", isCorrect: false },
            { text: "ニチイ", isCorrect: false }
        ],
        explanation: "計画当初は九州の大手スーパーであった寿屋の誘致が予定されていましたが頓挫し、その後粘り強い交渉の末にサンリブの誘致に成功しました。"
    },
    {
        difficulty: "中級",
        question: "Q6. 2010年に「健康」「環境」「癒し」をコンセプトに新たに開業したエリアは、くりえいと何丁目でしょうか？",
        choices: [
            { text: "くりえいと3丁目", isCorrect: true },
            { text: "くりえいと1丁目", isCorrect: false },
            { text: "くりえいと2丁目", isCorrect: false },
            { text: "くりえいと4丁目", isCorrect: false }
        ],
        explanation: "2008年から始まった第2次開発により、単なる物販施設の拡張にとどまらない高付加価値なまちづくりを目指して2010年に開業しました。"
    },
    {
        difficulty: "中級",
        question: "Q7. 福祉と農業を融合させる取り組みの一環として、2024年4月に同社が開設した障がい者グループホームの名称は何でしょうか？",
        choices: [
            { text: "ヒカリノテ", isCorrect: true },
            { text: "コムズハウス", isCorrect: false },
            { text: "くりえいとホーム", isCorrect: false },
            { text: "宗像あおぞら園", isCorrect: false }
        ],
        explanation: "利用者が農作業を通じて有機大根を栽培・出荷する「農福連携事業」を支援し、働く喜びの創出と地域循環システムを体現しています。"
    },
    {
        difficulty: "中級",
        question: "Q8. 2018年10月に、株式会社くりえいとが宗像市と締結し、公的セクターと連携して多角的なエリアマネジメントに取り組むきっかけとなった協定の名称は何でしょうか？",
        choices: [
            { text: "地域包括連携協定", isCorrect: true },
            { text: "災害時相互応援協定", isCorrect: false },
            { text: "まちづくりパートナー協定", isCorrect: false },
            { text: "包括的エリアマネジメント協定", isCorrect: false }
        ],
        explanation: "この協定に基づき、「商業」と「地域」の境界をなくし、福祉、起業支援、文化振興などの地域課題解決に取り組むようになりました。"
    },
    {
        difficulty: "上級",
        question: "Q9. 2025年5月、まちなかの賑わい創出や官民一体の施設管理をコーディネートする公的な主体として、同社は宗像市から何という法人に指定されたでしょうか？",
        choices: [
            { text: "都市再生推進法人", isCorrect: true },
            { text: "まちづくり公社", isCorrect: false },
            { text: "地域商社宗像", isCorrect: false },
            { text: "観光活性化推進機構", isCorrect: false }
        ],
        explanation: "市や民間デベロッパーだけでは補えないまちづくりをコーディネートする法人です。この指定により、より円滑かつ迅速なまちづくり事業の展開が可能となりました。"
    },
    {
        difficulty: "上級",
        question: "Q10. 同社が将来のビジョンとして描いている、高齢者から子どもまで世代を超えたつながりと持続可能な経済循環を深化させるための構想を何と呼ぶでしょうか？",
        choices: [
            { text: "「芽吹きの土壌（カミングソイル）」構想", isCorrect: true },
            { text: "「共生と循環」ビジョン", isCorrect: false },
            { text: "「くりえいと・スマートシティ」計画", isCorrect: false },
            { text: "「農福連携ローカルエコシステム」構想", isCorrect: false }
        ],
        explanation: "同社は都市再生推進法人としての役割を担いながら、多極連携の集約型都市構造を支える中心拠点として、この構想のもとに進化を続ける見込みです。"
    }
];

// App State
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

const questionNumberEl = document.getElementById('question-number');
const difficultyBadgeEl = document.getElementById('difficulty-badge');
const progressBarFillEl = document.getElementById('progress-bar-fill');
const questionTextEl = document.getElementById('question-text');
const choicesContainerEl = document.getElementById('choices-container');

const explanationBoxEl = document.getElementById('explanation-box');
const statusIconEl = document.getElementById('status-icon');
const statusTextEl = document.getElementById('status-text');
const explanationTextEl = document.getElementById('explanation-text');

const scoreNumberEl = document.getElementById('score-number');
const rankTitleEl = document.getElementById('rank-title');
const rankDescEl = document.getElementById('rank-desc');

// Utility: Shuffle choices array safely while keeping isCorrect mapping
function shuffleChoices(choices) {
    const arr = [...choices];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Show Current Question
function showQuestion() {
    hasAnswered = false;
    explanationBoxEl.style.display = 'none';
    
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Set Header Info
    questionNumberEl.textContent = `第 ${currentQuestionIndex + 1} 問 / 10`;
    difficultyBadgeEl.textContent = currentQuestion.difficulty;
    
    // Set Difficulty Color
    if (currentQuestion.difficulty === "初級") {
        difficultyBadgeEl.style.color = "#10b981"; // Green
        difficultyBadgeEl.style.borderColor = "rgba(16, 185, 129, 0.3)";
    } else if (currentQuestion.difficulty === "中級") {
        difficultyBadgeEl.style.color = "#06b6d4"; // Cyan
        difficultyBadgeEl.style.borderColor = "rgba(6, 182, 212, 0.3)";
    } else {
        difficultyBadgeEl.style.color = "#f59e0b"; // Amber
        difficultyBadgeEl.style.borderColor = "rgba(245, 158, 11, 0.3)";
    }
    
    // Progress Bar
    const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBarFillEl.style.width = `${progressPercent}%`;
    
    // Set Question Text
    questionTextEl.textContent = currentQuestion.question;
    
    // Clear choices & shuffle
    choicesContainerEl.innerHTML = '';
    const shuffledChoices = shuffleChoices(currentQuestion.choices);
    
    // Render Choices
    const prefixes = ['A', 'B', 'C', 'D'];
    shuffledChoices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.classList.add('choice-btn');
        
        button.innerHTML = `
            <span class="choice-prefix">${prefixes[index]}</span>
            <span class="choice-text">${choice.text}</span>
        `;
        
        button.addEventListener('click', () => selectChoice(button, choice.isCorrect, shuffledChoices));
        choicesContainerEl.appendChild(button);
    });
}

// Select a Choice
function selectChoice(selectedBtn, isCorrect, allChoicesOfQuestion) {
    if (hasAnswered) return;
    hasAnswered = true;
    
    // Disable all choice buttons and mark correct/incorrect
    const buttons = choicesContainerEl.querySelectorAll('.choice-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        const choiceText = btn.querySelector('.choice-text').textContent;
        const matchingChoice = allChoicesOfQuestion.find(c => c.text === choiceText);
        
        if (matchingChoice && matchingChoice.isCorrect) {
            btn.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
        showExplanation(true);
    } else {
        selectedBtn.classList.add('incorrect');
        showExplanation(false);
    }
}

// Show Explanation
function showExplanation(isCorrect) {
    const currentQuestion = quizData[currentQuestionIndex];
    explanationBoxEl.style.display = 'block';
    
    const statusContainer = explanationBoxEl.querySelector('.explanation-status');
    
    if (isCorrect) {
        statusContainer.className = 'explanation-status correct';
        statusIconEl.innerHTML = '✔️';
        statusTextEl.textContent = '正解！';
    } else {
        statusContainer.className = 'explanation-status incorrect';
        statusIconEl.innerHTML = '❌';
        statusTextEl.textContent = '不正解...';
    }
    
    explanationTextEl.textContent = currentQuestion.explanation;
}

// Next Question or Show Result
function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show Result Screen
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    scoreNumberEl.textContent = score;
    
    let rankTitle = '';
    let rankDesc = '';
    
    if (score === 10) {
        rankTitle = '👑 くりえいとマスター';
        rankDesc = '完璧です！あなた以上に「くりえいと」の歴史と取り組みに詳しい人はいません。地域づくりのリーダーになれる知識の持ち主です！';
    } else if (score >= 7) {
        rankTitle = '🌟 くりえいとエキスパート';
        rankDesc = '素晴らしい！くりえいと宗像の歩みや地域貢献について非常に深い知識を持っています。友人に自慢しましょう！';
    } else if (score >= 4) {
        rankTitle = '🏃 くりえいとサポーター';
        rankDesc = 'なかなかの好成績です！このクイズを通して、さらにくりえいとの魅力的なまちづくりについて理解が深まりましたね！';
    } else {
        rankTitle = '🔰 くりえいとビギナー';
        rankDesc = 'まずは第一歩！これから「くりえいと」が創り出す魅力的な街と取り組みについて、一緒に学んでいきましょう！';
    }
    
    rankTitleEl.textContent = rankTitle;
    rankDescEl.textContent = rankDesc;
    
    // Set Share Link
    const shareText = `【株式会社くりえいとクイズ】10問中${score}問正解！私の「くりえいと度」は「${rankTitle.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '').trim()}」でした！あなたも挑戦してみませんか？`;
    const shareUrl = 'https://munakata-pr.github.io/quiz-test/';
    shareBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent('くりえいと,宗像市,クイズ')}`;
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', startQuiz);
