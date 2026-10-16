function iniciarSesion() {
  let correo = document.querySelector("#correo").value
  let llave = document.querySelector("#clave").value
  if (correo == "correo@ejemplo.com" && llave == "123456") {
    alert("¡Bienvenido!")
    window.location.href = "/pages/catalogo.html"
  } else {
    alert("Error de credenciales...")
  }
}

let btn_login = document.querySelector("#btn-login")
let eventos = ["click", "dblclick", "mouseenter"]


btn_login.addEventListener("click", iniciarSesion)
