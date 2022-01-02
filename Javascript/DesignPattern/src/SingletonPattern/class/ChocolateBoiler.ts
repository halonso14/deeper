/* eslint-disable no-console */
export default class ChocolateBoiler {
  private static _instance: ChocolateBoiler;

  private empty: boolean;

  private boiled: boolean;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  static getInstance(): ChocolateBoiler {
    if (ChocolateBoiler._instance) {
      console.log('Chocolate Instance exists.');
      return ChocolateBoiler._instance;
    }
    console.log('Chocolate Instance does not exist.');
    ChocolateBoiler._instance = new ChocolateBoiler();
    return ChocolateBoiler._instance;
  }

  static getInstanceWithThis(): ChocolateBoiler {
    if (this._instance) {
      console.log('Chocolate Instance exists.');
      return this._instance;
    }
    console.log('Chocolate Instance does not exist.');
    this._instance = new this();
    return this._instance;
  }

  public isBoiled(): boolean {
    console.log('Is ChocolateBoiler boiled?', this.boiled);
    return this.boiled;
  }

  public isEmpty(): boolean {
    console.log('Is ChocolateBoiler empty?', this.empty);
    return this.empty;
  }

  public fill(): void {
    if (this.isEmpty()) {
      console.log('ChocolateBoiler is filled with ingredients.');
      this.empty = false;
      this.boiled = false;
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      console.log('Drain boiled ingredients.');
      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      console.log('Boil ingredients.');
      this.boiled = true;
    }
  }
}
