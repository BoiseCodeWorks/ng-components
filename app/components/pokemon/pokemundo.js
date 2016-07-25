(function () {

  angular.module('pokemon', ['ui.router'])
    .component('pokemundoComponent', {
      controller: PokemonController,
      templateUrl: 'app/components/pokemon/pokemundo.html'
    })

  PokemonController.$inject = ['PokedexService', 'PokemonService'];

  function PokemonController(PokedexService, PokemonService) {
    

  }

} ())