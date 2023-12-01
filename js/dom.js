const container = document.getElementById("container-productos")
const imgCarrito = document.getElementById("imgCarrito")
const imagen = "../fotos/107831.png"
const inputSearch = document.querySelector("input#inputSearch")
imgCarrito.src = imagen
const carrito = []

// const filtrarProductos = (filtro)=> {
//     inputSearch.addEventListener("search", () => {
//         let resultado = productos.filter((productos) => productos.nombre.includes (filtro.trim().toUpperCase()))
        
//         if (resultado.length > 0) {
//             cargarProductos(resultado)
//         }
//     })
// }

// inputSearch.addEventListener("search", ()=> filtrarProductos(inputSearch.value))


inputSearch.addEventListener("search", () => {
    let resultado = productos.filter((productos) => productos.nombre.includes (inputSearch.value))
    console.table(resultado)
    if (resultado.length > 0) {
        cargarProductos(resultado)
    }
})


function cargarProductos() {
    container.innerHTML = ""
    if (productos.length > 0) {
        productos.forEach((producto) => {
            container.innerHTML += retornoCardHTML(producto)
        })
    } else {
        container.innerHTML = retornoCardErrorHTML()
    }

}



const btnCheckout = document.querySelector("div.btn-checkout")
btnCheckout.addEventListener("click", irAcheckout)

function irAcheckout() {
    location.href = "checkout.html"
}


function activarClickEnBotones() {
    const btnComprar = document.querySelectorAll("a.btn.btn-dark")
    for (boton of btnComprar) {
        boton.addEventListener("click", (e) => {
            let codigo = parseInt(e.target.id)
            let producto = productos.find((ropa) => ropa.id === codigo)
            carrito.push(producto)
            console.table(carrito)
        })
    }
}
cargarProductos(productos)
activarClickEnBotones()

// carrito.push(productos)
// console.table(carrito)
