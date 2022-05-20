import React from "react";
import { Container } from 'react-bootstrap';

export const CentroDeAyuda = () => {

    return (
        
        <>
        <img src="https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/CentroDeAyuda/BannerCentroDeAyuda.jpg" className="imgCentroDeAyuda" alt="Imagen banner centro de ayuda"></img>
            <Container className = 'contenedor'>
            
            
                    <h3 className='tituloAyudas'> ¿Necesitás hacernos alguna pregunta?</h3>
                <section className= 'ayudas'>
            
                    <article className = 'boxAyudas' >
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                    <section className='tituloAyudas'> Consultas sobre facturación.</section>
                    </article>
            
                    <article className = 'boxAyudas' >
                    <i className="fas fa-truck"></i>
                    <section className='tituloAyudas'> Consultas sobre envíos.</section>
                    </article>
                    
                    <article className = 'boxAyudas' >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <section className='tituloAyudas'> Consultas por retiros en sucursal.</section>
                    </article>
                    
                    <article className = 'boxAyudas' >
                    <i className="fa-solid fa-magnifying-glass-location"></i>
                     <section className='tituloAyudas'>Consultas sobre tus compras.</section>
                    </article>             
               
                </section>
                
                    <h3 className='tituloAyudas'> Navegá en el centro de ayuda:</h3>
             
                <section className='ayudas '>
                
                    <div className="listadoCentroAyuda">
                        <p className='accesoAyuda' type="button" data-bs-toggle="collapse" data-bs-target="#miCuenta" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-circle-user"></i>
                            Mi cuenta
                        </p>
                            <div className="collapse listadoAyudas ayudasMiCuenta" id="miCuenta">
                                <ul>
                                    <li>Olvidé mi contraseña</li>
                                    <li>¿Cómo modifico mi contraseña actual?</li>
                                    <li>¿Puedo cambiar o actualizar mis datos de perfil?</li>
                                </ul>
                            </div>
                        <p className='accesoAyuda' type="button" data-bs-toggle="collapse" data-bs-target="#comprarOnline" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-cart-shopping"></i>
                            Comprar online
                        </p>
                            <div className="collapse listadoAyudas" id="comprarOnline">
                                <ul>
                                    <li>Comprar Online</li>
                                    <li>Beneficios</li>
                                </ul>
                            </div>
                        <p className='accesoAyuda' type="button" data-bs-toggle="collapse" data-bs-target="#FormasDePago" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-comment-dollar"></i>
                            Formas de pago
                        </p>
                            <div className="collapse listadoAyudas" id="FormasDePago">
                                <ul>
                                    <li>Compra Online</li>
                                    <li>Compra presencial</li>
                                </ul>
                            </div>
                    </div>
                    <div className="listadoCentroAyudas">
                        <p className='accesoAyuda' type="button" data-bs-toggle="collapse" data-bs-target="#FormasDeEntrega" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-truck-fast"></i>
                            Formas de entrega
                        </p>
                            <div className="collapse listadoAyudas" id="FormasDeEntrega">
                                <ul>
                                    <li>Andreani a domicilio</li>
                                    <li>Andreani a sucursal</li>
                                </ul>
                            </div>
                        <p className='accesoAyuda' type="button" data-bs-toggle="collapse" data-bs-target="#garantiaCambioDevoluciones" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-file-circle-plus"></i>
                            Garantía, cambio y devoluciones
                        </p>
                            <div  className="collapse listadoAyudas" id="garantiaCambioDevoluciones">
                                <ul>
                                    <li>Políticas de garantías</li>
                                    <li>Política de cambios y devoluciones</li>
                                </ul>
                            </div>
                        <p className='accesoAyuda' type="button" data-bs-toggle="collapse" data-bs-target="#preguntasFrecuentes" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa-solid fa-comments-dollar"></i>
                            Preguntas frecuentes
                        </p>
                            <div className="collapse listadoAyudas" id="preguntasFrecuentes">
                                <ul>
                                    <li>Facturación</li>
                                    <li>Productos</li>
                                    <li>Seguimiento</li>{}
                                    <li>Post-venta</li>
                                    <li>Contacto</li>
            
                                </ul>
                            </div>
                    </div>
                </section>
            
            </Container>
        </>
    )
}