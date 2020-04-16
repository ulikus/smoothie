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
        "database": 'DATABASE',
        "dialect": "postgres",
        "protocol": 'postgres',
        "operatorsAliases": false,
        "use_env_variable": true
    }
};
module.exports = db[process.env.NODE_ENV] || db['development'];