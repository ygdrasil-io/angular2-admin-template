
import { Directive, ElementRef } from 'angular2/core';

//remove the host of avatar to be rendered as svg
@Directive({
  selector: '[remove-host]'
})

export class RemoveHost {
  constructor(private el: ElementRef) {

  }

  //wait for the component to render completely
  ngOnInit() {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element
    parentElement.removeChild(nativeElement);
  }
}
