import Subject from '../interface/Subject';

export default class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}
