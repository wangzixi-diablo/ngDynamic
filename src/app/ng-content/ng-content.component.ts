import {AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewChildren, OnInit, Directive, Input, ChangeDetectorRef} from '@angular/core';
import {ContentChildComponent} from './child/content-child.component';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-ng-content',
    templateUrl: './ng-content.component.html'
})
export class NgContentComponent implements AfterViewInit, OnInit {
    ngOnInit(): void {
        console.log("Method not implemented.");
    }

    title_0 = '定义在父cp里，传给子cp1';
    title_1 = '定义在父cp里，传给子cp2';

    @ViewChild('section_child_0')
    child0: ContentChildComponent;

    @ViewChildren(ContentChildComponent)
    childrenList: QueryList<ContentChildComponent>;

    ngAfterViewInit(): void {
        console.log(this.child0);
        this.childrenList.forEach((item) => {
            console.log(item);
        });
    }

}


@Directive({selector: 'pane'})
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'example-app',
  template: `
    <pane id="1" *ngIf="shouldShow"></pane>
    <pane id="2" *ngIf="!shouldShow"></pane>

    <button (click)="toggle()">Toggle</button>
    <div id="panel 1?" #pane999>1</div>
    <div id="panel 2?" pane>2</div>
    <div>Selected: {{selectedPane}}</div>
  `,
})
export class ViewChildComp {

  constructor(public changeDetectorRef: ChangeDetectorRef
    ){}
  @ViewChild("pane999")
  set panethis(v) {
    //setTimeout(()=> this.selectedPane = v.id, 0);
    this.selectedPane = v.id;
    this.changeDetectorRef.detectChanges();

    //Promise.resolve().then(() => this.selectedPane = v.id);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
})
export class NameEditorComponent {
  name = new FormControl('Jerry');
}