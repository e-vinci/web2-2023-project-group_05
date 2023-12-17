const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/categories.json');

function readAllCategories(orderBy) {
  const orderByTitle = orderBy?.includes('title') ? orderBy : undefined;
  let orderedCategoriesTable;
  const categories = parse(jsonDbPath);
  if (orderByTitle) {
    orderedCategoriesTable = [...categories].sort((a, b) => a.title.localeCompare(b.title));
  }

  const allCategoriesPotentiallyOrderd = orderedCategoriesTable ?? categories;
  return allCategoriesPotentiallyOrderd;
}

function createCategory(title) {
  const categories = parse(jsonDbPath);

  const newCategory = {
    id: getNextId(),
    title,
    creationDate: getDateNow(),
  };

  categories.push(newCategory);

  serialize(jsonDbPath, categories);

  return newCategory;
}

// Generate the next id for the category
function getNextId() {
  const categories = parse(jsonDbPath);

  const lastItemIndex = categories?.length !== 0 ? categories.length - 1 : undefined;

  if (lastItemIndex === undefined || lastItemIndex === null) return 1;

  const lastId = categories[lastItemIndex]?.id;

  const nextId = lastId + 1;

  return nextId;
}

// Get the actuel date when a category is created
function getDateNow() {
  const date = new Date();
  return `Ajouté le ${date.getDate()}/${date.getMonth()
    + 1}/${date.getFullYear()} à  ${date.getHours()}:${date.getMinutes()} `;
}

function deleteCategory(id) {
  const idAsNumber = Number(id);
  const topics = parse(jsonDbPath);
  const foundIndex = topics.findIndex((topic) => topic.id === idAsNumber);
  if (foundIndex < 0) return undefined;
  const deletedTopics = topics.splice(foundIndex, 1);
  const deletedTopic = deletedTopics[0];
  serialize(jsonDbPath, topics);

  return deletedTopic;
}

// Verify if the title of a category already exists
function isTitleAlreadyExists(title) {
  const categories = parse(jsonDbPath);
  return categories.some((category) => category.title.toLowerCase() === title.toLowerCase());
}

module.exports = {
  createCategory,
  readAllCategories,
  deleteCategory,
  isTitleAlreadyExists,
};

/*
**************************************************************************************
*    Title: <
createCategory,
  readAllCategories,
  deleteCategory,
  >
*    Author: <Baroni>
*    Date: <15/12/2023>
*    Code version: <code version>
*    Availability: <https://github.com/e-vinci/js-exercises/tree/main>

***************************************************************************************
*/
