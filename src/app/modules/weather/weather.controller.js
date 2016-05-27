export class WeatherController {
  constructor(weatherService, $timeout, promiseTracker) {
    'ngInject';

    this.cities = null;
    this.tempForMale = 21;
    this.tempForFemale = 22;
    this.humidity = 50;
    this.showForMale = true;
    this.errorMessage = false;

    this.loadingTracker = promiseTracker();

    this.$timeout = $timeout;
    this.weatherService = weatherService;

    this.activate(this.tempForMale, this.humidity);
  }

  activate(temp, humidity) {
    this.errorMessage = false;
    this.cities = null;

    const promise = this.weatherService.getSorted(temp, humidity)
      .then((response) => {
        this.$timeout(() => {
          this.cities = response;
        });
      }, () => {
        this.cities = null;
        this.errorMessage = 'Error with get cities. Please try again later.';
      });

    this.loadingTracker.addPromise(promise);
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
