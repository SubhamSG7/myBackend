const mongoose=require('mongoose');



const productSchema=mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    image:{type:String},
    description:{type:String},
    quantity:{type:Number}
})
const productModel=mongoose.model('products',productSchema);
module.exports=productModel;