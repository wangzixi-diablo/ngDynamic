import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  template: `
    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `
})
export class ZippyBasicComponent {}