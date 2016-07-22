(function () {

  angular.module('pokemon', [])
    .component('pokemundoComponent', {
      controller: PokemonController,
      templateUrl: 'app/components/pokemon/pokemundo.html'
    })

  PokemonController.$inject = ['PokedexService', 'PokemonService'];

  function PokemonController(PokedexService, PokemonService) {
    var pc = this;
    pc.environments = {
      grasslands: {
        name: 'Grasslands',
        weather: 'Sunny',
        vegitation: 'Grassy',
        pokeyList: []
      }
    }

    var count = 0
    function handleError(response) {
      console.error(response);
      if(count < 5){
        PokemonService.getPokemonList(handleSuccess, handleError)
        count++;
      }else{
        pc.error = 'Ooops looks like we are having server issues please try again later'
      }
    }


    pc.login = function (username) {
      PokedexService.setOwner(username);
      pc.loggedIn = true;
    }

    pc.logout = function () {
      PokedexService.logout();
      pc.loggedIn = false;
    }


  }

} ())