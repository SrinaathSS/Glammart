import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './NavPages/Home'
import Shop from './NavPages/Shop'
import About from './NavPages/AboutPage'
import Cart from './NavPages/Cart'
import Login from './NavPages/Llogin'
import Register from './NavPages/Rregister'
import Jewels from "./NavPages/Jewels";
import Accessories from "./NavPages/Accessories";
import Cosmetics from "./NavPages/Cosmetics";
import Footwear from "./NavPages/Footwear";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop/jewellery' element={<Jewels />} />
        <Route path='/shop/accessories' element={<Accessories />} />
        <Route path='/shop/cosmetics' element={<Cosmetics />} />
        <Route path='/shop/footwear' element={<Footwear />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 