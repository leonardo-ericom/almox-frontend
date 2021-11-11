import { ItemRequisicaoFormComponent } from './components/item-requisicao-form/item-requisicao-form.component';
import { ItemRequisicaoTabelaComponent } from './components/item-requisicao-table/item-requisicao-tabela.component';
import { ItemRequisicao } from './../../model/item-requisicao';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemRequisicaoDialogComponent } from './components/item-requisicao-dialog/item-requisicao-dialog.component';

const routes:Routes=[
{path : "", component: ItemRequisicaoDialogComponent},
{ path : "tabela", component: ItemRequisicaoTabelaComponent},
{ path : "form", component: ItemRequisicaoFormComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRequisicaoRoutingModule {}
