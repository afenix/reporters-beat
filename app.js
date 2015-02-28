var reportersBeat = angular.module('reportersBeat', ['ui.router']);

reportersBeat.config(function($stateProvider) {
  $stateProvider.state('login', {
    url:"",
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  });

  $stateProvider.state('beats', {
    url:"beats.html",
    templateUrl: "partials/beats.html",
    controller: "BeatCtrl",
  });

  $stateProvider.state('reporters', {
    url: "/:beatId",
    templateUrl: "partials/reporters.html",
    controller: 'ReporterCtrl'
  });

});
