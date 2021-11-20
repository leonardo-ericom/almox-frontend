import { ItemRequisicao } from './../../model/item-requisicao';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemRequisicaoDialogComponent } from './components/item-requisicao-dialog/item-requisicao-dialog.component';

const routes:Routes=[
{path : "", component: ItemRequisicaoDialogComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRequisicaoRoutingModule {}
