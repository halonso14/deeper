import Observer from './Observer';

interface Subject {
    registerObserver(observer: Observer):void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
}

export default Subject;