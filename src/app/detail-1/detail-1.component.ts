import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IBtnDetail } from '../ibtn-detail';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-detail-1',
  templateUrl: './detail-1.component.html',
  styleUrls: ['./detail-1.component.css'],
})
export class Detail1Component implements OnInit {
  @Input('data')
  data!: any;
  @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();

  constructor(private mainComp: MainComponent) {}

  btnDetail1: IBtnDetail[] = [
    {
      name: 'D1',
      key: 'nxt',
      data: [],
    },
  ];

  ngOnInit() {
    this.data.isCompleted = true;
  }

  sendData() {
    this.output.next(this.btnDetail1);
  }

  next() {
    if (this.data.isCompleted == true) {
      this.mainComp.next();
      this.sendData();
      this.btnClick.emit(this.btnDetail1);
      console.log(this.btnDetail1);
    } else {
      alert('please fill');
    }
  }
}
