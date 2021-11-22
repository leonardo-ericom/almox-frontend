import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthguardService } from "../autenticacao/services/authguard.service";

import { RequisicaoBuscaComponent } from "./components/requisicao-busca/requisicao-busca.component";
import { RequisicaoFormComponent } from "./components/requisicao-form/requisicao-form.component";
import { RequisicaoStepInformacoesComponent } from "./components/requisicao-step-informacoes/requisicao-step-informacoes.component";
import { RequisicaoStepItensComponent } from "./components/requisicao-step-itens/requisicao-step-itens.component";

const routes: Routes = [
    { path: "", component: RequisicaoBuscaComponent, pathMatch: "full" },
    {
        path: "novo",
        component: RequisicaoFormComponent,
        children: [
            { path: "", redirectTo: "informacoes", pathMatch: "full" },
            {
                path: "informacoes",
                component: RequisicaoStepInformacoesComponent,
            },
            { path: "itens", component: RequisicaoStepItensComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RequisicaoRoutingModule {}
