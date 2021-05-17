import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBasicHighlight') hightlightColor = 'green';
  @HostBinding('style.backgroundColor') backgroundColor = 'trnasparent';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = this.hightlightColor;
    
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
