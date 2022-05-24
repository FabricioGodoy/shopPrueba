import { EmpleadosLista } from './components/EmpleadosLista/EmpleadosLista';
import Barra1 from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Newsletter } from './components/pages/Newsletter';
import { NuestraEmpresa } from './components/pages/NuestraEmpresa';
import { TrabajaConNosotros } from './components/pages/TrabajaConNosotros';
import { Capacitaciones } from './components/pages/Capacitaciones';
import { Rma } from './components/pages/Rma';
import { SelectorRma } from './components/pages/SelectorRma';
import { RmaItemFallado } from './components/pages/RmaItemFallado';
import { ApiMap } from './components/ApiMarcas/ApiMap';
import { HomePage } from './components/HomePage/HomePage';
import { HomeFooter } from './components/HomeFooter/HomeFooter';
import { CentroDeAyuda } from './components/pages/CentroDeAyuda';
import { CancelacionCompra } from './components/pages/CancelacionCompra';
import { PageNotFound } from './components/Error404/pageNotFound'

function App() {
  return (

    <BrowserRouter>
        <Barra1/>
            <Routes>
              <Route path="/" element= {<HomePage/> }/>
              <Route path="/empleados" element= { <EmpleadosLista/> }/>
              <Route path="/empleados/:catId" element= { <EmpleadosLista/> }/>
              <Route path='/newsletter' element= {<Newsletter/>}/>
              <Route path='/nuestraempresa' element= {<NuestraEmpresa/>}/>
              <Route path='trabajaconnosotros' element= { <TrabajaConNosotros/> } />
              <Route path='cancelacionCompra' element= { <CancelacionCompra/> } />
              <Route path='capacitaciones' element= { <Capacitaciones/> } />
              <Route path='rma2' element= { <Rma/> } />
              <Route path='rma' element= { <SelectorRma/> } />
              <Route path='rma3' element= { <RmaItemFallado/> } />
              <Route path='*' element= { <Navigate to ="/" /> } />
              <Route path="/marcas/:id" element= { <ApiMap/> }/>
              <Route path="/centro_de_ayuda" element= { <CentroDeAyuda/> }/>
              <Route path="/pageNotFound" element= { <PageNotFound/> }/>
            </Routes>
        <HomeFooter/>
    </BrowserRouter> 
  );
}

export default App;
