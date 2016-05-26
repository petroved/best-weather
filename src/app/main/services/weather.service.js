export class weatherService {
  constructor($http) {
    'ngInject';
    this.cities = null;

    this.$http = $http;
  }

  getListFromServer() {
    return this.$http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=-180,-90,180,90&cluster=yes&appid=ace4849f321235bdcc6c626a97bbd10c');
  }

  getSorted(temp, humidity) {
    return this.getListFromServer()
      .then((response) => {
        this.cities = response.data.list;
        for (let i = this.cities.length; i--;) {
          // temperature is more important than humidity
          this.cities[i].diff = Math.abs(5 * (temp - this.cities[i].main.temp));
          this.cities[i].diff += Math.abs(humidity - this.cities[i].main.humidity);
        }

        this.cities = _.sortBy(this.cities, 'diff');

        return Promise.resolve(this.cities);
      });
  }

}
