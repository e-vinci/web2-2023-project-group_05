const express = require('express');
const { isAdmin, authorize } = require('../utils/auths');

const {
  createCategory, deleteCategory, isTitleAlreadyExists, readAllCategories,
// eslint-disable-next-line import/no-unresolved, import/extensions
} = require('../models/Categories');
// eslint-disable-next-line import/no-unresolved

const router = express.Router();

// read all categories
router.get('/', (req, res) => {
  // const allCategoriesPotentiallyOrdered = readAllCategories(req?.query?.order);
  const categorie = readAllCategories(req?.query?.order);

  return res.json(categorie);
});

// create category
router.post('/', authorize, isAdmin, (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;

  if (!title) return res.sendStatus(404);

  const isExists = isTitleAlreadyExists(title);
  if (isExists) return res.sendStatus(409);
  const categoryCreated = createCategory(title);

  return res.json(categoryCreated);
});

router.delete('/:title', (req, res) => {
  const deletedCategory = deleteCategory(req.params.title);

  if (!deletedCategory) return res.sendStatus(404);

  return res.json(deletedCategory);
});
module.exports = router;
