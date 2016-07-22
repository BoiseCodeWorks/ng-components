(function(){

  angular.module('pokemon')
    .component('pokedexComponent', {
      templateUrl: 'app/components/pokemon/pokedex/pokedex.html',
      controller: PokedexController
    })

    PokedexController.$inject = ['PokedexService']

    function PokedexController(PokedexService) {
      var pdc = this;

      pdc.myPokeys = PokedexService.getPokeyList();

      pdc.removeFromPokedex = function(pokey){
        PokedexService.removePokey(pokey);
      }

    }

}())