'use strict';

const angular = require('angular');
angular.module('toBrewApp').factory('galleryService', ['$log', galleryService]);

function galleryService($log) {

  let service = {};
  service.galleryIndex = 0;

  service.cycleForward = function(galleryIndex, imageArr){
    if(service.galleryIndex === imageArr) {
      return service.galleryIndex;
    }
    return service.galleryIndex++;
  };
  service.cycleBackward = function(galleryIndex){
    if(galleryIndex === 0) return service.galleryIndex;
    return service.galleryIndex--;
  };
  $log.log(service);
  return service;
}
