const productos = [
    {id: 1, nombre: "remera", precio: 1500},
    {id: 2, nombre: "pantalon", precio:3500},
    {id: 3, nombre: "buzo", precio: 1300},
    {id: 4, nombre: "jeans", precio: 2500},
    {id: 5, nombre: "shorts", precio: 1500},
    {id: 6, nombre: "canguro", precio: 2600},
    {id: 7, nombre: "championes", precio: 990},
    
]

let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo? si o no")
}

if(seleccion == "si"){
    alert("Estos son nuestros productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$" )

    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por venir")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0
    if(producto == "remera" || producto == "pantalon" || producto == "buzo" || producto == "jeans" || producto == "shorts" || producto == "canguro" || producto == "championes"){
        switch(producto){
            case "remera":
            precio = 1500;
            break;
            
            case "pantalon":
            precio = 3500;
            break;

            case "buzo":
            precio = 1300;
            break;

            case "jeans":
            precio = 2500;
            break;

            case "shorts":
            precio = 1500;
            break;

            case "canguro":
            precio = 2600;
            break;

            case "championes":
            precio = 990;
            break;
            default:
            break;
        }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else{
        alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando? si o no")
    
    while(seleccion == "no"){
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)
