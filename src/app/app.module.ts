import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalOutPutComponent } from './cal-out-put/cal-out-put.component';
import { CalInputComponent } from './cal-input/cal-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CalOutPutComponent,
    CalInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
