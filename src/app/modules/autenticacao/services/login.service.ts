import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { SolicitacaoLogin } from "./../../../model/solicitacao-login";

@Injectable({
    providedIn: "root",
})
export class LoginService {
    constructor(private http: HttpClient) {}

    public logar(solicitacaoLogin: SolicitacaoLogin): Observable<any> {
        return this.http
            .post(`${environment.auth.api}/login`, solicitacaoLogin)
            .pipe(
                tap(resposta => {
                    localStorage.setItem(
                        environment.auth.tokenLocalStorage,
                        resposta.token
                    );
                })
            );
    }
}
