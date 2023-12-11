import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DetailsDirective } from '../details.directive';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Obj } from '../obj';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent  {
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  receivedData: any[] = [];
  message: any;
  messages: any;

  constructor() {}

  public i = 0;
  public steps = this.i + 1;
  public next(): void {
    if (this.i <= this.details.length) {
      this.i += 1;
      this.detailComponent(
        this.details[this.i].component,
        this.details[this.i]
      );
    }
  }

  public back(): void {
    this.i -= 1;
    this.backDetailComponent(
      this.details[this.i].component,
      this.details[this.i]
    );
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
      name: 'Delivery Details',
      isCompleted: false,
      isProgress: true,
      component: Detail2Component,
      data: [],
    },
    {
      name: 'Payment Details',
      isCompleted: false,
      isProgress: true,
      component: Detail3Component,
      data: [],
    },
    {
      name: 'Submitted',
      isCompleted: false,
      isProgress: true,
      component: ThankYouComponent,
      data: [],
    },
  ];

  detailComponent(currentComponent: any, data: any) {
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.receivedData = this.details[this.i].data;
    componentRef.instance.output.subscribe((results: any) => {
      results = this.details[this.i - 1].data;
      console.log(this.details);
    });
  }

  backDetailComponent(currentComponent: any, data: any) {
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.receivedData = this.details[this.i].data;
    componentRef.instance.output.subscribe((results: any) => {
      results = this.details[this.i + 1].data;
      console.log(this.details);
    });
    console.log(this.details[this.i].data);
  }

  receivedMessage($event: any) {
    this.message = $event;
    this.messages = this.message[0].name;
    console.log(this.message);
  }
}
