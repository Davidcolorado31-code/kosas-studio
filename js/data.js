let usuarios = [
    {
        id: "id1",
        nombre: "David Colorado",
        correo: "david@ejemplo.com",
        telefono: "1234567890",
        contrasena: "123456"
    },
    {
        id: "id2",
        nombre: "Laura Blandon",
        correo: "laura@ejemplo.com",
        telefono: "0987654321",
        contrasena: "654321"
    }
]


export function buscarUsuario(correo, clave) {
   let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.contrasena)
   return auth
}

export function registrarUsuario() {

}