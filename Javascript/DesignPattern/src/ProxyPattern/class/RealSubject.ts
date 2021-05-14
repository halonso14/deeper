import ISubject from '../interface/ISubject';

export default class RealSubject implements ISubject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}
