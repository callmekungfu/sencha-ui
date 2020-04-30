import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import {
  SenchaEllipsisText,
  SenchaTruncateTextConfig,
} from '../../../utilities/ellipsis-text';

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

  @Input() set ellipsis(config: SenchaTruncateTextConfig) {
    if (config) {
      this.isEllipsis = config;
    } else {
      this.ellipsis = {};
    }
  }

  @ViewChild('contentWrapper') content: ElementRef;

  titleType: TitleType = 'display-xl';
  isUnderline = false;
  isLineThrough = false;
  isDisabled = false;
  isEllipsis: SenchaTruncateTextConfig;
  classes: string[];
  titleText: string;
  titleEllipsis: SenchaEllipsisText;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.classes = this.constructTitleClassArray();
  }

  ngOnChanges() {
    this.classes = this.constructTitleClassArray();
  }

  /**
   * Since we depend on getting the value of the text thru the dom,
   * we need to wait until the dom is ready before trying to generate
   * the text display again.
   */
  ngAfterViewInit() {
    const textNode = this.content.nativeElement.innerText;
    this.titleText = textNode ?? '';
    if (this.isEllipsis) {
      this.titleEllipsis = new SenchaEllipsisText(textNode, this.isEllipsis);
    }
    this.cd.detectChanges();
  }

  /**
   * Select the classes to apply to the title.
   *
   * Currently, we only apply either line through or underline
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
