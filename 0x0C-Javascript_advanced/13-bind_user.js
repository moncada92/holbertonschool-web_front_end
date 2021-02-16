const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Enginee',
}

function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Yout occupation is: ${this.occupation}`)
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser('welcome');

