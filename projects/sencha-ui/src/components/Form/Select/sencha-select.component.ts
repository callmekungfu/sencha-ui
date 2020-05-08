import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import {
  Overlay,
  ConnectionPositionPair,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SenchaSelectDropdownComponent } from './SelectDropdown/sencha-select-dropdown.component';

const positions = [
  new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' }
  ),
  new ConnectionPositionPair(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'bottom' }
  ),
];

@Component({
  selector: 'sc-select',
  templateUrl: 'sencha-select.component.html',
})
export class SenchaSelectComponent implements OnInit {
  @ViewChild('selectBody') dropdown: ElementRef;

  constructor(private overlay: Overlay) {}

  ngOnInit() {}

  onClick() {
    this.showDropdown();
  }

  private showDropdown() {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({
      positionStrategy,
    });
    const dropdownPortal = new ComponentPortal(SenchaSelectDropdownComponent);
    console.log();
    overlayRef.attach(dropdownPortal);
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.dropdown)
      .withPositions(positions)
      .withPush(false);
  }
}
