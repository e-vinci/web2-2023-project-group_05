
import { getAllCategories } from '../../model/categories';


const categoriesView = async () => {
    const viewCategorie = `<div id="categorieWrapper"></div>`;
  
    const main = document.querySelector('main');
    main.innerHTML = viewCategorie;
  
    const categorieWrapper = document.querySelector('#categorieWrapper');
  
    const categorie = await getAllCategories();
  
    const categorieAsHtmlTable = getHtmlCategorieTableAsString(categorie);
  
    categorieWrapper.innerHTML = categorieAsHtmlTable;

    const categorieElements = document.querySelectorAll('.categorie');

    categorieElements.forEach((categorieElement) => {
      categorieElement.addEventListener('click', () => {
        const dialog = document.createElement('div');
        dialog.innerHTML = `
        <p class="dialog-content">Rejoins un sujet déjà existant ou crée-en un!</p>
        <button id="rejoindreBtn" class="dialog-button">Rejoindre</button>
        <button id="creerBtn" class="dialog-button">Créer</button>
    `;


    
        // Ajoute la boîte de dialogue à la page
        document.body.appendChild(dialog);
    
        // Ajoute des gestionnaires d'événements pour les boutons
        document.getElementById('rejoindreBtn').addEventListener('click', () => {
            // Redirige vers la page de rejoindre un sujet déjà existant
            window.location.href = '/topic/view';
            document.body.removeChild(dialog); // Supprime la boîte de dialogue
        });
    
        document.getElementById('creerBtn').addEventListener('click', () => {
            // Redirige vers la page de création d'un nouveau sujet
            window.location.href = '/topic/add';
            document.body.removeChild(dialog); // Supprime la boîte de dialogue
        });
    });
    
  });
}; 
  

  function getHtmlCategorieTableAsString(categorie){
    if(categorie?.length === undefined || categorie.length === 0){
      return '<p class=p-5> No categorie yet : (</p>';
    }
    const htmlCategorieTable = `<div class="table-responsive p-5">
    <table class="table">
    <thead>
    <tr>
    <th scope = "col">Title</th>
    </tr>
    </thead>
    <tbody>
      ${categorie
        .map(
          (element) => `
          <tr>
           <td class="categorie"> <a href = "#">${element.title} </a></td>
            
          </tr>
          `,
        )
        .join('')}
        </tbody></table>`;
      
      return htmlCategorieTable;
  }

  

  // cree un addevent listener pour quand je clique sur element.title il renvoie un pop up.
  // Dans ce pop up il y'aura 2 choix soit rejoindre soit cree qui renverront des hfref et data uri qui renverrotn bref comprend
  
  


export default categoriesView;
