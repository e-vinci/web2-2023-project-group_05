const config = require('../../config');

const { dbPath } = config;
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
const db = require('better-sqlite3')(dbPath, { verbose: console.log });

module.exports = db;
