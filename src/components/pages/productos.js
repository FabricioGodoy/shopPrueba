import { useState, useEffect } from 'react';
import Productos from '../DBProductos/DBProductos';


export const MostrarProductos = () => {
    const producto = Productos;
    const [prod, setProducto] = useState();

    const fetchear = async () =>{
        const res = await fetch(producto);
        const resJson = await res.json()
        setProducto(resJson)
        
        console.log(resJson)
    }
    useEffect(() =>{
        fetchear()
    },[]);
    return(
        <div>

            {!prod ? "Cargando.." : prod.map(
               function (prod){
                    return(
                        <div>
                            <h1> {prod.id}</h1>
                        </div>
                    )
                }
            ) }    
        </div>
    )

}