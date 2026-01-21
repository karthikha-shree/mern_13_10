const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv =require('dotenv');
dotenv.config();
app.use(express.json());
app.use('/auth',require('./routes/authroutes'));
app.use('/task',require('./routes/taskroutes'));
app.get("/api",(req,res)=>{
    res.send("Hi from Express");
});

app.post("/api",(req,res)=>{
    const tempData = req.body;
    res.send(tempData);
})

mongoose.connect(process.env.MONGO_URI,{
    
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Error connecting to MongoDB", err);
}
);
app.listen(3000,()=>{

    console.log(`Server started on port 3000`);
})