// controllers/spaceController.js

const db = require("../models");
const Space = db.spaces;
const Op = db.Sequelize.Op;

// Retrieve all Spaces
// exports.GetAllSpaces = (req, res) => {
//     Space.findAll()
//         .then(data => {
//             res.send({
//                 status: "Success",
//                 status_code: 1000,
//                 message: "Spaces successfully retrieved",
//                 number_of_spaces: data.length,
//                 results: data
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 status: "Error",
//                 status_code: 1001,
//                 message: err.message || "Error occurred while retrieving Spaces"
//             });
//         });
// };

// Retrieve Space by ID
// exports.GetSpaceById = (req, res) => {
//     const id = req.params.id;
//     Space.findByPk(id)
//         .then(data => {
//             if (data) {
//                 res.send({
//                     status: "Success",
//                     status_code: 1000,
//                     message: "Space retrieved successfully",
//                     result: data
//                 });
//             } else {
//                 res.status(404).send({
//                     status: "Error",
//                     status_code: 1002,
//                     message: `Cannot find Space with id=${id}`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 status: "Error",
//                 status_code: 1001,
//                 message: err.message || "Error occurred while retrieving the Space"
//             });
//         });
// };

// Create a new Space
exports.CreateSpace = (req, res) => {
    if (req.method === "POST") {
        const { spaceName, type, spaceDescription, createDate } = req.body;

        // Validate input
        if (!spaceName || !type) {
            return res.status(400).send({
                status: "Error",
                status_code: 1003,
                message: "SpaceName,Type,spaceDescription and createDate are required"
            });
        }

        // Create Space
        Space.create({ spaceName, type, spaceDescription, createDate })
            .then(data => {
                res.send({
                    status: "Success",
                    status_code: 1000,
                    message: "Space created successfully",
                    result: data
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: "Error",
                    status_code: 1001,
                    message: err.message || "Error occurred while creating the Space"
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

// Update a Space by ID
// exports.UpdateSpace = (req, res) => {
//     if (req.method === "PUT") {
//         const id = req.params.id;

//         Space.update(req.body, { where: { id } })
//             .then(num => {
//                 if (num == 1) {
//                     res.send({
//                         status: "Success",
//                         status_code: 1000,
//                         message: "Space updated successfully"
//                     });
//                 } else {
//                     res.status(404).send({
//                         status: "Error",
//                         status_code: 1002,
//                         message: `Cannot update Space with id=${id}. Maybe Space was not found or req.body is empty`
//                     });
//                 }
//             })
//             .catch(err => {
//                 res.status(500).send({
//                     status: "Error",
//                     status_code: 1001,
//                     message: err.message || "Error occurred while updating the Space"
//                 });
//             });
//     } else {
//         res.status(405).send({
//             status: "Error",
//             status_code: 1011,
//             message: "METHOD NOT ALLOWED"
//         });
//     }
// };

// Delete a Space by ID
// exports.DeleteSpace = (req, res) => {
//     if (req.method === "DELETE") {
//         const id = req.params.id;

//         Space.destroy({ where: { id } })
//             .then(num => {
//                 if (num == 1) {
//                     res.send({
//                         status: "Success",
//                         status_code: 1000,
//                         message: "Space deleted successfully"
//                     });
//                 } else {
//                     res.status(404).send({
//                         status: "Error",
//                         status_code: 1002,
//                         message: `Cannot delete Space with id=${id}. Maybe Space was not found`
//                     });
//                 }
//             })
//             .catch(err => {
//                 res.status(500).send({
//                     status: "Error",
//                     status_code: 1001,
//                     message: err.message || "Error occurred while deleting the Space"
//                 });
//             });
//     } else {
//         res.status(405).send({
//             status: "Error",
//             status_code: 1011,
//             message: "METHOD NOT ALLOWED"
//         });
//     }
// };

// // Search for Spaces by spaceName
// exports.SearchSpaceByName = (req, res) => {
//     const searchQuery = req.query.spaceName;
//     const condition = searchQuery ? { spaceName: { [Op.like]: `%${searchQuery}%` } } : null;

//     Space.findAll({ where: condition })
//         .then(data => {
//             res.send({
//                 status: "Success",
//                 status_code: 1000,
//                 message: "Spaces successfully retrieved",
//                 number_of_spaces: data.length,
//                 results: data
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 status: "Error",
//                 status_code: 1001,
//                 message: err.message || "Error occurred while searching Spaces"
//             });
//         });
// };
