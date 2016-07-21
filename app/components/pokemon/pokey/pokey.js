(function(){

  angular.module('pokemon')
    .component('pokeyComponent', {
      controller: PokeyController,
      templateUrl: 'app/components/pokemon/pokey/pokey.html',
      bindings:{
        pokeyObj: '<',
        bwa: '<',
        catch: '<'
      }
    })
    function PokeyController(){
    }

}())