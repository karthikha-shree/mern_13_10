const express = require('express');
const router = express.Router();

const { CreateTask, GetTask, GetOneTask, UpadteTaskByID ,DeleteTask ,updateTaskbyidpatch } = require('../controllers/taskControllers');

const { protect } = require('../middleware/authmiddleware');

router.use(protect);//applying the protect middleware to all the routes below this line

router.post('/create', protect, CreateTask);

router.get("/get", protect, GetTask);

router.get("/get/:id", protect, GetOneTask);

router.put("/update/:id", protect, UpadteTaskByID);

router.patch("/updatepatch/:id", protect, updateTaskbyidpatch);

router.delete("/del/:id",protect,DeleteTask);

module.exports = router;