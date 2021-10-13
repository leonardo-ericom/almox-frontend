import { Auditavel } from "./auditavel";
import { ConfiguracaoEstoque } from "./configuracao-estoque";
import { Departamento } from "./departamento";
import { Fabricante } from "./fabricante";
import { Grupo } from "./grupo";

export interface Produto extends Auditavel {
    id?: number;
    descricao?: string;
    codigoBarras?: string;
    unidadeMedida?: any;
    palavrasChaves?: string[];
    custoMedio?: number;
    fabricante?: Fabricante;
    detalhes?: string;
    departamentos?: Departamento[];
    grupo?: Grupo;
    configuracaoEstoque?: ConfiguracaoEstoque;
}
