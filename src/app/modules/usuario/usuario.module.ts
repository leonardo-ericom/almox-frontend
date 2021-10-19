import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFiltroComponent } from './usuario-filtro/usuario-filtro.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
      UsuarioFormComponent,
      UsuarioListaComponent,
      UsuarioFiltroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class UsuarioModule { }
