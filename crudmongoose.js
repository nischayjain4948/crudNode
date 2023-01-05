const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:38015/icollege");

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String,

});


const main = async ()=>{
    const Product = mongoose.model('products', productSchema);

    let data = new Product({name:"samsung a 32", price:22000, brand:"samsung", category:"smartphones"});

    const result = await data.save();
    console.log(result);

}
main()