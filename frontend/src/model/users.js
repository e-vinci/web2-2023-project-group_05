
import { setAuthenticatedUser } from '../utils/auths';

import Navigate from '../Components/Router/Navigate';

import Navbar from '../Components/Navbar/Navbar';


const addOneUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('/api/auths/register', options);
    
    const createdUser = await response.json();

    return createdUser;
  } catch (err) {
    console.error('addOneUser::error: ', err);
    throw err;
  }
};

async function loginUser(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/login', options);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  console.log('Authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);

  Navbar();

  Navigate('/');
}


export { addOneUser, loginUser };
