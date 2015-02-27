reportersBeat.controller('LoginCtrl', function LoginCtrl($scope, LoginFactory) {
  $scope.logIns = LoginFactory.logIns;
  $scope.LoginFactory = LoginFactory;
});
