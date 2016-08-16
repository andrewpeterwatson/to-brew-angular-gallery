'use strict';

require('./app-method-gallery.scss');

const angular = require('angular');
const brewMethods = require('json!../../data/brew-methods.json');

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
  this.currentGalleryMethod = brewMethods;
  this.testImg = '../../asset/image/longHighBridge.jpg';
  // this.arrLength = this.brewMethods[0];

  // this.testGallery = testBrewMethods;

  this.stepForward = function() {
    galleryService.cycleForward(this.currentBrewMethod, 2);
    console.log(this.testImg);
    console.log('arrlength', this.arrLength);
    this.currentBrewMethod = galleryService.galleryIndex;
  };
  this.stepBackward = function(){
    galleryService.cycleBackward(this.currentBrewMethod, 2);
    this.currentBrewMethod = galleryService.galleryIndex;
  };

  // this.brewMethods = {
  //   chemex: [
  //     {
  //       'step': 'chemex1',
  //       'desc': 'the door within',
  //       'imgSrc': require('../../asset/image/doorWithin.jpg')
  //     },
  //     {
  //       'step': 'chemex2',
  //       'desc': 'entrance',
  //       'imgSrc': require('../../asset/image/entrance.jpg')
  //     },{
  //       'step': 'chemex3',
  //       'desc': 'the long high bridge',
  //       'imgSrc': require('../../asset/image/longHighBridge.jpg')
  //     }
  //   ],
  //   press: [
  //     {
  //       'step': 'press1',
  //       'desc': 'the door within',
  //       'imgSrc': require('../../asset/image/entrance.jpg')
  //     },
  //     {
  //       'step': 'press2',
  //       'desc': 'entrance',
  //       'imgSrc': require('../../asset/image/doorWithin.jpg')
  //     },{
  //       'step': 'press3',
  //       'desc': 'the long high bridge',
  //       'imgSrc': require('../../asset/image/longHighBridge.jpg')
  //     }
  //   ],
  //   aero: [
  //     {
  //       'step': 'aero1',
  //       'desc': 'the door within',
  //       'imgSrc': require('../../asset/image/longHighBridge.jpg')
  //     },
  //     {
  //       'step': 'aero2',
  //       'desc': 'entrance',
  //       'imgSrc': require('../../asset/image/entrance.jpg')
  //     },{
  //       'step': 'aero3',
  //       'desc': 'the long high bridge',
  //       'imgSrc': require('../../asset/image/doorWithin.jpg')
  //     }
  //   ]
  //
  //
  //
  // };
  //
}
