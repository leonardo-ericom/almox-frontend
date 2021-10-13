import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";
import { Produto } from "../../model/produto";
import { CrudService } from "../shared/crud.service";

@Injectable({
    providedIn: "root",
})
export class ProdutoService extends CrudService<Produto, number> {
    constructor(protected _http: HttpClient) {
        super(_http, `${environment.api.baseUrl}/usuarios`);
    }
}
