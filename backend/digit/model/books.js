
var mongoose=require('mongoose');
var booksSchema=mongoose.Schema({
    productTitle:String,
    productAuthor:String,
    productCategory:String,
    productISBN:Number,
    productPublicationdate:Number,
    productAvailability:String,
    
    
})
var books=mongoose.model("books",booksSchema);
module.exports=books;