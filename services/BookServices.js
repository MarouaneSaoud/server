const Book = require("../model/Book");
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
  return await Book.findOne({ _id: id }).populate({
    path: "category",
    select: ["name", "description"],
  })
  .sort({ date_publication: 1 });
};
const deleteBookById = async (id) => {
  return await Book.deleteOne({_id:id});
};
const updateBook = async (id, book) => {
  return await Book.findByIdAndUpdate({ _id: id }, book, { new: true });
};
module.exports = {
  counBook,
  getAllBooks,
  createBook,
  getBookById,
  deleteBookById,
  updateBook,
};
