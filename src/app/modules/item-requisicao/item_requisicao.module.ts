import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from './../primeng/primeng.module';
import { ProdutoModule } from './../produto/produto.module';
import { SharedModule } from './../shared/shared.module';
import { ItemRequisicaoDialogComponent } from './components/item-requisicao-dialog/item-requisicao-dialog.component';
import { ItemRequisicaoFormComponent } from './components/item-requisicao-form/item-requisicao-form.component';
import { ItemRequisicaoListaComponent } from './components/item-requisicao-lista/item-requisicao-lista.component';
import { ItemRequisicaoTabelaComponent } from './components/item-requisicao-table/item-requisicao-tabela.component';
import { ItemRequisicaoRoutingModule } from './item_requisicao-rounting.module';

@NgModule({
    declarations: [
        ItemRequisicaoDialogComponent,
        ItemRequisicaoTabelaComponent,
        ItemRequisicaoFormComponent,
        ItemRequisicaoListaComponent
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
        ItemRequisicaoTabelaComponent,
        ItemRequisicaoListaComponent
    ]
})
export class ItemRequisicaoModule {}
