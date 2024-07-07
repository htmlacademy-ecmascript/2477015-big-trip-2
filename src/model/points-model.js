import { POINTS_COUNT } from '../const.js';
import { getRandomPoints } from '../mock/mock-points.js';
import { mockOffers } from '../mock/mock-offers.js';
import { mockDestinations } from '../mock/mock-descriptions.js';

export default class PointsModel {
  points = Array.from({ length: POINTS_COUNT }, getRandomPoints);
  destinations = mockDestinations;
  offers = mockOffers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    const destinations = this.getDestinations();

    return destinations.find((destination) => destination.id === id);
  }

  getOffers() {
    return this.offers;
  }

  getOffersById(type, idList) {
    const offersByType = this.getOffersByType(type);

    return offersByType.offers.filter((item) => idList.find((id) => item.id === id));
  }

  getOffersByType(type) {
    return this.getOffers().find((offer) => offer.type === type);
  }
}
