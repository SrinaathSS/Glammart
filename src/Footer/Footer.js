import React from 'react';
import './Footer.css';
import logo from '../Images/flogo.png'


const Footer = () => {
  return (
    <footer className="footer-container">
    <hr />
    <br />
      <div className="footer-content">
        <div className="footer-section">
        <img src={logo} alt="" />
        <br />  
          <p><img className='con' src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" /> : voguevilla@gmail.com</p>
          <p><img className='con' src="https://cdn-icons-png.flaticon.com/128/3415/3415136.png" alt="" /> : 9655893592</p>
        </div>
        <div className="footer-section">
          <h3>References</h3>
          <br />
          <ul>
            <li>Company</li>
            <li><a href='/shop' style={{textDecoration:'none', color:'black'}}>Products</a></li>
            <li><a href='/about' style={{textDecoration:'none', color:'black'}}>About Us</a></li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <br />
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><img className='icon' src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt=''></img></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img className='icon' src='https://cdn-icons-png.flaticon.com/128/11823/11823292.png'  alt=''></img></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img className='icon' src='https://cdn-icons-png.flaticon.com/128/733/733547.png' alt=""></img></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Vogue Villa 2023</p>
      </div>
    </footer>
  );
};

export default Footer;