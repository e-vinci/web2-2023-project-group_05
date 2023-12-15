/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs/lib/anime.es';
import debate from '../../img/debate.jpg';


const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <section class="hero">
  <div class="hero-text">
    <h4>Bienvenue dans La Grande Critique</h4>
    <h4>Un des meilleurs !</h4>
    <h1>DEBATE</h1>
    <p>Tu as comme passion de faire le débat sur tes sujets favoris ? Mais tu veux débattre dans un endroit où le respect est mutuel ? </p>
    <p> Ne cherche plus ! La grande critique est un site dévéloppé spécialement pour toi ! Tu peux choisir le sujet de n'importe quelle catégorie qui t'intéresse et débattre aussi.
    Et pour rendre l'expérience plus inoubliable pour toi, tu peux également créer ton propre sujet qui t'intéresse et lancer le débat !</p>          
    <a href="/topic/add">Lance un sujet !</a>
    <a href="#" class="ctaa"><i class="ri-play-fill"></i>Regarde notre vidéo</a>

  </div>

  <div class="hero-img">
  <img src="${debate}" data-uri="#">
  </div>
</section>

`;

// Ajoute une classe à la balise body pour appliquer le style de masquage de défilement

anime({
  targets: ['.hero-img'],
  opacity: [0, 1],
  translateX: [window.innerWidth, 0],
  scale: 1,
  duration: 1500,
  easing: 'easeInOutQuad',
});

const groot = document.querySelector('.hero-img');

groot.addEventListener('click', () => {
  anime({
    targets: groot,
    translateX: [-window.innerWidth, 0], // Commence à l'extérieur de l'écran à droite
    duration: 1000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  });
});
};

export default HomePage;