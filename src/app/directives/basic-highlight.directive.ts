import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'trnasparent';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = 'green';
    
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = 'transparent';
  }
}
