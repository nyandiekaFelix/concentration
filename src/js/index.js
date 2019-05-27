;(function (document) {
  'use strict';

  const deck = document.querySelector('.deck');
  const restartBtn = document.querySelector('.restart-btn');
  const success = document.querySelector('.success');
  const timer = document.querySelector('.timer');
  const moves = document.querySelector('.moves');
  const cardList = document.getElementsByClassName('card');
  const matchedCards = document.getElementsByClassName('matched-card');

  const images = [
    { icon: 'fab fa-2x fa-stack-2x fa-airbnb', type: 'airbnb' },
    { icon: 'fab fa-2x fa-stack-2x fa-apple', type: 'apple' },
    { icon: 'fab fa-2x fa-stack-2x fa-google', type: 'google' },
    { icon: 'fab fa-2x fa-stack-2x fa-facebook-f', type: 'facebook-f' },
    { icon: 'fab fa-2x fa-stack-2x fa-microsoft', type: 'microsoft' },
    { icon: 'fab fa-2x fa-stack-2x fa-linux', type: 'linux' },
    { icon: 'fab fa-2x fa-stack-2x fa-amazon', type: 'amazon' },
    { icon: 'fab fa-2x fa-stack-2x fa-digital-ocean', type: 'digital-ocean' },
    { icon: 'fab fa-2x fa-stack-2x fa-github', type: 'github' },
    { icon: 'fab fa-2x fa-stack-2x fa-docker', type: 'docker' },
  ];

  let grid = [];
  let openCards = [];
  let movesCount;
  let interval;
  let seconds;
  let minutes
  let hours;

  /**
   * @function createGrid
   * @description create card elements & append to DOM
   */
  function createGrid() {
    grid = images.concat(images).sort(_ => 0.5 - Math.random());
    grid.forEach(item => {
      const { icon, type } = item;
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-image', type);

      const front = document.createElement('div');
      front.setAttribute('class', 'card-content front');

      const i = document.createElement('i');
      i.setAttribute('class', icon);

      const back = document.createElement('div');
      back.setAttribute('class', 'card-content back');
      back.appendChild(i);

      deck.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
    });
  }

  /**
   * @function updateTimer
   * @description update timer display
   */
  function updateTimer() {
    timer.innerHTML = `Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
  }

  /**
   * @function updateMoves
   * @description update moves display
   */
  function updateMoves() {
    moves.innerHTML = `Moves: ${movesCount}`;
  }

  /**
   *
   *
   */
  const toggleCard = function () {
    console.log('toggleThis', this);
    this.classList.toggle('open');
  };

  /**
   *
   *
   */
  function match() {
    console.log('openThis', this.getAttribute('data-image'));

    openCards.push(this);
    console.log(openCards);
    if (openCards.length === 2) {
      moveCounter();
      if (openCards[0]['data-image'] === openCards[1]['data-image']) { isMatch() }
      noMatch();
    }
  }

  /**
   *
   *
   */
  function isMatch() {
    // add classes to permanently display matched cards
    // reset openCards[]
  }

  /**
   *
   *
   */
  function noMatch() {
    // Close selected & unmatched cards
    // reset openCards[]
  }

  /**
   *
   *
   */
  function disableClick() { }

  /**
   *
   *
   */
  function enableClick() { }

  /**
   * @function timer
   * @description calculate time taken by player to finish game
   */
  function startTimer() {
    const start = Date.now();
    interval = setInterval(() => {
      const duration = Date.now() - start;
      seconds = Math.floor((duration % (1000 * 60)) / 1000);
      minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      updateTimer();
    }, 1000);
  }

  /**
   *
   *
   */
  function moveCounter() {
    ++movesCount;
    updateMoves();
    if (movesCount === 1) {
      startTimer();
    }
  }

  /**
   *
   *
   */
  function done() {
    if (matchedCards.length === 16) {
      clearInterval(interval);
      // Show congratulatory message
    }
  }

  /**
   * @function start
   * @description shuffle cards and start the game
   */
  function start() {
    createGrid();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimer();

    movesCount = 0;

    Array.from(cardList).forEach(card => {
      card.addEventListener('click', toggleCard);
      card.addEventListener('click', match);
      card.addEventListener('click', done);
    });
    restartBtn.addEventListener('click', restart)
    updateMoves();
  }

  /**
   *
   *
   */
  function restart() {
    clearInterval(interval);
    start();
  }

  document.body.onload = start();

})(document);
