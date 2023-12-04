const db = require('./db_conf');

function getCategoriesFromSearch() {
  return db.prepare('SELECT title FROM categories').all();
}

module.exports = { getCategoriesFromSearch };
