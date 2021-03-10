import CurrentConditionsDisplay from './class/CurrentConditionsDisplay';
import WeatherData from './class/WeatherData';
import DisplayElement from './interface/DisplayElement';
import Observer from './interface/Observer';
import Subject from './interface/Subject';

function example(): void {
    const weatherData: WeatherData = new WeatherData();

    const display1 = new CurrentConditionsDisplay(weatherData);
    const display2 = new CurrentConditionsDisplay(weatherData);
    const display3 = new CurrentConditionsDisplay(weatherData);

    console.log('display1 initialized.');
    display1.display();
    console.log('display2 initialized.');
    display2.display();
    console.log('display3 initialized.');
    display3.display();

    console.log('weather data updated.')
    weatherData.setMeasurements(50, 10, 900);
}

export { CurrentConditionsDisplay, WeatherData, DisplayElement, Observer, Subject, example };
