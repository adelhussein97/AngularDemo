import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[imgHoverShadow]'
})
export class HoverDirective {

  
  constructor(private element:ElementRef) 
  {
     
  }

@HostListener('mouseover')
  onMouseOver() 
  {
    this.element.nativeElement.style.boxShadow= '30px 20px 15px #ccc';
  }

@HostListener('mouseout')
  onMouseLeave() {
      this.element.nativeElement.style.boxShadow= '0px 0px 0px #ccc';
  }
  
}
