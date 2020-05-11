import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ISenchaSelectDropdownOption } from '../SelectDropdown/sencha-select-dropdown.component';

@Component({
  selector: 'sc-select-option',
  templateUrl: 'sencha-select-option.component.html',
  styleUrls: ['sencha-select-option.component.scss'],
})
export class SenchaSelectOptionComponent<V = any>
  implements OnInit, AfterViewInit {
  // The value of the select option
  @Input() value: V;
  // The display label of the select option
  @Input() label: string;
  // Flag if the option is disabled from selection
  @Input() disabled = false;

  @ViewChild('optionReflectContent') ngContentContainer: ElementRef;

  get option(): ISenchaSelectDropdownOption {
    return {
      disabled: this.disabled,
      label: this.label,
      value: this.value,
    };
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const el: HTMLElement = this.ngContentContainer.nativeElement;
    if (!this.label && el?.textContent) {
      this.label = el.textContent;
      this.cd.detectChanges();
    }
  }
}
