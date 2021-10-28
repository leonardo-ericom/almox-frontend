import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        children: [
            {
                path: "usuarios",
                loadChildren: () =>
                    import("../usuario/usuario.module").then(
                        module => module.UsuarioModule
                    ),
            },
            {
                path: "produtos",
                loadChildren: () =>
                    import("../produto/produto.module").then(
                        module => module.ProdutoModule
                    ),
            },
            {
                path: "departamentos",
                loadChildren: () =>
                    import("../departamento/departamento.module").then(
                        module => module.DepartamentoModule
                    ),
            },
            {
                path: "grupos",
                loadChildren: () =>
                    import("../grupo/grupo.module").then(
                        module => module.GrupoModule
                    ),
            },
            {
                path: "fabricantes",
                loadChildren: () =>
                    import("../fabricante/fabricante.module").then(
                        module => module.FabricanteModule
                    ),
            },
        ],
    },
    {
        path: "login",
        component: LoginComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule {}
