import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    messageBehaviour = new BehaviorSubject<Object>({message:''});
    currentMessage= this.messageBehaviour.asObservable();

  constructor() { }
  changemessage(message:any){
    console.log("inside data service");
    console.log(message);
    this.messageBehaviour.next(message)
  }

}
