import { ItemRequisicao } from "./../../../../model/item-requisicao";
import { ProdutoService } from "../../../produto/services/produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "src/app/model/produto";
import { MessageService } from "primeng/api";

@Component({
    templateUrl: "./item-requisicao-tabela.component.html",
    providers: [MessageService],
    styles: [
        `
            :host ::ng-deep .p-cell-editing {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
            }
        `,
    ],
})
export class ItemRequisicaoTabelaComponent implements OnInit {
    produtos: Produto[];

    itensRequisicao: ItemRequisicao[];

    clonedItens: { [id: number]: ItemRequisicao } = {};

    constructor(
        private produtoService: ProdutoService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.produtoService
            .buscarTodos()
            .subscribe(registros => (this.produtos = registros));

        this.itensRequisicao = [
            {
                id: 1,
                produto: {
                    id: 1,
                    descricao: "escova de dente",
                    codigoBarras: "1HHY212JEENNXXIYUY",
                    custoMedio: 130.0,
                },
                statusItemRequisicao: "Entregue",
                quantidade: 0,
            },

            {
                id: 2,
                produto: {
                    id: 2,
                    descricao: "escova de cabelo",
                    codigoBarras: "1HHY212JEENNXXIYUY",
                    custoMedio: 130.0,
                },
                statusItemRequisicao: "Entregue",
                quantidade: 0,
            },
        ];
    }

    onRowEditInit(itemRequisicao: ItemRequisicao) {
        this.clonedItens[itemRequisicao.id] = { ...itemRequisicao };
    }

    onRowEditSave(itemRequisicao: ItemRequisicao) {
        //let produto = itemRequisicao.produto
        if (itemRequisicao.quantidade > 0) {
            delete this.clonedItens[itemRequisicao.id];
            this.messageService.add({
                severity: "success",
                summary: "Quantidade Editada com Sucesso",
            });
        } else {
            itemRequisicao.quantidade = 1;
            this.messageService.add({
                severity: "error",
                summary: "Error",
                detail: "Quantidade inválida!",
            });
        }
    }

    onRowEditCancel(itemRequisicao: ItemRequisicao, index: number) {
        this.itensRequisicao[index] = this.clonedItens[itemRequisicao.id];
        delete this.clonedItens[itemRequisicao.id];
    }

    limpar(): void {}
}
