import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MainComponent } from "../main/main.component";

@Component({
    selector: "app-topbar",
    templateUrl: "./barra-superior.component.html",
})
export class BarraSuperiorComponent implements OnInit {
    items: MenuItem[];

    constructor(public appMain: MainComponent) {}

    ngOnInit(): void {
        this.items = [
            {
                label: "Cadastros",
                icon: "pi pi-list",
                items: [
                    {
                        label: "Usuários",
                        icon: "pi pi-users",
                        routerLink: "/usuarios",
                    },
                ],
            },
            {
                label: "Financeiro",
                icon: "pi pi-money-bill",
                items: [

                ],
            },
            {
                label: "Movimentos",
                icon: "pi pi-sort-alt",
                items: [

                ],
            },
            {
                label: "Relatórios",
                icon: "pi pi-file-o",
                items: [

                ],
            }
        ];
    }
}
