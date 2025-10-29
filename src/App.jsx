import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';   // export default
import Footer from './components/Layout/Footer';   // export default

import Home from './components/Home';
import Especies from './components/Especies';
import Historia from './components/Historia';

import Detalle from './components/Detalle';

export const App = () =>  {
  return (
        <div className="app-container">
      <Navbar />
      <main>

        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <Especies />
                <Historia />
              </>
            } />
            <Route path='/detalle' element={<Detalle />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
