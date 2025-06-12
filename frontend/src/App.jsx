import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
      <Footer/>
    </div>
  ) 
}

export default App