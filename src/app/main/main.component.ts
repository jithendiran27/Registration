import {
  Component,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DetailsDirective } from '../details.directive';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Detail4Component } from '../detail-4/detail-4.component';
import { Detail5Component } from '../detail-5/detail-5.component';
import { Step1 } from '../step1';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  public detailComponents = [
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
  ];
  // detail: any = [];
  receivedData!: string;

  constructor(private dataService: DataService) {}

  public i = -1;
  currentDComponent: any = [];
  sub!: Subscription;
  public next(): void {
    if (this.i <= this.detailComponents.length) {
      this.i += 1;
      this.detailComponent(
        this.details[this.i].component,
        this.details[this.i].name
      );
    } else {
    }
  }

  ngOnInit() {}

  details: Step1[] = [
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

  detailComponent(currentComponent: any, data: string) {
    this.receivedData = '';
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.output.subscribe((results: string) => {
      this.receivedData = results;
      console.log(this.receivedData);
    });
  }
}
