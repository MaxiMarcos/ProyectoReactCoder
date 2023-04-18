import { useEffect, useState } from 'react';
import { miPromesa } from '../../utils/miPromesa';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export function ItemDetailContainer(prop) {

        const [producto, setProducto] = useState({}) // en State pongo {} en lugar de [] ya que será un OBJETO
    
        useEffect(() => {
            async function getUnProd() {
            let miProd = await miPromesa(3)
            setProducto(miProd)
        
        }

        getUnProd()
    
        }, [])
    return  <>
                <div>
                    <ItemDetail producto={producto} />
                </div>


            </>

}
