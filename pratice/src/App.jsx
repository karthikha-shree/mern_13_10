import React from 'react'
import Profile from './components/Profile'
import State from './hooks/State'
import Parent from './components/Parent'
import { Form } from './hooks/Form'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDeltails from './pages/ProductDeltails'
import Reducer from './hooks/Reducer'
import { Route, Routes } from 'react-router-dom'
import { createContext } from 'react'

export const usercontext=createContext();


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDeltails/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/reducer' element ={<Reducer/>}/>
    </Routes>
    
    </>
  )
}

export default App