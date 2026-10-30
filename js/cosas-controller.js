import { getLocalStorage } from "./local-storage.js";
let usuario = getLocalStorage("usuario")
document.querySelector("#nombre-usuario").textContent = usuario.nombre

function registrarCosa() {
    let nombre_producto = document.querySelector("#nombre-producto").value
    let precio = document.querySelector("#precio").value
    let categoria = document.querySelector("#categoria").value
    let materiales = document.querySelector("#materiales").value
    let dimensiones = document.querySelector("#dimensiones").value
    let stock = document.querySelector("#stock").value
    let descripcion = document.querySelector("#descripcion").value
    let foto_producto = document.querySelector("#foto-producto").value
    let cosa = {nombre_producto, precio, categoria, materiales, dimensiones, stock, descripcion, foto_producto}
    
}

let btn_registrar_cosas = document.querySelector("#btn-registrar-cosas")
btn_registrar_cosas.addEventListener("click", registrarCosa)