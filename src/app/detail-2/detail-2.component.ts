import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IBtnDetail } from '../details.directive';

@Component({
  selector: 'app-detail-2',
  templateUrl: './detail-2.component.html',
  styleUrls: ['./detail-2.component.css'],
})
export class Detail2Component {
  @Input('data')
  data!: string;
  @Output() btnClick = new EventEmitter<IBtnDetail>();
  private output = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.sendData();
  }

  sendData() {
    this.output.next('Sent data from Tab2');
  }
}
