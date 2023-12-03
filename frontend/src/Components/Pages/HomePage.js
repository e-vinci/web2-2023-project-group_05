import logo from '../../img/IMAGE.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <section class="HomePage">
    <div class="section-container">
    <span>
          <div class="container">
              <div class="text-block">
                  <div class="logo-holder">
                    <a class="nav-link" href="#" data-uri="/">        
                      <img class= "logo" src="${logo}" data-uri="/">
                    </a>
                  </div>
                  <div class="text">
                    <h1 id="title"> La grande critique !</h1>
                    <p>Tu as comme passion de faire le débat sur tes sujets favoris ? Mais tu veux débattre dans un endroit où le respect est mutuel ? </p>
                    <p> Ne cherche plus ! La grande critique est un site dévéloppé spécialement pour toi ! Tu peux choisir le sujet de n'importe quelle catégorie qui t'intéresse et débattre aussi.
                    Et pour rendre l'expérience plus inoubliable pour toi, tu peux également créer ton propre sujet qui t'intéresse et lancer le débat !</p>               
                  </div>
                  <button href="#" class="btn">Lancer un débat</button>
              </div>
          </div>
        </span>
  </div>
</section>
  
  `;
};

export default HomePage;
