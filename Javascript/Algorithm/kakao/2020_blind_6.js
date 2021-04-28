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

function reverseArray(array) {
  const reversedArray = [];
  const max = array[array.length - 1];
  for (let i = array.length - 1; i > 0; i--) {
    reversedArray.push(max - array[i]);
  }
  return reversedArray;
}

function solve(n, weak, dist) {
  console.log('dist', dist);
  let answer = 9999;
  let rotateCount = 0;
  while (true) {
    console.log('weak', weak);
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
          console.log('current answer', answer);
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
  const reversedWeak = reverseArray(weak);
  console.log('clock-wise');
  const result1 = solve(n, weak, sortedDist);
  console.log('');
  console.log('counter clock-wise');
  const result2 = solve(n, reversedWeak, sortedDist);
  const answer = result1 < result2 ? result1 : result2;
  if (answer === 9999) {
    return -1;
  }
  return answer;
}

const n = 200;
const weak = [0, 10, 50, 80, 120, 160];
const dist = [1, 10, 5, 40, 30];

console.log(solution(n, weak, dist));
