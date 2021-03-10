import Observer from '../interface/Observer';
import Subject from '../interface/Subject';
import {
  DEFAULT_HUMIDITY,
  DEFAULT_PRESSURE,
  DEFAULT_TEMPERATURE,
} from '../types';

class WeatherData implements Subject {
  private _observers: Array<Observer> = [];

  private _temperature: number = DEFAULT_TEMPERATURE;

  private _humidity: number = DEFAULT_HUMIDITY;

  private _pressure: number = DEFAULT_PRESSURE;

  constructor() {
    this._observers = [];
  }

  public registerObserver(observer: Observer): void {
    this._observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this._observers.filter(
      (currentObserver: Observer) => currentObserver !== observer
    );
  }

  public notifyObserver(): void {
    this._observers.forEach((currentObserver: Observer) => {
      currentObserver.update(this._temperature, this._humidity, this._pressure);
    });
  }

  public measurementsChanged(): void {
    this.notifyObserver();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }
}

export default WeatherData;
