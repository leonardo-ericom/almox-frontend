import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Produto } from './../../../model/produto';

@Component({
    selector: "produto-form",
    templateUrl: "./produto-form.component.html",
})
export class ProdutoFormComponent implements OnInit {
    produto: Produto = {};
    editandoRegistroExistente: boolean;
    modoVisualizacao: boolean;
    @ViewChild("formulario") formulario: NgForm;

    constructor() {}

    ngOnInit(): void {}

    onSubmit(formulario: NgForm): void {}

    limpar(): void {}
}
