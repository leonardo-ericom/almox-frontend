import { PrimengModule } from './../primeng/primeng.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FornecedorModalListaComponent } from './components/fornecedor-modal-lista/fornecedor-modal-lista.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';

@NgModule({
    declarations: [FornecedorModalListaComponent],
    imports: [CommonModule, FornecedorRoutingModule, PrimengModule],
    exports: [FornecedorModalListaComponent],
})
export class FornecedorModule {}
