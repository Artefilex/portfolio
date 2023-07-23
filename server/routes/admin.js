const express = require("express")
const router = express.Router()
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})
const isAdmin = require("../middleware/isAdmin")

router.post("/",async(req ,res) =>{
    const admin = req.body.form
   
    console.log(admin)
    try{
        if(admin.name == process.env.ADMIN_NAME && admin.password == process.env.ADMIN_PASSWORD){
            req.session.isAdmin = true;
            console.log("welcome boss")
            res.redirect("/")
        } else{
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    }catch(err)
    {
        console.log(err);
    }
})
 module.exports = router