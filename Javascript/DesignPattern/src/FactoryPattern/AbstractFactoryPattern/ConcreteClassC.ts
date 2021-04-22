import AbstractClassC from './AbstractClassC';

export default class ConcreteClassC implements AbstractClassC {
  constructor() {
    console.log('Concrete Class C is created.');
  }

  methodC(): void {
    console.log('method C');
  }
}
