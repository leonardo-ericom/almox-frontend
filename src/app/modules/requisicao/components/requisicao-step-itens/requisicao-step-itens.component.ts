import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { RequisicaoStepMergeService } from "./../../services/requisicao-step-merge.service";

@Component({
    selector: "requisicao-step-itens",
    templateUrl: "./requisicao-step-itens.component.html",
    styleUrls: ["./requisicao-step-itens.component.scss"],
})
export class RequisicaoStepItensComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private stepMergeService: RequisicaoStepMergeService
    ) {}
    ngOnInit(): void {
        console.log(this.stepMergeService.state);
    }

    stepAnterior() {
        this.router.navigate(["../informacoes"], {
            relativeTo: this.activatedRoute,
        });
    }

    proximoStep() {}
}
