import { SharedModule } from './../shared/shared.module';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { GrupoFiltroComponent } from './grupo-filtro/grupo-filtro.component';


@NgModule({
  declarations: [
    GrupoListaComponent,
    GrupoFormComponent,
    GrupoFiltroComponent
  ],
  imports: [
    CommonModule,
    GrupoRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class GrupoModule { }
