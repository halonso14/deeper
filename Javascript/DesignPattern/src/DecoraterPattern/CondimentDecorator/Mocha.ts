import Beverage from '../Beverage/Beverage';
import CondimentDecorator from './CondimentDecorator';

class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, mocha`;
  }

  public cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

export default Mocha;
