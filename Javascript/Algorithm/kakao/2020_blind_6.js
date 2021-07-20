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

function reverseWeak(array) {
  const reversedArray = [];
  const max = array[array.length - 1];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(max - array[i]);
  }
  return reversedArray;
}

function solve(n, weak, dist) {
  let answer = 9999;
  let rotateCount = 0;
  while (true) {
    if (rotateCount === weak.length) {
      break;
    }
    let count = 0;
    let index = 0;

    for (let i = 0; i < dist.length; i++) {
      let range = dist[i];
      index = weak.findIndex((weakPoint) => range + weak[index] < weakPoint);
      count++;
      if (index === -1) {
        if (count < answer) {
          answer = count;
          count = 0;
        }
        break;
      }
    }

    let fisrtWeak = weak.shift() + n;
    weak.push(fisrtWeak);
    rotateCount++;
  }
  return answer;
}

function solution(n, weak, dist) {
  const sortedDist = mergeSort(dist).reverse();
  const reversedWeak = reverseWeak(weak);
  const result1 = solve(n, weak, sortedDist);
  const result2 = solve(n, reversedWeak, sortedDist);
  const answer = result1 <= result2 ? result1 : result2;
  if (answer === 9999) {
    return -1;
  }
  return answer;
}

const n = 240;
const weak = [0, 40, 90, 100, 150, 180];
const dist = [10, 30, 40];

console.log(solution(n, weak, dist));
