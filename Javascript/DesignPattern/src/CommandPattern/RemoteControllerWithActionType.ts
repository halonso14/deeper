import CommandWithActionType from './CommandWithActionType';
import { ActionType } from './types';

export default class RemoteControllerWithActionType {
  private command: CommandWithActionType;

  constructor(command: CommandWithActionType) {
    this.command = command;
  }

  public setDevice(newCommand: CommandWithActionType): void {
    this.command = newCommand;
  }

  public pressButton(actionType: ActionType): void {
    this.command.execute(actionType);
  }
}
