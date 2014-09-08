angular.module('hsb.main', [])
  .controller('MainCtrl', function ($scope, $state, Schedule) {
	$scope.data = {};
	$scope.data.schedule = Schedule;


	//Function from a service that adds the starred item to favorites

});