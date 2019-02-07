'use strict';

var _require = require('pg'),
    Pool = _require.Pool;

var dotenv = require('dotenv');

dotenv.config();

var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', function () {
  console.log('connected to the db');
});

var createTables = function createTables() {
  var queryText = 'CREATE TABLE IF NOT EXISTS\n      parties(\n        id UUID PRIMARY KEY,\n        name VARCHAR(128) NOT NULL,\n        address VARCHAR(128) NOT NULL,\n        logo VARCHAR(128) NOT NULL\n      );\n      CREATE TABLE IF NOT EXISTS\n      offices(\n        id UUID PRIMARY KEY,\n        name VARCHAR(128) NOT NULL,\n        type VARCHAR(128) UNIQUE NOT NULL\n      );\n      CREATE TABLE IF NOT EXISTS\n        users(\n        id UUID PRIMARY KEY,\n        firstname VARCHAR(128) NOT NULL,\n        lastname VARCHAR(128) NOT NULL,\n        othername VARCHAR(128) NOT NULL,\n        email VARCHAR(128) UNIQUE NOT NULL,\n        phoneNumber VARCHAR(128) NOT NULL,\n        passportUrl VARCHAR(128) NOT NULL,\n        isAdmin BOOLEAN NOT NULL,\n        password VARCHAR(128) NOT NULL\n      )';

  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

var dropTables = function dropTables() {
  var queryText = 'DROP TABLE IF EXISTS parties, offices, users';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

pool.on('remove', function () {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables: createTables,
  dropTables: dropTables
};

require('make-runnable');
console.log("Database Init");