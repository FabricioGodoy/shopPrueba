import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ProductosMapeo } from "../pages/productosMapeo"
import { PedirDatosArticulos } from "../helpers/pedirDatosArticulos"

export function ProductoLista() {
    const [loading, setLoading] = useState(false)
    const [stock, setStock] = useState([])

    const { catId } = useParams()

    /* Funcion para validar el staff, coincidiendo la propiedad category con la url  */
    useEffect(() => {
        setLoading(true)
        PedirDatosArticulos()
            .then((resp) => {
                if (!catId) {
                    setStock(resp)
                } else {
                   
                    // eslint-disable-next-line eqeqeq
                    setStock(resp.filter(producto => producto.id == catId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    /* Termina funcion que valida staff */
    /* retorna un ternario, en caso de que no este el mapeo muestra cargando */
    return (
        <>
            {loading
                ? <p>Cargando...</p>
                : <ProductosMapeo stock={stock} />}
        </>
    )
}