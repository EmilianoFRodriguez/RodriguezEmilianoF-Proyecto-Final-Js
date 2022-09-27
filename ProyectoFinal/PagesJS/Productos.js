const productos = [
    {id: 1, filtro: "congelados", tipo: "milanesa", marca: "NotCo", precio: 1000,},
    {id: 2, filtro: "congelados", tipo: "hamburguesa", marca: "NotCo", precio: 1200,},
    {id: 3, filtro: "congelados", tipo: "nuggets", marca: "Felices las vacas", precio: 1500,},
    {id: 4, filtro: "frutos secos", tipo: "avellana", marca: "Cerealmix", precio: 500,},
    {id: 5, filtro: "frutos secos", tipo: "nuez", marca: "Cerealmix", precio: 350,},
    {id: 6, filtro: "frutos secos", tipo: "almendra", marca: "Cerealmix", precio: 600,},
    {id: 7, filtro: "cereales", tipo: "anillos", marca: "Frutloops", precio: 170,},
    {id: 8, filtro: "cereales", tipo: "copo de maiz", marca: "Zucaritas", precio: 150,}
];

let lista = document.getElementById("contenedorProductos");
// let btnFrutos = document.getElementById("btnFrutos")
// btnFrutos.addEventListener("click") 

for(const producto of productos){
    let li = document.createElement("li");
    li.innerHTML =  `<div>
                        <div>
                        </div>
                        <div>
                            <h3>${producto.tipo}</h3>
                            <p>Marca: ${producto.marca}</p>
                            <p>Precio: $${producto.precio}</p>
                        </div>
                    </div`
    ;
    lista.append(li);
}