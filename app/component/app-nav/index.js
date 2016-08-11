'use strict';


require('./app-nav.scss');

const angular = require('angular');
angular.module('toBrewApp').directive('appNav', function() {
  return {
    restrict: 'E',
    replace: true,
    controller: [AppNavController],
    controllerAs: 'appNavCtrl',
    bindToController: true,
    scope: {
      currentBrew: '&',
      selectedMethodArr: '='
    },
    template: require('./app-nav.html')
  };
});

function AppNavController() {

}
