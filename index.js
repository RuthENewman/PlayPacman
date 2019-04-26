const gameDiv = document.getElementById('game');
const scoreBoardDiv = document.getElementById('scoreBoard');
const playAgainButton = document.querySelector('.playAgain');
const headingTitle = document.querySelector('.heading');

// 1 = wall, 2 = pacman, 3 = ground, 4 = coin

let gameMap = [];
let pacman = {};
let score;

function initialise() {
  gameMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,4,4,4,4,4,1,4,4,4,4,4,1],
    [1,4,1,1,1,4,1,4,1,1,1,4,1],
    [1,4,1,4,4,4,4,4,4,4,1,4,1],
    [1,4,4,4,1,1,2,1,1,4,4,4,1],
    [1,4,1,4,4,4,4,4,4,4,1,4,1],
    [1,4,1,1,4,4,1,4,4,1,1,4,1],
    [1,4,4,4,4,4,1,4,4,4,4,4,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];
  pacman = {
    x: 6,
    y: 4
  }
  score = 0;
  drawGame();
}

function drawGame() {
  gameDiv.innerHTML = "";
  for(let i = 0; i < gameMap.length; i++) {
    for(let j = 0; j < gameMap[i].length; j++) {
    switch (gameMap[i][j]) {
      case 1:
        gameDiv.innerHTML += '<div class="wall"></div>';
        break;
      case 2:
        gameDiv.innerHTML += '<div class="pacman"></div>';
        break;
      case 3:
        gameDiv.innerHTML += '<div class="ground"></div>';
        break;
      case 4:
        gameDiv.innerHTML += '<div class="coin"></div>';
        break;
      }
    }
  }
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      if(gameMap[pacman.y][pacman.x-1] !== 1) {
        if(gameMap[pacman.y][pacman.x-1] === 4) {
          score += 10;
          drawScoreBoard(score);
        }
        gameMap[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x - 1;
        gameMap[pacman.y][pacman.x] = 2;
        drawGame();
        if(score === 540) {
          won();
        }
      }
      break;
    case 38:
      if(gameMap[pacman.y-1][pacman.x] !== 1) {
        if(gameMap[pacman.y-1][pacman.x] === 4) {
          score += 10;
          drawScoreBoard(score);
        }
        gameMap[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        gameMap[pacman.y][pacman.x] = 2;
        drawGame();
        if(score === 540) {
          won();
        }
      }
      break;
    case 39:
      if(gameMap[pacman.y][pacman.x+1] !== 1) {
        if(gameMap[pacman.y][pacman.x+1] === 4) {
          score += 10;
          drawScoreBoard(score);
        }
        gameMap[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x + 1;
        gameMap[pacman.y][pacman.x] = 2;
        drawGame();
        if(score === 540) {
          won();
        }
      }
      break;
    case 40:
      if(gameMap[pacman.y+1][pacman.x] !== 1) {
        if(gameMap[pacman.y+1][pacman.x] === 4) {
          score += 10;
          drawScoreBoard(score);
        }
        gameMap[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y + 1;
        gameMap[pacman.y][pacman.x] = 2;
        drawGame();
        if(score === 540) {
          won();
        }
      }
      break;
  }
}

function drawScoreBoard(score) {
  scoreBoardDiv.textContent = score;
}

function won() {
    gameDiv.innerHTML = '<h1 class="winningMessage">You Win!</h1>'
    headingTitle.style.display = 'none';
    playAgainButton.style.display = 'block';
    playAgainButton.textContent = 'Play again?';
}

initialise();

playAgainButton.addEventListener('click', event => {
  headingTitle.style.display = 'block';
  playAgainButton.style.display = 'none';
  initialise();
})
