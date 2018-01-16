import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[core-host]',
})
export class CoreDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
