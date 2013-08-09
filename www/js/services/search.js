

  angular.module('mercadolibreApp').factory('Search', function($resource, $rootScope) {
    return $resource($rootScope.api_host + '/sites/MLA/search', {
      'query': {
        method: 'GET',
        isArray: false
      }
    });
  });

  angular.module('mercadolibreApp').factory('Item', function($resource, $rootScope) {
    return $resource($rootScope.api_host + '/items/:id', {
      'query': {
        method: 'GET',
        isArray: false
      }
    });
  });

