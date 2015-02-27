var reportersBeat = angular.module('reportersBeat', ['ui.router']);

reportersBeat.config(function($stateProvider) {
  $stateProvider.state('login', {
    url:"",
    templateUrl: "partials/login.html"
  });

});
