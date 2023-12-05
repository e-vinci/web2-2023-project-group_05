const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/categories.json');

const categoriesTable = [];

function readAllCategories(orderBy) {
  const orderByTitle = orderBy?.includes('title') ? orderBy : undefined;
  let orderedCategoriesTable;
  const categories = parse(jsonDbPath, categoriesTable);
  // eslint-disable-next-line max-len
  if (orderByTitle) orderedCategoriesTable = [...categories].sort((a, b) => a.title.localeCompare(b.title));
  if (orderByTitle === '-title') orderedCategoriesTable = orderedCategoriesTable.reverse();

  const allCategoriesPotentiallyOrderd = orderedCategoriesTable ?? categories;
  return allCategoriesPotentiallyOrderd;
}

function createCategory(title) {
  const categories = parse(jsonDbPath, categoriesTable);

  console.log('TOPICS', categories);

  const newCategory = {
    id: getNextId(),
    title,
    creationDate: getDateNow(),
  };

  categories.push(newCategory);

  serialize(jsonDbPath, categories);

  return newCategory;
}
function getNextId() {
  const categories = parse(jsonDbPath, categoriesTable);

  const lastItemIndex = categories?.length !== 0 ? categories.length - 1 : undefined;

  if (lastItemIndex === undefined || lastItemIndex === null) return 1;

  const lastId = categories[lastItemIndex]?.id;

  const nextId = lastId + 1;

  return nextId;
}

function getDateNow() {
  const date = new Date();
  return `Ajouté le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à  ${date.getHours()}:${date.getMinutes()} `;
}
function deleteCategory(id) {
  const idAsNumber = Number(id);
  const categories = parse(jsonDbPath);
  const foundIndex = categories.findIndex((category) => category.id === idAsNumber);
  if (foundIndex < 0) return undefined;
  const deletedCategories = categories.splice(foundIndex, 1);
  const deletedCategorie = deletedCategories[0];
  serialize(jsonDbPath, categories);

  return deletedCategorie;
}
function isTitleAlreadyExists(title) {
  const categories = parse(jsonDbPath, categoriesTable);
  return categories.some((category) => category.title.toLowerCase() === title.toLowerCase());
}

module.exports = {
  createCategory,
  readAllCategories,
  deleteCategory,
  isTitleAlreadyExists,
};
