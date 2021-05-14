export enum ActionType {
  TURN_ON,
  TURN_OFF,
  VOLUME_UP,
  VOLUME_DOWN,
}

export default interface ICommand {
  execute(actionType: ActionType): void;
}
