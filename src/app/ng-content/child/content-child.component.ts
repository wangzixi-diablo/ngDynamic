import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-content-child',
    template: `
        <p>
            this is hard code parent: {{title}}
        </p>
    `
})
export class ContentChildComponent {

    @Input()
    title = '';

}
