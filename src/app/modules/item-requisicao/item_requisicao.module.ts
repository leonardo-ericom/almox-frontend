import { ItemRequisicaoFormComponent } from './components/item-requisicao-form/item-requisicao-form.component';
import { ItemRequisicaoTabelaComponent } from "./components/item-requisicao-table/item-requisicao-tabela.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PrimengModule } from "./../primeng/primeng.module";
import { ProdutoModule } from "./../produto/produto.module";
import { SharedModule } from "./../shared/shared.module";
import { ItemRequisicaoDialogComponent } from "./components/item-requisicao-dialog/item-requisicao-dialog.component";
import { ItemRequisicaoRoutingModule } from "./item_requisicao-rounting.module";

@NgModule({
    declarations: [
        ItemRequisicaoDialogComponent,
        ItemRequisicaoTabelaComponent,
        ItemRequisicaoFormComponent
    ],
    imports: [
        CommonModule,
        ItemRequisicaoRoutingModule,
        SharedModule,
        PrimengModule,
        ProdutoModule,
    ],
    exports: [
        ItemRequisicaoDialogComponent,
        ItemRequisicaoFormComponent,
        ItemRequisicaoTabelaComponent
    ]
})
export class ItemRequisicaoModule {}
