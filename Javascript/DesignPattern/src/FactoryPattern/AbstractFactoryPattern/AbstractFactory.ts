import AbstractClassA from './AbstractClassA';
import AbstractClassB from './AbstractClassB';
import AbstractClassC from './AbstractClassC';

export default abstract class AbstractFactory {
  abstract createClassA(): AbstractClassA;
  abstract createClassB(): AbstractClassB;
  abstract createClassC(): AbstractClassC;
}
