const app = require("express");
const Skill = require("../models/skill");
const Intro = require("../models/userintro");
const router = app.Router();

router.get("/skills", async (req, res) => {
  const skills = await Skill.findAll();

  res.json(skills);
});
// router.get("/intros", async(req,res) =>{
//     const intro = await Intro.findAll()

//     res.send(intro)
// })
module.exports = router;
