import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Departamento } from '../../../model/departamento';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
    providedIn: "root",
})
export class DepartamentoService extends CrudService<Departamento, number> {
    constructor(protected _http: HttpClient) {
        super(_http, `${environment.api.baseUrl}/departamentos`);
    }
}
