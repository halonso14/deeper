// eslint-disable-next-line no-shadow
enum BevarageSize {
  short = 0,
  tall = 1,
}

abstract class Beverage {
  description!: string;

  size!: BevarageSize;

  public getDescription(): string {
    return this.description;
  }

  public getSize(): BevarageSize {
    return this.size;
  }

  abstract cost(): number;
}

export default Beverage;
