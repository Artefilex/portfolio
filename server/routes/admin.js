const express = require("express")
const config = require("../config")
const router = express.Router()



router.post("/",async(req ,res) =>{
    const admin = req.body.form
    console.log(admin)
    try{
        const admindb = config.admin
        if(admin.name == admindb.username && admin.password == admindb.password){
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