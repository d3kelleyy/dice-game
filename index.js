let randomNumber1 = Math.round(Math.random() * 5 + 1);
let randomNumber2 = Math.round(Math.random() * 5 + 1);

function playerNumber() {
  if (randomNumber1 === 1) {
    document.querySelector('.img1').setAttribute('src', './images/dice1.png');
  } else if (randomNumber1 === 2) {
    document.querySelector('.img1').setAttribute('src', './images/dice2.png');
  } else if (randomNumber1 === 3) {
    document.querySelector('.img1').setAttribute('src', './images/dice3.png');
  } else if (randomNumber1 === 4) {
    document.querySelector('.img1').setAttribute('src', './images/dice4.png');
  } else if (randomNumber1 === 5) {
    document.querySelector('.img1').setAttribute('src', './images/dice5.png');
  } else {
    document.querySelector('.img1').setAttribute('src', './images/dice6.png');
  }
  return randomNumber1;
}

function computerNumber() {
  if (randomNumber2 === 1) {
    document.querySelector('.img2').setAttribute('src', './images/dice1.png');
  } else if (randomNumber2 === 2) {
    document.querySelector('.img2').setAttribute('src', './images/dice2.png');
  } else if (randomNumber2 === 3) {
    document.querySelector('.img2').setAttribute('src', './images/dice3.png');
  } else if (randomNumber2 === 4) {
    document.querySelector('.img2').setAttribute('src', './images/dice4.png');
  } else if (randomNumber2 === 5) {
    document.querySelector('.img2').setAttribute('src', './images/dice5.png');
  } else {
    document.querySelector('.img2').setAttribute('src', './images/dice6.png');
  }
  return randomNumber2;
}

function gameWinner() {
  if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = 'The game is a tie!';
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!';
  } else {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
  }
}

playerNumber();
computerNumber();
gameWinner();
