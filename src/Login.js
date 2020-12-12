import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))

            setEmail('')
            setPassword('')
        
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
            setPassword('');
            setEmail('')

}

    return (
        <div className = 'login'>
            <Link to  = '/' >
                <img 
                className = "login__logo" 
                src = "http://www.clickbank.com/wp-content/uploads/2016/05/amazon_logo.png" 
                alt = "Login logo" />
            </Link>

            <div className = 'login__container'>
                <h1>Sig-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type = "text" value = {email} onChange = {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = {e => setPassword(e.target.value)}/>

                    <button type = 'submit' onClick = {signin} className = "login__signInButton">Sign-In</button>
                </form>
                <p>By signing in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest base Notice
                .</p>
                <button onClick = {register} className = "login__registerButton">Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login;
