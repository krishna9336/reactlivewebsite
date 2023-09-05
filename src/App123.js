import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Menu from './Components/Navbar'
import Service from './Components/Service';
import User from './Components/User';
import Search from './Components/Search';

const App = () => {
  return (
    <>
    <Menu/>
      <Routes>
        <Route exact path='/' element={<About/>} />
        <Route exact path='/search' element={<Search/>} />
        <Route exact path='/service' element={<Service/>} />
        <Route path='/user/:fname/:lname' element={<User/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App;
