import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ItemRequisicao } from './../../../../model/item-requisicao';

@Component({
    selector: "item-requisicao-lista",
    templateUrl: "./item-requisicao-lista.component.html",
})
export class ItemRequisicaoListaComponent {
    @Input() itens: ItemRequisicao[];
    @Output() novo = new EventEmitter<ItemRequisicao>();
    @Output() editar = new EventEmitter<ItemRequisicao>();
    @Output() excluir = new EventEmitter<ItemRequisicao>();

    constructor() {}

}
