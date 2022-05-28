import routes from "../routes";
import getRoute from "./getRoute";

const resolveRoute = function(routes){
    return routes.find(r => r.path === getRoute());
};

const mountApp = function(app, route){
    app.appendChild(route.component);
}

const router = function(mountPoint){
    const app = document.querySelector(mountPoint);
    let route = resolveRoute(routes);

    try {

        if (route) {
            
            if(route.component instanceof HTMLElement){
                mountApp(app,route);
            }else{
                throw `El componente de la ruta ${route.name} no es un HTMLElement`
            }
            
        }else{
            throw 'Failed to load resource: the server responded with a status of 404 ()';
        }

    } catch (error) {

        window.history.pushState(null,null, 'notFound');
        let route = resolveRoute(routes);
       
        console.error(error)
        if (route) {
            if (route.component instanceof HTMLElement) {
                mountApp(app,route);
                return;
            }
        }

        const nodoNotFound = document.createElement('h1');
        nodoNotFound.innerHTML = 'Pagina no encontrada <br> Error 404'
        route = {
            component: nodoNotFound
        }
        mountApp(app,route);

    }

   
};

export default router;