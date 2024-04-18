import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrimWhitespace]',
  standalone: true,
})
export class TrimWhitespaceDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const trimValue = this.el.nativeElement.value.trim();
    this.el.nativeElement.value = trimValue;
  }
}
