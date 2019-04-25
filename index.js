const gameDiv = document.getElementById('game');

// 1 = wall, 2 = pacman, 3 = ground, 4 = coin

let gameMap = [
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

let pacman = {
  x: 6,
  y: 4
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
      gameMap[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x - 1;
      gameMap[pacman.y][pacman.x] = 2;
      drawGame();
      break;
    case 38:
      gameMap[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y - 1;
      gameMap[pacman.y][pacman.x] = 2;
      drawGame();
      break;
    case 39:
      gameMap[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x + 1;
      gameMap[pacman.y][pacman.x] = 2;
      drawGame();
      break;
    case 40:
      gameMap[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y + 1;
      gameMap[pacman.y][pacman.x] = 2;
      drawGame();
      break;
  }
}

drawGame();
