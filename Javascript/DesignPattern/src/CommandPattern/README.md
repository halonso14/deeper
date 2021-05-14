# Command Pattern
## classes
### Invoker
 - requests to execute command.
### Receiver
 - receives invoked commands then triggers execution.
### Command Interface
 - interface for command.
### Command
 - concrete command.

# what I have learned
 - interface for execution is pre-defined.
 - should be interface for methods like turnOn(), volumeUp(), ... pre-defined?
   - if command interface never changes, methods can be pre-defined.
   - else, any changes should be minimized.
