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

<<<<<<< HEAD



export default addOneUser;
=======
const loginUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('/api/auths/login', options);

    const login = await response.json();
    return login;
  } catch (erreur) {
    console.error('Login user::error: ', erreur);
    throw erreur;
  }
};

export { addOneUser, loginUser };
>>>>>>> 73f171ec032c24940a762f7d04b2e7f2fd2e0cb1
