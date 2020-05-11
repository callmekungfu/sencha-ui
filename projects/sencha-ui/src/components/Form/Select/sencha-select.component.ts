import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ComponentRef,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  Overlay,
  ConnectionPositionPair,
  PositionStrategy,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  SenchaSelectDropdownComponent,
  ISenchaSelectDropdownOption,
} from './SelectDropdown/sencha-select-dropdown.component';
import {
  ElementRuler,
  ElementRulerRef,
} from '../../../utilities/element-ruler.service';
import { SenchaSelectOptionComponent } from './SelectOption/sencha-select-option.component';

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
export class SenchaSelectComponent implements OnInit, AfterViewInit {
  /**
   * Input Binding for selected model
   */
  @Input() set selected(value: any) {
    this.selectedValue = value;
    this.selectedOption = this.findMatchingOption(value);
  }
  /**
   * Output Binding for selected model
   */
  @Output() selectedChanged = new EventEmitter();
  /**
   * Placeholder for select component
   */
  @Input() placeholder: string;
  // dropdown body element reference
  @ViewChild('selectBody') private dropdown: ElementRef;
  // Component Reference for all option components in ng-content
  @ContentChildren(SenchaSelectOptionComponent)
  private optionComponents: QueryList<SenchaSelectOptionComponent>;

  // Reference for overlay
  overlayReference: OverlayRef;
  // Positioning strategy
  positionStrategy: PositionStrategy;
  // Component ruler reference
  rulerReference: ElementRulerRef;

  // List of options
  optionList: ISenchaSelectDropdownOption[];
  // Select Option
  selectedOption: ISenchaSelectDropdownOption;
  // Selected Value
  selectedValue: any;

  constructor(private overlay: Overlay, private ruler: ElementRuler) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const options = this.optionComponents.map((comp) => comp.option);
    this.optionList = options;
    if (this.selected) {
      this.selectedOption = this.findMatchingOption(this.selected);
    }
  }

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
      try {
        this.overlayReference.updateSize({ width });
        this.overlayReference.updatePosition();
      } catch (e) {}
    });

    const dropdownPortal = new ComponentPortal(SenchaSelectDropdownComponent);
    overlayRef.attach(dropdownPortal);
  }

  /**
   * Once the dropdown is hidden we dispose all overlay references and clean up
   */
  private hideDropdown() {
    this.overlayReference?.dispose();
    this.positionStrategy?.dispose();
    this.rulerReference?.dispose();

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

  private findMatchingOption(value: any): ISenchaSelectDropdownOption {
    return this.optionList?.find((o) => o.value === value);
  }
}
