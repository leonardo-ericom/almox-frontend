import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Departamento } from './../../../model/departamento';
import { Fabricante } from './../../../model/fabricante';
import { Grupo } from './../../../model/grupo';
import { Produto } from './../../../model/produto';
import { CommonService } from './../../shared/common.service';

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

    constructor(private commonService: CommonService) {}

    ngOnInit(): void {
        this.commonService
            .buscarEnumeradores()
            .subscribe(
                enumeradores =>
                    (this.unidadesMedidas = enumeradores.unidadesMedidas)
            );
    }

    onSubmit(formulario: NgForm): void {}

    limpar(): void {}
}
