import readAllCategories from '../../model/categories';

const categoriesView = async () => {
    const viewCategorie = `<div id="categorieWrapper"></div>`;
  
    const main = document.querySelector('main');
    main.innerHTML = viewCategorie;
  
    const categorieWrapper = document.querySelector('#categorieWrapper');
  
    const categorie = await readAllCategories();
  
    const categorieAsHtmlTable = getHtmlCategorieTableAsString(categorie);
  
    categorieWrapper.innerHTML = categorieAsHtmlTable;
  
    
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
            <td class="fw-bold text-info" contenteditable="true">${element.title}</td>
            
          </tr>
          `,
        )
        .join('')}
        </tbody></table>`;
      
      return htmlCategorieTable;
  }
  
  


export default categoriesView;
