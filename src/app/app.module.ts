import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DelayedInputModule } from './delayed-input/delayed-input.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DelayedInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
