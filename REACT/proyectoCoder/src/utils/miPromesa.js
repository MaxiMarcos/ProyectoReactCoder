let productos = [

    {id: 1, name: "camisetas", stock: 80},
    {id: 2, name: "gorras", stock: 44},
    {id: 3, name: "shorts", stock: 40},
    {id: 4, name: "accesorios", stock: 20},
    {id: 5, name: "zapatillas", stock: 50}
]

export function miPromesa(id) {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(id ? productos.find(prod => prod.id === id) : productos);
    }, 2000);


})

}