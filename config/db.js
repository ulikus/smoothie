require('dotenv').config();

const db = {
    "development": {
    "username": "postgres",
        "password": "changeme",
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "operatorsAliases": false
},
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST+":"+process.env.DB_PORT,
        "dialect": "postgres",
        "operatorsAliases": false
    }
};
module.exports = db[process.env.NODE_ENV] || db['development'];