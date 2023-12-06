import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./assets/global.css";

import Navbar from "./components/layout/Navbar";

import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <MainPage/>} />
      </Routes>
    </>
  );
}

export default App;