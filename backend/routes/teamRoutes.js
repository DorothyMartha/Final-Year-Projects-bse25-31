// routes/teamRoutes.js
module.exports = app => {
    // import Router interface from express module
    var router = require("express").Router();
    const teamController = require("../controllers/teamController");
    // http://localhost:8075/api/task/addteams
    
   
    router.post("/addteams", teamController.CreateTeam);
   
    
    app.use('/api/task', router);
    }
    