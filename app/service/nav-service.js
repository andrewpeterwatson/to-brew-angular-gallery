'use strict';

const angular = require('angular');
angular.module('toBrewApp').factory('navService', ['$log', navService]);
function navService($log) {
  let service = {};
  service.selectBrew = function(brew){
    this.currentBrew = brew;
    $log.log(this.currentBrew);
  };
  return service;
}
