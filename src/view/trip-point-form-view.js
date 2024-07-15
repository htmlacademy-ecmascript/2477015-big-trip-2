import { dateTimeFormat, pointsTypes } from '../const.js';
import { humanizeDate } from '../utils.js';
import { createElement } from '../render.js';
import { mockDestinations } from '../mock/mock-destinations.js';

const capitalizeFirstLetter = (string) => (
  string[0].toUpperCase() + string.slice(1)
);

const getLastCharacterOfString = (string) => (
  string.trim().split(' ').slice(-1));

const createTripPointFormTemplete = (point, destinations, offers) => `
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${point.id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${point.id}" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${pointsTypes.map((pointsType) => (`
                <div class="event__type-item">
                  <input id="event-type-${pointsType}-1"
                  class="event__type-input  visually-hidden"
                  type="radio"
                  name="event-type"
                  value=${pointsType}
                  ${pointsType === point.type ? 'checked' : ''}>
                  <label
                    class="event__type-label
                    event__type-label--${pointsType}"
                    for="event-type-${pointsType}-1">
                      ${capitalizeFirstLetter(pointsType)}
                  </label>
              </div>
              `)).join('')}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${point.id}">
            ${point.type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${destinations.name} list="destination-list-1">
          <datalist id="destination-list-1">
            ${mockDestinations.map((destination) => (`
              <option value=${destination.name}></option>
              `)).join('')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${humanizeDate(point.dateFrom, dateTimeFormat.time)}>
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDate(point.dateTo, dateTimeFormat.time)}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${point.id}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            ${offers.map((offer) => (`
              <div class="event__offer-selector">
                <input class="event__offer-checkbox
                  visually-hidden"
                  id="event-offer-${getLastCharacterOfString(offer.offers.title)}-1"
                  type="checkbox"
                  name="event-offer-${getLastCharacterOfString(offer.offers.title)}"
                  checked>
                <label class="event__offer-label"
                  for="event-offer-${getLastCharacterOfString(offer.offers.title)}-1">
                  <span class="event__offer-title">${offer.offers.title}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${offer.offers.price}</span>
                </label>
              </div>
              `)).join('')}
          </div>
        </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destinations.description}</p>
            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${destinations.pictures.map((destinationPicture) => (`
                  <img class="event__photo"
                    src=${destinationPicture.src}
                    alt="${destinationPicture.description}">
                  </img>
                  `)).join('')}
              </div>';
            </div>
        </section>
      </section>
    </form>
  `;

export default class TripPointForm {
  constructor({ point, destinations, offers }) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createTripPointFormTemplete(this.point, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
