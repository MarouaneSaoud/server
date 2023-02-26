const Book = require("../model/Book");
const fs = require("fs");
const path = require("path");
const counBook = async () => {
  return await Book.find().count();
};
const getAllBooks = async () => {
  return await Book.find()
    .populate({ path: "category", select: ["name", "description"] })
    .sort({ date_publication: 1 });
};

const createBook = async (b) => {
  return await Book.create(b);
};
const getBookById = async (id) => {
  return await Book.findOne({ _id: id })
    .populate({
      path: "category",
      select: ["name", "description"],
    })
    .sort({ date_publication: 1 });
};
const getBookByCategory = async (category) => {
  return await Book.find({ category: { $ne: null } })
    .populate({
      path: "category",
      select: ["name", "description"],
      match: {
        name: category,
      },
    })
    .sort({ date_publication: 1 });
};
const deleteBookById = async (id) => {
  return await Book.deleteOne({ _id: id });
};
const updateBook = async (id, book) => {
  return await Book.findByIdAndUpdate({ _id: id }, book, { new: true });
};
const deleteImg = async (imagename) => {
  const imagePath = path.join(
    __dirname,
    "..",
    "uploads",
    "BookImage",
    `${imagename}`
  );
  if (fs.existsSync(imagePath)) return await fs.unlinkSync(imagePath);
};
module.exports = {
  deleteImg,
  counBook,
  getAllBooks,
  createBook,
  getBookById,
  deleteBookById,
  updateBook,
  getBookByCategory,
};
