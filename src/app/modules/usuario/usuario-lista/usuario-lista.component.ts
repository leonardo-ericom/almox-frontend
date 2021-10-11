import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable, Subscriber } from "rxjs";
import { Usuario } from "src/app/model/usuario";
import { CommonService } from "../../shared/common.service";
import { HandleErrorService } from "../../shared/handle-error.service";
import {
    criarConfiguracaoColuna,
    criarConfiguracaoColunaStatusAuditavel,
    TipoColuna,
} from "../../shared/tabela-crud/coluna";
import { UsuarioListaFiltroComponent } from "../usuario-lista-filtro/usuario-lista-filtro.component";
import { UsuarioService } from "../usuario.service";

@Component({
    selector: "app-usuario-lista",
    templateUrl: "./usuario-lista.component.html",
    styleUrls: ["./usuario-lista.component.scss"],
})
export class UsuarioListaComponent implements OnInit {
    usuarios: Usuario[];
    usuariosSelecionados: Usuario[];
    enums$: Observable<any>;
    enumsSubscribe: Subscriber<any>;
    tiposUsuarios: any[];
    colunas: any[];
    @ViewChild("filtroComponent") filtroComponent: UsuarioListaFiltroComponent;

    constructor(
        private usuarioService: UsuarioService,
        private messageService: MessageService,
        private handleErrorService: HandleErrorService,
        private confirmationService: ConfirmationService,
        private commonService: CommonService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.commonService
            .buscarEnumeradores()
            .subscribe(
                enumeradores =>
                    (this.tiposUsuarios = enumeradores.tiposUsuarios)
            );

        this.colunas = [
            criarConfiguracaoColuna("id", "#", TipoColuna.TEXTO),
            criarConfiguracaoColuna("nome", "Nome", TipoColuna.TEXTO),
            criarConfiguracaoColuna("email", "Email", TipoColuna.TEXTO),
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
            criarConfiguracaoColuna(
                "tipoUsuario.descricao",
                "Cargo",
                TipoColuna.TEXTO
            ),
            criarConfiguracaoColunaStatusAuditavel("Status"),
        ];
    }

    buscarUsuarios(filtro: any): void {
        this.usuarioService
            .buscarTodos(filtro)
            .subscribe(
                usuariosEncontrados => (this.usuarios = usuariosEncontrados)
            );
    }

    visualizarUsuario = usuario =>
        this.router.navigate([`/usuarios/visualizar/${usuario.id}`]);

    editarUsuario = usuario =>
        this.router.navigate([`/usuarios/editar/${usuario.id}`]);

    excluirUsuariosSelecionados(): void {
        this.confirmationService.confirm({
            message: "Tem certeza que deseja excluir os usuários selecionados?",
            header: "Confirmação",
            icon: "pi pi-exclamation-triangle",
            rejectLabel: "Não",
            acceptLabel: "Sim",
            accept: () => {
                this.usuariosSelecionados
                    .filter(usuario => !usuario.excluido)
                    .forEach(usuario => {
                        this.usuarioService.excluir(usuario.id).subscribe(
                            success => {
                                this.messageService.add({
                                    severity: "success",
                                    summary: "Sucesso",
                                    detail: `Usuário ${usuario.nome} excluído.`,
                                    life: 1500,
                                });
                                this.buscarUsuarios(
                                    this.filtroComponent.filtro
                                );
                            },
                            error => this.handleErrorService.handleError(error)
                        );
                    });
            },
        });
    }

    excluirUsuario(usuario: Usuario) {
        this.confirmationService.confirm({
            message: `Você têm certeza que deseja excluir o usuário ${usuario.nome} ?`,
            header: "Confirmação",
            icon: "pi pi-exclamation-triangle",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            accept: () => {
                this.usuarioService.excluir(usuario.id).subscribe(
                    success => {
                        this.messageService.add({
                            severity: "success",
                            summary: "Sucesso",
                            detail: "Usuário Excluído",
                            life: 3000,
                        });
                        this.buscarUsuarios(this.filtroComponent.filtro);
                    },
                    error => this.handleErrorService.handleError(error)
                );
            },
        });
        this.messageService.messageObserver.subscribe();
    }

    exibirAcaoEditar = (usuario: Usuario) => !usuario.excluido;

    exibirAcaoExcluir = (usuario: Usuario) => !usuario.excluido;
}
