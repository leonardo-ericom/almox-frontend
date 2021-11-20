<<<<<<< HEAD
import { ItemRequisicaoTabelaComponent } from './../item-requisicao/components/item-requisicao-table/item-requisicao-tabela.component';
=======

>>>>>>> 2cd5130... 	modified:   src/app/config/navigation.ts
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PrimengModule } from "./../primeng/primeng.module";
import { SharedModule } from "./../shared/shared.module";
import { RequisicaoBuscaComponent } from "./components/requisicao-busca/requisicao-busca.component";
import { RequisicaoFiltroComponent } from "./components/requisicao-filtro/requisicao-filtro.component";
import { RequisicaoFormSectionComponent } from "./components/requisicao-form-section/requisicao-form-section.component";
import { RequisicaoFormComponent } from "./components/requisicao-form/requisicao-form.component";
import { RequisicaoRoutingModule } from "./requisicao-routing.module";
import { RequisicaoStepInformacoesComponent } from './components/requisicao-step-informacoes/requisicao-step-informacoes.component';
import { RequisicaoStepItensComponent } from './components/requisicao-step-itens/requisicao-step-itens.component';
import { ItemRequisicaoModule } from '../item-requisicao/item_requisicao.module';

@NgModule({
    declarations: [
        RequisicaoBuscaComponent,
        RequisicaoFiltroComponent,
        RequisicaoFormComponent,
        RequisicaoFormSectionComponent,
        RequisicaoStepInformacoesComponent,
        RequisicaoStepItensComponent,
    ],
    imports: [
        CommonModule,
        RequisicaoRoutingModule,
        PrimengModule,
        SharedModule,
        ItemRequisicaoModule
    ],
})
export class RequisicaoModule {}
