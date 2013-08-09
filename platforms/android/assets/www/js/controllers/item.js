angular.module('mercadolibreApp').controller('ItemCtrl', function ($scope, Item, $routeParams, $rootScope, $location) {   

	$rootScope.$emit('showMainSpinner');
	Item.get({id: $routeParams.id}, function(response){
		$scope.item = response;
		$scope.mainPicUrl = $scope.item.pictures[0].url;
		$rootScope.$emit('hideMainSpinner');
	});

	$scope.searchTerm = $rootScope.term;

	$scope.changeImg = function(image){
		$scope.mainPicUrl = image.url;	
	}

	$scope.search = function(){
		$rootScope.term = $scope.searchTerm;
		$rootScope.offset = 0;
		$location.url('/#');
	}

});