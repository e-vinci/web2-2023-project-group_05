// eslint-disable-next-line no-unused-vars
import logo from '../../img/IMAGE.png';
// eslint-disable-next-line no-unused-vars
import searchIcon from '../../img/rechercher.png';
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
  <a class="nav-link" href="#" data-uri="/topic/add">Crée un sujet</a>
</li>

<li>
  <a class="nav-link" href="#" data-uri="/topic/view">Voir un sujet</a>
</li>

<!--The beginning of the 'menu déroulant on categories' -->

<li>
<a class="nav-link" href="#" data-uri="/categories/view">Categories</a>
</li>

<li>
  <a class="nav-link" href="#" data-uri="/chat">Chat</a>
</li>

<!-- the end of the 'menu deroulant' for categories  -->

    <!-- the end of the 'menu deroulant' for categories  -->
    <li id="loginItem" class="nav-item">
    <a class="nav-link" href="#" data-uri="/category/add">addCAtegory</a>
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
}




export default Navbar;