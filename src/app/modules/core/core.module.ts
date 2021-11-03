import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CoreRoutingModule } from './core-routing.module';
import { MainComponent } from './main/main.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
    declarations: [
        BarraSuperiorComponent,
        MainComponent,
        RodapeComponent,
    ],
    imports: [CommonModule, CoreRoutingModule, PrimengModule],
})
export class CoreModule {}
