const cardsContainer = document.getElementById("cards-container");
const cards = [
    {"suit": "hearts", "value": "2", "count": 1, "id": "pcard-2h"},
    {"suit": "hearts", "value": "3", "count": 1, "id": "pcard-3h"},
    {"suit": "hearts", "value": "4", "count": 1, "id": "pcard-4h"},
    {"suit": "hearts", "value": "5", "count": 1, "id": "pcard-5h"},
    {"suit": "hearts", "value": "6", "count": 1, "id": "pcard-6h"},
    {"suit": "hearts", "value": "7", "count": 0, "id": "pcard-7h"},
    {"suit": "hearts", "value": "8", "count": 0, "id": "pcard-8h"},
    {"suit": "hearts", "value": "9", "count": 0, "id": "pcard-9h"},
    {"suit": "hearts", "value": "10", "count": -1, "id": "pcard-10h"},
    {"suit": "hearts", "value": "J", "count": -1, "id": "pcard-jh"},
    {"suit": "hearts", "value": "Q", "count": -1, "id": "pcard-qh"},
    {"suit": "hearts", "value": "K", "count": -1, "id": "pcard-kh"},
    {"suit": "hearts", "value": "A", "count": -1, "id": "pcard-ah"},
    {"suit": "diamonds", "value": "2", "count": 1, "id": "pcard-2d"},
    {"suit": "diamonds", "value": "3", "count": 1, "id": "pcard-3d"},
    {"suit": "diamonds", "value": "4", "count": 1, "id": "pcard-4d"},
    {"suit": "diamonds", "value": "5", "count": 1, "id": "pcard-5d"},
    {"suit": "diamonds", "value": "6", "count": 1, "id": "pcard-6d"},
    {"suit": "diamonds", "value": "7", "count": 0, "id": "pcard-7d"},
    {"suit": "diamonds", "value": "8", "count": 0, "id": "pcard-8d"},
    {"suit": "diamonds", "value": "9", "count": 0, "id": "pcard-9d"},
    {"suit": "diamonds", "value": "10", "count": -1, "id": "pcard-10d"},
    {"suit": "diamonds", "value": "J", "count": -1, "id": "pcard-jd"},
    {"suit": "diamonds", "value": "Q", "count": -1, "id": "pcard-qd"},
    {"suit": "diamonds", "value": "K", "count": -1, "id": "pcard-kd"},
    {"suit": "diamonds", "value": "A", "count": -1, "id": "pcard-ad"},
    {"suit": "clubs", "value": "2", "count": 1, "id": "pcard-2c"},
    {"suit": "clubs", "value": "3", "count": 1, "id": "pcard-3c"},
    {"suit": "clubs", "value": "4", "count": 1, "id": "pcard-4c"},
    {"suit": "clubs", "value": "5", "count": 1, "id": "pcard-5c"},
    {"suit": "clubs", "value": "6", "count": 1, "id": "pcard-6c"},
    {"suit": "clubs", "value": "7", "count": 0, "id": "pcard-7c"},
    {"suit": "clubs", "value": "8", "count": 0, "id": "pcard-8c"},
    {"suit": "clubs", "value": "9", "count": 0, "id": "pcard-9c"},
    {"suit": "clubs", "value": "10", "count": -1, "id": "pcard-10c"},
    {"suit": "clubs", "value": "J", "count": -1, "id": "pcard-jc"},
    {"suit": "clubs", "value": "Q", "count": -1, "id": "pcard-qc"},
    {"suit": "clubs", "value": "K", "count": -1, "id": "pcard-kc"},
    {"suit": "clubs", "value": "A", "count": -1, "id": "pcard-ac"},
    {"suit": "spades", "value": "2", "count": 1, "id": "pcard-2s"},
    {"suit": "spades", "value": "3", "count": 1, "id": "pcard-3s"},
    {"suit": "spades", "value": "4", "count": 1, "id": "pcard-4s"},
    {"suit": "spades", "value": "5", "count": 1, "id": "pcard-5s"},
    {"suit": "spades", "value": "6", "count": 1, "id": "pcard-6s"},
    {"suit": "spades", "value": "7", "count": 0, "id": "pcard-7s"},
    {"suit": "spades", "value": "8", "count": 0, "id": "pcard-8s"},
    {"suit": "spades", "value": "9", "count": 0, "id": "pcard-9s"},
    {"suit": "spades", "value": "10", "count": -1, "id": "pcard-10s"},
    {"suit": "spades", "value": "J", "count": -1, "id": "pcard-js"},
    {"suit": "spades", "value": "Q", "count": -1, "id": "pcard-qs"},
    {"suit": "spades", "value": "K", "count": -1, "id": "pcard-ks"},
    {"suit": "spades", "value": "A", "count": -1, "id": "pcard-as"}
]

class Game {
    constructor() {
        this.deck = cards;
        this.usedCards = [];
    }
    getCard() {
        const card = this.deck[Math.floor(Math.random() * this.deck.length)];
        this.deck = this.deck.filter(c => c.id !== card.id);
        this.usedCards.push(card);
        return card
    }
    getUsedCardsCount() {
        return this.usedCards.length;
    }
    reset() {
        this.deck = cards;
        this.usedCards = [];
    }
    refill() {
        this.deck = cards;
    }
    getCount() {
        return this.usedCards.reduce((acc, card) => acc + card.count, 0);
    }
    isDeckEmpty() {
        return this.deck.length === 0;
    }
}

const createCard = (card, idx) => {
    const cardElement = document.createElement("div");
    const rotation = `rotate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 10}deg);`
    cardElement.innerHTML = `<span class='${card.id} game-card' style='z-index: ${idx}; transform: ${rotation}'></span>`;
    return cardElement;
};

const createDeckCard = () => {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `<span class="pcard-back"></span>`;
    return cardElement;
};

const addCard = (card, idx) => {
    const cardElement = createCard(card, idx);
    cardsContainer.appendChild(cardElement);
};

const renderInPlayControls = () => {
    document.getElementById("start-game").classList.add("d-none");
}

let gameInterval;
let game;
let cardIdx = 0;
let cardChangeSpeed = 1500;

let segmentCardCount = 52;
let cardsInSegment = 0;
let countHistory = [];
let currentCheck = null;

const gameControls = document.getElementById("game-controls");
const speedSlider = document.getElementById("card-change-speed");

function changeCard() {
    if (game.isDeckEmpty()) {
        clearInterval(gameInterval);
        endSegment();
        return;
    }
    const card = game.getCard();
    addCard(card, cardIdx);
    const gameCards = cardsContainer.querySelectorAll('.game-card');
    if (gameCards.length > 10) {
        gameCards[0].parentElement.remove();
    }
    cardIdx++;
    cardsInSegment++;
    countHistory.push(game.getCount());
    if (cardsInSegment >= segmentCardCount) {
        clearInterval(gameInterval);
        endSegment();
    }
}

function endSegment() {
    if (currentCheck) return;
    const len = cardsInSegment;
    const lo = Math.ceil(len * 0.2);
    const hi = Math.max(lo, Math.floor(len * 0.8));
    const k = lo + Math.floor(Math.random() * (hi - lo + 1));
    const absIdx = countHistory.length - len + k - 1;
    currentCheck = { k: countHistory.length - len + k, correct: countHistory[absIdx] };
    const input = document.getElementById("midpoint-guess");
    input.value = "";
    showContinueModal();
}

function preventScroll() {
    // scroll top and left to prevent scrolling
    window.scrollTo(0, 0);
    window.scrollLeft = 0;
    document.body.style.overflow = 'hidden';
}

function allowScroll() {
    document.body.style.overflow = 'auto';
}

const howToPlayAndLeaderboardContainer = document.getElementById("how-to-play-and-leaderboard-container");
const shadowOverlay = document.getElementById("shadow-overlay");
const startGame = () => {   
    // hide controls
    gameControls.classList.add("d-none");
    howToPlayAndLeaderboardContainer.classList.add("d-none");
    shadowOverlay.classList.remove("d-none");
    preventScroll();
    game = new Game();
    segmentCardCount = 52;
    cardsInSegment = 0;
    countHistory = [];
    currentCheck = null;
    cardIdx = 0;
    addCard(game.getCard(), cardIdx);
    cardIdx++;
    cardsInSegment++;
    countHistory.push(game.getCount());
    renderInPlayControls();
    gameInterval = setInterval(changeCard, cardChangeSpeed);
};


const displayDeckCard = () => {
    const cardElement = createDeckCard()
    cardsContainer.appendChild(cardElement);
};

displayDeckCard();

const startGameButton = document.getElementById("start-game");
startGameButton.addEventListener("click", startGame);

const dismissContinueModal = () => {
    const modalEl = document.getElementById("continue-guess-modal");
    if (!modalEl) return;
    try {
        if (window.jQuery && jQuery.fn && jQuery.fn.modal) {
            jQuery(modalEl).modal('hide');
        } else if (window.bootstrap && bootstrap.Modal.getInstance) {
            bootstrap.Modal.getInstance(modalEl)?.hide();
        } else if (window.bootstrap && bootstrap.Modal) {
            new bootstrap.Modal(modalEl).hide();
        }
    } catch (e) {}
    modalEl.classList.remove("show");
    modalEl.style.display = "none";
    modalEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach(b => b.remove());
};

const showContinueModal = () => {
    if (window.bootstrap) {
        const modalEl = document.getElementById("continue-guess-modal");
        const modal = bootstrap.Modal.getOrCreateInstance
            ? bootstrap.Modal.getOrCreateInstance(modalEl)
            : new bootstrap.Modal(modalEl);
        modal.show();
    }
};

const continueDeck = () => {
    currentCheck = null;
    if (game.isDeckEmpty()) {
        game.refill();
    }
    segmentCardCount = 26;
    cardsInSegment = 0;
    renderInPlayControls();
    gameInterval = setInterval(changeCard, cardChangeSpeed);
    preventScroll();
};

const resetToStartScreen = () => {
    clearInterval(gameInterval);
    game.reset();
    cardsContainer.innerHTML = "";
    displayDeckCard();
    allowScroll();
    shadowOverlay.classList.add("d-none");
    howToPlayAndLeaderboardContainer.classList.remove("d-none");
    gameControls.classList.remove("d-none");
    startGameButton.classList.remove("d-none");
    window.scrollTo(0, 0);
};

const endGameWithZero = () => {
    dismissContinueModal();
    const modalEl = document.getElementById("streak-broken-modal");
    if (currentCheck) {
        document.getElementById("broken-card").textContent = currentCheck.k;
        document.getElementById("broken-count").textContent = currentCheck.correct;
    }
    currentCheck = null;
    resetToStartScreen();
    if (window.bootstrap && modalEl) {
        const modal = bootstrap.Modal.getOrCreateInstance
            ? bootstrap.Modal.getOrCreateInstance(modalEl)
            : new bootstrap.Modal(modalEl);
        modal.show();
    }
};

const endRunWithScore = () => {
    dismissContinueModal();
    if (currentCheck) {
        if (typeof confetti === "function") {
            confetti({ particleCount: 500, spread: 100, origin: { y: 0.6 } });
        }
        setTimeout(() => {
            const score = calculateScore(cardChangeSpeed, game.getUsedCardsCount());
            const modal = bootstrap.Modal.getOrCreateInstance
                ? bootstrap.Modal.getOrCreateInstance(document.getElementById("correct-guess-modal"))
                : new bootstrap.Modal(document.getElementById("correct-guess-modal"));
            document.getElementById("display-count").textContent = currentCheck.correct;
            document.getElementById("display-score").textContent = score;
            modal.show();
        }, 1000);
    }
    currentCheck = null;
    resetToStartScreen();
};

const continueGame = () => {
    dismissContinueModal();
    const guess = parseInt(document.getElementById("midpoint-guess").value, 10);
    if (currentCheck && guess === currentCheck.correct) {
        continueDeck();
    } else {
        endGameWithZero();
    }
};

const endRunFromCheck = () => {
    dismissContinueModal();
    const guess = parseInt(document.getElementById("midpoint-guess").value, 10);
    if (currentCheck && guess === currentCheck.correct) {
        endRunWithScore();
    } else {
        endGameWithZero();
    }
};

document.getElementById("continue-game-yes").addEventListener("click", continueGame);

document.getElementById("continue-game-no").addEventListener("click", endRunFromCheck);

function calculateScore(cardChangeSpeed, cardsCountedCorrectly) {
    const speedFactor = 1 / cardChangeSpeed; // Inverse relationship: faster (lower) speed is better
    const countFactor = cardsCountedCorrectly;
    return Math.round(speedFactor * countFactor * 1000); // Multiply by 1000 to get a more readable score
}


speedSlider.addEventListener("input", () => {
    const display = document.getElementById("card-speed-display");
    display.textContent = `(${speedSlider.value} seconds)`;
    cardChangeSpeed = speedSlider.value * 1000;
});


document.getElementById("how-to-play-link").addEventListener("click", (e) => {
    e.preventDefault();
    if (window.jQuery) {
        $('.navbar-collapse').collapse('hide');
    }
    document.getElementById("how-to-play-container").scrollIntoView({ behavior: 'smooth' });
});