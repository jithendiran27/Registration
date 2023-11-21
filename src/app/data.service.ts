import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private nameSource = new BehaviorSubject("");
  // name = this.nameSource.asObservable()
  // private bookList = new BehaviorSubject('');
  // currentBookList = this.bookList.asObservable();
  // send_data = new Subject<any>();

  @Output() send_data = new EventEmitter<any>();

  constructor() {}

  // changeBookList(bookList: any) {
  //   this.bookList.next(bookList);
  // }

  // changeName(name: any) {
  //   this.nameSource.next(name);
  // }
}
