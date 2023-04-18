import { useEffect, useRef, useState } from "react";

export const ItemCount = ({inicio=1, stock=5}) => {
    
    const [contador, setContador] = useState(0)

    
    const controlSuma = () => {
        if (contador < stock)
        setContador(contador + 1);
    }

    const controlResta = () => {
        if (contador > inicio)
        setContador(contador - 1);
    }


    return <div>
        
                <h5>Cargar productos: {contador} </h5>
                <div>
                <button onClick={controlResta}>-</button>
                <button onClick={controlSuma}>+</button>
                <button onClick={controlResta}>reset</button>
                </div>

            </div>
}