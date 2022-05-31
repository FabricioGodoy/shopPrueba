import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const DetalleMapeo = ({producto}) => {
    return (
      <Container className='my-5'>
            <h2 className='tituloStock'>Productos del Json</h2>
          <hr/>
          <Row>
  
            {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}
  
          {producto.map( (articulo)=> (
                      <article key={articulo.id} className='contenedorCardStock' id='body'>
                          
                                 <img src={articulo.img} className='imagenStock' alt="Foto stock"/>
                                      <h3 className='stockNombre'>{articulo.caracteristicas}</h3>
                              
                      </article>
                  ))
              }
          </Row>
      </Container>
    )
  }
  