import Command, { ActionType } from './Command';

export default class TVCommand implements Command {
  turnOn(): void {
    console.log('TV is turned on.');
  }

  turnOff(): void {
    console.log('TV is turned off.');
  }

  volumeUp(): void {
    console.log('TV volume is increased.');
  }

  volumeDown(): void {
    console.log('TV volume is decreased.');
  }

  public execute(actionType: ActionType) {
    switch(actionType) {
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
