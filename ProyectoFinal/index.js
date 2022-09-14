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

// let resultadoFiltro = `Titulo: ${trackFiltrado.titulo}
// Artista: ${trackFiltrado.artista}
// Genero: ${trackFiltrado.genero}
// Sello: ${trackFiltrado.sello}
// Precio: $${trackFiltrado.precio}`
// ;

console.log(trackFiltrado);