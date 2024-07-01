import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartPage = () => {
    const items = useSelector((state) => state.cart.items);

    return (
        <div>
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default CartPage;
