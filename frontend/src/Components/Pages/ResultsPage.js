import { clearPage, renderPageTitle } from '../../utils/render';
import readAllCategories from '../../model/categories';
import Navigate from '../Router/Navigate';

const ResultsPage = () => {
    clearPage();
    renderPageTitle('Results');
    renderResults();
};

const mainResults = document.querySelector('main');
const p = document.createElement('p');
const p2 = document.createElement('p');

async function renderResults() {
    const form = document.querySelector('#searchForm');
    const search = document.querySelector('#mySearch');

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        Navigate('/results');

        p.innerHTML = '';
        p2.innerHTML = '';

        const categories = await readAllCategories();

        const filteredCategories = filterCategories(search.value,categories);
        displayCategories(filteredCategories);
    });
};

function displayCategories(categories) {
    p2.innerHTML = `Nombre de résultat(s) : ${categories.length}`;

    categories.forEach((category) => {
        const span = document.createElement('span');
        span.innerHTML = `${category.title}<br>`;
        p.appendChild(span);
    });
    mainResults.appendChild(p2);
    mainResults.appendChild(p);
}

function filterCategories(searchCategory, categories) {
    return categories.filter((category) => category.title.toLowerCase().startsWith(searchCategory.toLowerCase()));
}
  
export default ResultsPage;