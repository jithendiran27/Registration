import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DetailsDirective } from '../details.directive';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Subscription } from 'rxjs';
import { Obj } from '../obj';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  receivedData!: any;
  message: any;
  messages: any;

  constructor() {}

  public i = 0;
  currentDComponent: any = [];
  sub!: Subscription;
  public next(): void {
    if (this.i <= this.details.length) {
      this.i += 1;
      this.detailComponent(
        this.details[this.i].component,
        this.details[this.i]
      );
    } else {
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.detailComponent(this.details[this.i].component, this.details[this.i]);
  }

  details: Obj[] = [
    {
      name: 'Personal Details',
      isCompleted: false,
      isProgress: true,
      component: Detail1Component,
      data: [],
    },
    {
      name: 'Address Proof',
      isCompleted: false,
      isProgress: true,
      component: Detail2Component,
      data: [],
    },
    {
      name: 'Payment',
      isCompleted: false,
      isProgress: true,
      component: Detail3Component,
      data: [],
    },
  ];

  detailComponent(currentComponent: any, data: any) {
    // this.receivedData = '';
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.output.subscribe((results: any) => {
      this.receivedData = results;
      console.log(this.receivedData);
    });
  }

  receivedMessage($event: any) {
    this.message = $event;
    this.messages = this.message[0].name;
    console.log(this.message);
  }
}
