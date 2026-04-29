 const mongoURL="mongodb+srv://subhamdas_db_user:qwerty123@cluster0.m7khlcr.mongodb.net/?appName=Cluster0"
 const mongoose=require('mongoose');



 async function connect() {
    try {
        await mongoose.connect(mongoURL);
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
 }
module.exports=connect;