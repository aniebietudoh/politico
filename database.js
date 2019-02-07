const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

const createTables = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      parties(
        id UUID PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        address VARCHAR(128) NOT NULL,
        logo VARCHAR(128) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS
      offices(
        id UUID PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        type VARCHAR(128) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS
        users(
        id UUID PRIMARY KEY,
        firstname VARCHAR(128) NOT NULL,
        lastname VARCHAR(128) NOT NULL,
        othername VARCHAR(128) NOT NULL,
        email VARCHAR(128) UNIQUE NOT NULL,
        phoneNumber VARCHAR(128) NOT NULL,
        passportUrl VARCHAR(128) NOT NULL,
        isAdmin BOOLEAN NOT NULL,
        password VARCHAR(128) NOT NULL
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS parties, offices, users';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');
