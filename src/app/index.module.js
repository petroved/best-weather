import { routerConfig } from './index.routes';

import { weatherService } from './main/services/weather.service';

import { WeatherController } from './main/layout/weather.controller.js';

import './index.scss';

const app = angular.module(
  'bestWeather', [
    'ngRoute',
    'ajoslin.promise-tracker',
  ]);

app
  .config(routerConfig)
  .service('weatherService', weatherService)
  .controller('WeatherController', WeatherController);

export default app;
