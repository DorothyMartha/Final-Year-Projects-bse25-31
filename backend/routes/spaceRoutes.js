// routes/spaceRoutes.js
module.exports = app => {
// import Router interface from express module
var router = require("express").Router();
const spaceController = require("../controllers/spaceController");
// http://localhost:8075/api/task/addspaces

// router.get("/spaces", spaceController.GetAllSpaces);
// router.get("/spaces/:id", spaceController.GetSpaceById);
router.post("/addspaces", spaceController.CreateSpace);
// router.put("/spaces/:id", spaceController.UpdateSpace);
// router.delete("/spaces/:id", spaceController.DeleteSpace);
// router.get("/spaces/search", spaceController.SearchSpaceByName);

app.use('/api/task', router);
}
