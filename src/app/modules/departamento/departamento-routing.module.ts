import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartamentoFormComponent } from './components/departamento-form/departamento-form.component';
import { DepartamentoListaComponent } from './components/departamento-lista/departamento-lista.component';

const routes: Routes = [
    { path: "", component: DepartamentoListaComponent },
    { path: "novo", component: DepartamentoFormComponent },
    { path: "visualizar/:id", component: DepartamentoFormComponent },
    { path: "editar/:id", component: DepartamentoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
