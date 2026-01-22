const Task = require('../models/task');

exports.CreateTask = async (req, res) => {
    try {
        const { title, description, status, user } = req.body;
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
            user: req.user.id
        });
        res.status(201).json({ message: "Task created successfully", task });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error in creating task" });
    }
}

exports.GetTask = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });//finding all the tasks of the particular user
        res.status(200).json({ message: "Tasks fetched successfully", tasks });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error in getting task" });
    }
};

exports.GetOneTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.id });//finding one task according to id 
        res.status(200).json({ message: "Particular Task fetched successfully", task });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error in getting particular task" })
    }
};

exports.UpadteTaskByID = async (req, res) => {
    try {

        const updatedtask = await Task.findByIdAndUpdate(
            { _id: req.params.id, user: req.user.id },//finding the task by id and user id
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status
            },//updating the task with the data in the body
            { new: true }//to return the updated task
        );
        if (!updatedtask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated successfully", updatedtask });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error in updating task" });
    }
}

exports.updateTaskbyidpatch = async (req, res) => {
    try {
        const updatedbypatch = await Task.findByIdAndUpdate(
            { _id: req.params.id, user: req.user.id },
            req.body,
            { new: true }
        );
        if (!updatedbypatch) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated successfully by patch", updatedbypatch });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error in updating task by patch" });
    }
}
exports.DeleteTask = async (req, res) => {
    try {
        const deltask = await Task.findOneAndDelete(
            { _id: req.params.id, user: req.user.id },
            { new: true }
        )
        res.status(200).json({ message: "task deleted successfully", deltask })

    } catch (err) {
        return res.status(500).json({ message: "Internal server error in deleting task" })
    }
}
