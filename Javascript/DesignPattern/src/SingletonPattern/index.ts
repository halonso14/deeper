import ChocolateBoiler from './class/ChocolateBoiler';

console.group('Create new instance');
ChocolateBoiler.getInstanceWithThis();
console.groupEnd();

console.group('Load created instance');
ChocolateBoiler.getInstance();
console.groupEnd();
