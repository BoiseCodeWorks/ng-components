;(function() {
  
    angular.module('pokemon')
      .service('PokedexService', PokedexService)

      function PokedexService(){
        var pokedex = {
          name: 'Pokedex',
          pokeyList: []
        }

        function savePokedex(){
          if(!pokedex.owner){
            return {'error': 'You must tell me who you are!'}
          }
          localStorage.setItem(`${pokedex.owner}.pokedex`, JSON.stringify(pokedex));
        }

        function getPokedexFromStorage(){
          var storedPokedex = localStorage.getItem(`${pokedex.owner}.pokedex`);
          if(storedPokedex){
            pokedex = JSON.parse(storedPokedex);
          }
        }

        this.setOwner = function(name){
          pokedex.owner = name;
          getPokedexFromStorage();
        }

        this.logout = function(){
          pokedex.owner = '';
          pokedex = {
            name: 'Pokedex',
            pokeyList: []
          }
        }

        this.getPokeyList = function(){
          return pokedex.pokeyList;
        }

        this.addPokey = function(pokey){
          pokey.wild = false;
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