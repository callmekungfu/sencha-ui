import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SenchaInputDirective } from './sencha-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SenchaInputDirective],
  declarations: [SenchaInputDirective],
  providers: [],
})
export class SenchaInputModule {}
