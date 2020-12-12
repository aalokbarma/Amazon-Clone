import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from  './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise= loadStripe('pk_test_51HxGGQBg5iVCMeNsNsMU1qnJrX5lHasYy1q3tJHXrwd25mtDBdkP88D2RApoQ3AlAks399lyQs27nl7v5bHU8OUu00x4hy4OFm');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route exact path = "/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route exact path = "/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path = "/payment">
            <Header />
            <Elements stripe = {promise}>
              <Payment />

            </Elements>
          </Route>
          <Route path = "/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
