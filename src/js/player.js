const player = (username) => {
  const turn = 0;

  return { username, turn };
};

function setTurn(player) {
  player.turn = 1;
}

function changeTurn(p1, p2) {
  p1.turn = p1.turn === 0 ? 1 : 0;
  p2.turn = p2.turn === 0 ? 1 : 0;
}

function computerSelection(arr) {
  const { length } = arr;
  const index = Math.floor(Math.random() * Math.floor(length));
  return (arr[index]);
}
export { player, setTurn, changeTurn, computerSelection };