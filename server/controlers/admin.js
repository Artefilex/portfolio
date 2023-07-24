const Blog = require("../models/blog");

const slugField = require("../middleware/slugify");

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
  const blogid = req.body.blogid
  const header = req.body.header;
  const content = req.body.content;
  try{
    const blog = await Blog.findOne({ where : { id: blogid }})
    if(blog){
      blog.header = header,
      blog.content = content,
      blog.url = slugField(header)
    }   
    await blog.save()

  }
  catch(err){
    console.log(err)
  }
 }
};

exports.blog_delete = async (req, res,next) => {
  if (req.method === "POST") {
    try {
      const blogid = req.body.blogid;
      const blog = await Blog.findByPk(blogid);
      if (blog) {
        await blog.destroy();
        next()
      }
    
    } catch (err) {
      console.log(err);
    }
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