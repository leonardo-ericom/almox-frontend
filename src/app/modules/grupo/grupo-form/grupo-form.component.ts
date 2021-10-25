import { Produto } from './../../../model/produto';
import { NgForm } from '@angular/forms';
import { Grupo } from './../../../model/grupo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GrupoService } from '../grupo.service';
import { CommonService } from '../../shared/common.service';
import { HandleErrorService } from '../../shared/handle-error.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { rotaEstaEmModoVisualizacao } from 'src/app/utils/RouterUtil';


@Component({
  selector: 'grupo-form',
  templateUrl: './grupo-form.component.html',
})
export class GrupoFormComponent implements OnInit {

grupo: Grupo ={};
descricao: String;
produtos: Produto[];
editandoRegistroExistente: boolean;
modoVisualizacao: boolean;
@ViewChild("formulario") formulario: NgForm;

constructor(
    private grupoService: GrupoService,
    private handleErrorService: HandleErrorService,
    private messageService: MessageService,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
          const id: number = params["id"];
          if(id) {
              this.editandoRegistroExistente = true;
              this.grupoService
              .buscarPorId(id)
              .subscribe(grupo => (this.grupo = grupo));
          }
      });

      this.modoVisualizacao = rotaEstaEmModoVisualizacao(
        this.activatedRoute.snapshot
    );
  }

  onSubmit(formulario: NgForm): void{
      const httpSubscriber = this.editandoRegistroExistente
      ? this.grupoService.atualizar(this.grupo.id, this.grupo)
      : this.grupoService.criar(this.grupo);
      console.log(this.grupo)
      httpSubscriber.subscribe(
          sucess => {
              this.messageService.add({
                  severity: "sucess",
                  summary: "Sucesso",
                  detail: "Grupo Excluído",
                  life: 3000,
              });
              this.router.navigate(["/grupos/"]);
          },
          error => this.handleErrorService.handleError(error)
      );
  }

  limpar(): void{
      this.grupo = {};
  }

  habilitarModoEdicao = () =>
  this.router.navigate([`grupos/editar/${this.grupo.id}`]);
}
