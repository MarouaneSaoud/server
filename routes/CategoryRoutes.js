const express = require("express")
const router = express.Router();
const categoryController= require("../controllers/categoryControllers")
router.route("/")
       .get(categoryController.getAllCategories)
       .post(categoryController.createCategory);
router.route("/id")
      .put(categoryController.updateCategoryByID)
      .delete(categoryController.deleteCatgory)
      .get(categoryController.getCategoryById);
module.exports=router;