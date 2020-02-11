import { UI, runGame, markCell } from '../views/UI';
import * as Player from './player';
import board from './board';
import { init, checkTurn } from './gameLogic';

function gameLoop() {
  const player1 = Player.player('username');
  const player2 = Player.player('computer');
  const board1 = board(player1);
  const board2 = board(player2);
  UI.renderBoard(board1);
  UI.renderBoard(board2);
  const playerArray = [player1, player2];
  Player.randomTurn(playerArray);
  runGame(player1, player2, board1, board2);
  /* let gameOver = false;
  while (gameOver === false) {
    if (checkTurn(player1)) {
      runGame(player1, player2, board2);
      if (board2.winner()) {
        gameOver = true;
        alert(`${player1.username} is winner`);
      }
    } *//*  else if (checkTurn(player2)) {
const selectedCell = Player.computerSelection(board1.emptyCells);
markCell(selectedCell, board1);
if (board1.winner()) {
  gameOver = true;
  alert(`${player2.username} is winner`);
}
Player.changeTurn(player1, player2);
} */
}


gameLoop();