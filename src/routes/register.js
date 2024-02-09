const express = require("express")
const router = express.Router()
const controllers = require("../controllers/register")
const validator = require("../middleware/validator")
const {
    register
} = require("../validators/register")


router.post("/register",validator(register),controllers.register)


module.exports = router