import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequisicaoBuscaComponent } from './components/requisicao-busca/requisicao-busca.component';
import { RequisicaoFormComponent } from './components/requisicao-form/requisicao-form.component';

const routes: Routes = [
    {path: '', component: RequisicaoBuscaComponent},
    {path: 'novo', component: RequisicaoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisicaoRoutingModule { }
