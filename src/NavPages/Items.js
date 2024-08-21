import React from 'react'
import './Items.css'
import add from '../Images/addicon.png'
import buy from '../Images/buynowicon.png'

const Items = (props) => {
  return (
      <div className="items">
        <img className='jimg' src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="price">
          <div className="newprice">
            Rs. {props.newprice}
          </div>
          <div className="oldprice">
            Rs. {props.oldprice}
          </div>
          <div className='opt'>
          <br />
            <button className='add' style={{borderRadius:'10px'}}> <img src={add} alt="" style={{height:'30px', width:'30px'}} /> </button><br />
            <button className='buy' style={{borderRadius:'10px'}}> <img src={buy} alt="" style={{height:'30px', width:'30px'}}/> </button>
          </div>
        </div>
      </div>
    )
}

export default Items