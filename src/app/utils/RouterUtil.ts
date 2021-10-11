import { ActivatedRouteSnapshot } from '@angular/router';

const rotaEstaEmModoVisualizacao = (activatedRoute: ActivatedRouteSnapshot) => {
    const [{ path }, {}] = activatedRoute.url;
    return path && path === "visualizar";
};

export { rotaEstaEmModoVisualizacao };

