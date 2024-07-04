import FilterView from './view/filter-view.js';
import PointsModel from './model/points-model.js';
import TripPresenter from './presenter/trip-presenter.js';
import { render } from './render.js';

const pageMainElement = document.querySelector('.page-body__page-main');
const filterWrapper = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({ listContainer: pageMainElement, pointsModel });

render(new FilterView, filterWrapper);
pointsModel.init();
tripPresenter.init();
