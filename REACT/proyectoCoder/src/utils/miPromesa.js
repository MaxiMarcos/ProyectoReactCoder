let productos = [

    {id: 1, name: "camisetas", stock: "Stock: 80", imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/568/017/products/milan-home-22-23-fan6-d0148d8a22a2e8771d16599295510033-640-0.jpg"},
    {id: 2, name: "gorras", stock: "Stock: 44", imagen: "https://www.digitalsport.com.ar/files/products/5d3f087f335e0-478863-500x500.jpg"},
    {id: 3, name: "shorts", stock: "Stock: 40", imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/291/743/products/napoli-home-111-61afee13fc9acc283816537734205997-640-0.webp"},
    {id: 4, name: "botines", stock: "Stock: 20", imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8db8df4f5ef343b89e19ab3e00bfbfda_9366/Botines_de_futbol_Predator_20.3_cesped_natural_seco_Blanco_EG0927_01_standard.jpg"},
    {id: 5, name: "camperas", stock: "Stock: 50", imagen: "https://www.digitalsport.com.ar/files/products/608a8fac01ee7-528211-500x500.jpg"}
]

export function miPromesa(id) {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(id ? productos.find(prod => prod.id === id) : productos);
    }, 2000);


})

}