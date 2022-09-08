const tracks = [
    {titulo:'', artista:'neverdogs', genero:'minimal', sello:'', precio:'350'},
    {titulo:'', artista:'adam beyer', genero:'techno', sello:'', precio:'350'},
    {titulo:'', artista:'marco carola', genero:'tech house', sello:'', precio:'350'},
    {titulo:'', artista:'richie hawtin', genero:'techno', sello:'', precio:'350'},
    {titulo:'', artista:'dennis cruz', genero:'minimal', sello:'', precio:'350'},
    {titulo:'', artista:'paco osuna', genero:'tech house', sello:'', precio:'350'}
];

// let genero = prompt('Que genero queres buscar?');
// function buscarGenero(genero){
//     if(genero === 'minimal'){
//         return resultadoMinimal;
//     }
// };

let resultadoMinimal = tracks.filter(tipo => tipo.genero === 'minimal' );



console.log(resultadoMinimal);