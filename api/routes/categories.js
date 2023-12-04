const express = require('express');

const { getCategoriesFromSearch } = require('../models/Categories');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = getCategoriesFromSearch();
  return res.json(categories);
});

module.exports = router;
