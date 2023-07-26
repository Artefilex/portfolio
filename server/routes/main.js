const app = require("express");
const sendmail = require("../helpers/mailsend")
const Skill = require("../models/skill");
const Portfolio = require("../models/portfolio");
const Subscribe = require("../models/subscribe");
const config = require("../config");
const Blog = require("../models/blog")
const router = app.Router();

router.post("/", async (req,res) =>{
  const mail = req.body.email
  try{
    const subscribe = await Subscribe.findOne({ where: { email: mail } });
    if(subscribe){
      return "Girdiğiniz email adresine ait bir kayıt bulunmaktadır"
    }
 
     const createSubscribe = await Subscribe.create({
      email: mail
    });

   
    const messagesendto = `Welcome my blog dear , ${mail}`
    const option ={
       from: config.email.to,
       to: mail,
       subject: messagesendto,
       html: "congratulations you have subscribed"
    } 
    sendmail(option,(info) =>{
      console.log("Email sent successfully");
      console.log("MESSAGE ID: ", info.messageId);
  }) 
   createSubscribe.save()
    res.send(subscribe)
  }
  catch(err){
    console.log(err)
  }
} )

router.get("/skills", async (req, res) => {
  const skills = await Skill.findAll();
  res.json(skills);
});

router.get("/project", async(req, res) =>{
  const project = await Portfolio.findAll()
  res.json(project)
})
router.get("/blogs/:id" , async ( req ,res) =>{
  const blogid =req.params.id
  console.log(blogid)
  const blogs = await Blog.findOne({
    where:{
      blogUrl: blogid
    }
  })
  if(blogs){
    res.json(blogs)
  }
  
 } )

router.get("/blogs" , async ( req ,res) =>{
 const blogs = await Blog.findAll()
 res.json(blogs)
} )

router.get("/", async(req, res) =>{
  
  res.send(req.session.isAdmin)
})

module.exports = router;
