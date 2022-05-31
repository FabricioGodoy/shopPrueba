import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { DetalleMapeo } from "../DBProductos/DetalleProductoLista"
import { PedirDatosArticulos } from "../helpers/pedirDatosArticulos"

export function DetalleProducto() {
    const [loading, setLoading] = useState(false)
    const [producto, setProducto] = useState([])

    const { catId } = useParams()

    /* Funcion para validar el staff, coincidiendo la propiedad category con la url  */
    useEffect(() => {
        setLoading(true)
        PedirDatosArticulos()
            .then((resp) => {
                if (!catId) {
                    setProducto(resp)
                } else {
                    setProducto(resp.filter(articulo => articulo.id === catId))
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
                : <DetalleMapeo producto={producto} />}
        </>
    )
}