import { POINTS_COUNT } from '../const.js';
import { getRandomPoints } from '../mock/mock-points.js';

export default class PointsModel {
  points = Array.from({ length: POINTS_COUNT }, getRandomPoints);

  getPoints() {
    return this.points;
  }
}
