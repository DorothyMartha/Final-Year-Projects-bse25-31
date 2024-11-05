
const db = require("../models");
const Member = db.members;
const Op = db.Sequelize.Op;
exports.CreateMember = (req, res) => {
    if (req.method === "POST") {
        const { name } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).send({
                status: "Error",
                status_code: 1003,
                message: "Name is required"
            });
        }

        // Create member
        Member.create({ name })
            .then(data => {
                res.send({
                    status: "Success",
                    status_code: 1000,
                    message: "Member created successfully",
                    result: data
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: "Error",
                    status_code: 1001,
                    message: err.message || "Error occurred while creating the Member"
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