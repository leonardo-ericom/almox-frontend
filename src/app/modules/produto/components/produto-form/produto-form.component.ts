import { HandleErrorService } from "src/app/modules/shared/services/handle-error.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CommonService } from "../../../shared/services/common.service";
import { Departamento } from "./../../../../model/departamento";
import { Fabricante } from "./../../../../model/fabricante";
import { Grupo } from "./../../../../model/grupo";
import { Produto } from "./../../../../model/produto";

@Component({
    selector: "produto-form",
    templateUrl: "./produto-form.component.html",
})
export class ProdutoFormComponent implements OnInit {
    produto: Produto = { configuracaoEstoque: {} };
    editandoRegistroExistente: boolean;
    modoVisualizacao: boolean;
    @ViewChild("formulario") formulario: NgForm;
    unidadesMedidas: any[];
    fabricantes: Fabricante[];
    grupos: Grupo[];
    departamentos: Departamento[];

    constructor(
        private commonService: CommonService,
        private handleErrorService: HandleErrorService
    ) {}

    ngOnInit(): void {
        this.commonService.buscarEnumeradores().subscribe(
            enumeradores => this.unidadesMedidas = enumeradores.unidadesMedidas,
            error => this.handleErrorService.handleError(error)
        );
    }

    onSubmit(formulario: NgForm): void {}

    limpar(): void {}
}
