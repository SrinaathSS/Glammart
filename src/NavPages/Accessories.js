import React from 'react'
import product from '../Images/dataa'
import { Link } from 'react-router-dom'
import Items from './Items'
import './Shop.css'

const Accessories = () => {
  return (
    <>
    <div className="pro">
        <h1>Accessories</h1>
        <hr />
        <br />
        <ul className="categ">
            <li className="cathov"><b><Link to='/shop/jewellery' style={{textDecoration: 'none',color:'#d82c82'}}>Jewellery <br /></Link></b></li>
            <li className="slash">|</li>
            <li className="cathov"><b><Link to='/shop/accessories' style={{textDecoration: 'none',color:'#d82c82'}}>Accessories <br /></Link></b></li>
            <li className="slash">|</li>
            <li className="cathov"><b><Link to='/shop/cosmetics'style={{textDecoration: 'none',color:'#d82c82'}}>Cosmetics <br /></Link></b></li>
            <li className="slash">|</li>
            <li className="cathov"><b><Link to='/shop/footwear'style={{textDecoration: 'none',color:'#d82c82'}}>Foot Wear <br /></Link></b></li>
        </ul>
        <div className="proitem">
            {product.map((items,i)=>{
                return <Items key={i} id={items.id} name={items.name} image={items.image} newprice={items.newprice} oldprice={items.oldprice} />
            })}
        </div>
    </div>
    </>
  )
}

export default Accessories;