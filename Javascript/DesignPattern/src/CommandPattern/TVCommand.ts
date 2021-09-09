/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
import Command from './Command';

class TVTurnOnCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  turnOn(): void {
    console.log('TV is turned on.');
  }

  public execute(): void {
    this.turnOn();
  }
}

class TVTurnOffCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  turnOff(): void {
    console.log('TV is turned off.');
  }

  public execute(): void {
    this.turnOff();
  }
}

class TVVolumeUpCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  volumeUP(): void {
    console.log('TV volume is increased.');
  }

  public execute(): void {
    this.volumeUP();
  }
}

class TVVolumeDownCommand implements Command {
  // eslint-disable-next-line class-methods-use-this
  volumeDown(): void {
    console.log('TV volume is decreased.');
  }

  public execute(): void {
    this.volumeDown();
  }
}

export {
  TVTurnOnCommand,
  TVTurnOffCommand,
  TVVolumeUpCommand,
  TVVolumeDownCommand,
};
