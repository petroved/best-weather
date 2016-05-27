export function routerConfig($routeProvider) {
  'ngInject';

  $routeProvider
    .when('/weather', {
      templateUrl: 'src/app/modules/weather/weather.html',
      controller: 'WeatherController as vm',
    })
    .otherwise('/weather');
}
