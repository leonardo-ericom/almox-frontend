import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutoFiltroComponent } from './produto-filtro/produto-filtro.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './produto.service';

@NgModule({
    declarations: [
        ProdutoListaComponent,
        ProdutoFiltroComponent,
        ProdutoFormComponent,
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        PrimengModule,
        SharedModule,
    ],
    providers: [ProdutoService],
})
export class ProdutoModule {}
