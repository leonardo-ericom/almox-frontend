import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from './../primeng/primeng.module';
import { ProdutoModule } from './../produto/produto.module';
import { SharedModule } from './../shared/shared.module';
import { ItemRequisicaoDialogComponent } from './components/item-requisicao-dialog/item-requisicao-dialog.component';
import { ItemRequisicaoRoutingModule } from './item_requisicao-rounting.module';

@NgModule({
    declarations: [
        ItemRequisicaoDialogComponent
    ],
    imports: [
        CommonModule,
        ItemRequisicaoRoutingModule,
        SharedModule,
        PrimengModule,
        ProdutoModule,
    ],
})
export class ItemRequisicaoModule {}
