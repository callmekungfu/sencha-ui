import { NgModule } from '@angular/core';

import { SenchaTitleComponent } from './sencha-title.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [SenchaTitleComponent],
  declarations: [SenchaTitleComponent],
  providers: [],
})
export class SenchaTitleModule {}
