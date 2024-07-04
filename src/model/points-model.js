import { POINTS_NUMBER } from '../const.js';
import { getRandomPoints } from '../mock/mock-points.js';
import { mockOffers } from '../mock/mock-offers.js';
import { mockDestinations } from '../mock/mock-descriptions.js';

export default class PointsModel {
  points = Array.from({ length: POINTS_NUMBER }, getRandomPoints);
  destinations = mockDestinations;
  offers = mockOffers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
