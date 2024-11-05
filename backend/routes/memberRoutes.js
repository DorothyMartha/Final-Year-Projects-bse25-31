// routes/memberRoutes.js
module.exports = app => {
    // import Router interface from express module
    var router = require("express").Router();
    const memberController = require("../controllers/memberController");
    // http://localhost:8075/api/task/addmembers
    
   
    router.post("/addmembers", memberController.CreateMember);
   
    
    app.use('/api/task', router);
    }
    