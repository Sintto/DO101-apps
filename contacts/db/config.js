require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://sinto:password@contactsdb-service:5432/databaza'; //postgresql://username:password@dbservice:port/dbname
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

module.exports = { pgconn }