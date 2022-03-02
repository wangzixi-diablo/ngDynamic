import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-ng-template',
    templateUrl: './ng-template.component.html'
})
export class NgTemplateComponent implements OnInit,AfterViewInit {

    condition = true;
    tplRef: TemplateRef<any>;

    /*
     @ViewChild(Pane)
     set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }
    */
    @ViewChild('tpl')
    set thisNamedoesnotMatter(v:TemplateRef<any>){
    console.log('Jerry');
    this.tplRef = v;
    }

    // myContext = {$implicit: '默认值', name: 'Jerry'};

    // myContext = {param: '默认值', name: 'Jerry'};

    get myContext() {
        console.log('get');
        return {$implicit: '默认值', name: 'Jerry'};
    }
    constructor(private vcRef: ViewContainerRef) {
    }
    ngOnInit(): void {
        console.log("Method not implemented.");
    }

    callPhone(value){
        alert(value);
    }
    ngAfterViewInit(): void {
        // this.vcRef.createEmbeddedView(this.tplRef);
    }
}
