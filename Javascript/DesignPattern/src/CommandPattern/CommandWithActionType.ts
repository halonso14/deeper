import { ActionType } from './types';

export default abstract class CommandWithActionType {
  abstract turnOn(): void;

  abstract turnOff(): void;

  abstract volumeUp(): void;

  abstract volumeDown(): void;

  abstract execute(actionType: ActionType): void;
}
