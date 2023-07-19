const app = require("express");
const Skill = require("../models/skill");
const Portfolio = require("../models/portfolio");
const router = app.Router();

router.post("/", async (req,res) =>{
  const mail = req.body.email
  console.log(mail)
} )

router.get("/skills", async (req, res) => {
  const skills = await Skill.findAll();

  res.json(skills);
});

router.get("/project", async(req, res) =>{
  const project = await Portfolio.findAll()
  res.json(project)
})

module.exports = router;
