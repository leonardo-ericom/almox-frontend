import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppPrimengModule } from "./../app-primeng/app-primeng.module";
import { CommonService } from "./common.service";
import { FiltroStatusAuditavel } from "./filtro-status-auditavel/filtro-status-auditavel.component";
import { HandleErrorService } from "./handle-error.service";
import { TabelaCrudComponent } from "./tabela-crud/tabela-crud.component";

@NgModule({
    declarations: [TabelaCrudComponent, FiltroStatusAuditavel],
    imports: [CommonModule, AppPrimengModule],
    providers: [CommonService, HandleErrorService],
    exports: [TabelaCrudComponent, FiltroStatusAuditavel],
})
export class SharedModule {}
