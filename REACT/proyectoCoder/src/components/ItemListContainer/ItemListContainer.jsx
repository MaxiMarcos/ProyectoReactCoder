import { useEffect, useState } from 'react';
import { miPromesa } from '../../utils/miPromesa';
import { ItemList } from '../ItemList/ItemList';

export function ItemListContainer(prop) {

        const [productos, setProductos] = useState([])
    
        useEffect(() => {
            async function getProd() {
            let misProd = await miPromesa()
            setProductos(misProd)
        
        }

        getProd()
    
        }, [])
    return  <>
    
                <div>
                    <h4 className='p-3'>Bienvenido {prop.saludo}!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus harum illo est atque enim excepturi quod quis eveniet vero similique quibusdam, fugiat quisquam repellat corporis ex maxime eum minima?</p>
                </div>




                <div>
                    <ItemList productos={productos} />
                </div>


            </>

}
