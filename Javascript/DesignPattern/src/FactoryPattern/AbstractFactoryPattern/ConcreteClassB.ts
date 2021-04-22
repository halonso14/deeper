import AbstractClassB from './AbstractClassB';

export default class ConcreteClassB implements AbstractClassB {
  constructor() {
    console.log('Concrete Class B is created.');
  }

  methodB(): void {
    console.log('method B');
  }
}
