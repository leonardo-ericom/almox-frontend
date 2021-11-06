import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { RequisicaoStepMergeService } from "./../../services/requisicao-step-merge.service";

@Component({
    selector: "requisicao-step-informacoes",
    templateUrl: "./requisicao-step-informacoes.component.html",
    styleUrls: ["./requisicao-step-informacoes.component.scss"],
})
export class RequisicaoStepInformacoesComponent {
    @ViewChild("formulario") formulario: NgForm;

    dados = {
        departamento: null,
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private stepMergeService: RequisicaoStepMergeService
    ) {}

    onSubmit() {
        if (this.formulario.valid) {
            this.stepMergeService.state.departamento = this.dados.departamento;
            this.proximo();
        }
    }

    proximo() {
        this.router.navigate(["../itens"], { relativeTo: this.activatedRoute });
    }
}
