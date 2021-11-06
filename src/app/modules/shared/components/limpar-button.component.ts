import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "limpar-button",
    template: `
        <button
            pButton
            pRipple
            label="Limpar"
            (click)="handleOnClick()"
            class="p-button-outlined p-button-secondary p-mr-2 p-mb-3"
        ></button>
    `,
})
export class LimparButtonComponent {
    @Output("click") onClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    handleOnClick = () => this.onClick.emit({});
}
