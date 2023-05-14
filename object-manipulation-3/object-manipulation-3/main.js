console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = ['Tim', 'Bob', 'Larry', 'Lilo'];
const numCards = 2;

function cardGame(players, numCards) {
  // Creating the players
  const playerObjects = [];
  for (let i = 0; i < players.length; i++) {
    const player = {
      name: players[i],
      hand: [],
    };
    playerObjects.push(player);
  }

  // Presenting the players
  console.log('Players of the Card Game:');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  for (let i = 0; i < playerObjects.length; i++) {
    console.log(`Player ${i + 1} - ${playerObjects[i].name}`);
  }
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  // Creating the deck
  const deck = [];
  const ranks = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      const card = {
        rank: ranks[i],
        suit: suits[j],
        value: values[i],
      };
      deck.push(card);
    }
  }

  // Shuffling the deck
  const deckShuffled = [];
  for (let i = 0; i < deck.length; i++) {
    let card = Math.floor(Math.random() * deck.length);
    while (deckShuffled.includes(deck[card])) {
      card = Math.floor(Math.random() * deck.length);
    }
    deckShuffled.push(deck[card]);
  }

  // Dealing cards to players
  for (const player of playerObjects) {
    let cardCount = 0;
    while (cardCount < numCards) {
      player.hand.push(deckShuffled.pop());
      cardCount++;
    }
  }

  // Presenting the player cards
  for (let i = 0; i < playerObjects.length; i++) {
    for (let j = 0; j < playerObjects[i].hand.length; j++) {
      console.log(
        `Player ${i + 1} - ${playerObjects[i].name} received the card: ${
          playerObjects[i].hand[j].rank
        } of ${playerObjects[i].hand[j].suit} which is ${
          playerObjects[i].hand[j].value
        } points`
      );
    }
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  }

  // Calculating final scores
  for (let i = 0; i < playerObjects.length; i++) {
    let totalScore = 0;
    for (let j = 0; j < playerObjects[i].hand.length; j++) {
      totalScore += playerObjects[i].hand[j].value;
    }
    playerObjects[i].score = totalScore;
    console.log(
      `Player ${i + 1} - ${playerObjects[i].name} has a total score of: ${
        playerObjects[i].score
      }`
    );
  }
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  // Finding the winner of the first round
  let winner = playerObjects[0];
  for (const player of playerObjects) {
    if (player.score > winner.score) {
      winner = player;
    }
  }

  // Checking for ties
  while (true) {
    let tieCount = 0;
    for (const player of playerObjects) {
      if (player.score === winner.score) {
        tieCount++;
      }
    }

    // Exiting the loop to announce the solo winner
    if (tieCount === 1) {
      break;
    }

    // Finding players who were tied
    const tiedPlayers = [];
    for (const player of playerObjects) {
      if (player.score === winner.score) {
        tiedPlayers.push(player);
      }
    }

    // Presenting players who were tied
    console.log(`There is a tie! The following players will play again:`);
    for (let i = 0; i < tiedPlayers.length; i++) {
      console.log(`Player ${i + 1} - ${tiedPlayers[i].name}`);
    }
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    // Dealing cards to players
    for (const player of tiedPlayers) {
      let cardCount = 0;
      while (cardCount < numCards) {
        player.hand.push(deckShuffled.pop());
        cardCount++;
      }
    }

    // Presenting the player cards
    for (let i = 0; i < tiedPlayers.length; i++) {
      for (let j = 0; j < tiedPlayers[i].hand.length; j++) {
        console.log(
          `Player ${i + 1} - ${tiedPlayers[i].name} received the card: ${
            tiedPlayers[i].hand[j].rank
          } of ${tiedPlayers[i].hand[j].suit} which is ${
            tiedPlayers[i].hand[j].value
          } points`
        );
      }
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    }

    // Calculating final scores
    for (let i = 0; i < tiedPlayers.length; i++) {
      let totalScore = 0;
      for (let j = 0; j < tiedPlayers[i].hand.length; j++) {
        totalScore += tiedPlayers[i].hand[j].value;
      }
      tiedPlayers[i].score = totalScore;
      console.log(
        `Player ${i + 1} - ${tiedPlayers[i].name} has a total score of: ${
          tiedPlayers[i].score
        }`
      );
    }
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    // Finding the winner of the tie breaker
    winner = tiedPlayers[0];
    for (const player of tiedPlayers) {
      if (winner.score < player.score) {
        winner = player;
      }
    }
  }

  // Presenting the winner
  console.log(
    `The Winner of the Card Game is: ${winner.name} with ${winner.score} points`
  );
}

cardGame(players, numCards);
