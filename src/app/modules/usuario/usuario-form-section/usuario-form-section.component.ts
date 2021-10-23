import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from "@angular/core";
import { ControlContainer, FormGroup, NgForm, NgModel } from "@angular/forms";
import { Usuario } from "src/app/model/usuario";

@Component({
    selector: "usuario-form-section",
    templateUrl: "./usuario-form-section.component.html",
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class UsuarioFormSectionComponent {
    @Input() usuario: Usuario;
    @Input() tiposUsuarios: any[];
    @Input() modoVisualizacao: boolean;

    constructor() {}
}
