const db = require('./db_conf');

function getAllCategories() {
  return db.prepare('SELECT title FROM categories').all();
}

module.exports = { getAllCategories };
