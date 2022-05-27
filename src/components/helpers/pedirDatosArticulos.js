import { Productos } from '../DBProductos/DBProductos'

/* Funcion con promesa para pedir datos del array de objetos */
export function PedirDatosArticulos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos)
    }, 0)
  })
}