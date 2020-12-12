const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HxGGQBg5iVCMeNsfbcj6mCEvP1BtIrRWVT2ycddcvH5iyKEtmmIg0230ushZm15IVlOyvpRLpV8OSMvxQPX3A8H00M2YvOahN');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World!!!'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd"
    })

    // OKAY - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

// - Listen Command
exports.api = functions.https.onRequest(app);


// http://localhost:5001/clo-d9af9/us-central1/api