import { routerConfig } from './weather.routes';
import { WeatherController } from './weather.controller';
import { weatherService } from './weather.service';

export default angular.module('weather', ['ajoslin.promise-tracker'])
  .config(routerConfig)
  .service('weatherService', weatherService)
  .controller('WeatherController', WeatherController);
