'use strict';

angular.module('cbdProjectFullApp.story')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stories', {
        url: '/stories',
        template: '<stories></stories>'
      });
  });
