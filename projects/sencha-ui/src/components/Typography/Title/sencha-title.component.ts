import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SenchaEllipsisText } from '../../../utilities/ellipsis-text';

export type TitleType =
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'heading'
  | 'sub-heading';

@Component({
  selector: 'sc-title',
  templateUrl: 'sencha-title.component.html',
  styleUrls: ['sencha-title.component.scss'],
})
export class SenchaTitleComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() set underline(value: boolean) {
    this.isUnderline = value !== false;
  }
  @Input() set lineThrough(value: boolean) {
    this.isLineThrough = value !== false;
  }
  @Input() set disabled(value: boolean) {
    this.isDisabled = value !== false;
  }
  @Input() set type(value: TitleType) {
    this.titleType = value;
  }
  @ViewChild('contentWrapper') content: ElementRef;

  titleType: TitleType = 'display-xl';
  isUnderline = false;
  isLineThrough = false;
  isDisabled = false;
  classes: string[];
  titleText: string;

  constructor() {}

  ngOnInit() {
    this.classes = this.constructTitleClassArray();
  }

  ngOnChanges() {
    this.classes = this.constructTitleClassArray();
  }

  ngAfterViewInit() {
    const textNode = this.content.nativeElement.innerText;
    this.titleText = textNode ?? '';
    const test = new SenchaEllipsisText(textNode, {
      length: 1,
    });
    console.log(test);
  }

  /**
   * Select the classes to apply to the title.
   *
   * Currently, we only applie either line through or underline
   */
  private constructTitleClassArray(): string[] {
    let classes: string[] = [];
    classes = [...classes, this.titleType];
    if (this.isUnderline) {
      classes = [...classes, 'underline'];
    }
    if (this.isLineThrough) {
      classes = [...classes, 'line-through'];
    }
    if (this.isDisabled) {
      classes = [...classes, 'disabled'];
    }
    return classes;
  }
}
