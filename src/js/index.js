import UI from '../views/UI';
import * as Player from './player';
import board from './board';

function gameLoop() {

  const player1 = Player.player('username');
  const player2 = Player.player('computer');

  const board1 = board(player1);
  const board2 = board(player2);

  UI.renderBoard(board1);
  UI.renderBoard(board2);

  UI.eventHandler();
}

gameLoop();