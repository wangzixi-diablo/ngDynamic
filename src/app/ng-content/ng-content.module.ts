import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgContentComponent, Pane, ViewChildComp, NameEditorComponent} from './ng-content.component';
import {NgContentRoutingModule} from './ng-content-routing.module';
import {ContentSectionComponent} from './section/content-section.component';
import {ContentChildComponent} from './child/content-child.component';
import { ZippyBasicComponent } from './zippy-basic.component';
import { ZippyComponent, ZippyContentDirective, ParentComponent, Demo, ChildViewComponent } from './zippy/zippy.component';
import { JerryAppComponent } from './zippy/zippy.app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NgContentComponent,
        ContentSectionComponent,
        ContentChildComponent,
        ZippyBasicComponent,
        ZippyComponent,
        JerryAppComponent,
        ZippyContentDirective,
        ChildViewComponent,
        ParentComponent,
        Demo,
        Pane,
        ViewChildComp,
        NameEditorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgContentRoutingModule,
        ReactiveFormsModule
    ]
})
export class NgContentModule implements OnInit {
    ngOnInit(): void {
        console.log("NgContentModule init.");
    }

    constructor(){
        console.log("NgContentModule ctr.");
    }
}
