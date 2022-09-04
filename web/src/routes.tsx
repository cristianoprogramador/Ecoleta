import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import CreatePoint from './pages/CreatePoint';

import Home from './pages/Home'

const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-point" element={<CreatePoint />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Rotas;