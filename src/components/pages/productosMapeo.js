import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ProductosMapeo = ({stock}) => {
    return (
      <Container className='my-5'>
            <h2 className='tituloStock'>Productos del Json</h2>
          <hr/>
          <Row>
  
            {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}
  
          {stock.map( (articulo)=> (
                      <article key={articulo.id} className='contenedorCardStock' id='body'>
                                 <img src={articulo.img} className='imagenStock' alt="Foto stock"/>
                            <section className='cardStock'>
                                <div className='cardStock-body'>
                                  <h3 className='stockNombre'>{articulo.marca}</h3>
                                  <p className='stockCargo mt-3'>{articulo.descripcion}</p>
                                <Link to={ `/detalleProductos/${articulo.id}` }>
                                  <button className="botonMasInfoStock" type="submit">Más info...</button>
                                </Link>
                                </div>
                            </section>
                      </article>
                  ))
              }
          </Row>
      </Container>
    )
  }
  