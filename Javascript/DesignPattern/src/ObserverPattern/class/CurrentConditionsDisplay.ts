import DisplayElement from '../interface/DisplayElement';
import Observer from '../interface/Observer';
import Subject from '../interface/Subject';
import { DEFAULT_HUMIDITY, DEFAULT_TEMPERATURE } from '../types';

class CurrentConditionsDisplay implements Observer, DisplayElement {
    private _subject: Subject;
    private _temperature: number = DEFAULT_TEMPERATURE;
    private _humidity: number = DEFAULT_HUMIDITY;

    constructor(weatherData: Subject) {
        this._subject = weatherData;
    };

    get subject(): Subject {
        return this._subject;
    };

    set subject(subject: Subject) {
        this._subject = subject;
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

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };

    public display(): void {
        console.log(`Current conditions: ${this.temperature} F degress and ${this.humidity} % humidity`)
    }
}

export default CurrentConditionsDisplay;