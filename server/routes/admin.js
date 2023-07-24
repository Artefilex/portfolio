const express = require("express")
const router = express.Router()
const isAdmin = require("../middleware/isAdmin")
const adminController = require("../controlers/admin")
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


// create
router.post("/blogs/create", adminController.blog_create)

// delete
router.all("/blogs/delete/:blogid",adminController.blog_delete);

// edit
router.all("/blogs/:blogid",adminController.blog_edit)



router.post("/login",adminController.admin_login)

router.all("/blogs", adminController.blog_list);
 module.exports = router