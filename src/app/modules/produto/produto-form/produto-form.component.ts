import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "produto-form",
    templateUrl: "./produto-form.component.html",
})
export class ProdutoFormComponent implements OnInit {
    editandoRegistroExistente: boolean;
    modoVisualizacao: boolean;
    @ViewChild("formulario") formulario: NgForm;

    constructor() {}

    ngOnInit(): void {}

    onSubmit(formulario: NgForm): void {}

    limpar(): void {}
}
