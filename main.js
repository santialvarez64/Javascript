let total = 0;


function calcularTotal(precio) {
  total += precio;
}


do {
  let precioProducto = parseFloat(prompt("Ingresa el precio del producto o servicio (o escribe 'No' para finalizar):"));

  if (!isNaN(precioProducto)) {
    calcularTotal(precioProducto);
    alert("Valor acumulado: $" + total);
  } else if (precioProducto.toLowerCase() === "no") {
    
    break;
  } else {
    alert("Ingresa un número válido o escribe 'No' para finalizar.");
  }
} while (true);


alert("El valor total es: $" + total);

