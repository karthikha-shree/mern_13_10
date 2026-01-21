const Task =require('../models/task');

exports.CreateTask=async(req,res)=>{
    try{
        const {title,description,status,user}=req.body;
        const task=await Task.create({
            title,
            description,
            status,
            user
        });
        res.status(201).json({message:"Task created successfully",task});
    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
}