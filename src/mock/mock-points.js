import {getRandomArrayElement, getRandomInteger, getRandomBoolean} from '../utils';

const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca1',
    isFavorite: getRandomBoolean(0.5),
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa33',
      'b4c3e4e6-9053-42ce-b747-e281314baa34'
    ],
    type: 'taxi'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca2',
    isFavorite: getRandomBoolean(0.5),
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa41'
    ],
    type: 'bus'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808e',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca3',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa51',
      'b4c3e4e6-9053-42ce-b747-e281314baa54',
      'b4c3e4e6-9053-42ce-b747-e281314baa55'
    ],
    type: 'train'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808f',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca1',
    isFavorite: getRandomBoolean(0.5),
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa61',
      'b4c3e4e6-9053-42ce-b747-e281314baa62',
    ],
    type: 'ship'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a28090',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca2',
    isFavorite: getRandomBoolean(0.5),
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa71',
      'b4c3e4e6-9053-42ce-b747-e281314baa72',
    ],
    type: 'drive'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a28091',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca3',
    isFavorite: getRandomBoolean(0.5),
    offers: [],
    type: 'flight'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a28092',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca1',
    isFavorite: getRandomBoolean(0.5),
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa81',
      'b4c3e4e6-9053-42ce-b747-e281314baa82',
      'b4c3e4e6-9053-42ce-b747-e281314baa83',
      'b4c3e4e6-9053-42ce-b747-e281314baa84',
      'b4c3e4e6-9053-42ce-b747-e281314baa85'
    ],
    type: 'check-in'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a28093',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca2',
    isFavorite: getRandomBoolean(0.5),
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa91'
    ],
    type: 'sightseeing'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a28094',
    basePrice: getRandomInteger(5000),
    dateFrom: '2024-08-15T10:55:12.845Z',
    dateTo: '2024-08-16T11:20:23.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edca3',
    isFavorite: getRandomBoolean(0.5),
    offers: [],
    type: 'restaurant'
  }
];

export function getRandomPoints() {
  return getRandomArrayElement(mockPoints);
}
