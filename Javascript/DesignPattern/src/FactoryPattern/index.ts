import AbstractFactory from './AbstractFactoryPattern/AbstractFactory';
import ConcreteFactoryA from './AbstractFactoryPattern/ConcreteFactoryA';
import ConcreteFactoryB from './AbstractFactoryPattern/ConcreteFactoryB';

console.log('Client only knows interfaces.');
console.log(
  'Creating object with given abstract class / interface loosens coupling between classes.'
);
console.log('Factory creates classes without knowing the result.');

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
