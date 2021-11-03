import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "src/app/model/usuario";
import { environment } from "src/environments/environment";
import { CrudService } from "../../shared/services/crud.service";

@Injectable({
    providedIn: "root",
})
export class UsuarioService extends CrudService<Usuario, number> {
    constructor(protected _http: HttpClient) {
        super(_http, `${environment.api.baseUrl}/usuarios`);
    }
}
