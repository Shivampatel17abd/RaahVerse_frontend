import { useState } from 'react'


import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HotelForm from './pages/HotelForm'
import CabForm from './pages/CabForm'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import Admin from './pages/Admin'
import Default from './pages/Default'

function  Layout() {
  const location = useLocation();
  
  return (
     <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/cab' element={<CabForm/>}/>
        <Route path='/admin/hotel' element={<HotelForm/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/default' element={<Default/>}/>

     </Routes>
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
       <Layout/>
      </BrowserRouter>
    </>
  )
}

export default App
