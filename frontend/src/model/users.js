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
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const createdUser = await response.json();

    return createdUser;
  } catch (err) {
    console.error('addOneUser::error: ', err);
    throw err;
  }
};



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
