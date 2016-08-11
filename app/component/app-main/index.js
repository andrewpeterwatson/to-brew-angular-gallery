'use strict';

// const brewMethod = require('../../data/brew-methods.json');
require('./app-main.scss');
const angular = require('angular');

angular.module('toBrewApp').directive('appMain', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      selectedMethodArr: '='
      // currentGalleryBrew: '='
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

function AppMainController() {
  this.currentMethod = 'press';

  this.selectedBrewMethod = function(brewMethod){
    return this.currentMethod = brewMethod;
  };

}
