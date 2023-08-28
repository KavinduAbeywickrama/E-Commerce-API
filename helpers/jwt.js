const jwt = require('express-jwt');
const express = require("express");
const app = express();

function myAuthJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    console.log("inside the jwt")
    return jwt({
        secret: secret,
        algorithms: ["HS256"],
    }).unless({ 
        path: [
            {url:'/api/v1/products', methods: ['GET', 'OPTIONS']},
            
            'api/v1/users/login',
            'api/v1/users/register'
        ]
    })             
}

module.exports = myAuthJwt;