import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'lightGreen';
    el.nativeElement.style.backgroundColor = 'black';
   }

}
