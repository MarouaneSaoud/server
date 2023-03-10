const bookService = require("../services/BookServices");

const countBook = async (req, res) => {
  try {
    const cmp = await bookService.countBook();
    res.status(200).json({ bookCount: cmp });
  } catch {
    res.status(500).json(error);
  }
};
const getBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBook = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBookByCategory = async (req, res) => {
  try {
    const books = await bookService.getBookByCategory(req.params.book);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteBook = async (req, res) => {
  try {
    await bookService.deleteBookById(req.params.id);
    res.status(200).json({ msg: "Book deleted" });
    console.log(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateBook = async (req, res) => {
  try {
    await bookService.updateBook(req.params.id, req.body);
    console.log(req.body);
    res.status(200).json({ msg: "Book modified" });
  } catch (error) {
    res.status(500).json(error);
  }
};
const addBook = async (req, res) => {
  try {
    const { file } = req;
    const {
      name,
      description,
      isbn,
      auteur,
      editeur,
      date_publication,
      price,
      category,
    } = req.body;
    const book = {
      name: name,
      description: description,
      isbn: isbn,
      auteur: auteur,
      editeur: editeur,
      date_publication: date_publication,
      price: price,
      category: category,
      image: file.path.replace("uploads\\BookImage\\", ""),
    };
    await bookService.createBook(book);
    res.status(201).json({ msg: "Book Added" });
  } catch (error) {
    res.status(500).json(error);
  }
};
const DeleteImage= async(request, response)=>{
  try{
    await bookService.deleteImg(request.params.imgname)
    response.status(200).json({ msg: `image deleted` });
  }catch (error) {
    console.log(error);
    response.status(500).json({ msg: error });
  }

};
module.exports = {
  DeleteImage,
  countBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
  addBook,
  getBookByCategory,
};
