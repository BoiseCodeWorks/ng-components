(function(){

  angular.module('pokemon')
    .component('environmentComponent', {
      templateUrl: 'app/components/pokemon/environment/environment.html',
      controller: EnvironmentController,
      bindings: {
        environment: '<'
      }
    })

    EnvironmentController.$inject = ['PokedexService']

    function EnvironmentController(PokedexService){
      var ec = this;

      ec.addPokemon = function(pokey){
        ec.environment.pokeyList.push(pokey);
        ec.newPokemon = {};
      }

      ec.removePokemon = function(pokey){
        var i = ec.environment.pokeyList.indexOf(pokey);
        ec.environment.pokeyList.splice(i, 1);
        PokedexService.addPokey(pokey);
      }

    }

}())