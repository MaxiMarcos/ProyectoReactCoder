let productos = [

    {id: 1, name: "camisetas", stock: 80},
    {id: 2, name: "gorras", stock: 44},
    {id: 3, name: "shorts", stock: 40},
    {id: 4, name: "accesorios", stock: 20},
    {id: 5, name: "zapatillas", stock: 50}
]

export const miPromesa = (id) => {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);


})

}