const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");
const Skill = require("../models/skill")
const Subscribe = require("../models/subscribe");
const Portfolio = require("../models/portfolio");


exports.blog_list =  async (req, res ) => {
  try {
   const blogs = await Blog.findAll()
    res.json(blogs)
  } catch (err) {
    console.log(err);
  }

};

exports.blog_create = async (req, res, next) => {
    const form = req.body.form;
    try {
      console.log(form)
      await Blog.create({
        header:  form.header,
        content: form.content,
        blogUrl: slugField(form.header),
      });
      next();
    } catch (err) {
      console.log(err);
    }
  
};

exports.blog_edit = async (req, res,next) => {
 if(req.method === "GET"){
  const blogid = req.params.blogid
  try{
    const blog = await Blog.findOne({
      where : {
        blogUrl: blogid
      }
    })   
    if(blog){
      res.json(blog)
    }
  }
  catch(err){
    console.log(err)
  }
 }
 else if(req.method ==="POST"){
  const blogid = req.body.form.id
  const form = req.body.form 


  console.log(form)
  try{
    const blog = await Blog.findOne({ where : { id: blogid }})
    if(blog){
      blog.header = form.header,
      blog.content = form.content,
      blog.blogUrl = slugField(form.header)
    }   
    await blog.save()

  }
  catch(err){
    console.log(err)
  }
 }
};

exports.blog_delete = async (req, res) => {
 
    try {
      const deleteBlog = req.body.deleteUrl;
   
      const blog = await Blog.findOne({
        where: {
         blogUrl: deleteBlog
        }
      });
      if (blog) {
        await blog.destroy();
     
      }
    
    } catch (err) {
      console.log(err);
    }
  };


exports.admin_login =async (req, res) => {
  const admin = req.body.form;
  console.log(admin);
  try {
    if (
      admin.name == process.env.ADMIN_NAME &&
      admin.password == process.env.ADMIN_PASSWORD
    ) {
      req.session.isAdmin = true;
      console.log("welcome boss");
      res.redirect("/");
    } else {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  } catch (err) {
    console.log(err);
  }
}
exports.panel_list = async (req, res) =>{
  
  try{
  const skill = await  Skill.findAll()
  const subscribe = await Subscribe.findAll()
  const portfoly =  await Portfolio.findAll() 
  const data = {
   skills: skill,
   subscribes: subscribe,
   portfolys: portfoly,
 };
  console.log(data)
 
   res.json(data)
  }catch(err){
   console.log();
  }
 }



exports.skill_edit = async (req, res) =>{
 }
exports.skill_create = async (req, res) =>{
 }
exports.skill_remove = async (req, res) =>{
}


exports.portfoly_edit = async (req, res) =>{
 
}
exports.portfoly_create = async (req, res) =>{
}
exports.portfoly_remove = async (req, res) =>{
 
}