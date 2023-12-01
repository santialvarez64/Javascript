function retornoCardHTML(producto) {
// TEMLPATE STRING = `<P></P>`
// TEMPLATE LITERAL = ${}
    return `<div class="card" >
    <img class="card-img" src="${producto.img}" alt="${producto.nombre}>
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <div class="card-price">$ ${producto.precio}</div>
      <a id="${producto.id}" href="#" class="btn btn-dark">Agregar al carrito</a>
    </div>`
}

function retornoCardErrorHTML(){
    return ` <div class="card-error ocultar">
    <h2>tenemos un problema </h2>
    <h3>No pudimos cargar los productos. </h3>
    <h3>Intenta nuevamente en unos instantes...</h3>
</div>
</div>
`
}



