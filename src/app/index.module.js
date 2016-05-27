/* eslint-disable no-unused-vars */
import { weather } from './modules/weather/weather.module';
/* eslint-enable no-unused-vars */
import './index.scss';

const app = angular.module(
  'bestWeather', [
    'ngRoute',

    // modules
    'weather',
  ]);

export default app;
