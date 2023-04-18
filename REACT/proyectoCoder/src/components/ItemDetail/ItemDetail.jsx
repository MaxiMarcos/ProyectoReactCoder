import { Item } from "../Item/Item"

export const ItemDetail = ({producto}) => {
    return (

        <div className="d-flex">

            <div className="card w-25 bg-light text-dark border-primary border-4 m-auto">

                <div className="d-flex w-50 h-50 m-auto">
                    <img src={producto.imagen} className="w-100 h-100"/>
                </div>
                <div className="card-body">
                    <h3>{producto.name}</h3>
                    <h6>{producto.stock}</h6>
                </div>
                <div className="card-footer bg-light">
                    <button className="btn btn-outline-dark">Seleccionar</button>
                </div>
            </div>

        </div>
    )
}

// Tengo que modificar para llamar a un solo producto, no a todos como en itemlistcontainer
