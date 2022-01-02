import Proxy from './class/Proxy';
import RealSubject from './class/RealSubject';
import ISubject from './interface/ISubject';

function clientCode(subject: ISubject) {
  subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);
