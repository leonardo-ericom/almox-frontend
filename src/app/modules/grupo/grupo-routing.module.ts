import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';

const routes: Routes = [
  { path: "", component: GrupoListaComponent },
  { path: "novo", component: GrupoFormComponent },
  { path: "visualizar/:id", component: GrupoFormComponent },
  { path: "editar/:id", component: GrupoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule {}
