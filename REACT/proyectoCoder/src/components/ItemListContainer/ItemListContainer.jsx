import { useEffect, useState } from 'react';
import { miPromesa } from '../../utils/miPromesa';
import { ItemList } from '../ItemList/itemList';

export function ItemListContainer(prop) {

        const [productos, setProductos] = useState([])
    
        useEffect(() => {
            miPromesa
                .then((res) => setProductos(res))
                .catch((err) => console.log(err))
                .finally(()=>console.log("este es el final"));
    
        }, [])
    return  <>
    
                <div>
                    <h3>Bienvenido {prop.saludo}!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus harum illo est atque enim excepturi quod quis eveniet vero similique quibusdam, fugiat quisquam repellat corporis ex maxime eum minima?</p>
                </div>




                <div>
                    <ItemList productos={productos} />
                </div>


            </>

}
