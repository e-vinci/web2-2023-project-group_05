import { clearPage, renderPageTitle } from '../../utils/render';

 // eslint-disable-next-line import/no-named-as-default
 import loginUser from '../../model/users';

 import Navigate from '../Router/Navigate';

const LoginPage = () => {
    clearPage();
    renderPageTitle('Login');
    renderLoginForm();
    eventListenerCheckPasswords();
  };

  function eventListenerCheckPasswords() {
    const form = document.querySelector('.form');
    const username = document.querySelector('#username');
    const password = document.querySelector('.password');
    const span = document.querySelector('.error');
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const login = {
        username: username.value,
        password: password.value,
      };

      if(await loginUser(login)){
        Navigate('/');
      }
      span.innerHTML = "Login Failed";
    });
  }
  

function renderLoginForm() {
    const main = document.querySelector('main');
    const form = document.createElement('form');
    form.className = 'p-5';
    const username = document.createElement('input');
    username.type = 'text';
    username.id = 'username';
    username.placeholder = 'username';
    username.required = true;
    username.className = 'form-control mb-3';
    const password = document.createElement('input');
    password.type = 'password';
    password.id = 'password';
    password.required = true;
    password.placeholder = 'password';
    password.className = 'form-control mb-3';
    const submit = document.createElement('input');
    submit.value = 'Login';
    submit.type = 'submit';
    submit.className = 'btn btn-danger';
    const span = document.createElement('span');
    span.className = 'error';
    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(submit);
    main.appendChild(form);
    main.appendChild(span);

  }

  export default LoginPage;
  