import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCardDirective {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-2px)');
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }
}
