


const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;
exports.CreateTask = (req, res) => {
    if (req.method === "POST") {
        const { name,priority,description,comment,startDate,dueDate } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).send({
                status: "Error",
                status_code: 1003,
                message: "Name ,Priority,Description ,comment , startDate,and dueDate are required"
            });
        }

        // Create team
        Team.create({ name,priority, description,comment,startDate,dueDate })
            .then(data => {
                res.send({
                    status: "Success",
                    status_code: 1000,
                    message: "Task created successfully",
                    result: data
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: "Error",
                    status_code: 1001,
                    message: err.message || "Error occurred while creating the Team"
                });
            });
    } else {
        res.status(405).send({
            status: "Error",
            status_code: 1011,
            message: "METHOD NOT ALLOWED"
        });
    }
};