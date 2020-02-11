import { UI, runGame } from '../views/UI';
import * as Player from './player';
import board from './board';

function init() {
  const player1 = Player.player('player');
  const player2 = Player.player('computer');
  const board1 = board(player1);
  const board2 = board(player2);
  UI.renderBoard(board1, true);
  UI.renderBoard(board2);
  Player.setTurn(player1);

  return { player1, player2, board1, board2 }
}

function gameLoop() {
  init();
  if (runGame(player1, player2, board1, board2)) init();
}

gameLoop();