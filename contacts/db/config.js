require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://sinto:heslo@localhost:5432/databaza';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }