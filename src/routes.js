import Home from "./views/Home";

const notFound = document.createElement('h1');
notFound.innerText = 'Pagina no encontrada';


const routes = [
    {
        path: "/Home",
        component: Home(),
        name: 'test'
    },
    {
        path: "/",
        component: Home(),
        name: 'Home'
    },
    {
        path: "/notFound",
        component: notFound,
        name: 'Error404'
    }
];


export default routes;