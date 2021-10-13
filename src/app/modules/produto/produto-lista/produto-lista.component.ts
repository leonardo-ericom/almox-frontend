import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, Subscriber } from 'rxjs';

import { CommonService } from '../../shared/common.service';
import { HandleErrorService } from '../../shared/handle-error.service';
import {
    criarConfiguracaoColuna,
    criarConfiguracaoColunaStatusAuditavel,
    TipoColuna,
} from '../../shared/tabela-crud/coluna';
import { Produto } from './../../../model/produto';

@Component({
    selector: "produto-lista",
    templateUrl: "./produto-lista.component.html",
})
export class ProdutoListaComponent implements OnInit {
    TITULO_PAGINA = "Produtos";

    produtos: Produto[];
    selecionados: Produto[];
    enums$: Observable<any>;
    enumsSubscribe: Subscriber<any>;
    colunas: any[];

    constructor(
        private messageService: MessageService,
        private handleErrorService: HandleErrorService,
        private confirmationService: ConfirmationService,
        private commonService: CommonService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.colunas = [
            criarConfiguracaoColuna("id", "#", TipoColuna.TEXTO),
            criarConfiguracaoColuna("descricao", "Descrição", TipoColuna.TEXTO),
            criarConfiguracaoColuna(
                "grupo.descricao",
                "Grupo",
                TipoColuna.TEXTO
            ),
            criarConfiguracaoColuna(
                "fabricante.nome",
                "Fabricante",
                TipoColuna.TEXTO
            ),
            criarConfiguracaoColuna(
                "dataCriacao",
                "Criação",
                TipoColuna.DATA_HORA
            ),
            criarConfiguracaoColuna(
                "dataAlteracao",
                "Última Alteração",
                TipoColuna.DATA_HORA
            ),
            criarConfiguracaoColunaStatusAuditavel("Status"),
        ];
    }

    buscar(filtro: any): void {}

    visualizar = (produto: Produto) =>
        this.router.navigate([`visualizar/${produto.id}`]);

    editar = (produto: Produto) =>
        this.router.navigate([`editar/${produto.id}`]);

    excluirSelecionados(): void {
        this.confirmationService.confirm({
            message: "Tem certeza que deseja excluir os produtos selecionados?",
            header: "Confirmação",
            icon: "pi pi-exclamation-triangle",
            rejectLabel: "Não",
            acceptLabel: "Sim",
            accept: () => {},
        });
    }

    excluir(produto: Produto) {
        this.confirmationService.confirm({
            message: `Você têm certeza que deseja excluir o produto ${produto.descricao} ?`,
            header: "Confirmação",
            icon: "pi pi-exclamation-triangle",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            accept: () => {},
        });
        this.messageService.messageObserver.subscribe();
    }

    exibirAcaoEditar = (produto: Produto) => !produto.excluido;

    exibirAcaoExcluir = (produto: Produto) => !produto.excluido;
}
