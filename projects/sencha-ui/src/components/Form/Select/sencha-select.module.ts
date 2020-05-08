import { NgModule } from '@angular/core';

import { SenchaSelectComponent } from './sencha-select.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { SenchaSelectDropdownComponent } from './SelectDropdown/sencha-select-dropdown.component';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
  exports: [SenchaSelectComponent, SenchaSelectDropdownComponent],
  declarations: [SenchaSelectComponent, SenchaSelectDropdownComponent],
  entryComponents: [SenchaSelectDropdownComponent],
  providers: [],
})
export class SenchaSelectModule {}
