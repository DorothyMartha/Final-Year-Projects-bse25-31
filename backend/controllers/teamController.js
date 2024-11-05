


const db = require("../models");
const Team = db.teams;
const Op = db.Sequelize.Op;
exports.CreateTeam = (req, res) => {
    if (req.method === "POST") {
        const { name,description } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).send({
                status: "Error",
                status_code: 1003,
                message: "Name and Description are required"
            });
        }

        // Create team
        Team.create({ name, description })
            .then(data => {
                res.send({
                    status: "Success",
                    status_code: 1000,
                    message: "Team created successfully",
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