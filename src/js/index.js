;(function () {
  'use strict';

  const deck = document.getElementsByClassName('deck');
  const success = document.getElementsByClassName('success');

  const images = [];
  const cards = images.map(image => `<div class="card"><i class="${image}"/></div>`);
  let openCards = [];
  let moves = 0;

  /**
   *
   *
   */
  function shuffle() {
    const current = cards.length;
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
  function start() {
    shuffle();
    cards.forEach(card => { deck.appendChild(card); });
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
  function match() { }

  /**
   *
   *
   */
  function isMatch() { }

  /**
   *
   *
   */
  function noMatch() { }

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
   *
   *
   */
  function moveCounter() { }

  /**
   *
   *
   */
  function done() { }

  /**
   *
   *
   */
  function restart() { }


  cards.forEach(card => {
    card.addEventListener('click', openCard);
    card.addEventListener('click', match);
    card.addEventListener('click', done);
  });

  document.body.onload = start();

})();
