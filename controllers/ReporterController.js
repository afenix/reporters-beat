reportersBeat.controller('ReporterCtrl', function ReporterCtrl($scope, $stateParams, BeatFactory, UtilitiesFactory) {
  $scope.beats = UtilitiesFactory.findById(BeatFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beats.reporters.push({ name: $scope.reporterName, yearsEmployed: $scope.yearsEmployed, birthday: $scope.birthday });
    $scope.reporterName = null;
  }
});
