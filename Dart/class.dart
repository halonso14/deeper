void main() {
  Cat mini = Cat('mini', 4);
  mini.makeNoise();

  Animal pig = Animal.animalFactory('piggy', 'Pig', 4);
  print('${pig.type} ${pig.name} with ${pig.leg} legs is born from animalFactory.');
}

class Animal {
  String name, type;
  int leg;

  Animal(this.name, this.type, this.leg) {
    print('${this.type} ${this.name} with ${this.leg} legs is born.');
  }

  factory Animal.animalFactory(String name, String type, int leg) {
    return Animal(name, type, leg);
  }
}

class Cat extends Animal {
  Cat(String name, int leg) : super(name, 'Cat', leg);

  void makeNoise() {
    print('${this.type} ${this.name} is crying - purrr!');
  }
}