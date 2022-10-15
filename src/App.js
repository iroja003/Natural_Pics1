import "./styles.css";

import Context from "./views/Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
// Hook
import { useState,  useEffect } from "react";

export default function App() {
  const [ fotos, setFotos ] = useState([]);

  const endpoint = "/fotos.json";

  const getFotos= async () => {
    const res     = await fetch(endpoint);
    let data      = await res.json();
    let dataFotos = data.photos.map((f) => ({
       id: f.id,
      src: f.src.tiny,
     desc: f.alt,
 favorito: false
    }));
  
    setFotos(dataFotos); //
    console.log(dataFotos) ;
  };

// useEeffect
useEffect ( () => {
   getFotos();
}, []);
// useEeffect
 
  return (
    <div className="App">
    <Context.Provider value={{ fotos, setFotos}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
    </div>
  );
}
