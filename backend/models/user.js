const mongoose=require('mongoose');
//  const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
//  })
// const User=mongoose.model('User',userSchema);so this will the name of the database collection name "here user"
// module.exports=User;
const userSchema= mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})              
module.exports=mongoose.model('User',userSchema);
