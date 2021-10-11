import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppPrimengModule } from "./../app-primeng/app-primeng.module";
import { TabelaCrudComponent } from "./tabela-crud/tabela-crud.component";
import { FiltroConsideracaoAtivosComponent } from "./filtro-consideracao-ativos/filtro-consideracao-ativos.component";
import { HandleErrorService } from "./handle-error.service";
import { CommonService } from "./common.service";

@NgModule({
    declarations: [TabelaCrudComponent, FiltroConsideracaoAtivosComponent],
    imports: [CommonModule, AppPrimengModule],
    providers: [CommonService, HandleErrorService],
    exports: [TabelaCrudComponent, FiltroConsideracaoAtivosComponent]
})
export class SharedModule {}
