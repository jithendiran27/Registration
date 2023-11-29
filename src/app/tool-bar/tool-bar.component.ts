import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent {
  @Input() currentStep = 1 + 0;
  // currentStep!: number ;
  steps!: string;

  s = this.currentStep + 1;

  ngOnInit() {
    this.step();
  }
  step() {
    if (this.currentStep <= 2) {
      this.steps = `Step 1`;
    } else {
      this.steps = '';
    }
  }
}
