const express = require("express");
const Controller = require("./controller")

const router = express.Router();

function main(req, res) {
    const { db } = req;
    Controller.main({
        db
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))

}

router.post("/", main)

module.exports = router