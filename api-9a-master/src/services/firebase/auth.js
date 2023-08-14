const {getAuth} = require("firebase-admin/auth");
const conexion = require("./");

 function firebaseAuth(req, res, next) {
    req.auth = getAuth(conexion);
    next()
}

module.exports = { firebaseAuth };