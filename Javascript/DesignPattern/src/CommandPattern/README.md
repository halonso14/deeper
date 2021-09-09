# Command Pattern
## definition 
 - Command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an evnet at a later time.

 - The information includes the method name, the object that owns the method and values for the method parameters.

---

## classes
### Invoker
 - requests to execute command.
### Receiver
 - receives invoked commands then triggers execution.
### Command Interface
 - interface for command.
```
abstract class Command {
  abstract execute(): void;
}

class ConcreteCommand extends {
  doSomething(): void {
    console.log('do something');
  }

  execute(): void {
    this.doSomething();
  };
}
```

 - interface for command with parameter is actually a strategy pattern.
 - referene https://stackoverflow.com/questions/4834979/difference-between-strategy-pattern-and-command-pattern
```
abstract class Command {
  abstract doA(): void;
  abstract doB(): void;
  abstract doC(): void;
  abstract doB(): void;
  abstract execute(actionType: ActionType): void;
}
```
### Command
 - concrete command.

---

## what I have learned
 - interface for execution is pre-defined.
 - should interface for methods like turnOn(), volumeUp(), ... be pre-defined?
   - if command interface never changes, methods can be pre-defined.
   - else, any changes should be minimized.
 - the command pattern does some action over the object.
 - the strategy pattern decide how to process the object.
