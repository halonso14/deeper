import Command, { ActionType } from './Command';

export default class RemoteController {
  private command: Command;
  constructor(command: Command) {
    this.command = command;
  }

  public setDevice(newCommand: Command) {
    this.command = newCommand;
  }

  public pressButton(actionType: ActionType) {
    this.command.execute(actionType);
  }
}
