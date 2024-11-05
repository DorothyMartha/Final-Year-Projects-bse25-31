// import modules

// building REST APIs
const express = require("express");

// helps to parse the json requests and create request objects
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extendend: true }));

// importing models
const db = require("./models");

db.sequelize_config.sync(
    {force: false}
).then(
    () => { console.log("DB synchronised")}
);


// API Routes

app.get("/n", (req, res) => {
    res.json(
        {
            "status": "Sucess",
            "status_code": 100,
            "message": "Welcome to Task MS"
        }
    );
});

app.post("/data", (req, res) => {
    const data = req.body.data_r;
    if(!data){
        res.json({
            "status": "Error",
            "status_code": 101,
            "message": "No Data is available",
        });
    }else{
        res.json(
            {
                "status": "Sucess",
                "status_code": 100,
                "message": "Welcome to Task MS",
                "data": `Result - ${data}`
            }
        );
    }
    
});

// import space routes
require("./routes/spaceRoutes")(app);
// import team routes
require("./routes/teamRoutes")(app);

// import member routes
require("./routes/memberRoutes")(app);

// define port for project
const PORT = 8075;

// Monitor when server starts
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});

