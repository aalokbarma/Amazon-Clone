import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from './firebase';

function Payment() {

    const history = useHistory();
    
    const [{basket, user}, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method : 'post',
                url : `/payments/create?total=${getBasketTotal(basket) * 100 }`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {
        // Do all the fancy styles...
        event.preventDefault();
        setProcessing(true);

        // This should not gonna be here Start

        // db
        //         .collection('users')
        //         .doc(user?.uid)
        //         .collection('orders')
        //         .doc(paymentIntent.id)
        //         .set({
        //             basket: basket,
        //             amount: paymentIntent.amount,
        //             created: paymentIntent.created,
        //         })


        dispatch({
            type: 'EMPTY_BASKET'
        })

        history.replace('/orders')

        // This should not gonna be here End

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
            
        })
        .then(({ paymentIntent }) => {
            // PaymentIntent = payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                })


            setSucceeded(true);
            setError(null)
            setProcessing(false);

            // This should gonna be here Start
    
            dispatch({
                type: 'EMPTY_BASKET'
            })
    
            history.replace('/orders')
            
        })

        // This should gonna be here End
    }

    const handleChange = event => {
        // Listen for changes in the card elements
        // And display any errors as the customer typed their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className = "payment">
            <div className = "payment__container">
                <h1>
                    Checkout {<Link className="checkout__link" to = "/checkout">( {basket?.length} items )</Link>}
                </h1>
                {/* Payment sesction - delivery address */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Delivery Addresss</h3>

                    </div>
                    <div className = "payment__address">
                        <p> {user?.email} </p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment sesction - Review Items */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id= {item.id}
                                title = {item.title}
                                image = {item.image}
                                price= {item.price}
                                rating = {item.rating}
                             />
                        ))}
                    </div>

                </div>

                {/* Payment sesction - Payment method */}
                <div className = "payment__section">
                        <div className = "payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className = "payment__details">
                            {/* Stripe magic will Go */}
                            <form onSubmit = {handleSubmit}>
                                <CardElement onChange = {handleChange}/>

                                <div className = "payment__priceContainer">
                                    <CurrencyFormat
                                        renderText = {(value) => (
                                            <>
                                                <h3>Order Total: {value}</h3>
                                            </>
                                        )}
                                        decimalScale = {2}
                                        value= {getBasketTotal(basket)}
                                        displayType = {"text"}
                                        thousandSeparator = {true}
                                        prefix = {"$"}
                                    />
                                    <button disabled = {processing || disabled || succeeded }>
                                        <span>{processing ? <p>Processing</p> : "Buy Now" } </span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                            
                        </div>

                </div>
                
            </div>
        </div>
    )
}

export default Payment;
