const express = require('express');

const {
  createCategory, deleteCategory, isTitleAlreadyExists,
// eslint-disable-next-line import/no-unresolved, import/extensions
} = require('../models/Categories');
const { getAllCategories } = require('../models/Categories');

const router = express.Router();

// read all categories
router.get('/', (req, res) => {
  // const allCategoriesPotentiallyOrdered = readAllCategories(req?.query?.order);
  const getcategorie = getAllCategories();

  return res.json(getcategorie);
});

// create topic
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;

  console.log('TITLE', title);

  if (!title) return res.sendStatus(404);

  const isExists = isTitleAlreadyExists(title);
  if (isExists) return res.sendStatus(409);
  const categoryCreated = createCategory(title);

  return res.json(categoryCreated);
});

router.delete('/:id', (req, res) => {
  const deletedCategory = deleteCategory(req.params.id);

  if (!deletedCategory) return res.sendStatus(404);

  return res.json(deletedCategory);
});
module.exports = router;
