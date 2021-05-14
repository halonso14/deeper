export enum ActionType {
  TURN_ON,
  TURN_OFF,
  VOLUME_UP,
  VOLUME_DOWN,
}

export default abstract class Command {
  abstract turnOn(): void;
  abstract turnOff(): void;
  abstract volumeUp(): void;
  abstract volumeDown(): void;
  abstract execute(actionType: ActionType): void;
}
