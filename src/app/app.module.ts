import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { Step1Component } from './step-1/step-1.component';
import { Step2Component } from './step-2/step-2.component';
import { Step3Component } from './step-3/step-3.component';
import { StepsDirective } from './steps.directive';
import { DetailsDirective } from './details.directive';
import { Detail1Component } from './detail-1/detail-1.component';
import { Detail2Component } from './detail-2/detail-2.component';
import { Detail3Component } from './detail-3/detail-3.component';
import { Detail4Component } from './detail-4/detail-4.component';
import { Detail5Component } from './detail-5/detail-5.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    StepsDirective,
    DetailsDirective,
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
