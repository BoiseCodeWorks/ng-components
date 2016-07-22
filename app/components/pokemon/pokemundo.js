(function(){

  angular.module('pokemon', [])
    .component('pokemundoComponent', {
      controller: PokemonController,
      templateUrl: 'app/components/pokemon/pokemundo.html'
    })

    PokemonController.$inject = ['PokedexService'];

    function PokemonController(PokedexService){
      var pc = this;

      this.myPokeys = PokedexService.getPokeyList();

      pc.environments = {
        grasslands: {
          name: 'Grasslands',
          weather: 'Sunny',
          vegitation: 'Grassy',
          pokeyList: [{
            name: 'Bulbasaur',
            cp: 2000,
            element: 'Grass',
            wild: true
          },{
            name: 'Pidgey',
            cp: 12,
            element: 'Flying',
            wild: true
          }]
        },
        desert: {
          name: 'Desert',
          weather: 'Really hot and Sunny also dry',
          vegitation: 'cacti',
          pokeyList: [{
            name: 'Sandshrew',
            cp: 20,
            element: 'Sand',
            wild: true
          }]
        }
      }

    }

}())