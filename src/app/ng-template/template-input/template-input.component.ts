import {Component, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-template-input',
    template: `
        <!-- 没有传递参数的时候就使用defaultTemplate里面的布局 -->
        <ng-template #defaultTemplate>
            <div>咱们没有传递参数</div>
        </ng-template>
        <div class='wrapper'>
        <div class='wrapper2' *ngTemplateOutlet="inputTemplate ? inputTemplate: defaultTemplate"></div>

        <!-- 效果完全一致
        <ng-content *ngTemplateOutlet="inputTemplate ? inputTemplate: defaultTemplate"></ng-content>
        <ng-container *ngTemplateOutlet="inputTemplate ? inputTemplate: defaultTemplate"></ng-container>
        -->
        </div>

    `
})
export class TemplateInputComponent {
    /**
     * 模板作为参数
     */
    @Input()
    inputTemplate: TemplateRef<any>;
}
