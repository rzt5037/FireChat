(function(){
  function config($locationProvider, $stateProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('roommodal', {
        url: '/',
        controller: 'RoomModalCtrl as roommodal',
        templateUrl: '/templates/roommodal.html'
      });
  }

  angular
    .module('blocChat',['ui.bootstrap', 'ui.router', 'firebase'])
    .config(config);
})();
