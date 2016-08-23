'use strict';

require('./app-method-gallery.scss');

const angular = require('angular');
// const brewMethods = require('json!../../data/brew-methods.json');

angular.module('toBrewApp').directive('appMethodGallery', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      currentGalleryBrew: '='
    },
    controller: ['galleryService', AppMethodGalleryController],
    controllerAs: 'appMethodGalleryCtrl',
    bindToController: true,
    template: require('./app-method-gallery.html')
  };
});

function AppMethodGalleryController(galleryService) {
  this.currentBrewMethod = galleryService.galleryIndex;
  this.currentGalleryMethod = require('json!../../data/brew-methods.json');
  this.testImg = this.currentGalleryMethod.chemex[1].imgSrc;


  this.stepForward = function() {
    galleryService.cycleForward(this.currentBrewMethod, 2);
    console.log('testIMG', this.testImg);
    this.currentBrewMethod = galleryService.galleryIndex;
  };
  this.stepBackward = function(){
    galleryService.cycleBackward(this.currentBrewMethod, 2);
    this.currentBrewMethod = galleryService.galleryIndex;
  };


}
