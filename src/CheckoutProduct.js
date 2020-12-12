import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct__image" src = {image} />
            <div className = "checkourtProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className = "checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span>⭐</span>
                    ))
                    }
                </div>
                {!hideButton &&(
                <button onClick = {removeFromCart} className = "checkoutProduct__button"><p className = "button__para">Remove from Cart</p></button>

                )}
            </div>

        </div>
    )
}

export default CheckoutProduct;
