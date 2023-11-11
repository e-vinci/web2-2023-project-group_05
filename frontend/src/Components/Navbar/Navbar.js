// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
  onNavBarClick();
};

function renderNavbar() {
  const navbar = document.querySelector('#navbarWrapper');
  navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="">La grande critique</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="" data-uri="/">Home</a>
            </li>

    <!--The beginning of the 'menu déroulant on categories' -->
    
      <ul class="nav-item">
        <li class="categorie">
          <a class="nav-link" href="" data-uri="/categories">Categories</a>
          <ul class="sub-menu">
            <li><a href="#">Jeux-Vidéo</a></li>
            <li><a href="#">Films</a></li>
            <li><a href="#">Séries</a></li>
            
            <li class="livres">
              <a href="#">Livres</a>
              <ul class="sous-sub">
                <li><a href="#">Rejoindre sujet deja existant</a></li>
                
                <li><a href="#">Crée sujet</a></li>
                
              </ul>
            </li>
            <li><a href="#">Animé</a></li>
          </ul>
        </li>
      </ul>
    
    <!-- the end of the 'menu deroulant' for categories  -->
    
            <li id="loginItem" class="nav-item">
              <a class="nav-link" href="#" data-uri="/login">Login</a>
            </li>
            <li id="registerItem" class="nav-item">
              <a class="nav-link" href="#" data-uri="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function onNavBarClick() {
  const navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(`click on ${e.target.dataset.uri} navbar item`);
      if (e.target.dataset.uri === '/') {
        HomePage();
      } else if (e.target.dataset.uri === '/login') {
        LoginPage();
      } else if (e.target.dataset.uri === '/register') {
        RegisterPage();
      }
    });
  });
}

export default Navbar;
