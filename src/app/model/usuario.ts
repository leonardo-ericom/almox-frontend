import { Departamento } from "./departamento"
import { Auditavel } from "./auditavel";

export interface Usuario extends Auditavel {
    id?: number;
    nome?: string;
    email?: string;
    tipoUsuario?: any;
    departamentos?: Departamento[];
}
