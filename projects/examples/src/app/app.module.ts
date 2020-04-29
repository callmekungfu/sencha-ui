import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenchaButtonModule, SenchaContainerModule } from 'sencha-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SenchaButtonModule,
    SenchaContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
