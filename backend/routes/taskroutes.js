const express=require('express');
const router=express.Router();

const {CreateTask}=require('../controllers/taskControllers');

router.post('/create',CreateTask);  

module.exports=router;