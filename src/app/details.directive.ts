import { Directive, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDetails]',
})
export class DetailsDirective {
  // @Input() nextclicking:any
  @Output() btnClick = new EventEmitter<IBtnDetail>();
  constructor(public viewContainerRef: ViewContainerRef) {}
  
  ngOnChanges(){
    
  }
}

export interface IBtnDetail {
  name: string;
  key: string;
  data: any;
}