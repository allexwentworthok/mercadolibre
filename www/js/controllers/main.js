'use strict';

angular.module('mercadolibreApp').controller('MainCtrl', function ($scope, Search, $rootScope) {   

	$rootScope.offset = 0;
	$scope.limit = 0;
	$scope.total = 0;
	$scope.items = [];


    $scope.search = function(){
    	$rootScope.offset = 0;
        $rootScope.term = $scope.searchTerm;
    	$scope.basicSearch();
    };

    $scope.basicSearch = function(){
        $rootScope.$emit('showMainSpinner');
        Search.get( { "q" : $rootScope.term, offset : $rootScope.offset }, function(response){
            $scope.items = response.results;
            $scope.limit = response.paging.limit;
            $scope.total = response.paging.total;
            $rootScope.$emit('hideMainSpinner');
        });
    }

    $scope.nextPage = function(){
    	$rootScope.$emit('showMainSpinner');
        $rootScope.offset = $rootScope.offset + $scope.limit;
    	$scope.loadNextOrPrev();
    }

    $scope.prevPage = function(){
    	$rootScope.$emit('showMainSpinner');
        $rootScope.offset = $rootScope.offset = $scope.limit;
    	$scope.loadNextOrPrev();
    }

	$scope.loadNextOrPrev = function (){
    	Search.get( { q : $rootScope.term, offset : $rootScope.offset }, function(response){	
    		$scope.items = response.results;
    		$rootScope.$emit('hideMainSpinner');
            window.scrollTo(0, 0);
    	});
    }

    $scope.hasNext = function(){
    	return ($rootScope.offset + $scope.limit) < $scope.total
    } 

    $scope.hasPrev = function(){
    	return $rootScope.offset != 0;
    }

    $scope.isNew = function(item){
    	return item.condition == "new";
    }

    if($rootScope.term){
        $scope.searchTerm = $rootScope.term;
        $scope.basicSearch();
    }


  });
