'use strict';

this.ML = angular.module('mercadolibreApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/:id', { templateUrl: 'views/item.html', controller: 'ItemCtrl'})
      .otherwise({ redirectTo: '/' });
  })
  .run(function ($rootScope) {
    $rootScope.api_host = "https://api.mercadolibre.com";
    $rootScope.$on("showMainSpinner", function(event) {
        return $('#main_spinner').show();
      });
      $rootScope.$on("hideMainSpinner", function() {
        return $('#main_spinner').hide();
      });
  });
