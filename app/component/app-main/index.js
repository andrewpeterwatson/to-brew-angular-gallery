'use strict';

require('./app-main.scss');

const angular = require('angular');

angular.module('toBrewApp').directive('appMain', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      // desc: '@',
      // title: '@',
      // imgSrc: '@'
    },
    controller: ['galleryService', AppMainController],
    controllerAs: 'appMainCtrl',
    bindToController: true,
    template: require('./app-main.html')
  };
});

function AppMainController(galleryService) {

  galleryService.methodShown = 'chemex';

  galleryService.showMethod = function(name) {
    galleryService.methodShown = name;
    return;
  };
}
