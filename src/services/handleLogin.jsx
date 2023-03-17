function loginFake(email, name, senha) {
  const delay = 2000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === `${name.toLowerCase()}@email.com` && senha === `${name}12345`) {
        resolve({ delay });
      } else {
        reject(new Error('You have entered an invalid username or password'));
      }
    }, delay);
  });
}

export default loginFake;
