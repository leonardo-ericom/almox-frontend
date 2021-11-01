import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuditoriaModule } from './../auditoria/auditoria.module';
import { PrimengModule } from './../primeng/primeng.module';
import { SharedModule } from './../shared/shared.module';
import { DepartamentoFiltroComponent } from './components/departamento-filtro/departamento-filtro.component';
import {
    DepartamentoFormSectionComponent,
} from './components/departamento-form-section/departamento-form-section.component';
import { DepartamentoFormComponent } from './components/departamento-form/departamento-form.component';
import { DepartamentoListaComponent } from './components/departamento-lista/departamento-lista.component';
import { DepartamentoRoutingModule } from './departamento-routing.module';

@NgModule({
    declarations: [
        DepartamentoListaComponent,
        DepartamentoFiltroComponent,
        DepartamentoFormComponent,
        DepartamentoFormSectionComponent,
    ],
    imports: [
        CommonModule,
        DepartamentoRoutingModule,
        SharedModule,
        PrimengModule,
        AuditoriaModule,
    ],
})
export class DepartamentoModule {}
