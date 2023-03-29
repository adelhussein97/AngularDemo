import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BGColor]'
})
export class BGColorDirective implements OnChanges  {
@Input() Color:string = 'white';
@Input('bgcolor') ChangeColor:string = 'red';

  constructor(private element:ElementRef) { }
  ngOnChanges ( changes: SimpleChanges ): void
  {
   this.element.nativeElement.style.backgroundColor=this.ChangeColor;
  }
  
@HostListener('mouseover')
  onMouseOver() 
  {
       this.element.nativeElement.style.backgroundColor=this.ChangeColor;

  }

@HostListener('mouseout')
  onMouseLeave() {
         this.element.nativeElement.style.backgroundColor=this.Color;

  }

}
