import { Directive, Input, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDetails]',
})
export class DetailsDirective {
  // @Input() nextclicking:any
  constructor(public viewContainerRef: ViewContainerRef) {}
  
  ngOnChanges(){
    
  }
}
