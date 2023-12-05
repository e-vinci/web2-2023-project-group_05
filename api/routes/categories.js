const express = require('express');
const { getAllCategories } = require('../models/Categories');

const router = express.Router();

router.get('/', (req, res) => {
  const allCategories = getAllCategories();

  return res.json(allCategories);
});

module.exports = router;
