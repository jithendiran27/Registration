import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { IBtnDetail } from '../ibtn-detail';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-3',
  templateUrl: './detail-3.component.html',
  styleUrls: ['./detail-3.component.css'],
})
export class Detail3Component {
  @Input('data')
  data!: any;
  @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();

  btnDetail3: IBtnDetail[] = [
    {
      name: 'D3',
      key: 'nxt',
      data: [],
    },
  ];

  constructor(private mainComp: MainComponent) {}

  ngOnInit() {
    this.data.isCompleted = true;
  }

  sendData() {
    this.output.next(this.btnDetail3);
  }

  submit() {
    if (this.data.isCompleted == true) {
      // this.mainComp.next();
      this.sendData();
      this.btnClick.emit(this.btnDetail3);
      console.log(this.btnDetail3);
    } else {
      alert('please fill');
    }
  }
}
