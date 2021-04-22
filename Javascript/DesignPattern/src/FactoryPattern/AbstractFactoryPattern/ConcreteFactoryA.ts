import AbstractClassA from './AbstractClassA';
import AbstractClassB from './AbstractClassB';
import AbstractClassC from './AbstractClassC';
import AbstractFactory from './AbstractFactory';
import ConcreteClassA from './ConcreteClassA';
import ConcreteClassB from './ConcreteClassB';
import ConcreteClassC from './ConcreteClassC';

export default class ConcreteFactoryA implements AbstractFactory {
  createClassA(): AbstractClassA {
    console.log('create class A from Concrete Factory A');
    return new ConcreteClassA();
  }

  createClassB(): AbstractClassB {
    console.log('create class B from Concrete Factory A');
    return new ConcreteClassB();
  }

  createClassC(): AbstractClassC {
    console.log('create class C from Concrete Factory A');
    return new ConcreteClassC();
  }
}
