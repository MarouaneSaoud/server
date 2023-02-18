const bookService =require("../services/BookServices")
const getBooks=async(req,res)=>{
    try{
        const books=await bookService.getAllBooks()
        res.status(200).json(books)
    }catch(error){
        res.status(500).json(error)
    }
}
const getBook=async(req,res)=>{
    try{
        const book=await bookService.getBookById(req.params.id)
        res.status(200).json(book)
    }catch(error){
        res.status(500).json(error)
    }
}
const deleteBook =async(req,res)=>{
    try{
        await bookService.deleteBookById(req.params.id)
        res.status(200).json("livre bien supprimée")
    }catch (error) {
        res.status(500).json(error)
    }
}
const updateBook = async (req,res) =>{
    try {
        await bookService.updateBook(req.body)
        res.status(200).json("livre bien modifiée")
    }catch (error){
        res.status(500).json(error)
    }
}
const addBook = async (req,res) => {
    try {
        await bookService.createBook(req.body)
        res.status(201).json("book bien ajoutée")
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports={
    getBooks,
    getBook,
    deleteBook,
    updateBook,
    addBook

}