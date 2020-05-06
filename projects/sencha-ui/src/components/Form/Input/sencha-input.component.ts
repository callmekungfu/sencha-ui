import {
  OnInit,
  Directive,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: 'input[scInput], textarea[scInput]',
  exportAs: 'scInput',
})
export class SenchaInputDirective implements OnInit {
  @HostBinding('class.sc-input-disabled') disabled = 'disabled';
  constructor(renderer: Renderer2, elementRef: ElementRef) {
    renderer.addClass(elementRef.nativeElement, 'sc-input');
  }

  ngOnInit() {}
}
