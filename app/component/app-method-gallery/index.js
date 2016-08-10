'use strict';

require('./app-method-gallery.scss');

const angular = require('angular');
const brewMethods = require('../../data/brew-methods.json').strigify();

angular.module('toBrewApp').directive('appMethodGallery', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      // imgSrc: '@',
      // title: '@',
      // desc: '@'
      methodShown: '='
    },
    controller: ['navService', AppMethodGalleryController],
    controllerAs: 'appMethodGalleryCtrl',
    bindToController: true,
    template: require('./app-method-gallery.html')
  };
});

function AppMethodGalleryController(navService) {
  navService.methodImage = {
    title: '',
    desc: '',
    imgSrc: ''
  };
  navService.currentBrewMethod = brewMethods['chemex'];

}
