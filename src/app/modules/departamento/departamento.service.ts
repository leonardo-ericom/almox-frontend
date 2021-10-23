import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { CrudService } from '../shared/crud.service';
import { Departamento } from './../../model/departamento';

@Injectable({
    providedIn: "root",
})
export class DepartamentoService extends CrudService<Departamento, number> {
    constructor(protected _http: HttpClient) {
        super(_http, `${environment.api.baseUrl}/departamentos`);
    }
}
