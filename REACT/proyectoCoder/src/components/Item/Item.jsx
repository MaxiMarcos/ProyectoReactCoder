export const Item = ({itemProducto}) => {
    return (
    <div>
        <li class="bg-primary">{itemProducto.name}</li>
        <img src={itemProducto.imagen} />
    </div>
    )
}
