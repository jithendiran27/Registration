import { Component, ViewChild } from '@angular/core';
import { StepsDirective } from '../steps.directive';
import { DetailsDirective } from '../details.directive';
import { Step1Component } from '../step-1/step-1.component';
import { Step2Component } from '../step-2/step-2.component';
import { Step3Component } from '../step-3/step-3.component';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Detail4Component } from '../detail-4/detail-4.component';
import { Detail5Component } from '../detail-5/detail-5.component';
import { Step1 } from '../step1';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @ViewChild(StepsDirective)
  appSteps!: StepsDirective;
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  public components = [
    Step1Component,
    Step1Component,
    Step1Component,
    Step1Component,
    Step1Component,
    Step2Component,
    Step3Component,
  ];
  public currentComponent = null;

  public detailComponents = [
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
  ];
  public currentDetailComponent = null;

  constructor() {}

  

  public i = -1;
  public j = -1;

  public next(): void {
    if (
      this.i <= this.components.length &&
      this.j <= this.detailComponents.length
    ) {
      this.i += 1;
      this.j += 1;
      this.stepsComponent();
      this.detailComponent();

      console.log(this.i);
      console.log(this.j);
    } else {
    }
  }

  stepsComponent() {
    const currentComponent = this.components[this.i];

    let viewContainerRef = this.appSteps.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(currentComponent);
  }

  detailComponent() {
    const currentDetailComponent = this.detailComponents[this.j];

    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();

    viewDetailContainerRef.createComponent(currentDetailComponent);
  }
}
