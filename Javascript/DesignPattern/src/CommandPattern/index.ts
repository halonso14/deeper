import AudioCommand from './AudioCommand';
import TVCommand from './TVCommand';
import RemoteController from './RemoteController';
import { ActionType } from './ICommand';

const sampleScript_1 = () => {
  const tvCommand = new TVCommand();
  const audioCommand = new AudioCommand();
  const remoteController = new RemoteController(tvCommand);

  console.group('Remote controller controls TV.');
  remoteController.pressButton(ActionType.TURN_ON);
  remoteController.pressButton(ActionType.VOLUME_UP);
  remoteController.pressButton(ActionType.VOLUME_DOWN);
  remoteController.pressButton(ActionType.TURN_OFF);
  console.groupEnd();

  console.group('Remote controller controls Audio.');
  remoteController.setDevice(audioCommand);
  remoteController.pressButton(ActionType.TURN_ON);
  remoteController.pressButton(ActionType.VOLUME_UP);
  remoteController.pressButton(ActionType.VOLUME_DOWN);
  remoteController.pressButton(ActionType.TURN_OFF);
  console.groupEnd();
}

sampleScript_1();
