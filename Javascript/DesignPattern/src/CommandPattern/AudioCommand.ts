import ICommand, { ActionType } from './ICommand';

export default class AudioCommand implements ICommand {
  private turnOn(): void {
    console.log('Audio is turned on.');
  }

  private turnOff(): void {
    console.log('Audio is turned off.');
  }

  private volumeUp(): void {
    console.log('Audio volume is increased.');
  }

  private volumeDown(): void {
    console.log('Audio volume is decreased.');
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
