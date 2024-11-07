// routes/teamRoutes.js
module.exports = app => {
    // import Router interface from express module
    var router = require("express").Router();
    const taskController = require("../controllers/taskController");
    // http://localhost:8075/api/task/addtasks
    
   
    router.post("/addtasks", taskController.CreateTask);
   
    
    app.use('/api/task', router);
    }
    