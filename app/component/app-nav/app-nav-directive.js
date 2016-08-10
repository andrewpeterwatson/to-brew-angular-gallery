'use strict';

const angular = require('angular');
angular.module('toBrewApp').directive('appNav', function() {
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppNavController',
    controllerAs: 'appNavCtrl',
    bindToController: true,
    scope: {
      brewMethod: '&'
    },
    template: require('./app-nav.html')
  };
});
