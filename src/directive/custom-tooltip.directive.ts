import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class CustomTooltipDirective {
  @Input() tooltipText: string = '';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'top';
  @Input() fontColor: string = '#000000';
  @Input() fontSize: string = '14px';

  private tooltipElement: HTMLElement | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('div');
      this.renderer.appendChild(document.body, this.tooltipElement);
      this.renderer.addClass(this.tooltipElement, 'custom-tooltip');
      this.renderer.setStyle(this.tooltipElement, 'display', 'inline-block');
    }

    if (this.tooltipElement) {
      this.tooltipElement.textContent = this.tooltipText;
      this.tooltipElement.style.fontSize = this.fontSize;
      const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
      const tooltipRect = this.tooltipElement.getBoundingClientRect();

      let top, left;

      switch (this.position) {
        case 'left':
          top = hostRect.top + 4 + (hostRect.height - tooltipRect.height) / 2;
          left = hostRect.left - tooltipRect.width;
          break;
        case 'right':
          top = hostRect.top + 2 + (hostRect.height - tooltipRect.height) / 2;
          left = hostRect.right - 4;
          break;
        case 'top':
          top = hostRect.top - tooltipRect.height + 4;
          left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = hostRect.bottom;
          left = hostRect.left - 2 + (hostRect.width - tooltipRect.width) / 2;
          break;
      }

      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(
        this.tooltipElement,
        'background-color',
        '#f0f0f0'
      );

      this.renderer.setStyle(this.tooltipElement, 'color', this.fontColor);
      // this.renderer.setStyle(this.tooltipElement, 'font-size', this.fontSize);
      this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px `);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left + 5}px `);
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
