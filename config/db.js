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
        "dialect": "postgres",
        "protocol": 'postgres',
        "operatorsAliases": false,
        "use_env_variable": 'DATABASE_URL'
    }
};
module.exports = db[process.env.NODE_ENV] || db['development'];