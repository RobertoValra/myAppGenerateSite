angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

.controller('ProductType', function($scope, productInfo) {
	$scope.products = productInfo.foods;
	$scope.showSelectValue = function(mySelect) {
		console.log(mySelect);
	}
});

