import AbstractClassA from './AbstractClassA';

export default class ConcreteClassA implements AbstractClassA {
  constructor() {
    console.log('Concrete Class A is created.');
  }

  methodA(): void {
    console.log('method A');
    return;
  }
}
