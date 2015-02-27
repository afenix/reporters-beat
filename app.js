var reportersBeat = angular.module('reportersBeat', ['ui.router']);

reportersBeat.config(function($stateProvider) {
  $stateProvider.state('login', {
    url:"",
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  });

  $stateProvider.state('addBeat', {
    url:"addBeat.html",
    templateUrl: "partials/addBeat.html",
    controller: "BeatCtrl",
    controller: "LoginCtrl"
  });
});
