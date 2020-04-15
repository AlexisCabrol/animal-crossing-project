import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {

  private messageHandler: BehaviorSubject<string>;

  constructor() {
    this.messageHandler = new BehaviorSubject<string>(null);
  }

  setMessageHandler(message: string) {
    this.messageHandler.next(message);
  }

  getMessageHandler(): Observable<string> {
    return this.messageHandler.asObservable();
  }

  getValueMessageHandler(): string {
    return this.messageHandler.getValue();
  }

  clearMessageHandler() {
    this.messageHandler.next(null);
  }


}
