import FilterView from './view/filter-view.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import TripPresenter from './presenter/trip-presenter.js';
import { render } from './render.js';

const pageMainElement = document.querySelector('.page-body__page-main');
const filterWrapper = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const tripPresenter = new TripPresenter({
  listContainer: pageMainElement,
  pointsModel,
  destinationsModel,
  offersModel,
});

render(new FilterView, filterWrapper);
tripPresenter.init();
