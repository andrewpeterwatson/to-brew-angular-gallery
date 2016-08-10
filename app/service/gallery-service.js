'use strict';

const angular = require('angular');
angular.module('toBrewApp').factory('galleryService', ['$log', galleryService]);

function galleryService($log) {

  let service = {};
  service.imageIndex = 0;

  service.cycleForward = function(imageIndex){
    if(imageIndex === service.images.length - 1) return service.imageIndex;
    return service.imageIndex++;
  };
  service.cycleBackward = function(imageIndex){
    if(imageIndex === 0) return service.imageIndex;
    return service.imageIndex--;
  };
  $log.log(service);
  return service;
}
