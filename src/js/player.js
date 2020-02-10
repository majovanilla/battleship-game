const player = (username) => {
  let turn = 0;

  return { username, turn };
};

function randomTurn(playerArr) {
  const playerNum = Math.floor(Math.random() * Math.floor(2));
  playerArr[playerNum].turn = 1;
}

function isTurn(p1, p2) {
  p1.turn = p1.turn === 0 ? 1 : 0;
  p2.turn = p2.turn === 0 ? 1 : 0;
}



export { player, randomTurn, isTurn };