// const {expressJwt} = require("express-jwt");
// // const { options } = require("../routes/users");

// function authJwt() {
//     const secret = process.env.secret;
//     const api = process.env.API_URL;
//     return expressJwt({
//         secret,
//         algorithms: ["HS256"]
//     })
// }

// module.exports = authJwt;
const { jwt } = require("express-jwt");

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return jwt({  // Use lowercase 'jwt' here
        secret,
        algorithms: ["HS256"]
    });
}

module.exports = authJwt;


        

// const { secret } = require("dotenv/config");
// const { API_URL } = process.env;
// const expressJwt = require("express-jwt");

// module.exports = expressJwt({
//     secret,
//     algorithms: ["HS256"]
// });
