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
    },
    controller: ['galleryService', AppMainController],
    controllerAs: 'appMainCtrl',
    bindToController: true,
    template: require('./app-main.html')
  };
});

function AppMainController() {
  // let galleryArr = {};
  this.currentMethod = 'press';
  // galleryArr.currentGalleryIndex = 0;
  this.selectedBrewMethod = function(brewMethod){
    // galleryArr.currentGalleryIndex = 0;
    return this.currentMethod = brewMethod;
    // return galleryArr;
  };

}
