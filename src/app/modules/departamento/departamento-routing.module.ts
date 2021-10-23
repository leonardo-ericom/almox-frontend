import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { DepartamentoListaComponent } from './departamento-lista/departamento-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
