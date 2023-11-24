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

    fetch('')

    form.addEventListener("click", (e) => {
        e.preventDefault();
        const searchTab = ["Jeux vidéos", "Films", "Séries", "Livres", "Animé"];
    });

    main.appendChild(p2);
    main.appendChild(p);
}
  
export default ResultsPage;