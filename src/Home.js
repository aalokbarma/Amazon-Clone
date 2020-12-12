import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className = "home__image" 
                    src= "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt = "Banner Image"
                />
            </div>
            <div className = "home__row">
                <Product 
                    id="564646694"
                    title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses " 
                    price = {29.99}
                    image = "https://coolerinsights.com/wp-content/uploads/2013/04/The-Lean-Startup.jpeg"
                    rating = {5}
                />
                <Product 
                    id = "1563179518"
                    title= "New Apple iPhone 12 Pro Max (256GB) - Graphite" 
                    price = {1882.199}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg"
                    rating = {5}
                />
                
            </div>
            <div className = "home__row">
            <Product 
                id = "2681215315"
                title= "ASGARD Day & Date Feature Watch for Men, Boys-158-DD1" 
                price = {5.49}
                image = "https://images-na.ssl-images-amazon.com/images/I/41XdRy2BxfL._UY445_.jpg"
                rating = {3}
            />
            <Product 
                id = "5215215516"
                title= "Alan Jones Clothing Women's Cotton Hooded Sweatshirt" 
                price = {6.99}
                image = "https://images-na.ssl-images-amazon.com/images/I/51tRpGfso3L._UL1440_.jpg"
                rating = {4}
            />
            <Product 
                id = "8951861561"
                title= "Bon Organik Mighty Avengers Printed Face Mask Bundle For Kids (Set Of 3) (4-8Y)" 
                price = {3.99}
                image = "https://images-na.ssl-images-amazon.com/images/I/71aop0dmDnL._SL1500_.jpg"
                rating = {4}
            />
            </div>
            <div className = "home__row">
            <Product 
                id = "8618613126"
                title= "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" 
                price = {1094.98}
                image = "https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
                rating = {5}
            />
            </div>

        </div>
    )
}

export default Home;
