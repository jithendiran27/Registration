import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Step1 } from '../step1';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-1',
  templateUrl: './detail-1.component.html',
  styleUrls: ['./detail-1.component.css'],
})
export class Detail1Component implements OnInit {
  // @Output() detail = new EventEmitter<{ name: string }>();

  constructor(private dataService: DataService) {}
  // ngOnInit() {}

  ngOnInit() {
    this.sendData()
  }
  detail1: Step1[] = [
    {
      name: 'hi',
      isCompleted: false,
      isProgress: true,
      component: [Detail1Component],
    },
  ];

  sendData() {
    this.dataService.send_data.next(this.detail1);
  }
}
