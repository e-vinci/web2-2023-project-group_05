const { parse } = require('../utils/json');

const CAT = [
  {
    id: 1,
    title: 'Sports',
  },
  {
    id: 2,
    title: 'Technologies',
  },
  {
    id: 3,
    title: 'Musique',
  },
];

function getAllCategories() {
  const categories = parse(CAT);
  return categories;
}

module.exports = { getAllCategories };
