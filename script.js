const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let blockBoard = false;

function flipCard() {
  if (blockBoard) return;
  this.classList.add('flip')

  if (this === firstCard) return;
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlippedCard = false;
  checkForMatch();
};

function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  }

  unflipCards()
};

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
};

function unflipCards() {
  blockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    blockBoard = false;

    resetBoard();
  }, 1500)
};

function resetBoard() {
  [hasFlippedCard, lockboar] = [false, false];
  [firstCard, secondCard] = [null, null];
};

cards.forEach((card) => {
  card.addEventListener('click', flipCard)
});