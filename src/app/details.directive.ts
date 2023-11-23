import { Directive, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { IBtnDetail } from './ibtn-detail';

@Directive({
  selector: '[appDetails]',
})
export class DetailsDirective {
  @Output() btnClick = new EventEmitter<IBtnDetail>();
  constructor(public viewContainerRef: ViewContainerRef) {}
  
  ngOnChanges(){
    
  }
}

