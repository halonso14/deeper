// code from - https://www.zerocho.com/category/Algorithm/post/57ee1fc107c0b40015045cb4

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  const pivot = Math.floor(array.length / 2);
  const left = array.slice(0, pivot);
  const right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

const inputArray = [8, 7, 6, 5, 4, 3, 2, 1];
console.log('input:', inputArray);
const result = mergeSort(inputArray);
console.log('result:', result);
