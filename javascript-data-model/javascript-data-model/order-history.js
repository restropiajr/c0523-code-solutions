// Structuring a Data Model
const orderHistory = [
  {
    orderPlaced: '08-04-2020',
    priceTotal: 34.0,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredWhen: '08-08-2020',
    items: [
      {
        title: 'JavaScript for impatient programmers',
        authorFirst: 'Dr. Axel',
        authorLast: 'Rauschmayer',
        returnWindow: '09-07-2020',
        priceItem: 31.55,
      },
    ],
  },
  {
    orderPlaced: '07-19-2020',
    priceTotal: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveredWhen: '07-20-2020',
    items: [
      {
        title: 'The Timeless Way of Building',
        authorFirst: 'Christopher',
        authorLast: 'Alexander',
        returnWindow: '08-19-2020',
        priceItem: 41.33,
      },
    ],
  },
  {
    orderPlaced: '07-04-2020',
    priceTotal: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredWhen: '07-07-2020',
    items: [
      {
        title:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnWindow: '08-05-2020',
        priceItem: 15.98,
      },
    ],
  },
  {
    orderPlaced: '07-03-2020',
    priceTotal: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredWhen: '07-05-2020',
    items: [
      {
        title:
          'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnWindow: '08-04-2020',
        priceItem: 94.95,
      },
      {
        title: 'The Art of SQL',
        authorFirst: 'Stephane',
        authorLast: 'Faroult',
        returnWindow: '08-04-2020',
        priceItem: 33.99,
      },
    ],
  },
];

console.log('The order history contains the following:', orderHistory);
