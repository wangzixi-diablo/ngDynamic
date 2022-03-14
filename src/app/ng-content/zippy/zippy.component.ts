import { Component, Directive, Input, TemplateRef, ContentChild, HostBinding, HostListener, AfterContentInit, ElementRef } from '@angular/core';

let nextId = 0;

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>,
    private elRef:ElementRef) {
    console.log('Jerry zipperDirective:' , this.templateRef);
    console.log('Host element:', this.elRef);
  }
}

@Component({
    selector: 'app-example-zippy',
    templateUrl: './example-zippy.template.html',
  })
export class ZippyComponent implements AfterContentInit {
    ngAfterContentInit(): void {
      console.log("ZippyComponent,", this.content);
    }
    contentId = `zippy-${nextId++}`;
    @Input() expanded = false;
    
    @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  }

  @Component({
    selector: 'child',
    template: `<span>I am a child.</span>`
  })
  export class ChildViewComponent {}

  @Component({
    selector: 'parent',
    template: `
      <div>
        projected content: 
        <ng-content></ng-content>
      </div>
    `
  })
  export class ParentComponent {}

  @Component({
    selector: 'demo',
    template: `
      <parent id="p1">
      <child id="c1"></child>
      </parent>
      <child id="c2"></child>
    `
  })
  export class Demo {}