import { clearPage, renderPageTitle } from '../../utils/render';

const ResultsPage = () => {
    clearPage();
    renderPageTitle('Results');
    renderResults();
};

function renderResults() {
    const main = document.querySelector('main');
    const search = document.querySelector('#search');
    const p = document.createElement('p');
    p.innerHTML = search.value;

    main.appendChild(p);
    main.appendChild(search);
}
  
export default ResultsPage;