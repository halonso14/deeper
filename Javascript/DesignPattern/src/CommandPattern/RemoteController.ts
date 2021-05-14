import ICommand, { ActionType } from './ICommand';

export default class RemoteController {
  private command: ICommand;
  constructor(command: ICommand) {
    this.command = command;
  }

  public setDevice(newCommand: ICommand) {
    this.command = newCommand;
  }

  public pressButton(actionType: ActionType) {
    this.command.execute(actionType);
  }
}
