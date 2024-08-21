import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from '../Images/vvicon.png'
import './Navbar.css'
const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const location = useLocation();

        if(location.pathname === '/login') {
          return null
        }
        if(location.pathname === '/register') {
          return null
        }

  return (
    <div className="navbar">
        <ul className="menu">
            <li onClick={()=>{setMenu("home")}}><b><Link to='/' style={{textDecoration: 'none',color:'rgb(244, 12, 113)'}}>Home <br /></Link>{menu==='home'?<hr/>:<></>}</b></li>
            <li onClick={()=>{setMenu("shop")}}><b><Link to='/shop' style={{textDecoration: 'none',color:'rgb(244, 12, 113)'}}>Shop <br /></Link>{menu==='shop'?<hr/>:<></>}</b></li>
            <li onClick={()=>{setMenu("about")}}><b><Link to='/about'style={{textDecoration: 'none',color:'rgb(244, 12, 113)'}}>About <br /></Link>{menu==='about'?<hr/>:<></>}</b></li>
        </ul>
        <div className="logo">
             <img src={logo} alt="" />
            <center><p><b>V</b>OGUE<b>V</b>ILLA</p></center>
        </div>
        <div className="navbutton">
            <Link to='/login'><button className="but" >Login</button></Link>
            <Link to='/cart'><img className='likecart' src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png" alt=""></img></Link>
            <div className="count">0</div>
        </div>
    </div>
  )
}

export default Navbar