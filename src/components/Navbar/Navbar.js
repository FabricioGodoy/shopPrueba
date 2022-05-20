import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default class Barra1 extends Component {

  render() {
    return <div>
        <Navbar expand="lg" className='barra'>
          <Container fluid>
            <Navbar.Brand href="/"> <Link to="/"><img src='https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/logo/logo.webp' alt="Logo de la pagina" className='setlogo'></img></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ height: '100%' }}>
        
                  <NavDropdown title="MARCAS" id="navbarScrollingDropdown">
                    <NavDropdown.Item><Link to="/marcas/006" className='dropdown-item mod'>APC</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/ARU" className='dropdown-item mod'>ARUBA NETWORK WIRED</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/CAM" className='dropdown-item mod'>CAMBIUM NETWORKS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/EVG" className='dropdown-item mod'>EVGA</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/GRA" className='dropdown-item mod'>GRANDSTREAM</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/HSS" className='dropdown-item mod'>HP SERVERS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/HPS" className='dropdown-item mod'>HP STORAGE</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/TSS" className='dropdown-item mod'>HP SERVICES</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/HUA" className='dropdown-item mod'>HUAWEI</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/JAB" className='dropdown-item mod'>JABRA</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/LEN" className='dropdown-item mod'>LENOVO</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/MER" className='dropdown-item mod'>MERCUSYS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/065" className='dropdown-item mod'>MIKROTIK</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/QNP" className='dropdown-item mod'>QNAP</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/ITO" className='dropdown-item mod'>ITOKII</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/SDS" className='dropdown-item mod'>SAMSUNG DISPLAY</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/SMO" className='dropdown-item mod'>SAMSUNG MONITORS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/TPL" className='dropdown-item mod'>TP LINK</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/UBI" className='dropdown-item mod'>UBIQUITI</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/YEA" className='dropdown-item mod'>YEALINK</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/YES" className='dropdown-item mod'>YEASTAR</Link></NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="OUTLET" id="navbarScrollingDropdown">
                    <NavDropdown.Item> <Link to="nuestraempresa" className='dropdown-item mod'>LA EMPRESA</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="contacto" className='dropdown-item mod'>CONTACTO</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="trabajaconnosotros" className='dropdown-item mod'>TRABAJA CON NOSOTROS</Link></NavDropdown.Item>
                    <NavDropdown.Item href="pdf/Anticorrupcion.pdf" target="_blank">POLITICA ANTICORRUPCION</NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/empleados" className='dropdown-item mod'>STAFF</Link></NavDropdown.Item>

                  </NavDropdown>

                  <Nav.Link id="navbarScrollingDropdown">12 y 18 CUOTAS SIN INTERES</Nav.Link>

                  <Button className='botonNav'> <Link to="centro_de_ayuda" className='linkBoton'>CENTRO DE AYUDA</Link></Button>          

                </Nav>
                <Form className="d-flex barritaForm">
                  <FormControl
                    type="search"
                    placeholder="Que buscas?"
                    className="me-2 barritab"
                    aria-label="Search"
                  />
                  <Button variant="outline-warning">Buscar</Button>
                </Form>

              </Navbar.Collapse>
    </Container>
  </Navbar>

  <Navbar expand="lg" className='barra2'>
          <Container fluid >
            <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" className='colt'>
                  <Nav className="me-auto my-2 my-lg-0 ">
        
                  <NavDropdown title="TV, Audio y Video" id="navbarScrollingDropdown">
                    <NavDropdown.Item><Link to="/marcas/006" className='dropdown-item mod'>APC</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/ARU" className='dropdown-item mod'>ARUBA NETWORK WIRED</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/CAM" className='dropdown-item mod'>CAMBIUM NETWORKS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/marcas/EVG" className='dropdown-item mod'>EVGA</Link></NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Camaras" id="navbarScrollingDropdown">
                    <NavDropdown.Item> <Link to="nuestraempresa" className='dropdown-item mod'>LA EMPRESA</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="contacto" className='dropdown-item mod'>CONTACTO</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="trabajaconnosotros" className='dropdown-item mod'>TRABAJA CON NOSOTROS</Link></NavDropdown.Item>
                    <NavDropdown.Item href="pdf/Anticorrupcion.pdf" target="_blank">POLITICA ANTICORRUPCION</NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/empleados" className='dropdown-item mod'>STAFF</Link></NavDropdown.Item>

                  </NavDropdown>

                  <NavDropdown title="Computacion" id="navbarScrollingDropdown">
                    <NavDropdown.Item><Link to="/capacitaciones" className='dropdown-item mod'>CAPACITACIONES</Link></NavDropdown.Item>
                    <NavDropdown.Item href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target="_blank">ON DEMAND</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Gaming" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="https://www.solutionbox.com.ar/info-impositiva">LEGAJO IMPOSITIVO</NavDropdown.Item>
                    <NavDropdown.Item><Link to="/rma" className='dropdown-item mod'>RMA</Link></NavDropdown.Item>
                    <NavDropdown.Item href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf" target="_blank">CATALOGO DIGITAL</NavDropdown.Item>
                  </NavDropdown>

                  
                  
                  <NavDropdown title="Relojes" id="navbarScrollingDropdown">
                    <NavDropdown.Item> <Link to="/empleados/gerencia" className='dropdown-item mod'>GERENCIA</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/empleados/productmanager" className='dropdown-item mod'>PRODUCT MANAGER</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/empleados/vendedores" className='dropdown-item mod'>VENDEDORES</Link></NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Electrodomesticos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="https://www.solutionbox.com.ar/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/argentina.png' alt="Bandera Arg" className='setBanderas'></img>ARGENTINA</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.solutionboxusa.com/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/estadosunidos.png' alt="Bandera USA" className='setBanderas'></img>USA</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.solutionbox.com.uy/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/uruguay.png' alt="Bandera Uruguay" className='setBanderas'></img>URUGUAY</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.solutionbox.com.do/" target='_blank' className='dominicana'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/Republicadominicana.png' alt="Bandera Rep.Dominicana" className='setBanderas'></img>R.DOMINICANA</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.solutionbox.cr/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/costarica.png' alt="Bandera Costa Rica" className='setBanderas'></img>COSTA RICA</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.solutionbox.com.hk/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/hongkong.png' alt="Bandera Hong Kong" className='setBanderas'></img>HONG KONG</NavDropdown.Item>
                    <NavDropdown.Item href="http://www.solutionbox.com.pa/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/panama.png' alt="Bandera Panama" className='setBanderas'></img>PANAMA</NavDropdown.Item>
                    <NavDropdown.Item href="http://www.solutionbox.com.hn/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/honduras.png' alt="Bandera Honduras" className='setBanderas'></img>HONDURAS</NavDropdown.Item>
                    <NavDropdown.Item href="http://www.solutionbox.com.sv/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/elsalvador.png' alt="Bandera El Salvador" className='setBanderas'></img>EL SALVADOR</NavDropdown.Item>
                    <NavDropdown.Item href="http://www.solutionbox.com.py/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/paraguay.png' alt="Bandera Paraguay" className='setBanderas'></img>PARAGUAY</NavDropdown.Item>
                  </NavDropdown>
                  

                </Nav>
              </Navbar.Collapse>
  </Container>
</Navbar>
    </div>;
  }
}
