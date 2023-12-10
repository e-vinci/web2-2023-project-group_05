// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logo from '../../img/IMAGE.png';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {

  const navbar = document.querySelector('#navbarWrapper');

  navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <a class="nav-link" href="#" data-uri="/">        
       <img class= "logo" src="${logo}" data-uri="/">
      </a>
        <a class="navbar-brand" href="/">La grande critique</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="" data-uri="/">Accueil</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/topic/add">Crée un sujet</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/topic/view">Voir un sujet</a>
            </li>

    <!--The beginning of the 'menu déroulant on categories' -->

     
        <li class="nav-item">

          <a class="nav-link" href="#" data-uri="/categories/view">Categories</a>

        </li>

        <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/chat">Chat</a>
            </li>

    <!-- the end of the 'menu deroulant' for categories  -->

            <li id="loginItem" class="nav-item">
              <a class="nav-link" href="#" data-uri="/login">Login</a>
            </li>
            <li id="registerItem" class="nav-item">
              <a class="nav-link" href="#" data-uri="/register">Register</a>
            </li>
          </ul>
          <form action="/results" id="searchForm">
            <input type="text" id="mySearch" name="search" placeholder="search for a category/subject" required />
            <input type="submit" name="submit" id="submit" value"Search" />
          </form>
        </div>
      </div>
    </nav>
  `;
}

export default Navbar;
