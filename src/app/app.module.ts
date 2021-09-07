import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {MessageComponent} from "./components/message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MessageComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
