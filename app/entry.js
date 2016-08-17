'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
angular.module('toBrewApp', []);

require('./service/gallery-service');
require('./component/app-main');
require('./component/app-method-gallery');
require('./component/app-nav');
// require('./data/brew-methods.json');
