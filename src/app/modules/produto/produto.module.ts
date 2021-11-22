
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { FornecedorModule } from './../fornecedor/fornecedor.module';
import { ProdutoFiltroComponent } from './components/produto-filtro/produto-filtro.component';
import { ProdutoFormSectionComponent } from './components/produto-form-section/produto-form-section.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoModalListaComponent } from './components/produto-modal-lista/produto-modal-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './services/produto.service';

@NgModule({
    declarations: [
        ProdutoListaComponent,
        ProdutoFiltroComponent,
        ProdutoFormComponent,
        ProdutoFormSectionComponent,
        ProdutoModalListaComponent
    ],
    imports: [CommonModule, ProdutoRoutingModule, PrimengModule, SharedModule, FornecedorModule],
    providers: [ProdutoService],
    exports: [ProdutoModalListaComponent]
})
export class ProdutoModule {}
