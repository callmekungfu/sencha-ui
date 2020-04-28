import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenchaButtonModule } from 'sencha-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SenchaButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
