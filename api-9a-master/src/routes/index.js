require("express")
const main = require("../components/main/network")
const users = require("../components/users/network")
const allRoutes = require("../utils/constants/routes.json")

const routes = server => {
    server.use(allRoutes.main, main)
    server.use(allRoutes.users, users)
    
}

module.exports = routes;