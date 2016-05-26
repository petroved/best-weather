export function routerConfig($routeProvider) {
  'ngInject';

  $routeProvider
    .when('/weather', {
      templateUrl: 'src/app/main/layout/weather.html',
      controller: 'WeatherController as vm',
    })
    .otherwise('/weather');
}
