(function () {

  angular.module('pokemon')
    .component('playComponent', {
      templateUrl: 'app/components/pokemon/play/play.html',
      controller: PlayController
    })

  PlayController.$inject = ['PokemonService']

  function PlayController(PokemonService) {
    var pc = this;

    pc.environments = PokemonService.getEnvironments()

    var count = 0
    function handleError(response) {
      console.error(response);
      if (count < 5) {
        PokemonService.getPokemonList(handleSuccess, handleError)
        count++;
      } else {
        pc.error = 'Ooops looks like we are having server issues please try again later'
      }
    }
  }

} ())