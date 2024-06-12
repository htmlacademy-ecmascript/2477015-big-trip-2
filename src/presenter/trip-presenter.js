import NewTripPointForm from '../view/new-trip-point-form-view.js';
import EditTripPointForm from '../view/edit-trip-point-form-view.js';
import FilterView from '../view/filter-view.js';
import TripListView from '../view/trip-list-view.js';
import SortView from '../view/sort-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

const POINTS_NUMBER = 3;

export default class TripPresenter {
  sortComponent = new SortView();
  tripListComponent = new TripListView();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    render(new FilterView(), this.listContainer.getElement());
    render(this.sortComponent, this.listContainer);
    render(this.tripListComponent, this.listContainer);
    render(new EditTripPointForm(), this.listContainer.getElement());
    render(new NewTripPointForm(), this.listContainer.getElement());

    for (let i = 0; i < POINTS_NUMBER; i++) {
      render(new TripPointView(), this.listContainer.getElement());
    }
  }
}
