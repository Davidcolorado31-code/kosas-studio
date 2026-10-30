import { redirecAlert } from "./alerts.js"
import { buscarUsuario } from "./data.js"
import { setLocalStorage } from "./local-storage.js";

function iniciarSesion() {
  let correo = document.querySelector("#correo").value
  let clave = document.querySelector("#clave").value
  let usuario = buscarUsuario(correo, clave)
  if (usuario) {
    setLocalStorage("usuario", usuario)
    redirecAlert("Bienvenido al sistema " + usuario.nombre, "success", "/pages/catalogo.html")
  } else {
    redirecAlert("Error de credenciales", "error", "/index.html")
  }
}

let btn_login = document.querySelector("#btn-login")



btn_login.addEventListener("click", iniciarSesion)
