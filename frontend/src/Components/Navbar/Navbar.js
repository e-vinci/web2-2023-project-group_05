import logo from '../../img/IMAGE.png';
// eslint-disable-next-line no-unused-vars
import searchIcon from '../../img/rechercher.png';

import { getAuthenticatedUser, isAuthenticated, getAuthenticatedUserAdmin } from '../../utils/auths';


const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {

  const authenticatedUserName = getAuthenticatedUser();

  const unauthenticatedUser = `
<div class="logo-container">
  <a class="nav-link" href="#" data-uri="/">
    <img class="logo" src="${logo}" data-uri="/">
  </a>
</div>



<div class="navlist-container">

  <ul class="navlist">

  <li>
    <a class="nav-link" href="#" data-uri="/">Accueil</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/topic/view">Voir un sujet</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/categories/view">Categories</a>
  </li>
  

  <li id="loginItem" class="nav-item">
    <a class="nav-link" href="#" data-uri="/login">Login</a>
  </li>

  <li id="registerItem" class="nav-item">
    <a class="nav-link" href="#" data-uri="/register">Register</a>
    </li>

  </ul>

  <form action="/results" data-uri="/results" id="searchForm">
    <input type="text" id="mySearch" name="search" placeholder="search for a category/subject" required />
    <input type="submit" name="submit" id="submit" value"Search" />
  </form>
      </div>
  </div>
</nav>
  `;


  const authenticatedUser = `
  
<div class="logo-container">
  <a class="nav-link" href="#" data-uri="/">
    <img class="logo" src="${logo}" data-uri="/">
  </a>
</div>


<div class="navlist-container">

  <ul class="navlist">

  <li>
    <a class="nav-link" href="#" data-uri="/">Accueil</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/topic/view">Voir un sujet</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/topic/add">Crée un sujet</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/topicMyViews">Mes sujets</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/chat">Chat</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/categories/view">Categories</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#" data-uri="/logout">Logout</a>
  </li>  



  <li class="nav-item">
    <a class="nav-link disabled" href="#">${authenticatedUserName?.username}</a>
  </li>  

  </ul>

  <form action="/results" data-uri="/results" id="searchForm">
    <input type="text" id="mySearch" name="search" placeholder="search for a category/subject" required />
    <input type="submit" name="submit" id="submit" value"Search" />
  </form>
      </div>
  </div>
</nav>
  `;

  const authenticatedUserAsAdmin = `
  
<div class="logo-container">
  <a class="nav-link" href="#" data-uri="/">
    <img class="logo" src="${logo}" data-uri="/">
  </a>
</div>


<div class="navlist-container">

  <ul class="navlist">

  <li>
    <a class="nav-link" href="#" data-uri="/">Accueil</a>
  </li>
  

  <li>
    <a class="nav-link" href="#" data-uri="/topic/view">Voir un sujet</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/topic/add">Crée un sujet</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/topicMyViews">Mes sujets</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/chat">Chat</a>
  </li>

  <li>
    <a class="nav-link" href="#" data-uri="/categories/view">Categories</a>
  </li>

  <li id="loginItem" class="nav-item">
    <a class="nav-link" href="#" data-uri="/category/add">Add category</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#" data-uri="/logout">Logout</a>
  </li>  

  
  <li class="nav-item">
    <a class="nav-link disabled" href="#">${authenticatedUserName?.username}</a>
  </li>  
  
  </ul>

  <form action="/results" data-uri="/results" id="searchForm">
    <input type="text" id="mySearch" name="search" placeholder="search for a category/subject" required />
    <input type="submit" name="submit" id="submit" value"Search" />
  </form>
      </div>
  </div>
</nav>
  `;

  const navbar = document.querySelector('#navbarWrapper');

  if (getAuthenticatedUserAdmin()) {
    navbar.innerHTML = authenticatedUserAsAdmin;
  }  

  else if (isAuthenticated() && !getAuthenticatedUserAdmin()) {
    navbar.innerHTML = authenticatedUser;
  } 

  else if (!isAuthenticated()) {
    navbar.innerHTML = unauthenticatedUser;
  } 

}

export default Navbar;