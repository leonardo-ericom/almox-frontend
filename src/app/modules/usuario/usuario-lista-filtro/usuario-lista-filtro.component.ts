import { FiltroConsideracaoAtivos } from "src/app/model/enums/filtro-consideracao-ativos";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-usuario-lista-filtro",
    templateUrl: "./usuario-lista-filtro.component.html",
    styleUrls: ["./usuario-lista-filtro.component.scss"],
})
export class UsuarioListaFiltroComponent implements OnInit {
    @Output("buscar")
    buscarEvent: EventEmitter<any> = new EventEmitter();

    @Input()
    tiposUsuarios: any[];

    filtro = {
        nome: null,
        email: null,
        tipoUsuario: null,
        filtroStatusAuditavel: FiltroConsideracaoAtivos.APENAS_ATIVOS,
    };

    constructor() {}

    ngOnInit(): void {}

    buscar(): void {
        this.buscarEvent.emit({ filtro: this.filtro });
    }

    limparFiltros(): void {
        this.filtro = {
            nome: null,
            email: null,
            tipoUsuario: null,
            filtroStatusAuditavel: FiltroConsideracaoAtivos.APENAS_ATIVOS,
        };
    }
}
