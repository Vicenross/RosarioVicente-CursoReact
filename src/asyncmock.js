const misProductos = [
    {id: "1", nombre: "Vestido Azul", precio: 1500, img:"../public/img/azul/azul1.jpg", idCat:"bordados", stock:2 },
    {id: "2", nombre: "Vestido Rosa", precio: 1200, img:"../public/img/rosa/rosa1.jpg", idCat:"bordados", stock:2},
    {id: "3", nombre: "Vestido Verde", precio: 1300, img:"../public/img/verde/verde1.jpg", idCat:"patchwork", stock:1},
    {id: "4", nombre: "Vestido Bordo", precio: 1800, img:"../public/img/bordo/bordo1.jpg", idCat:"patchwork", stock:3},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
        const producto = misProductos.find(Item =>Item.id === id)
        resolve(producto)
        }, 100)
    })
}

//creamos una funcion que me retorne todo una categoria

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}