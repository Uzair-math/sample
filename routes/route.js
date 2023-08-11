const express = require('express')
const Router = express.Router()

const middleware = require("../midlleware/middle")
const control = require('../controller/control')


Router.post("/route", middleware, control)
module.exports = Router