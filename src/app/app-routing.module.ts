import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthguardService } from "./modules/autenticacao/services/authguard.service";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/" },
    {
        path: "",
        loadChildren: () =>
            import("./modules/core/core.module").then(
                module => module.CoreModule
            ),
        canActivate: [AuthguardService],
    },
    {
        path: "login",
        loadChildren: () =>
            import("./modules/autenticacao/autenticacao.module").then(
                module => module.AutenticacaoModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
