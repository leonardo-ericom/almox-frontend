import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimengModule } from '../app-primeng/app-primeng.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaFiltroComponent } from './usuario-lista-filtro/usuario-lista-filtro.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
      UsuarioFormComponent,
      UsuarioListaComponent,
      UsuarioListaFiltroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AppPrimengModule,
    SharedModule
  ]
})
export class UsuarioModule { }
