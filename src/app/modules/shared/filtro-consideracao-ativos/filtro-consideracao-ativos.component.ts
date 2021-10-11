import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FiltroConsideracaoAtivos } from "src/app/model/enums/filtro-consideracao-ativos";

@Component({
    selector: "app-filtro-consideracao-ativos",
    templateUrl: "./filtro-consideracao-ativos.component.html",
    styleUrls: ["./filtro-consideracao-ativos.component.scss"],
})
export class FiltroConsideracaoAtivosComponent implements OnInit {
    filtroStatusAuditavel: any = null;
    @Input() filtroSelecionado: any = FiltroConsideracaoAtivos.APENAS_ATIVOS;
    @Output() filtroChange = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
        this.filtroStatusAuditavel = this.filtroSelecionado.valor;
    }

    onChangeTriStateCheckBox() {
        this.filtroSelecionado =
            FiltroConsideracaoAtivos.resolverSelecaoConsideracao(
                this.filtroStatusAuditavel
            );
        this.filtroChange.emit(this.filtroSelecionado);
    }
}
