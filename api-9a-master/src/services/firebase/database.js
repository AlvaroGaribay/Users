//conexion a firebase
const {getFirestore} = require("firebase-admin/firestore")


const conexion = require("./");

/* MIDDLEWARE */
//req = requist o solicitud
//res = response un objeto tiene funciones para responder las solicitudes
// nest = continua con el proceso de ejecucion
function db(req, res, next) {
    req.db = getFirestore(conexion); //solicitud
    next();
}


module.exports = { db }; //exporta la funcion