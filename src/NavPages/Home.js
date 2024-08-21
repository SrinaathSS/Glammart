import React from 'react'
import { useState } from 'react';
import './Home.css'
import Girl from '../Images/shoppingmodel.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import b1 from '../Images/banner1.gif';
import b2 from '../Images/banner2.jpg'
import b3 from '../Images/banner3.jpg'
import footer from '../Images/footer.png';
import i1 from '../Images/jewelicon.png'
import i2 from '../Images/accessicon.png'
import i3 from '../Images/cosmeticsicon.png'
import i4 from '../Images/footicon.png'



const Home = () => {
  const [menu,setMenu] = useState("home");
  const mainCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };
  const carouselImages = [
    b1,b2,b3
  ];
  return (
    <>
    <div className="main-carousel">
        <div className="carousel-image">
        <Slider {...mainCarouselSettings}>
          {carouselImages.map((imageUrl, index) => (
            <div key={index} className="carousel-image-container">
                <a href='/shop'><img src={imageUrl} alt={`Slide ${index + 1}`} className="carousel-image" /></a>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    <br />
    <br />
    <br />
    <div className='categoryhome'>
    <div><h1 className='how'>Explore by Category</h1></div>
    <br /><br />
    <div className='category'>
        <div className='content'><a href='/shop/jewellery'>
          <div className='outer'>
            <div className='item'>
              <div className='imag'>
                 <img src={i1} alt="" />
              </div>
              <div className='text' style={{textDecoration:'none', color:'black'}}>Jewels</div>
            </div>
          </div></a>
        </div>
        <div className='content'><a href='/shop/accessories'>
          <div className='outer'>
            <div className='item'>
              <div className='imag'>
                 <img src={i2} alt="" />
              </div>
              <div className='text' style={{textDecoration:'none', color:'black'}}>Accessories</div>
            </div>
          </div></a>
        </div>
        <div className='content'><a href='/shop/cosmetics'>
          <div className='outer'>
            <div className='item'>
              <div className='imag'>
                 <img src={i3} alt="" />
              </div>
              <div className='text'  style={{textDecoration:'none', color:'black'}}>Cosmetics</div>
            </div>
          </div></a>
        </div>
        <div className='content'><a href='/shop/footwear'>
          <div className='outer'>
            <div className='item'>
              <div className='imag'>
                 <img src={i4} alt="" />
              </div>
              <div className='text'  style={{textDecoration:'none', color:'black'}}>Foot Wear</div>
            </div>
          </div></a>
        </div>
    </div>
    </div>
    <br />
    <br />
    <br />
    <div className="homeg">
      <div className="home1">
        <h2>NEW COLLECTIONS AVAILABLE</h2>
      <div>
        <h3>Limited Deals!!</h3>
      </div>
      <div className="latest">
      <ul style={{listStyle:'none'}}>
      <li onClick={()=>{setMenu("shop")}}><b><Link to='/shop' style={{textDecoration: 'none',color: 'white'}}>Shop Now</Link>{menu==='shop'?<hr/>:<></>}</b></li>
      </ul>

      </div>
      </div>
      <div className="home2">
        <img className='shgirl' src={Girl} alt="" />
      </div>
    </div>
        <br />
      <div className='how-it-works'>
            <h1 className='how'>Our Service</h1><br />
        <img style={{width:'1381px',height:'260px'}} src={footer} alt="" />
      </div>
      <br />
    <Footer ></Footer>
    </>
  )
}

export default Home