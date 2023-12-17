const express = require('express');
const { authorize, isAdmin } = require('../utils/auths');

const {
  createCategory,
  deleteCategory,
  isTitleAlreadyExists,
  readAllCategories,
} = require('../models/Categories');

const router = express.Router();

// Read all the categories ordered by the title, ascending or descending
router.get('/', (req, res) => {
  const getcategorie = readAllCategories(req?.query?.order);
  return res.json(getcategorie);
});

// Create a category and verify if the category's title doesnt already exists
router.post('/', authorize, isAdmin, (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;

  if (!title) return res.sendStatus(404);

  const isExists = isTitleAlreadyExists(title);
  if (isExists) return res.sendStatus(409);
  const categoryCreated = createCategory(title);

  return res.json(categoryCreated);
});

// Delete a category by its id
router.delete('/:id', authorize, isAdmin, (req, res) => {
  const deletedCategory = deleteCategory(req.params.id);

  if (!deletedCategory) return res.sendStatus(404);

  return res.json(deletedCategory);
});
module.exports = router;

/*
**************************************************************************************
*    Title: <
router.get,
router.post
router.delete
  >
*    Author: <Baroni>
*    Date: <15/12/2023>
*    Code version: <code version>
*    Availability: <https://github.com/e-vinci/js-exercises/tree/main>

***************************************************************************************
*/
