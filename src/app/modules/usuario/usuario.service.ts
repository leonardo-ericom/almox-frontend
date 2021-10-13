import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "../shared/crud.service";
import { Usuario } from "../../model/usuario";

import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class UsuarioService extends CrudService<Usuario, number> {
    constructor(protected _http: HttpClient) {
        super(_http, `${environment.api.baseUrl}/usuarios`);
    }
}
