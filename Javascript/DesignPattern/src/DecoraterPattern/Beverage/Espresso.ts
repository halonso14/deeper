/* eslint-disable class-methods-use-this */
import Beverage from './Beverage';

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost(): number {
    return 1.99;
  }
}

export default Espresso;
