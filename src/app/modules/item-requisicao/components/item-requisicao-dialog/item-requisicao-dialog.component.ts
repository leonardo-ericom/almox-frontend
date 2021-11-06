import { Produto } from "src/app/model/produto";
import { Component, OnDestroy } from "@angular/core";
import { MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ProdutoModalListaComponent } from "src/app/modules/produto/components/produto-modal-lista/produto-modal-lista.component";

@Component({
    selector: "item-requisicao-modal-lista",
    templateUrl: "./item-requisicao-dialog.component.html",
})
export class ItemRequisicaoDialogComponent implements OnDestroy {
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService
    ) {}

    produtoSelecionado: Produto;
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
                this.produtoSelecionado = produto;
            }
        });
    }

    ngOnDestroy() {
        if (this.dialogItemRequisicao) {
            this.dialogItemRequisicao.close();
        }
    }
}
