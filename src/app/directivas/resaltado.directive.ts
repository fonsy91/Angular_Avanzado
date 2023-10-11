import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
declare var Prism: any;

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input() code: string = "";

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code']) {
      this.el.nativeElement.innerHTML = Prism.highlight(this.code, Prism.languages.javascript);
    }
  }

}
