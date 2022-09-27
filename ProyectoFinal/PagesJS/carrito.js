

// const guardarCarrito = (clave, valor) => {localStorage.setItem(clave, valor)};


let carritoStorage = localStorage.getItem("carrito");
let carritoContenedor = document.getElementById("carritoC")
let carrito = [];

if(carritoStorage){
    carrito = JSON.parse(carritoStorage) 
};

if(carrito.length > 0){
    carrito.forEach(elemento => {
        let itemCarrito = document.createElement("div");
        itemCarrito.innerHTML = `<div>
                                    <div>
                                    </div>
                                    <div>
                                        <h3>${elemento.tipo}</h3>
                                        <p>Precio: $${elemento.precio}</p>
                                    </div>
                                </div`
    carritoContenedor.append(div);
    });
}else {
    let itemCarrito = document.createElement("div");
    itemCarrito.innerHTML = `<p> No hay productos en el carrito </p>`
    carritoContenedor.append(div);
};

let botonLC = document.getElementById("limpiar");
botonLC.addEventListener("click", () => {
    localStorage.clear();
});