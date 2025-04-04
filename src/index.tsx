import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Users } from './pages/Users';
import Register from './pages/Register';
import Masculine from './pages/Masculine';

import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Masculine" element={<Masculine />} />
        <Route path="/Contatos" element={<Users />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);