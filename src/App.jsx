import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Home from './componentes/home/Home';
import Login from './componentes/login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
