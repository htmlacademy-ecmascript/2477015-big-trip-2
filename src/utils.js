import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const getRandomArrayLength = (items) => (
  items[Math.floor(Math.random() * items.length)]
);

export const getRandomArrayElement = (array) => (
  [...new Set(Array.from({length: getRandomArrayLength(array) + 1},
    () => array[getRandomArrayLength(array)]))]
);

export const getRandomInteger = (max) => (
  Math.floor(Math.random * max)
);

export const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const getRandomBoolean = () => Math.random() >= 0.5;

export const humanizeDate = (date, format) => date ? dayjs(date).format(format) : '';

export const getDuration = (start, end) => {
  const eventDuration = dayjs(end).diff(dayjs(start));
  const formattedDuration = dayjs.duration(eventDuration, 'ms')
    .format('DD[d] HH[h] mm[m]');

  return formattedDuration;
};
