import logo from '../../img/IMAGE.png';
 import LoginAdminPage from '../Pages/LoginPage';

const Footer = () => {
  renderFooter();
  onFooterImageClick();
};

function renderFooter() {
  const footer = document.querySelector('#footerWrapper');
  footer.innerHTML = ` 
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between">
  <a class="footer-link" href="/login/admin" data-uri="/login/admin">        
   <img class= "logo" src="${logo}" data-uri="/">
  </a>
 </div>
 </nav>`;
}

function onFooterImageClick() {
  const footerItem = document.querySelectorAll('.footer-link');


  footerItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.dataset.uri === '/login/admin') {
        LoginAdminPage();
      } 
    });
  });
}

export default Footer;
