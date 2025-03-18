import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Social from "./pages/Social";
import ForHome from "./pages/ForHome";
import Contact from "./pages/Contact";
import Collab from "./pages/Collab";
import Produtos from "./pages/Produtos";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acoes-sociais" element={<Social />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/quem-somos" element={<Portfolio />} />
        <Route path="/para-casa" element={<ForHome />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sua-marca" element={<Collab />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
