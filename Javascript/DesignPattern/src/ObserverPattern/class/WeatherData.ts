import Observer from '../interface/Observer';
import Subject from '../interface/Subject';
import { DEFAULT_HUMIDITY, DEFAULT_PRESSURE, DEFAULT_TEMPERATURE } from '../types';

class WeatherData implements Subject {
    private _observers: Array<Observer> = [];
    private _temperature: number = DEFAULT_TEMPERATURE;
    private _humidity: number = DEFAULT_HUMIDITY;
    private _pressure: number = DEFAULT_PRESSURE;

    constructor() {
        this.observers = new Array();
    }

    get observers(): Array<Observer> {
        return this._observers;
    };

    set observers(observers: Array<Observer>) {
        this._observers = observers;
    };

    get temperature(): number {
        return this._temperature;
    };

    set temperature(temperature: number) {
        this._temperature = temperature;
    };
    
    get humidity(): number {
        return this._humidity;
    };

    set humidity(humidity: number) {
        this._humidity = humidity;
    };

    get pressure(): number {
        return this._pressure;
    };

    set pressure(pressure: number) {
        this._pressure = pressure;
    };

    public registerObserver(observer: Observer) {
        this.observers.push(observer);
    };

    public removeObserver(observer: Observer) {
        this.observers.filter((currentObserver: Observer) => currentObserver != observer);
    };

    public notifyObserver() {
        this.observers.forEach((currentObserver: Observer) => {
            currentObserver.update(this.temperature, this.humidity, this.pressure);
        });

    };

    public measurementsChanged() {
        this.notifyObserver();
    };

    public setMeasurements(temperature: number, humidity: number, pressure: number):void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

};

export default WeatherData;