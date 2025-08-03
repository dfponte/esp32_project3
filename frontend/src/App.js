import React from "react";

import GlobalStyle from "./components/GlobalStyle";




//Roteamento

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from "./pages/AboutUs"
import Portfolio from "./pages/portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";

function App() {
  return (


    <div>
       <Router>
      <GlobalStyle/>
      <Nav/>
        <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<ContactMe />} />
       </Routes>
     </Router>
      
  
    
    </div>
  );
}

export default App;
