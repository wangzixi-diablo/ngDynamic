import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgTemplateModule} from './ng-template/ng-template.module';
import {NgContentModule} from './ng-content/ng-content.module';
import {NgContainerModule} from './ng-container/ng-container.module';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { JerryAppComponent } from './ng-content/zippy/zippy.app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        NgContainerModule,
        NgContentModule,
        NgTemplateModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [NgContentComponent]
    //bootstrap: [NgContentComponent]
})
export class AppModule implements OnInit {
    ngOnInit(): void {
        console.log("AppModule init.");
    }
}
