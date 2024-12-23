var express = require('express');
var books = require('../model/books');
var router = express.Router();
var authors = require('../model/authors');
var category = require('../model/category');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/books",(req,res)=>{
  books.find({})
  .then((doc)=>res.send(doc))
  .catch((err)=>console.log(err))
})
router.post("/add",(req,res)=>{
  var newproduct=new books(req.body);
  newproduct.save()
  .then((result)=>{res.send({status:"result",response:result})})
  .catch((err)=>console.log(err))
})
router.post("/addmany",(req,res)=>{
  books.insertMany(req.body)
  .then((result)=>res.send({status:"added",response:result}))
  .catch((err)=>console.log(err))
})
router.get("/product/:id",(req,res)=>{
  books.findOne({productId:req.params.id})
  .then((doc)=>res.send(doc))
  .catch((err)=>console.log(err))
})
router.delete("/product/:id",(req,res)=>{
  books.findByIdAndDelete(req.params.id)
  .then((result)=>res.send({status:"result",response:result}))
  .catch((err)=>console.log(err))
})
router.put("/update/:id",(req,res)=>{
  books.findByIdAndUpdate(req.params.id,req.body)
  .then((result)=>res.send({status:"result",response:result}))
  .catch((err)=>console.log(err))
})
// router.get("/getproducts",(req,res)=>{
//   const{price}=req.query;
//   books.find({productPrice:{$gt:price}})
//   .then((docs)=>res.send(docs))
//   .catch((err)=>console.log(err));
// })




router.get("/getauthors",(req,res)=>{
  authors.find({})
  .then((doc)=>res.send(doc))
  .catch((err)=>console.log(err))
})
router.post("/addauthors",(req,res)=>{
  var newproduct=new authors(req.body);
  newproduct.save()
  .then((result)=>{res.send({status:"result",response:result})})
  .catch((err)=>console.log(err))
})
router.get("/author/:id",(req,res)=>{
  authors.findOne({productId:req.params.id})
  .then((doc)=>res.send(doc))
  .catch((err)=>console.log(err))
})
router.delete("/author/:id",(req,res)=>{
  authors.findByIdAndDelete(req.params.id)
  .then((result)=>res.send({status:"result",response:result}))
  .catch((err)=>console.log(err))
})
router.put("/updateauthors/:id",(req,res)=>{
  authors.findByIdAndUpdate(req.params.id,req.body)
  .then((result)=>res.send({status:"result",response:result}))
  .catch((err)=>console.log(err))
})
router.post("/addmanyauthors",(req,res)=>{
  authors.insertMany(req.body)
  .then((result)=>res.send({status:"added",response:result}))
  .catch((err)=>console.log(err))
})




router.get("/category",(req,res)=>{
  category.find({})
  .then((doc)=>res.send(doc))
  .catch((err)=>console.log(err))
})
router.post("/addcategory",(req,res)=>{
  var newproduct=new category(req.body);
  newproduct.save()
  .then((result)=>{res.send({status:"result",response:result})})
  .catch((err)=>console.log(err))
})
router.get("/category/:id",(req,res)=>{
  category.findOne({productId:req.params.id})
  .then((doc)=>res.send(doc))
  .catch((err)=>console.log(err))
})

router.delete("/category/:id",(req,res)=>{
  category.findByIdAndDelete(req.params.id)
  .then((result)=>res.send({status:"result",response:result}))
  .catch((err)=>console.log(err))
})
router.put("/update/:id",(req,res)=>{
  category.findByIdAndUpdate(req.params.id,req.body)
  .then((result)=>res.send({status:"result",response:result}))
  .catch((err)=>console.log(err))
})
router.post("/addmanycategory",(req,res)=>{
  category.insertMany(req.body)
  .then((result)=>res.send({status:"added",response:result}))
  .catch((err)=>console.log(err))
})

module.exports = router;
