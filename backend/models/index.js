// Import db config
const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize_config = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

// Test the connection to the database
sequelize_config.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

// Initialize db object and models
const db = {};
db.Sequelize = Sequelize;
db.sequelize_config = sequelize_config;

db.spaces = require("./space.js")(sequelize_config, Sequelize);
db.teams = require("./team.js")(sequelize_config, Sequelize);
db.members = require("./member.js")(sequelize_config, Sequelize);
module.exports = db;
