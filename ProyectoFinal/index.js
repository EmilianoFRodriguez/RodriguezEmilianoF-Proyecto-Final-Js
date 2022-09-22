const productos = [
    {id: 1, filtro: "congelado", tipo: "milanesa", marca: "NotCo", precio: 1000,},
    {id: 2, filtro: "congelado", tipo: "hamburguesa", marca: "NotCo", precio: 1200,},
    {id: 3, filtro: "congelado", tipo: "nuggets", marca: "NotCo", precio: 1500,},
    {id: 4, filtro: "fruto seco", tipo: "avellana", marca: "NotCo", precio: 500,},
    {id: 5, filtro: "fruto seco", tipo: "nuez", marca: "NotCo", precio: 350,},
    {id: 6, filtro: "fruto seco", tipo: "almendra", marca: "NotCo", precio: 600,},
    {id: 7, filtro: "cereal", tipo: "anillos", marca: "NotCo", precio: 170,},
    {id: 8, filtro: "cereal", tipo: "copo de maiz", marca: "NotCo", precio: 150,}
];


let buscar = document.getElementById("buscador");




let buscarProducto = productos.filter(producto => producto.tipo === resultado);

console.log(buscarProducto);

//Carrito

const carrito = [];
for(let i = 0; i < 2; i++){
    let titulo = prompt("ingrese el titulo");
    let artista = prompt("ingrese el artista");
    let genero = prompt("ingrese el genero");
    let sello = prompt("ingrese el sello");
    let precio = prompt("ingrese el precio");
    let track = {
        titulo,
        artista,
        genero,
        sello,
        precio
    }
    carrito.push(track);
}