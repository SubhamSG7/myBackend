const express=require("express");
const connect=require('./config/connect')
const Products=require('./model/productSchmena');

const app=express();

connect()


app.get("/",function(req,res){
    res.send("Welcome to the backend")
})
app.get('/product',async function(req,res){
    let {page,limit}=(req.query);
    page=Number(page);
    limit=Number(limit);
    const skip=(page-1)*limit;
    try {
        const selectedProducts=await Products.find().limit(limit).skip(skip)
        res.send(selectedProducts)
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000,function(){
    console.log("Server Listening at Port 3000");
    
})
