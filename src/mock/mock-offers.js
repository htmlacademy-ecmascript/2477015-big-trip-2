import {getRandomInteger} from '../utils';

export const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class',
        price: getRandomInteger(600)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Order Uber',
        price: getRandomInteger(400)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
        title: 'Choose a client radio station',
        price: getRandomInteger(300)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa34',
        title: 'Luggage assistance',
        price: getRandomInteger(100)
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa41',
        title: 'Wi-Fi',
        price: getRandomInteger(400)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa42',
        title: 'Extra baggage',
        price: getRandomInteger(600)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa43',
        title: 'Complimentary snacks and drinks',
        price: getRandomInteger(400)
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa51',
        title: 'Wi-Fi',
        price: getRandomInteger(300)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa52',
        title: 'Complimentary snacks and drinks',
        price: getRandomInteger(100)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa53',
        title: 'Priority boarding',
        price: getRandomInteger(500)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa54',
        title: 'Meal service',
        price: getRandomInteger(100)
      },
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa61',
        title: 'Meal service',
        price: getRandomInteger(100)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa62',
        title: 'Audio Guide',
        price: getRandomInteger(100)
      }
    ]
  },
  {
    type: 'drive',
    offers: []
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa71',
        title: 'Travel by train',
        price: getRandomInteger(100)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa72',
        title: 'Switch to comfort class',
        price: getRandomInteger(300)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa73',
        title: 'Priority boarding',
        price: getRandomInteger(200)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa74',
        title: 'Choose seats',
        price: getRandomInteger(500)
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa81',
        title: 'Early Check-in',
        price: getRandomInteger(600)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa82',
        title: 'Late checkout',
        price: getRandomInteger(250)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa83',
        title: 'Room upgrade',
        price: getRandomInteger(100)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa84',
        title: 'Add breakfast',
        price: getRandomInteger(300)
      },
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa91',
        title: 'Book tickets',
        price: getRandomInteger(500)
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa92',
        title: 'Lunch in city',
        price: getRandomInteger(100)
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa101',
        title: 'Tasting Menu',
        price: getRandomInteger(200)
      }
    ]
  }
];
