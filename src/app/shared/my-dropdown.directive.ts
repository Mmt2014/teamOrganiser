import { Directive, Host,} from '@angular/core';
import { ElementRef, HostBinding, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDropdown]'
})
export class MyDropdownDirective {
  @HostBinding('class.show')
  isOpen=false
  
  @HostListener('click')
  toggleOpen(){
    this.isOpen=!this.isOpen
    let part= this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen){
      this.renderer.addClass(part,'show')
    }
    else{
      this.renderer.removeClass(part,'show')
    }
  }
  

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

}
