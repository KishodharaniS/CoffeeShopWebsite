import React from 'react';
import Loggin from './components/Loggin';
import Register from './components/Register';
import Home from './components/Home';
import Menu from './components/Menu';
import  About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
export default function App(){
  return(
    <BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/homepage' element={<HomePage/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/loggin" element={<Loggin/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/products" element={<Products/>}/>
   
  </Routes></BrowserRouter>

  );
}
  

