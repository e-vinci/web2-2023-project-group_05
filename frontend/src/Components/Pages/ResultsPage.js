import { clearPage, renderPageTitle } from '../../utils/render';

const ResultsPage = () => {
    clearPage();
    renderPageTitle('Results');
    renderResults();
};

const main = document.querySelector('main');
const p = document.createElement('p');
const p2 = document.createElement('p');

async function renderResults() {
    const form = document.querySelector('#searchForm');
    const search = document.querySelector('#mySearch');

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        p.innerHTML = '';
        p2.innerHTML = '';


        const categories = await getCategoriesFromSearch();

        const filteredCategories = filterCategories(search.value,categories);
        displayCategories(filteredCategories);
    });
}

async function getCategoriesFromSearch() {
    try {
        const response = await fetch('/api/categories');

        if (!response.ok) {
            throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        }

        const categories = await response.json();
        return categories;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function displayCategories(categories) {
    p2.innerHTML = `Nombre de résultat(s) : ${categories.length}`;

    categories.forEach((category) => {
        const span = document.createElement('span');
        const lineBreak = document.createElement('span');
        span.innerHTML = category.title;
        lineBreak.innerHTML = '<br>';
        p.appendChild(lineBreak);
        p.appendChild(span);
    });
    main.appendChild(p2);
    main.appendChild(p);
}

function filterCategories(searchCategory, categories) {
    return categories.filter((category) => category.title.toLowerCase().startsWith(searchCategory.toLowerCase()));
}
  
export default ResultsPage;