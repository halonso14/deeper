/* eslint-disable no-console */
// eslint-disable-next-line max-classes-per-file
import Command from './Command';

class AudioTurnOnCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  turnOn(): void {
    console.log('Audio is turned on.');
  }

  public execute(): void {
    this.turnOn();
  }
}

class AudioTurnOffCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  turnOff(): void {
    console.log('Audio is turned off.');
  }

  public execute(): void {
    this.turnOff();
  }
}

class AudioVolumeUpCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  volumeUp(): void {
    console.log('Audio volume is increased.');
  }

  public execute(): void {
    this.volumeUp();
  }
}

class AudioVolumeDownCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  volumeDown(): void {
    console.log('Audio volume is decreased.');
  }

  public execute(): void {
    this.volumeDown();
  }
}

export {
  AudioTurnOnCommand,
  AudioTurnOffCommand,
  AudioVolumeUpCommand,
  AudioVolumeDownCommand,
};
