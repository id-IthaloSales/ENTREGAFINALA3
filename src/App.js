import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Cadastro from './pages/Cadastro';
import Pesquisar from './pages/Pesquisar';
import Listas from './pages/Listas';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import Serie from './pages/Serie';

//import AddSeries from './AddSeries';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/pesquisar" element={<Pesquisar />} />            
            <Route path="/cadastro" element={<Cadastro />} />                      
            <Route path="/listas" element={<Listas />} />            
            <Route path="/serie" element={<Serie/>}/>            
            <Route path="/perfil" element={<Perfil />} />            
          </Route>
        </Routes>
        <Footer />
    </Router>
  );

}

export default App;
