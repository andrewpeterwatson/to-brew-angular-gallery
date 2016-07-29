'use strict';

const angular = require('angular');

angular.module('toBrewApp').directive('appMain', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      desc: '@',
      title: '@',
      imgSrc: '@'
    },
    template: require('./app-main.html')
  };
});
