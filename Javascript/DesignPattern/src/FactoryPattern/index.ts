import AbstractFactory from './AbstractFactoryPattern/AbstractFactory';
import ConcreteFactoryA from './AbstractFactoryPattern/ConcreteFactoryA';
import ConcreteFactoryB from './AbstractFactoryPattern/ConcreteFactoryB';

const clientCode = (factory: AbstractFactory) => {
  const classA = factory.createClassA();
  const classB = factory.createClassB();
  const classC = factory.createClassC();

  classA.methodA();
  classB.methodB();
  classC.methodC();
};

console.group('Call Concrete Factory A.');
clientCode(new ConcreteFactoryA());
console.groupEnd();

console.group('Call Concrete Factory B.');
clientCode(new ConcreteFactoryB());
console.groupEnd();
