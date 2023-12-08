const readAllCategories = async () => {
    try {
        const response = await fetch('/api/categories');
        const categories = await response.json();
        return categories;
    } catch (err) {
        console.error('readAllCategories::error', err);
        throw err;
    }
};

// eslint-disable-next-line import/prefer-default-export
export { readAllCategories };

