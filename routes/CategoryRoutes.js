const router = require("express").Router();
const categoryController = require("../controllers/categoryControllers");
router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);
router.get("/count", categoryController.countcat);
router
  .route("/:id")
  .put(categoryController.updateCategoryByID)
  .delete(categoryController.deleteCatgory)
  .get(categoryController.getCategoryById);

module.exports = router;
