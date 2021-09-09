/* eslint-disable no-console */
import CommandWithActionType from './CommandWithActionType';
import { ActionType } from './types';

export default class TVCommandWithActionType implements CommandWithActionType {
  // eslint-disable-next-line class-methods-use-this
  turnOn(): void {
    console.log('TV is turned on.');
  }

  // eslint-disable-next-line class-methods-use-this
  turnOff(): void {
    console.log('TV is turned off.');
  }

  // eslint-disable-next-line class-methods-use-this
  volumeUp(): void {
    console.log('TV volume is increased.');
  }

  // eslint-disable-next-line class-methods-use-this
  volumeDown(): void {
    console.log('TV volume is decreased.');
  }

  public execute(actionType: ActionType): void {
    switch (actionType) {
      case ActionType.TURN_ON:
        this.turnOn();
        break;
      case ActionType.TURN_OFF:
        this.turnOff();
        break;
      case ActionType.VOLUME_UP:
        this.volumeUp();
        break;
      case ActionType.VOLUME_DOWN:
        this.volumeDown();
        break;
      default:
        break;
    }
  }
}
