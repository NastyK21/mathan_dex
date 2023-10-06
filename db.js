const Pool = require("pg").Pool;

const pool =new Pool({
    user: "postgres",
    host:"localhost",
    database:"markets",
    password:"sqlparas",
    port : 5432,

});
module.exports = pool;
