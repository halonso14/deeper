function convert2DArrayToGraph(array) {
  const graph = {};
  const numberOfRows = array.length;
  const numberOfColumns = array[0].length;
  for (let i = 0; i < numberOfRows; i += 1) {
    const currentMap = {};
    for (let j = 0; j < numberOfColumns; j += 1) {
      if (i === j) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (array[i][j]) {
        currentMap[j] = array[i][j];
      }
    }
    graph[i] = currentMap;
  }

  return graph;
}

const array = [
  [1, 0, 3, 0, 0],
  [0, 1, 2, 0, 1],
  [3, 2, 1, 0, 4],
  [0, 0, 0, 1, 2],
  [0, 1, 4, 2, 1],
];

const args = process.argv[2];

console.log('Test converter with argument:', args);

let result;
switch (args) {
  case 'graph':
    console.log('converting 2d array to graph');
    result = convert2DArrayToGraph(array);
    console.log('graph', result);
    break;
  default:
    console.log(`${args} is an invalid argument`);
    break;
}
