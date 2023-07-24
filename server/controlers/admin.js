const Blog = require("../models/blog")
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})
const slugField = require("../middleware/slugify")
exports.blog_create = async(req,res) =>{
    if(req.method=="POST"){
        
        try {
        const form = req.body.form
        //  const header = form.header
        //  const content =form.content  
        //  const blogUrl = slugField(form.header)
        console.log(form); 
        //  await Blog.create({
        //     header: header,
        //     content:content,
        //     blogUrl:blogUrl
        //  })
         console.log(form)
         res.redirect("/")
          } catch (err) {
            console.log(err);
          }
    }
}


exports.blog_edit = async(req,res) =>{
}


exports.blog_delete = async(req,res) =>{
   if (req.method === "POST") {
        try {
          const blogid = req.body.blogid;
          const blog = await Blog.findByPk(blogid);
          if (blog) {
            await blog.destroy();
            res.redirect("/admin/blogs");
          }
          res.redirect("/admin/blogs/");
        } catch (err) {
          console.log(err);
        }
      }
}


exports.admin_controller = async(req ,res) =>{
    const admin = req.body.form
    console.log(admin)
    try{
        if(admin.name == process.env.ADMIN_NAME && admin.password == process.env.ADMIN_PASSWORD){
            req.session.isAdmin = true;
            console.log("welcome boss")
            res.redirect("/")
        } else{
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    }catch(err)
    {
        console.log(err);
    }
}