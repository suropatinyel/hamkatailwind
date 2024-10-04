import "./App.css";
import "./assets/stylebaru.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Product from "./pages/product/Product";
import Negara from "./pages/negara/Negara";
import DetailNegara from "./pages/negara/DetailNegara";
import DetailProduct from "./pages/product/DetailProduct";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {

const theme = useState("light");

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/product"element={<Product />}/>
        <Route path="/negara"element={<Negara />}/>
        <Route path="/detailnegara/:id"element={<DetailNegara />}/>
        <Route path="/detailproduk"element={<DetailProduct />}/>
      </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
