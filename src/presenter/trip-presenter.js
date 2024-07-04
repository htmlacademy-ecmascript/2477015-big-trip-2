import NewTripPointForm from '../view/new-trip-point-form-view.js';
import EditTripPointForm from '../view/edit-trip-point-form-view.js';
import TripListView from '../view/trip-list-view.js';
import SortView from '../view/sort-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  sortComponent = new SortView();
  tripListComponent = new TripListView();

  constructor({ listContainer, pointsModel }) {
    this.listContainer = listContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortComponent, this.listContainer);
    render(this.tripListComponent, this.listContainer);

    render(new EditTripPointForm(), this.listContainer.getElement());
    render(new NewTripPointForm(), this.listContainer.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new TripPointView({ point: this.points[i] }), this.listContainer.getElement());
    }
  }
}
