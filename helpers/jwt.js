const jwt = require('express-jwt');
const express = require("express");
const app = express();

function myAuthJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    
    return jwt({
    secret: secret,
    algorithms: ["HS256"],
    //isRevoked:isRevoked,
}).unless({
    path: [
        { url: '/api/v1/products', methods: ['GET', 'OPTIONS'] },`${api}/users/login`,`${api}/users/register`]
});
            
}

// async function isRevoked(req, payload, done) {
//     if(!payload.isAdmin) {
//         done(null, true)
//     }
//     done();
// }

module.exports = myAuthJwt;