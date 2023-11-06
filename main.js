//Simulador basico de tienda, en este simulador agregamos un producto o servicio ingresando los precios a pagar y asi vamos acumulando, para luego ver el precio total.

// Defino variable
let total = 0;

// calcular valor total 
function calcularTotal(precio) {
  total += precio;
}

// Bucle para agregar productos o servicios
do {
  let precioProducto = prompt("Ingresa el precio del producto o servicio (o escribe 'No' para finalizar):");

  if(precioProducto === null){
    alert("Gracias por visitarnos")
    break;
  }

  if (!isNaN(parseFloat(precioProducto))) {
    precioProducto = parseFloat(precioProducto); // Convertimos a número
    calcularTotal(precioProducto);
    alert("Valor acumulado: $" + total);
  } else if (precioProducto.toLowerCase() === "no") {
    // si el usuario escribe no, salimos del bucle
    break;
  } else {
    alert("Ingresa un número válido o escribe 'No' para finalizar.");
  }
} while (true);

// Mostrar el valor total acumulado

if (total > 0){
  alert("El valor total es: $" + total);
}


