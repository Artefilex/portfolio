const express = require("express")
const router = express.Router()
const isAdmin = require("../middleware/isAdmin")
const adminController = require("../controlers/admin")


// delete
router.all("/blogs/delete/:blogid",adminController.blog_delete);

// edit
router.all("/blogs/:blogid",adminController.blog_edit)

// create
router.all("/blogs/create", adminController.blog_create)

router.post("/login",adminController.admin_controller)


 module.exports = router