'use strict';

const angular = require('angular');

angular.module('toBrewApp').controller('AppNavController', [AppNavController]);

function AppNavController() {

  this.currentBrew = 'press';
  this.selectBrew = function(brew){
    this.currentBrew = brew;
    return;
  };
}
