import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const ProductosMapeo = ({stock}) => {
    return (
      <Container className='my-5'>
            <h2 className='tituloStock'>Productos del Json</h2>
          <hr/>
          <Row>
  
            {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}
  
          {stock.map( (articulo)=> (
                      <div key={articulo.id} className='contenedorCardStock' id='body' style={{width: "16rem", margin: "10px", textAlign: "center"}}>
                            <div className='cardStock'>
                                    <img src={articulo.img} className='imagenStock' alt="Foto stock"/>
                                <div className='cardStock-body'>
                                  <h4 className='stockNombre'>{articulo.marca}</h4>
                                  <p className='stockCargo mt-3'>{articulo.descripcion}</p>
                                  <button className="botonMasInfoStock" type="submit">MAS INFO</button>
                                </div>
                            </div>
                      </div>
                  ))
              }
          </Row>
      </Container>
    )
  }
  