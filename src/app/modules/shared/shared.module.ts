import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { FiltroStatusAuditavel } from './components/filtro-status-auditavel/filtro-status-auditavel.component';
import { TabelaCrudComponent } from './components/tabela-crud/tabela-crud.component';
import { TituloPaginaCrudComponent } from './components/titulo-pagina-crud/titulo-pagina-crud.component';
import { CommonService } from './services/common.service';
import { HandleErrorService } from './services/handle-error.service';

@NgModule({
    declarations: [TabelaCrudComponent, FiltroStatusAuditavel, TituloPaginaCrudComponent],
    imports: [CommonModule, PrimengModule],
    providers: [CommonService, HandleErrorService],
    exports: [TabelaCrudComponent, FiltroStatusAuditavel, TituloPaginaCrudComponent],
})
export class SharedModule {}
