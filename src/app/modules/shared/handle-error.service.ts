import { MessageService } from "primeng/api";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class HandleErrorService {
    constructor(private messageService: MessageService) {}

    handleError(erro) {
        const { mensagem, mensagens } = erro.error;
        for(const message of mensagens) {
            this.messageService.add({severity: 'error', summary: mensagem, detail: message, life: 7000});
        }
    }
}
