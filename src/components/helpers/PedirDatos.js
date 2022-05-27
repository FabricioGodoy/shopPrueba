import { Empleados } from '../Data/Empleados'

/* Funcion con promesa para pedir datos del array de objetos */
export function PedirDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Empleados)
    }, 0)
  })
}
