import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import '../Navbar/Navbar.css'
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { BasketContext } from '../../context/BasketContext';
import { IoMenu } from "react-icons/io5";
function Navbar() {
    let {favorites}=useContext(FavoriteContext)
    let {basket}=useContext(BasketContext)
  return (
    <div className='navbar-main'>
        <div className="nav-text"><img src="https://rivon-demo.myshopify.com/cdn/shop/files/logo-2.png?v=1734254597&width=130" alt="" /></div>
        <div className="menu"><IoMenu /></div>
        <nav>
            <ul>
                <li><Link className='a' to='/'>Home</Link></li>
                <li><Link  className='a' to='/add'>Add</Link></li>
                <li><Link  style={{color:"red"}} className='a' to='/wishlist'><FaHeart /></Link>
                <span>{favorites.length}</span>
                </li>
                <li><Link  className='a' to='/basket'><FaShoppingBasket /></Link>
                
                  <span>{basket.length}</span>
                  </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar