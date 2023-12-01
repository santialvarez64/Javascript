const inputCodigo = document.querySelector("#inputCodigo")
const inputNombre = document.querySelector("#inputNombre")
const inputImporte = document.querySelector("#inputPrecio")
const formulario = document.querySelector("form")

const crearID = ()=> parseInt(Math.random() * 9_000 + 1000) 

recuperoStorage() 

function limpiarCampos() {
    inputCodigo.value = ""
    inputNombre.value = ""
    inputImporte.value = ""
}


function guardarProducto() {
    inputCodigo.value = crearID()
    let nuevoProducto = {id: inputCodigo.value, nombre: inputNombre.value, precio: inputPrecio.value}
        productos.push(nuevoProducto)
        alert("Nuevo producto agregado")
        console.clear()
        console.table(productos)
        limpiarCampos()
        actualizoStorage()
}

formulario.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarProducto()
})