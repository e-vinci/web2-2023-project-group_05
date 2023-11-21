import { clearPage, renderPageTitle } from '../../utils/render';

const ResultsPage = () => {
    clearPage();
    renderPageTitle('Results');
    renderResults();
};

function renderResults() {
    const main = document.querySelector('main');
    const form = document.querySelector('#searchForm');
    const resultsSearch = document.querySelector('#mySearch');
    const p = document.createElement('p');
    const p2 = document.createElement('p');

    form.addEventListener("click", (e) => {
        e.preventDefault();
        const searchTab = [];

        if(resultsSearch.value === "Jeux vidéos") {
            searchTab.push(resultsSearch);
            p2.innerHTML = `Résultat(s) : ${searchTab.length}`;
            p.innerHTML = resultsSearch.value;
            p.className = 'm-5';
        }
        else {
            p2.innerHTML = `Résultat(s) : 0`;
            p.innerHTML = 'Pas de résultat pour cette reccherche';
            p.className = 'alert alert-danger m-5';
        }
    });

    main.appendChild(p2);
    main.appendChild(p);
}
  
export default ResultsPage;