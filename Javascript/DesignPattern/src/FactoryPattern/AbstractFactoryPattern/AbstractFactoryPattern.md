# Reference - [Link](https://refactoring.guru/design-patterns/abstract-factory/typescript/example)

# Abstract Factory
 - Abstract Factory defines how to create instances of classes with method, knowing only the interface of that method.

# Concrete Factory
 - Concrete Factory decides the type of instance to create.

# Classes' instance
 - TBD

# Factory User(Client Code)
- Concrete Factory is provided to Factory User.(Dependency Injection)
  - Factory User has dependency on Factory.
  - Factory is provided to Factory User
  - Dependency on Factory has been injectd to Factory User
- Factory User knows the Abstract Factory and Abstract Class.
  - coupling between Factory and Factory User is weak.
