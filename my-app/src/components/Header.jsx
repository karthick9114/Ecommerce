import React from 'react'
// import ThemeButton from './ThemeButton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const cartItems= useSelector((state)=>{
    return state.cart.items.length  
  })
  return (
    <header>
        <div className="logo">ECOMMERCE</div>
        <div className="container">
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
            {/* <ThemeButton theme={props.theme} themeChange={props.themeChange} /> */}
        </div>
    </header>
  )
}

export default Header
