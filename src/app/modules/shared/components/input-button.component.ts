import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "input-button",
    template: `
        <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner"></i>
            <input
                style="cursor: pointer"
                readonly
                (click)="onClick()"
                [value]="value"
                [placeholder]="placeholder"]
                pInputText
                [disabled]="disabled"
            />
        </span>
    `,
})
export class InputButtonComponent {
    @Input("click") clickEvent = new EventEmitter<any>();
    @Input("value") value: string;
    @Input("placeholder") placeholder: string;
    @Input("disabled") disabled = false;

    constructor() {}

    onClick() {
        this.clickEvent.emit({});
    }
}
