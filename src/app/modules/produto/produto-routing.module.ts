import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';

const routes: Routes = [
    { path: "", component: ProdutoListaComponent },
    { path: "novo", component: ProdutoFormComponent },
    { path: "visualizar/:id", component: ProdutoFormComponent },
    { path: "editar/:id", component: ProdutoFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProdutoRoutingModule {}
