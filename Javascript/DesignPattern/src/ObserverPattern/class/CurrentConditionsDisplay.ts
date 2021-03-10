import DisplayElement from '../interface/DisplayElement';
import Observer from '../interface/Observer';
import Subject from '../interface/Subject';
import {
  DEFAULT_HUMIDITY,
  DEFAULT_PRESSURE,
  DEFAULT_TEMPERATURE,
} from '../types';

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private _subject: Subject;

  private _temperature: number = DEFAULT_TEMPERATURE;

  private _humidity: number = DEFAULT_HUMIDITY;

  private _pressure: number = DEFAULT_PRESSURE;

  constructor(weatherData: Subject) {
    this._subject = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.display();
  }

  public display(): void {
    /* eslint-disable no-console */
    console.log(
      `Current conditions: ${this._temperature} F degress and ${this._humidity} % humidity and ${this._pressure} hPa`
    );
  }
}

export default CurrentConditionsDisplay;
