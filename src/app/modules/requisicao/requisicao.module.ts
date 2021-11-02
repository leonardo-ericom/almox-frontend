import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PrimengModule } from "./../primeng/primeng.module";
import { SharedModule } from "./../shared/shared.module";
import { RequisicaoBuscaComponent } from "./components/requisicao-busca/requisicao-busca.component";
import { RequisicaoFiltroComponent } from "./components/requisicao-filtro/requisicao-filtro.component";
import { RequisicaoFormSectionComponent } from "./components/requisicao-form-section/requisicao-form-section.component";
import { RequisicaoFormComponent } from "./components/requisicao-form/requisicao-form.component";
import { RequisicaoRoutingModule } from "./requisicao-routing.module";

@NgModule({
    declarations: [
        RequisicaoBuscaComponent,
        RequisicaoFiltroComponent,
        RequisicaoFormComponent,
        RequisicaoFormSectionComponent,
    ],
    imports: [
        CommonModule,
        RequisicaoRoutingModule,
        PrimengModule,
        SharedModule,
    ],
})
export class RequisicaoModule {}
