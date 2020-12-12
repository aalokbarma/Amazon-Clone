import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket , user}, dispatch] = useStateValue();

    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img 
                    className = "checkout__ad"
                    src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt = "Checkout Ad"
                />
                <div>
                    <h5>Hello! {user?.email}</h5>
                    <h2 className = "checkout__title">
                        Your Shopping Cart
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            rating = {item.rating}
                            price = {item.price}
                        />
                    ))}

                    {/* <span className = "heading__para">Oops! There's nothing in your cart.</span> */}

                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                </div>
            </div>
            <div className = "checkout__right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
