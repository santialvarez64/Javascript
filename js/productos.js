const productos = [ { id: 1, img: "../fotos/campera 1.JPG", nombre: "Campera de pana", precio: 3300 },
                    { id: 2, img: "../fotos/campera 2.JPG", nombre: "Campera cuadros", precio: 3300 },
                    { id: 3, img: "../fotos/hoodie 1.PNG", nombre: "Hoodie 80's", precio: 2800 },
                    { id: 4, img: "../fotos/hoodie 2 m lxl 2xl.JPG", nombre: "hoodie future", precio: 2800 },
                    { id: 5, img: "../fotos/pant 2.JPG", nombre: "Pantalon de pana", precio: 1500 },
                    { id: 6, img: "../fotos/pant 1.JPG", nombre: "Pantalon gabardina", precio: 1500 },
                    { id: 7, img: "../fotos/remera 2 s m l xl.JPG", nombre: "Remera flor ", precio: 900 },
                    { id: 8, img: "../fotos/remera 1.PNG", nombre: "Remera flor 2", precio: 900 },
                    { id: 9, img: "../fotos/remera 3 xxl xl l m.JPG", nombre: "Remera mixed graphic", precio: 900 },
                    { id: 10, img: "../fotos/buzo 1.JPG", nombre: "Buzo childish", precio: 1200 },
                    { id: 11, img: "../fotos/tablas derretidos.JPG", nombre: "Tablas derretidos", precio: 2500 },
                    { id: 12, img: "../fotos/tablas fuma.JPG", nombre: "Tabla spliff", precio: 2500 },
                    { id: 13, img: "../fotos/tablas bestia flor.JPG", nombre: "Tablas bestia", precio: 2500 },
                    { id: 14, img: "../fotos/tablas japo.PNG", nombre: "Tablas japo", precio: 2500 },
                    { id: 15, img: "../fotos/ruedas.JPG", nombre: "Ruedas", precio: 1300 },
                    { id: 16, img: "../fotos/bronson bearings.JPG", nombre: "Bronson bearings", precio: 2000 } ]
                    
// const productos = []                   

                    function actualizoStorage() {
                        if (productos.length > 0) {
                            localStorage.setItem("productos", JSON.stringify(productos))
                        }
                    }
                    
                    function recuperoStorage() {
                        let productosString = localStorage.getItem("productos")
                        if (productosString !== null) {
                            const productosDeStorage = JSON.parse(productosString)
                            productos.push(...productosDeStorage) 
                        }
                    }                    
                    