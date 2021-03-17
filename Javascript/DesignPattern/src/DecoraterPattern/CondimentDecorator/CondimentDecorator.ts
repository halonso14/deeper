import Beverage from '../Beverage/Beverage';

abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
}

export default CondimentDecorator;
