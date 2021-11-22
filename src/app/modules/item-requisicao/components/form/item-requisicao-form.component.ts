import { ControlContainer, NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ProdutoModalListaComponent } from "src/app/modules/produto/components/produto-modal-lista/produto-modal-lista.component";

import { ItemRequisicao } from "../../../../model/item-requisicao";

@Component({
    selector: "item-requisicao-form",
    templateUrl: "./item-requisicao-form.component.html",
    styleUrls: ["./form.component.scss"],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class ItemRequisicaoFormComponent {
    @Input() item: ItemRequisicao = {  };
    @Output() submit = new EventEmitter<ItemRequisicao>();

    constructor(private dialogService: DialogService, public formulario: NgForm) {}

    dialogRefProduto: DynamicDialogRef;

    abrirDialogProduto() {
        this.dialogRefProduto = this.dialogService.open(
            ProdutoModalListaComponent,
            {
                header: "Escolha um Produto",
                width: "70%",
                contentStyle: { "max-height": "500px", overflow: "auto" },
                baseZIndex: 10000,
            }
        );

        this.dialogRefProduto.onClose.subscribe(produtoSelecionado => {
            if (!produtoSelecionado) return;
            this.item.produto = produtoSelecionado;
        });
    }
}
