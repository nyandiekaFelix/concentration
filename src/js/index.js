;(function (document) {
  'use strict';

  const deck = document.querySelector('.deck');
  const success = document.querySelector('.success');
  const timer = document.querySelector('.timer');
  const moves = document.querySelector('.moves');
  const cardList = document.getElementsByClassName('card');

  const images = [
    { class: 'fab fa-react react', type: 'react'},
    { class: 'fab fa-android android', type: 'android' },
    { class: 'fab fa-apple apple', type: 'apple' },
    { class: 'fab fa-angular angular', type: 'angular' },
    { class: 'fab fa-vuejs vuejs', type: 'vue' },
    { class: 'fab fa-aws aws', type: 'aws' },
    { class: 'fab fa-stack-overflow stack-overflow', type: 'stack-overflow' },
    { class: 'fab fa-grunt grunt', type: 'grunt' },
  ];
  let cards = images.map(image => `<div class="card"><i class="${image.class}" type="${image.type}"/></div>`);
  cards = [].concat(...Array.from({ length: 2 }, () => cards));

  let openCards = [];
  let movesCount = 0;
  let interval;
  let seconds = 0;
  let minutes = 0
  let hours = 0;
  updateTimer();


  /**
   * @function shuffle
   * @description randomly place cards on the deck
   */
  function shuffle() {
    let current = cards.length;
    let temp;
    let random;

    while (current !== 0) {
      random = Math.floor(Math.random() * current);
      --current;
      temp = cards[current];
      cards[current] = cards[random];
      cards[random] = temp;
    }
  }

  /**
   *
   *
   */
  const openCard = function () { };

  /**
   *
   *
   */
  function match() {
    openCards.push(this);
    console.log(openCards);
    if (openCards.length === 2) {
      moveCounter();
      if (openCards[0].type === openCards[1].type) { isMatch() }
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
   * @function updateTimer
   * @description update timer display
   */
  function updateTimer() {
    timer.innerHTML = `Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
  }

  /**
   *
   *
   */
  function moveCounter() {
    ++movesCount;
    moves.innerHTML = `Moves: ${movesCount}`;
    if (movesCount === 1) {
      startTimer();
    }
  }

  /**
   *
   *
   */
  function done() {

  }

  /**
   * @function start
   * @description shuffle cards and start the game
   */
  function start() {
    shuffle();
    cards.forEach(card => { deck.innerHTML += card; });
    Array.from(cardList).forEach(card => {
      card.addEventListener('click', openCard);
      card.addEventListener('click', match);
      card.addEventListener('click', done);
    });
    moves.innerHTML = `Moves: ${movesCount}`;
  }

  /**
   *
   *
   */
  function restart() { }

  document.body.onload = start();

})(document);
