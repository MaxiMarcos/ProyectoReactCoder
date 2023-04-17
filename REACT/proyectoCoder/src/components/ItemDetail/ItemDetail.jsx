import { Item } from "../Item/Item"

export const ItemDetail = ({producto}) => {
    return (
    <div>
        <h3>{producto.name}</h3>
        <h6>{producto.stock}</h6>
    </div>
    )
}

// Tengo que modificar para llamar a un solo producto, no a todos como en itemlistcontainer
