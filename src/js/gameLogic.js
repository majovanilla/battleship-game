/* import { UI, runGame } from '../views/UI';
import * as Player from './player';
import board from './board'; */

function checkTurn(player1) {
  if (player1.turn === 1) return true;
  return false;
}
export { checkTurn };