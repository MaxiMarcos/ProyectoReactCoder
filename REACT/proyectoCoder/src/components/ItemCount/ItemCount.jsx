import { useState } from "react";

export const ItemCount = () => {
    
    const [contador, setContador] = useState(0)

    const controlContador = () => {
        
        setContador(contador + 1);
    }

    
    // FALTA AGREGAR FUNCIONALIDAD DE SUMAR Y RESTAR AL BOTON

    return <div>
        
                <h2>contador: {contador} </h2>
                <button onClick={controlContador}>SUMAR</button>

            </div>
}