(function(){

  angular.module('pokemon', [])
    .component('pokemonComponent', {
      controller: PokemonController,
      templateUrl: 'app/components/pokemon/poke.html'
    })

    function PokemonController(){
      var pc = this;

      pc.pokedex = [];

      pc.addPokemon = function(pokemon){
        pokemon.wild = false;
        pc.pokedex.push(pokemon);
        pc.newPokemon = {};
      }

      pc.removePokemon = function(pokey){
        var i = pc.pokedex.indexOf(pokey);
        pc.pokedex.splice(i, 1);
      }


    }

}())