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

function solution(n, weak, dist) {
  let answer = dist.length;
  let rotateCount = 0;
  const sortedDist = mergeSort(dist);
  while(true) {
    if(rotateCount === weak.length) {
        break;
    }
    let count = 0;

    let index = 0;

    for(let i = sortedDist.length-1; i >= 0; i--) {
      let range = sortedDist[i];
      index = weak.findIndex((weakPoint) => range + weak[index] < weakPoint);
      count++;
      if(index === -1) {
        if(count < answer) {
          answer = count;
          count = 0
        }
        break;
      }
    }

    let fisrtWeak = weak.shift() + n;
    weak.push(fisrtWeak);
    rotateCount++;
  }
  // TODO validate case for -1
  return answer;
}

const n = 12;
const weak = [1, 5, 6, 10];
const dist = [4, 2, 3, 1];

console.log(solution(n, weak, dist));