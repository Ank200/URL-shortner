const express = require("express");
const {handleUserSingUp,handleUserLogIn}= require("../controllers/user")

const router = express.Router();

router.post("/",handleUserSingUp)
router.post("/login",handleUserLogIn)

module.exports = router;