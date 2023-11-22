import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Step1 } from '../step1';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { IBtnDetail } from '../details.directive';

@Component({
  selector: 'app-detail-1',
  templateUrl: './detail-1.component.html',
  styleUrls: ['./detail-1.component.css'],
})
export class Detail1Component implements OnInit {
  @Input('data')
  data!: string;
  @Output() btnClick = new EventEmitter<IBtnDetail>();
  private output = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.sendData();
  }

  sendData() {
    this.output.next('Sent data from Detail1');
  }
}
