import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgContentComponent} from './ng-content.component';
import {NgContentRoutingModule} from './ng-content-routing.module';
import {ContentSectionComponent} from './section/content-section.component';
import {ContentChildComponent} from './child/content-child.component';
import { ZippyBasicComponent } from './zippy-basic.component';
import { ZippyComponent, ZippyContentDirective } from './zippy/zippy.component';
import { JerryAppComponent } from './zippy/zippy.app.component';

@NgModule({
    declarations: [
        NgContentComponent,
        ContentSectionComponent,
        ContentChildComponent,
        ZippyBasicComponent,
        ZippyComponent,
        JerryAppComponent,
        ZippyContentDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgContentRoutingModule
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
