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




export default addOneUser;
