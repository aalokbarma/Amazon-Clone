import React from 'react';
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import Link from 'react-router-dom';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className = "header">
        
            <Link to = "/">
                <img 
                    className = "header__logo" 
                    src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                    alt = "Amazon Logo"
                />

            </Link>

            <div className = "header__search">
                <input className = "header__searchInput" type = "text" />
                <SearchIcon className = "header__searchIcon" />
            </div>
            <div className = "header__nav">
                <Link className = "link"  to = {!user && "/login"}>
                    <div onClick = {handleAuthentication} className = "header__option">
                        <span className = "header__optionLineOne">Hello {!user ? 'Guest' : user.email},</span>
                        <span className = "header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
                
                    </div>
                </Link>

                <Link className = "link" to = "/orders">
                    <div className = "header__option">
                        <span className = "header__optionLineOne">Returns</span>
                        <span className = "header__optionLineTwo">& Order</span>
                    </div>
                </Link>

                <div className = "header__option">
                    <span className = "header__optionLineOne">Try</span>
                    <span className = "header__optionLineTwo">Prime</span>
                </div>
                <Link to = "/checkout" className = "cart__link">
                    <div className = "header__optionBasket">
                        <ShoppingCartOutlinedIcon className = "basket" />
                        <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                        <span className = "header__optionLineTwo cart">Cart</span>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default Header;
