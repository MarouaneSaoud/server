const Book = require("../model/Book");
const getAllBooks = async () => {
  return await Book.find()
    .populate({ path: "categorie", select: ["name", "description"] })
    .sort({ date_publication: 1 });
};
const createBook = async (b) => {
  return await Book.create(b);
};
const getBookById = async (id) => {
  return await Book.findOne({ _id: id }).populate({
    path: "categorie",
    select: ["name", "description"],
  });
};
const deleteBookById = async (id) => {
  return await Book.deleteOne(id);
};
const updateBook = async (id, b) => {
  return await Book.findByIdAndUpdate({ _id: id }, b, { new: true });
};
module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  deleteBookById,
  updateBook,
};
