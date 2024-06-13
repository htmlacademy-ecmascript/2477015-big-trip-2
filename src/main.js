import TripPresenter from '../presenter/trip-presenter.js';

const pageMainElement = document.querySelector('.page-body__page-main');
const tripPresenter = new TripPresenter({listContainer: pageMainElement});

tripPresenter.init();
