import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SenchaButtonModule,
  SenchaContainerModule,
  SenchaRowModule,
  SenchaColumnModule,
  SenchaTypographyModule,
  SenchaInputModule,
} from 'sencha-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SenchaButtonModule,
    SenchaContainerModule,
    SenchaRowModule,
    SenchaColumnModule,
    SenchaTypographyModule,
    SenchaInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
