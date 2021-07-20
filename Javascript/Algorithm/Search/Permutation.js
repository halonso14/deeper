//REF https://stackoverflow.com/questions/9960908/permutations-in-javascript/11629015#11629015
function getPermutationsWithCallback(array, callback) {
  // Do the actual permuation work on array[], starting at index
  function permutate(array, index, callback) {
    // Swap elements i1 and i2 in array a[]
    function swap(a, i1, i2) {
      var t = a[i1];
      a[i1] = a[i2];
      a[i2] = t;
    }

    if (index == array.length - 1) {
      callback(array);
      return 1;
    } else {
      var count = permutate(array, index + 1, callback);
      for (var i = index + 1; i < array.length; i++) {
        swap(array, i, index);
        count += permutate(array, index + 1, callback);
        swap(array, i, index);
      }
      return count;
    }
  }

  if (!array || array.length == 0) {
    return 0;
  }
  return permutate(array, 0, callback);
}

function getPermutationsWithResultAndCallback(array, callback, callbackResult) {
  // Do the actual permuation work on array[], starting at index
  function permutate(array, index, callback) {
    // Swap elements i1 and i2 in array a[]
    function swap(a, i1, i2) {
      var t = a[i1];
      a[i1] = a[i2];
      a[i2] = t;
    }

    if (index == array.length - 1) {
      callback(array, callbackResult);
    } else {
      permutate(array, index + 1, callback);
      for (var i = index + 1; i < array.length; i++) {
        swap(array, i, index);
        permutate(array, index + 1, callback);
        swap(array, i, index);
      }
      return callbackResult;
    }
  }

  if (!array || array.length == 0) {
    return 0;
  }
  return permutate(array, 0, callback);
}

function getPermutations(array) {
  const result = [];

  function addPermutationToResult(array) {
    result.push(array.slice());
  }

  function swap(array, firstIndex, secondIndex) {
    var tempValue = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = tempValue;
  }

  function permutate(array, index) {
    if (index == array.length - 1) {
      addPermutationToResult(array);
    } else {
      permutate(array, index + 1);
      for (var i = index + 1; i < array.length; i++) {
        swap(array, i, index);
        permutate(array, index + 1);
        swap(array, i, index);
      }
      return result;
    }
  }

  if (!array || array.length == 0) {
    return [];
  }

  return permutate(array, 0);
}

const result = [];
function callback(array) {
  result.push(array.slice(0));
}
getPermutationsWithCallback([1, 2, 3], callback);

console.group('run getPermutationsWithCallback');
console.log(result);
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
