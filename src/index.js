import router from "./router"

//Ejecuta el JS despues de que se haya cargado todo el DOM
document.addEventListener("DOMContentLoaded", () => {
    router('#app');
    window.addEventListener('popstate', () => router('#app'))
});