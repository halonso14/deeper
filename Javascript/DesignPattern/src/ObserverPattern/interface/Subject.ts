import Observer from './Observer';

interface Subject {
    observers: Array<Observer>;
    registerObserver(observer: Observer):void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
}

export default Subject;