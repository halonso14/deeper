// REFERENCE https://stackoverflow.com/questions/9960908/permutations-in-javascript/11629015#11629015

function swap(array, i1, i2) {
  const t = array[i1];
  // eslint-disable-next-line no-param-reassign
  array[i1] = array[i2];
  // eslint-disable-next-line no-param-reassign
  array[i2] = t;
}

function getPermutationsWithCallback(array, callback) {
  // eslint-disable-next-line no-shadow
  function permutate(array, index, callback) {
    if (index === array.length - 1) {
      callback(array);
      return 1;
    }
    let count = permutate(array, index + 1, callback);
    for (let i = index + 1; i < array.length; i += 1) {
      swap(array, i, index);
      count += permutate(array, index + 1, callback);
      swap(array, i, index);
    }
    return count;
  }

  if (!array || array.length === 0) {
    return 0;
  }
  return permutate(array, 0, callback);
}

function getPermutationsWithResultAndCallback(array, callback, callbackResult) {
  // Do the actual permuation work on array[], starting at index
  // eslint-disable-next-line no-shadow, consistent-return
  function permutate(array, index, callback) {
    if (index === array.length - 1) {
      callback(array, callbackResult);
    } else {
      permutate(array, index + 1, callback);
      for (let i = index + 1; i < array.length; i += 1) {
        swap(array, i, index);
        permutate(array, index + 1, callback);
        swap(array, i, index);
      }
      return callbackResult;
    }
  }

  if (!array || array.length === 0) {
    return 0;
  }
  return permutate(array, 0, callback);
}

function getPermutations(array) {
  const result = [];

  // eslint-disable-next-line no-shadow
  function addPermutationToResult(array) {
    result.push(array.slice());
  }

  // eslint-disable-next-line no-shadow, consistent-return
  function permutate(array, index) {
    if (index === array.length - 1) {
      addPermutationToResult(array);
    } else {
      permutate(array, index + 1);
      for (let i = index + 1; i < array.length; i += 1) {
        swap(array, i, index);
        permutate(array, index + 1);
        swap(array, i, index);
      }
      return result;
    }
  }

  if (!array || array.length === 0) {
    return [];
  }

  return permutate(array, 0);
}

const testResult = [];
function simpleCallback(array) {
  testResult.push(array.slice(0));
}
getPermutationsWithCallback([1, 2, 3], simpleCallback);

console.group('run getPermutationsWithCallback');
console.log(testResult);
console.log();
console.groupEnd();

function callbackWithResult(array, result) {
  result.push(array.slice(0));
}

console.group('run getPermutationsWithResultAndCallback');
console.log(
  getPermutationsWithResultAndCallback([1, 2, 3], callbackWithResult, [])
);
console.log();
console.groupEnd();

console.group('run getPermutations');
console.log(getPermutations([1, 2, 3, 4, 5]));
console.groupEnd();
