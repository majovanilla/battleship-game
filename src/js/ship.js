const ship = (length, pos) => {
  const position = pos;


  function hit(cell) {
    if (position.includes(cell)) {
      const index = position.indexOf(cell);
      position.splice(index, 1);
      return true;
    }
    return false;
  }

  function isSunk() {
    if (position.length === 0) return true;
    return false;
  }

  return {
    length, isSunk, hit,
  };
};

export { ship as default };
