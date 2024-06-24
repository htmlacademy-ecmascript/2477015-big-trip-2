import {getRandomInteger} from '../utils';

export const mockDestinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edca1',
    description: 'San Diego is a large coastal California city located in the southwestern corner of the continental United States. The population is close to 1,300,000, making it the second largest city in California and the eighth largest city in the nation, by population.',
    name: 'San Diego',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(50)}`,
        description: 'San Diego building'
      }
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edca2',
    description: 'Denver  is a consolidated city and county, the capital, and most populous city of the U.S. state of Colorado. It is the 19th-most populous city in the United States and the fifth most populous state capital.',
    name: 'Denver',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(50)}`,
        description: 'Denver attractions'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(50)}`,
        description: 'Denver buildings'
      },
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edca3',
    description: 'Los Angeles is the largest city in the state of California, the second most populous city in the United States after New York City, and one of the worlds most populous megacities.',
    name: ' Los Angeles',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(50)}`,
        description: 'Los Angeles attractions'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(50)}`,
        description: 'Los Angeles buildings'
      }
    ]
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edca4',
    description: 'Seattle is a major port city and the largest city in the State of Washington. The major economic, cultural and educational center in the region, Seattle is the county seat of King County.',
    name: 'Seattle',
    pictures: []
  }
];
