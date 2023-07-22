const express = require("express")
const router = express.Router()
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})


router.post("/",async(req ,res) =>{
    const admin = req.body.form
    console.log(admin)
    try{
      
        if(admin.name == process.env.ADMIN_NAME && admin.password == process.env.ADMIN_PASSWORD){
            console.log("welcome")
        } else{
            console.log("fuck offf");
        }
    }catch(err)
    {
        console.log(err);
    }
})










 module.exports = router