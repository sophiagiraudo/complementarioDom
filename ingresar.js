let formulario = document.getElementsByTagName('form')
let buttonEnviar = document.getElementById ('button')
buttonEnviar.onclick = () => {
    let inputNombre = document.getElementById('nombre').value
    let inputApellido = document.getElementById('apellido').value
    let inputEmail = document.getElementById('email').value
    let inputContrasena = document.getElementById('password').value

let sec2 = document.getElementById ('sec2')
sec2.innerHTML = `<h1>Bienvenid@! ${inputNombre} ${inputApellido} </h1>
<h2>Ya sos parte de E-Ticket</h2>
<a href="index.html"><button>COMPRAR TICKETS!</button></a>`

    console.log (inputApellido,inputContrasena,inputEmail,inputNombre)
}
