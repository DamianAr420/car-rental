import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/home";
import Cars from "./cars/cars";
import "./App.css";

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link className='navbarElements' to="/car-rental/">Home</Link></li>
        <li><Link className='navbarElements' to="/car-rental/cars">Cars</Link></li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className='appBody'>
      <Router>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path='/car-rental/' element={<Home />} />
            <Route path='/car-rental/cars' element={<Cars />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
