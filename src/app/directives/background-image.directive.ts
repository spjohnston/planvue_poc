import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective {

  @Input({required:true}) 
  url!:string;

  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}
  
  ngOnInit() {
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'backgroundImage',
          `url(${this.url})`
      );
  }

}
