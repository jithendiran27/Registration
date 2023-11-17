import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private nameSource = new BehaviorSubject("");
  // name = this.nameSource.asObservable()

  send_data = new Subject<any>();
  
  constructor() { }

  // changeName(name: any) {
  //   this.nameSource.next(name);
  // }
}
