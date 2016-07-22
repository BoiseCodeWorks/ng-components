;(function(){

  angular.module('pokemon')
    .service('PokemonService', PokemonService)

    PokemonService.$inject = ['$http'];

    function PokemonService($http) {
      
      var masterPokeyList = [];

      var baseUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=811&offset=0'

      this.getPokemonList = function(successCallback, failCallback){
        var list = getMasterPokeyList();
        if(list){
          return successCallback(list);
        }

        $http.get(baseUrl).then(function(response){
          saveMasterPokeyList(response.data.results);
          return successCallback(list);
        }, failCallback);
      }

      this.getRandomPokey = function(){
        var l = getMasterPokeyList();
        var randI = Math.floor(Math.random()* l.length);
        var randPokey = l[randI];
        randPokey.id = randI + 1;
        return randPokey;
      }

      function saveMasterPokeyList(list){
        localStorage.setItem('masterPokeyList', JSON.stringify(list));
      }

      function getMasterPokeyList(){
        var list = localStorage.getItem('masterPokeyList');
        if(list){
          masterPokeyList = JSON.parse(list);
        }
        return JSON.parse(list);
      }


    }

}())