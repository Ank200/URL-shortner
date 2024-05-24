const User = require("../models/user")
const {v4 : uuidv4}= require("uuid")

async function handleUserSingUp(req, res) {
    const{name,email,password}= req.body;
    User.create({
        name,
        email,
        password,
    })
    return res.redirect("/");
}

async function handleUserLogIn(req,res){
    const {email,password}= req.body;
    const user= await User.find({email,password})
    if(!user){
        return res.render("login",{
            error: "Invalid Email or Pasword"
        })
    }
    const sessionId=uuidv4();
    return res.redirect("/");
}

module.exports={
    handleUserSingUp,
    handleUserLogIn,
}