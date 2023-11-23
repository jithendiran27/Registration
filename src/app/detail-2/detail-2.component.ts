import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IBtnDetail } from '../ibtn-detail';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-detail-2',
  templateUrl: './detail-2.component.html',
  styleUrls: ['./detail-2.component.css'],
})
export class Detail2Component {
  @Input('data')
  data!: any;
  @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();

  btnDetail2: IBtnDetail[] = [
    {
      name: 'D2',
      key: 'nxt',
      data: [],
    },
  ];

  constructor(private mainComp: MainComponent) {}

  ngOnInit() {
    this.data.isCompleted = true;
  }

  sendData() {
    this.output.next(this.btnDetail2);
  }

  next() {
    if (this.data.isCompleted == true) {
      this.mainComp.next();
      this.sendData();
      this.btnClick.emit(this.btnDetail2);
      console.log(this.btnDetail2);
    } else {
      alert('please fill');
    }
  }
}
