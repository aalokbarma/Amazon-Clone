import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Order({props}) {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className = "order">
            <h2>
                Order
            </h2>
            <p>{moment.unix(Order.data.created).format("MMMM Do YYYY, h:mna")}</p>

            <p className = "order__id">
                <small> {Order.id} </small>
            </p>
            {Order.data.basket?.map(item => (
                <CheckoutProduct
                    id= {item.id}
                    title= {item.title}
                    image= {item.image}
                    price= {item.price}
                    rating = {item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <h3 className = "order__total">Order Total: {value}</h3>
                    </>
                )}
                decimalScale = {2}
                value= {Order.data.amount / 100}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
        </div>
    )
}

export default Order;
