import React from 'react'
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        {/* Redirect to the home page */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
