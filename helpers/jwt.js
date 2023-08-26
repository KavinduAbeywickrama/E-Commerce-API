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
var { expressjwt: jwt } = require("express-jwt");

function authJwt() {
    console.log("from authJwt");
    const secret = process.env.secret;
    const api = process.env.API_URL;
    const jwotoken = jwt({  // Use lowercase 'jwt' here
        secret,
        algorithms: ["HS256"]
    });
    console.log("from authJwt", jwotoken);
    console.log("from authJwt", secret);
    return jwotoken;
}

module.exports = authJwt;


        

// const { secret } = require("dotenv/config");
// const { API_URL } = process.env;
// const expressJwt = require("express-jwt");

// module.exports = expressJwt({
//     secret,
//     algorithms: ["HS256"]
// });
