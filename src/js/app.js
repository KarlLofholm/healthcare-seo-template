'use strict';

var $ = require('vendor/jquery');
var scrollToTarget = require('modules/scrollToTarget');
var scrollToNav = require('modules/scrollToNav');


var app = {
  init: function() {
    scrollToNav.init();
    scrollToTarget.init();
  },
  load: function() {
    introMap.init();
  },
};

$( document ).ready(function() {
    app.init();
});

$( window ).load(function() {
    app.load();
});
