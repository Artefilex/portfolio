const app = require("express")
const Skill = require("../models/skill")
const router = app.Router()



router.get("/skills",async (req,res)=>{
    const skills = await Skill.findAll()

    res.send(skills)
})


module.exports = router