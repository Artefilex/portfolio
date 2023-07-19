const app = require("express");
const Skill = require("../models/skill");
const Intro = require("../models/userintro");
const router = app.Router();

router.post("/", async (req,res) =>{
  const mail = req.body.email
  console.log(mail)
} )




router.get("/skills", async (req, res) => {
  const skills = await Skill.findAll();

  res.json(skills);
});

module.exports = router;
