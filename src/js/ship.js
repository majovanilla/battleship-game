const ship = (length, x, y, direction) => {
  const hitArr = [];
  const sinkStatus = false;

  function position() {
    const arr = [];
    let cell = `${x}${y}`;
    for (let i = 1; i = length; i += 1) {
      if (direction = 'right') {
        arr.push(cell);
        cell = `${x + i}${y}`;
      }
    }
  }

  function hit(cell) {
    console.log('this');
  }

  return {
    length, x, y, sinkStatus,
  };
};

export { ship as default };