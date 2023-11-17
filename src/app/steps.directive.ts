import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSteps]'
})
export class StepsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
