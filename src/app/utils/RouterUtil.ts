import { ActivatedRouteSnapshot } from "@angular/router";

const rotaEstaEmModoVisualizacao = (activatedRoute: ActivatedRouteSnapshot) => {
    console.log(activatedRoute)
    if (!activatedRoute) return false;

    const [{ path }] = activatedRoute.url;
    return path && path === "visualizar";
};

export { rotaEstaEmModoVisualizacao };
