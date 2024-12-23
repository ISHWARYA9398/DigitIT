
var mongoose=require('mongoose');
var authorsSchema=mongoose.Schema({
    authorName:String,
    authorBiography:String,
    authoredBooks:Array, 
})
var authors=mongoose.model("authors",authorsSchema);
module.exports=authors;