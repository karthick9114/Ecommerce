import React from 'react'
import { useDispatch } from 'react-redux'
import { itemsAdded } from '../reduces/cartSlice'

const ProductCard = (props) => {
    const {title , description,price,image} = props.products || {} 
    const dispatch = useDispatch()
    const additems = ()=>{
        dispatch(itemsAdded(props.products))
    }
  return (
    <div className='productContainer'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <div>{description}</div>
      <h1> ₹{price}</h1>
      <button onClick={additems}>Add to cart</button>
    </div>
  )
}

export default ProductCard
