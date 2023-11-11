// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';
import { clearPage, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';

const RegisterPage = () => {
  clearPage();
  renderPageTitle('Register');
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const form = document.createElement('form');
  form.className = 'p-5';
  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'name';
  name.placeholder = 'name';
  name.required = true;
  name.className = 'form-control mb-3';
  const firstname = document.createElement('input');
  firstname.type = 'text';
  firstname.id = 'firstname';
  firstname.placeholder = 'firstname';
  firstname.required = true;
  firstname.className = 'form-control mb-3';
  const email = document.createElement('input');
  email.type = 'email';
  email.id = 'email';
  email.placeholder = 'email';
  email.required = true;
  email.className = 'form-control mb-3';
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
  const passwordConfirmation = document.createElement('input');
  passwordConfirmation.type = 'password';
  passwordConfirmation.id = 'passwordConfirmation';
  passwordConfirmation.required = true;
  passwordConfirmation.placeholder = 'password confirmation';
  passwordConfirmation.className = 'form-control mb-3';
  const submit = document.createElement('input');
  submit.value = 'Register';
  submit.type = 'submit';
  submit.className = 'btn btn-danger';
  const span = document.createElement('span');

  form.addEventListener("submit", (e) => {
    let isOk = true;

    if(password.value !== passwordConfirmation.value) {
      e.preventDefault();
      span.innerHTML = "Passwords don't match";
      span.className = 'alert alert-danger';
      span.role = 'alert';
      isOk = false;
      Navigate('/register');
    }
    if(!validator.isStrongPassword(password.value)) {
      e.preventDefault();
      span.innerHTML = "The password is not strong enough";
      span.className = 'alert alert-danger m-5';
      span.role = 'alert';
      isOk = false;
      Navigate('/register');
    }
    if(isOk) {
      Navigate('/login');
    }
  });

  form.appendChild(name);
  form.appendChild(firstname);
  form.appendChild(email);
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(passwordConfirmation);
  form.appendChild(submit);
  main.appendChild(form);
  main.appendChild(span);
}

export default RegisterPage;