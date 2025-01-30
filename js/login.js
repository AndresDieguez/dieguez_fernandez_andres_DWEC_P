let usersJSONPath = '../datos/users.json';
function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
            console.log("Usuarios cargados y almacenados en Local Storage:", data);
            validarCredenciales()
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {
    let formulario = document.getElementById('login-form');
    let mensajes = document.getElementById('error-message');

    let usuariosLS = JSON.parse(localStorage.getItem("usuarios"))
    //console.log(usuariosLS);

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        let username = document.getElementById('username').value;
        //console.log(username);
        let password = document.getElementById('password').value;
        //console.log(password);
        let usuarioEncontrado = usuariosLS.usuarios.find((usu) =>usu.username === username && usu.password === password)
        //console.log(usuarioEncontrado);
        if (usuarioEncontrado){
            window.location.href = 'interfaces/juego.html'
        } else {
            mensajes.style.display = 'block'
            mensajes.textContent = 'Usuario o Contraseña Incorrectos'
        }

    })

}
cargarJSONEnLocalStorage()




