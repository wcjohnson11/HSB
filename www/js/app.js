// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'hsb' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hsb', ['ionic', 'hsb.controllers', 'hsb.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.hide();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'pages/main/main.html',
      controller: 'MainCtrl'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'pages/home/home.html',
      controller: 'HomeCtrl'
    })

    .state('map', {
      url: '/map',
      templateUrl: 'pages/map/map.html',
      controller: 'MapCtrl'
    })

    .state('faq', {
      url: '/faq',
      templateUrl: 'pages/faq/faq.html',
      controller: 'FaqCtrl'
    })
  $urlRouterProvider.otherwise('/');
})
