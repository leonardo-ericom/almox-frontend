import { HandleErrorService } from "../../shared/handle-error.service";
import { CommonService } from "../../shared/common.service";
import { UsuarioService } from "../usuario.service";
import { Departamento } from "../../../model/departamento";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Usuario } from "src/app/model/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { MessageService } from "primeng/api";
import { rotaEstaEmModoVisualizacao } from "src/app/utils/RouterUtil";

@Component({
    selector: "app-usuario-form",
    templateUrl: "./usuario-form.component.html",
})
export class UsuarioFormComponent implements OnInit {
    usuario: Usuario = {};
    departamentos: Departamento[];
    tiposUsuarios: any[];
    editandoRegistroExistente: boolean;
    modoVisualizacao: boolean;
    @ViewChild("formulario") formulario: NgForm;

    constructor(
        private usuarioService: UsuarioService,
        private handleErrorService: HandleErrorService,
        private messageService: MessageService,
        private commonService: CommonService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const id: number = params["id"];
            if (id) {
                this.editandoRegistroExistente = true;
                this.usuarioService
                    .buscarPorId(id)
                    .subscribe(usuario => (this.usuario = usuario));
            }
        });

        this.commonService
            .buscarEnumeradores()
            .subscribe(
                enumeradores =>
                    (this.tiposUsuarios = enumeradores.tiposUsuarios)
            );
        this.modoVisualizacao = rotaEstaEmModoVisualizacao(
            this.activatedRoute.snapshot
        );
    }

    onSubmit(formulario: NgForm): void {
        const httpSubscriber = this.editandoRegistroExistente
            ? this.usuarioService.atualizar(this.usuario.id, this.usuario)
            : this.usuarioService.criar(this.usuario);
        httpSubscriber.subscribe(
            success => {
                this.messageService.add({
                    severity: "success",
                    summary: "Sucesso",
                    detail: "Usuário Excluído",
                    life: 3000,
                });
                this.router.navigate(["/usuarios/"]);
            },
            error => this.handleErrorService.handleError(error)
        );
    }

    limpar(): void {
        this.usuario = {};
    }
}
