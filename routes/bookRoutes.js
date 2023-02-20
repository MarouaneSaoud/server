const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");
router.get("/count",bookController.countBook);
router
    .route("/")
    .get(bookController.getBooks)
    .post(bookController.addBook);

router
  .route("/:id")
  .put(bookController.updateBook)
  .delete(bookController.deleteBook)
  .get(bookController.getBook);

module.exports = router;
