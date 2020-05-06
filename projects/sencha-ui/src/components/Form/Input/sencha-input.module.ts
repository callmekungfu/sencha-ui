import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SenchaInputComponent } from './sencha-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SenchaInputComponent],
  declarations: [SenchaInputComponent],
  providers: [],
})
export class SenchaInputModule {}
