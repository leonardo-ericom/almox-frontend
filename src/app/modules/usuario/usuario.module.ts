import { AuditoriaModule } from './../auditoria/auditoria.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { DepartamentoService } from './../departamento/departamento.service';
import { UsuarioFiltroComponent } from './usuario-filtro/usuario-filtro.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormSectionComponent } from './usuario-form-section/usuario-form-section.component';


@NgModule({
  declarations: [
      UsuarioFormComponent,
      UsuarioListaComponent,
      UsuarioFiltroComponent,
      UsuarioFormSectionComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    PrimengModule,
    SharedModule,
    AuditoriaModule
  ],
  providers: [
      DepartamentoService
  ]
})
export class UsuarioModule { }
