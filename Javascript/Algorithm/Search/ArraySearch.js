const DIRECTION = {
  UP: [0, -1],
  DOWN: [0, 1],
  LEFT: [-1, 0],
  RIGHT: [1, 0],
};

function arrayBFS(array, start, end) {
  const MAX_ROW = array.length;
  const MAX_COLUMN = array[0].length;
  const visited = [];
  const queue = [];

  for (let i = 0; i < MAX_ROW; i += 1) {
    const row = [];
    for (let j = 0; j < MAX_COLUMN; j += 1) {
      row.push(false);
    }
    visited.push(row);
  }

  visited[start[0]][start[1]] = true;
  queue.push([start[0], start[1]]);

  while (queue) {
    const curPosition = queue.shift();
    if (!curPosition) {
      return false;
    }
    const [curX, curY] = curPosition;
    visited[curX][curY] = true;
    if (curX === end[0] && curY === end[1]) {
      return true;
    }

    Object.values(DIRECTION).forEach((direction) => {
      const tmpX = curX + direction[0];
      const tmpY = curY + direction[1];

      if (
        tmpX + direction[0] < 0 ||
        tmpX >= MAX_ROW ||
        tmpY < 0 ||
        tmpY >= MAX_COLUMN
      ) {
        return;
      }

      if (visited[tmpX][tmpY]) {
        return;
      }

      if (array[tmpX][tmpY] === 1) {
        return;
      }
      queue.push([tmpX, tmpY]);
    });
  }
}

const testArray = [
  [0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 0],
];

console.log(arrayBFS(testArray, [0, 0], [4, 0]));
console.log(arrayBFS(testArray, [0, 5], [2, 5]));
console.log(arrayBFS(testArray, [0, 0], [0, 0]));
console.log(arrayBFS(testArray, [0, 0], [4, 3]));
console.log(arrayBFS(testArray, [0, 0], [0, 5]));
console.log(arrayBFS(testArray, [0, 0], [-1, -1]));
console.log(arrayBFS(testArray, [0, 0], [3, 0]));
