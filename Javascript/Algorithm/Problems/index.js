// REFERNECE https://stackoverflow.com/questions/64449464/error-err-unsupported-dir-import-directory-import-when-attempting-to-start-no
import { blind20201, blind20204, blind20206 } from './kakao';
import problem1 from './programmers';

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
      default:
        param = [5, 12];
        problem1(...param);
        break;
    }
    break;
}
