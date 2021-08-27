// REFERNECE https://stackoverflow.com/questions/64449464/error-err-unsupported-dir-import-directory-import-when-attempting-to-start-no
import { blind20201, blind20204, blind20206 } from './kakao';
import {
  problem1,
  problem2,
  problem3,
  problem4,
  problem5,
} from './programmers';

console.log(`argv: ${process.argv}`);
if (process.argv.length !== 4) {
  console.log(`${process.argv[1]} <source> <problem>`);
}

const source = process.argv[2];
const problem = process.argv[3];

let param;
switch (source) {
  case 'kakao':
    switch (problem) {
      case 'blind20201':
        param = ['21212152323'];
        blind20201(...param);
        break;
      case 'blind20204':
        param = [
          ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'],
          ['fro??', '????o', 'fr???', 'fro???', 'pro?', '?????'],
        ];
        blind20204(...param);
        break;
      case 'blind20206':
      default:
        param = [240, [0, 40, 90, 100, 150, 180], [10, 30, 40]];
        blind20206(...param);
        break;
    }
    break;
  case 'programmers':
  default:
    switch (problem) {
      case 'problem1':
        param = [5, 12];
        problem1(...param);
        break;
      case 'problem2':
        param = [['1110110111001']];
        problem2(...param);
        break;
      case 'problem3':
        param = [
          ['classic', 'pop', 'classic', 'classic', 'pop'],
          [500, 600, 150, 800, 2500],
        ];
        problem3(...param);
        break;
      case 'problem4':
        param = [7];
        problem4(...param);
        break;
      case 'problem5':
      default:
        param = [18, [4, 9], 2];
        problem5(...param);
        break;
    }
    break;
}
