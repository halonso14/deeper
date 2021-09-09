import {
  AudioTurnOnCommand,
  AudioTurnOffCommand,
  AudioVolumeUpCommand,
  AudioVolumeDownCommand,
} from './AudioCommand';
import {
  TVTurnOnCommand,
  TVTurnOffCommand,
  TVVolumeUpCommand,
  TVVolumeDownCommand,
} from './TVCommand';
import RemoteController from './RemoteController';
import { ActionType } from './types';
import TVCommandWithActionType from './TVCommandWithActionType';
import AudioCommandWithActionType from './AudioCommandWithActionType';
import RemoteControllerWithActionType from './RemoteControllerWithActionType';

const testForCommand = () => {
  console.group('Test command.');
  const audioTurnOnCommand = new AudioTurnOnCommand();
  const audioTurnOffCommand = new AudioTurnOffCommand();
  const audioVolumeUpCommand = new AudioVolumeUpCommand();
  const audioVolumeDownCommand = new AudioVolumeDownCommand();

  const tvTurnOnCommand = new TVTurnOnCommand();
  const tvTurnOffCommand = new TVTurnOffCommand();
  const tvVolumeUpCommand = new TVVolumeUpCommand();
  const tvVolumeDownCommand = new TVVolumeDownCommand();

  const remoteController = new RemoteController(audioTurnOnCommand);

  console.group('Remote controller controls Audio.');
  // remoteController.setDevice(audioTurnOnCommand);
  remoteController.pressButton();
  remoteController.setDevice(audioTurnOffCommand);
  remoteController.pressButton();
  remoteController.setDevice(audioVolumeUpCommand);
  remoteController.pressButton();
  remoteController.setDevice(audioVolumeDownCommand);
  remoteController.pressButton();
  console.groupEnd();

  console.group('Remote controller controls TV.');
  remoteController.setDevice(tvTurnOnCommand);
  remoteController.pressButton();
  remoteController.setDevice(tvTurnOffCommand);
  remoteController.pressButton();
  remoteController.setDevice(tvVolumeUpCommand);
  remoteController.pressButton();
  remoteController.setDevice(tvVolumeDownCommand);
  remoteController.pressButton();
  console.groupEnd();
  console.groupEnd();
};

const testForCommandWithActionType = () => {
  console.group('Test command with ActionType.');
  const tvCommand = new TVCommandWithActionType();
  const audioCommand = new AudioCommandWithActionType();
  const remoteController = new RemoteControllerWithActionType(tvCommand);

  console.group('Remote controller controls TV with ActionType.');
  remoteController.pressButton(ActionType.TURN_ON);
  remoteController.pressButton(ActionType.VOLUME_UP);
  remoteController.pressButton(ActionType.VOLUME_DOWN);
  remoteController.pressButton(ActionType.TURN_OFF);
  console.groupEnd();

  console.group('Remote controller controls Audio with ActionType.');
  remoteController.setDevice(audioCommand);
  remoteController.pressButton(ActionType.TURN_ON);
  remoteController.pressButton(ActionType.VOLUME_UP);
  remoteController.pressButton(ActionType.VOLUME_DOWN);
  remoteController.pressButton(ActionType.TURN_OFF);
  console.groupEnd();
  console.groupEnd();
};

testForCommand();
testForCommandWithActionType();
