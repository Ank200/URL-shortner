const express = require("express");
const URL= require("../models/url")

const router = express.Router();

router.get("/", async (req, res) => {
    const allURLs = await URL.find({})
    return res.render("home", {
        urls: allURLs,
    })
})

router.get("/signup", async (req,res)=>{
    return res.render("signup");
})

router.get("/user/login", async (req,res)=>{
    return res.render("login");
})

module.exports = router;
