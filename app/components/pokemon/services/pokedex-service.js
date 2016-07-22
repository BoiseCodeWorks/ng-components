;(function() {
  
    angular.module('pokemon')
      .service('PokedexService', PokedexService)

      function PokedexService(){
        var pokedex = {
          name: 'Pokedex',
          pokeyList: []
        }
        getPokedexFromStorage();

        function savePokedex(){
          localStorage.setItem('pokedex', JSON.stringify(pokedex));
        }

        function getPokedexFromStorage(){
          var storedPokedex = localStorage.getItem('pokedex');
          if(storedPokedex){
            pokedex = JSON.parse(storedPokedex);
          }
        }

        this.setOwner = function(name){
          pokedex.owner = name;
        }

        this.getPokeyList = function(){
          return pokedex.pokeyList;
        }

        this.addPokey = function(pokey){
          pokedex.pokeyList.push(pokey);
          savePokedex();
        }

        this.removePokey = function(pokey){
          var i = pokedex.pokeyList.indexOf(pokey);
          pokedex.pokeyList.splice(i, 1);
          savePokedex();
        }

      }

}())