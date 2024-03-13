import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./assets/global.css";

import Navbar from "./components/layout/Navbar";

import MainPage from "./pages/MainPage"
import ProductListPage from "./pages/ProductListPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <MainPage />} />
        <Route path="/dashboard" element={ <ProductListPage />} />
      </Routes>
    </>
  );
}

export default App;