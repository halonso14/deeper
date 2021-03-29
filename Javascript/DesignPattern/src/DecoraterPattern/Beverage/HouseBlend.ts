import Beverage from './Beverage';

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend';
  }

  cost(): number {
    return 1.99;
  }
}
