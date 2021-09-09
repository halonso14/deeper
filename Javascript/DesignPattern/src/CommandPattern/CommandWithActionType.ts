import { ActionType } from './types';

export default interface CommandWithActionType {
  turnOn(): void;

  turnOff(): void;

  volumeUp(): void;

  volumeDown(): void;

  execute(actionType: ActionType): void;
}
