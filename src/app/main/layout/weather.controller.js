export class WeatherController {
  constructor(weatherService, $timeout) {
    'ngInject';

    this.cities = null;
    this.tempForMale = 21;
    this.tempForFemale = 22;
    this.humidity = 50;
    this.showForMale = true;

    this.$timeout = $timeout;
    this.weatherService = weatherService;

    this.activate(this.tempForMale, this.humidity);
  }

  activate(temp, humidity) {
    this.weatherService.getSorted(temp, humidity)
      .then((response) => {
        this.$timeout(() => {
          this.cities = response;
        });
      });
  }

  sortForMale() {
    this.showForMale = true;
    this.activate(this.tempForMale, this.humidity);
  }

  sortForFemale() {
    this.showForMale = false;
    this.activate(this.tempForFemale, this.humidity);
  }
}
