import {AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ContentChildComponent} from './child/content-child.component';

@Component({
    selector: 'app-ng-content',
    templateUrl: './ng-content.component.html'
})
export class NgContentComponent implements AfterViewInit {

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
