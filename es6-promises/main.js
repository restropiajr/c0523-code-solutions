import takeAChance from './take-a-chance.js';

takeAChance('Roland Estropia Jr')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
