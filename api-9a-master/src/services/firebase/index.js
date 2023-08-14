const {initializeApp, cert} = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/firebase_service_account.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://dwi9a-779cb.firebaseio.com'
});


module.exports = app;
