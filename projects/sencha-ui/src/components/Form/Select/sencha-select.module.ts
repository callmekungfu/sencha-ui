import { NgModule } from '@angular/core';

import { SenchaSelectComponent } from './sencha-select.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { SenchaSelectDropdownComponent } from './SelectDropdown/sencha-select-dropdown.component';
import { ElementRuler } from '../../../utilities/element-ruler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, BrowserAnimationsModule],
  exports: [SenchaSelectComponent, SenchaSelectDropdownComponent],
  declarations: [SenchaSelectComponent, SenchaSelectDropdownComponent],
  entryComponents: [SenchaSelectDropdownComponent],
  providers: [ElementRuler],
})
export class SenchaSelectModule {}
