const tracks = [
    {titulo:'', artista:'neverdogs', genero:'minimal', sello:'', precio:'350'},
    {titulo:'', artista:'adam beyer', genero:'techno', sello:'', precio:'350'},
    {titulo:'', artista:'marco carola', genero:'tech house', sello:'', precio:'350'},
    {titulo:'', artista:'richie hawtin', genero:'techno', sello:'', precio:'350'},
    {titulo:'', artista:'dennis cruz', genero:'minimal', sello:'', precio:'350'},
    {titulo:'', artista:'paco osuna', genero:'tech house', sello:'', precio:'350'}
];


let genero = prompt("Ingrese el genero a buscar");

let trackFiltrado = tracks.filter(track => track.genero === genero);

console.log(trackFiltrado);

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