const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");
const multer = require("multer");
//Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/BookImage");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage }).single("image");

router.get("/count", bookController.countBook);
router
  .route("/")
  .get(bookController.getBooks)
  .post(upload, bookController.addBook);

router
  .route("/:id")
  .put(bookController.updateBook)
  .delete(bookController.deleteBook)
  .get(bookController.getBook);
router.post("/uploads", upload, (req, res) => {
  const { file } = req;
  res.send({
    file: file.originalname,
    path: file.path,
  });
});
router.get("/category/:book",bookController.getBookByCategory)
router.delete('/deleteimage/:imgname',bookController.DeleteImage)

module.exports = router;
