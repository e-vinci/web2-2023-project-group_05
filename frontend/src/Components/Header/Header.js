import logoDebate from '../../img/podium.png';
import Navigate from '../Router/Navigate';


const Header = () => {
    const header = document.querySelector('header');
    header.innerHTML = ``;
  
    renderSmallImage(header, logoDebate);
    attachOnLogoClick();
  };
  
  export default Header;
  
  function renderSmallImage(wrapper, url, id) {
    const image = new Image();
    image.src = url;
    image.height = 50;
    if (id) image.id = id;
    wrapper.appendChild(image);
  }
  
  
  function attachOnLogoClick() {
    const podium = document.querySelector('#logo');
    podium.addEventListener('click', () => {
      Navigate('/');
    });
  }