(function(){

  angular.module('pokemon')
    .component('environmentComponent', {
      templateUrl: 'app/components/pokemon/environment/environment.html',
      controller: EnvironmentController,
    })

    EnvironmentController.$inject = ['$state', '$interval', 'PokedexService', 'PokemonService']

    function EnvironmentController($state, $interval, PokedexService, PokemonService){
      var ec = this;
      
      ec.environment = PokemonService.getEnvironmentByName($state.params.environmentName);

      if(!ec.environment){
        $state.go('play')
      }

      $interval(function(){
        ec.environment.pokeyList = [];
        for(var i = 0; i < 5; i++){
          PokemonService.getRandomPokey(function(pokey){
            ec.environment.pokeyList.push(pokey);
          });
        }
      }, 8000)


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