const Blog = require("../models/blog");

const slugField = require("../middleware/slugify");

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

exports.blog_edit = async (req, res) => {};

exports.blog_delete = async (req, res) => {
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