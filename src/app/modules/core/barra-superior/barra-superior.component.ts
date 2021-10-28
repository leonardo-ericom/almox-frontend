import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MainComponent } from "../main/main.component";

@Component({
    selector: "barra-superior",
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
                        label: "Produtos",
                        icon: "fa fa-product-hunt",
                        routerLink: "/produtos",
                    },
                    {
                        label: "Grupos",
                        icon: "fa fa-th",
                        routerLink: "/grupos",
                    },
                    {
                        label: "Departamentos",
                        icon: "pi pi-tags",
                        routerLink: "/departamentos",
                    },
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
                items: [],
            },
            {
                label: "Movimentos",
                icon: "pi pi-sort-alt",
                items: [],
            },
            {
                label: "Relatórios",
                icon: "pi pi-file-o",
                items: [],
            },
        ];
    }
}
