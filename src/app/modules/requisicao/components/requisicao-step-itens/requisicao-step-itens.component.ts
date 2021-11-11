import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ItemRequisicao } from "src/app/model/item-requisicao";
import { Produto } from "src/app/model/produto";
import { ProdutoModalListaComponent } from "src/app/modules/produto/components/produto-modal-lista/produto-modal-lista.component";
import { ProdutoService } from "src/app/modules/produto/services/produto.service";

import { RequisicaoStepMergeService } from "./../../services/requisicao-step-merge.service";

@Component({
    selector: "requisicao-step-itens",
    templateUrl: "./requisicao-step-itens.component.html",
    styleUrls: ["./requisicao-step-itens.component.scss"],
})
export class RequisicaoStepItensComponent implements OnInit {

    produtoSelecionado: Produto;
    itensRequisicao: ItemRequisicao[];
    clonedItens: { [id: number]: ItemRequisicao; } = {};
    editar = false;


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private stepMergeService: RequisicaoStepMergeService,
        private dialogService: DialogService,
        private messageService: MessageService,
        private produtoService: ProdutoService
    ) {}

    dialogItemRequisicao: DynamicDialogRef;

    show() {
        this.dialogItemRequisicao = this.dialogService.open(
            ProdutoModalListaComponent,
            {
                header: "Choose a Product",
                width: "70%",
                contentStyle: { "max-height": "500px", overflow: "auto" },
                baseZIndex: 10000,
            }
        );

        this.dialogItemRequisicao.onClose.subscribe((produto: Produto) => {
            if (produto) {
                this.messageService.add({
                    severity: "info",
                    summary: "Product Selected",
                    detail: produto.descricao,
                });
            }
        });
    }

    ngOnInit(): void {
        console.log(this.stepMergeService.state);
        this.itensRequisicao = [
            {   id: 1,
                produto: {
                    id: 1,
                    descricao: "Escova de Dente",
                    codigoBarras: "1HHY212JEENNXXIYUY",
                    custoMedio: 130.00
                },
                statusItemRequisicao: 'Entregue',
                quantidade: 0

            },

            {   id: 2,
                produto: {
                    id: 2,
                    descricao: "Escova de Cabelo",
                    codigoBarras: "1HHY212JEENNXXIYUY",
                    custoMedio: 130.00
                },
                statusItemRequisicao: 'Entregue',
                quantidade: 0

            }
        ]
    }

    stepAnterior() {
        this.router.navigate(["../informacoes"], {
            relativeTo: this.activatedRoute,
        });
    }

    onRowEditInit(itemRequisicao: ItemRequisicao) {
        this.editar = true;
        console.log(this.editar);
        this.clonedItens[itemRequisicao.id] = {...itemRequisicao};

    }

    onRowEditSave(itemRequisicao: ItemRequisicao) {
        //let produto = itemRequisicao.produto
        if (itemRequisicao.quantidade > 0) {
            delete this.clonedItens[itemRequisicao.id];
            this.messageService.add({severity:'success', summary: 'Quantidade Editada com Sucesso'});
        }
        else {
            itemRequisicao.quantidade = 1
            this.messageService.add({severity:'error', summary: 'Error', detail:'Quantidade inválida!'});
        }
        this.editar = false;
    }

    onRowEditCancel(itemRequisicao: ItemRequisicao, index: number) {
        this.itensRequisicao[index] = this.clonedItens[itemRequisicao.id];
        delete this.clonedItens[itemRequisicao.id];
        this.editar = false;
    }

    limpar(): void {}

    proximoStep() {}
}
