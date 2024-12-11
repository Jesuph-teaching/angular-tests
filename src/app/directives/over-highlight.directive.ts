import {
  Directive,
  effect,
  ElementRef,
  HostBinding,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appOverHighlight]',
})
export class OverHighlightDirective {
  highlightValue = input.required<number>();
  elm = inject(ElementRef<Element>);
  styleEffect = effect(() => {
    if (this.highlightValue() > 4) {
      this.elm.nativeElement.style.backgroundColor = 'cyan';
    } else {
      this.elm.nativeElement.style.backgroundColor = 'transparent';
    }
  });
}
