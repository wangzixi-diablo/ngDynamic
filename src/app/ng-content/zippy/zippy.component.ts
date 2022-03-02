import { Component, Directive, Input, TemplateRef, ContentChild, HostBinding, HostListener } from '@angular/core';

let nextId = 0;

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
    selector: 'app-example-zippy',
    templateUrl: './example-zippy.template.html',
  })
export class ZippyComponent {
    contentId = `zippy-${nextId++}`;
    @Input() expanded = false;
    
    @Input()
    templateRefPassedOutside: TemplateRef<any>;
    
    @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  }