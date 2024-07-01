import React from 'react';
import { useDispatch } from 'react-redux';
import { itemsRemoved } from '../reduces/cartSlice';

const CartItem = (props) => {
    const { id,image, title, price, quantity } = props.item;
    const dispatch = useDispatch()
    const deleteItem = ()=>{
        console.log(id)
            return  dispatch(itemsRemoved(id))
    }

    return (
        <div className='cart-item'>
            <img src={image} alt={title} />
            <div className='title'>{title}</div>
            <div>Quantity: {quantity}</div>
            <div className='price'>Price: ${price}</div>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default CartItem;
