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
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SenchaSelectDropdownComponent } from './SelectDropdown/sencha-select-dropdown.component';
import {
  ElementRuler,
  ElementRulerRef,
} from '../../../utilities/element-ruler.service';

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

  overlayReference: OverlayRef;
  positionStrategy: PositionStrategy;
  rulerReference: ElementRulerRef;

  constructor(private overlay: Overlay, private ruler: ElementRuler) {}

  ngOnInit() {}

  onClick() {
    this.showDropdown();
  }

  onBlur() {
    this.hideDropdown();
  }

  private showDropdown() {
    if (this.overlayReference) {
      this.hideDropdown();
      return;
    }
    const positionStrategy = (this.positionStrategy = this.getPositionStrategy());
    const overlayRef = (this.overlayReference = this.overlay.create({
      positionStrategy,
    }));
    const rulerRef = (this.rulerReference = this.ruler.create(
      this.dropdown.nativeElement,
      0
    ));
    rulerRef.change.subscribe(({ width }) => {
      overlayRef.updateSize({ width });
      overlayRef.updatePosition();
    });
    const dropdownPortal = new ComponentPortal(SenchaSelectDropdownComponent);
    overlayRef.attach(dropdownPortal);
  }

  private hideDropdown() {
    this.overlayReference.dispose();
    this.positionStrategy.dispose();
    this.rulerReference.dispose();

    this.overlayReference = null;
    this.positionStrategy = null;
    this.rulerReference = null;
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.dropdown)
      .withPositions(positions)
      .withPush(false);
  }
}
