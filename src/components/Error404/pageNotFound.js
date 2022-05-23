import React from 'react';
import './pageNotFound.css'

export const PageNotFound = () => {
  return (
    <div className='contenedor404 '>
      
       <form action="/">
     
         <img src='https://github.com/FabricioGodoy/imagenes/blob/main/404-error.jpg?raw=true' alt='pageNotFound' className='img404'></img>
            <button className='boton404'>
            <i class="fa-solid fa-house iconoHome"></i>
            <p className='textoBoton404_1'>
            IR AL INICIO
            </p>
            <p className='textoBoton404_2'>
            Salir
            </p>
            </button>
        </form>
    
    </div>
  )
}
