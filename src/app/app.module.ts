import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { DetailsDirective } from './details.directive';
import { Detail1Component } from './detail-1/detail-1.component';
import { Detail2Component } from './detail-2/detail-2.component';
import { Detail3Component } from './detail-3/detail-3.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    DetailsDirective,
    Detail1Component,
    Detail2Component,
    Detail3Component,
    MainComponent,
    ThankYouComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
