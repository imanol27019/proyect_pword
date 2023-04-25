const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const contenedorAuxHeader = document.querySelector("#contenedor-aux1");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
