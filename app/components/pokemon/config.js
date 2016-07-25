(function(){

  angular.module('pokemon')
    .config(PokeyConfig)

    PokeyConfig.$inject = ['$stateProvider'];

    function PokeyConfig($stateProvider){

      $stateProvider
        .state({
          name: 'home',
          url: '',
          template: '<home-component></home-component>'
        })
        .state({
          name: 'login',
          url: '/login',
          template: '<login-component></login-component>'
        })
        .state({
          name: 'play',
          url: '/play',
          template: '<play-component></play-component>'
        })
    }

}())