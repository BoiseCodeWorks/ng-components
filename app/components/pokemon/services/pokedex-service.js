;(function() {
  
    angular.module('pokemon')
      .service('PokedexService', PokedexService)

      function PokedexService(){
        var pokedex = {
          name: 'Pokedex',
          pokeyList: []
        }

        this.setOwner = function(name){
          pokedex.owner = name;
        }

        this.getPokeyList = function(){
          return pokedex.pokeyList;
        }

        this.addPokey = function(pokey){
          pokedex.pokeyList.push(pokey);
        }

        this.removePokey = function(pokey){
          var i = pokedex.pokeyList.indexOf(pokey);
          pokedex.pokeyList.splice(i, 1);
        }

      }

}())