import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-content-child',
    template: `
        <p>
            在子cp中显示父cp传入的值: {{title}}
        </p>
        <ng-content></ng-content>
    `
})
export class ContentChildComponent {

    @Input()
    title = '';
}
