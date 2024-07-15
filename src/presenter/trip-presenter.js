import TripPointForm from '../view/trip-point-form-view.js';
import TripListView from '../view/trip-list-view.js';
import SortView from '../view/sort-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  tripListComponent = new TripListView();

  constructor({ listContainer, pointsModel, offersModel, destinationsModel}) {
    this.listContainer = listContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.offers = [...this.offersModel.getOffers()];
    this.destinations = [...this.destinationsModel.getDestinations()];

    render(new SortView(), this.listContainer);
    render(this.tripListComponent, this.listContainer);

    render(new TripPointForm({
      point: this.points[0],
      offers: this.offers,
      destinations: this.destinations
    }), this.tripEventListElement.getElement());

    for (let i = 1; i < this.points.length; i++) {
      const point = new TripPointView ({
        point: this.points[i],
        offers: this.offers,
        destinations: this.destinations
      });
      render(point, this.listContainer.getElement());
    }
  }
}
