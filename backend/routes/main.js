const app = require("express")
const router = app.Router()

const product = {
    "name": "ahmet",
    "surname": "bla bla"
}

router.get("/",async (req,res)=>{
    res.send(product)
})


module.exports = router