const readAllCategories = async () => {
    try {
        const response = await fetch('/api/categories/?order=title');
        const categories = await response.json();
        return categories;
    } catch (err) {
        console.error('getAllCategories::error', err);
        throw err;
    }
};



const deleteCategory = async () => {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`/api/categories/?title=${req.body.title}`);
        const categories = await response.json();
        return categories;
    } catch (err) {
        console.error('deleteCategory::error', err);
        throw err;
    }
};



const createCategory = async (title) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(title),
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await fetch(`/api/Categories`, options);

      const createdCategories = await response.json();
      
      return createdCategories;

    } catch (err) {
      console.error('addOneCategorie::error: ', err);
      throw err;
    }
  };

// eslint-disable-next-line import/prefer-default-export
export { readAllCategories, deleteCategory, createCategory } ;

