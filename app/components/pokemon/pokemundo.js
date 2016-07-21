(function(){

  angular.module('pokemon', [])
    .component('pokemundoComponent', {
      controller: PokemonController,
      templateUrl: 'app/components/pokemon/pokemundo.html'
    })

    function PokemonController(){
      var pc = this;

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

      this.addToPokedex = function(pokey){
        pokey.wild = false;
        pc.pokedex.pokeyList.push(pokey);
      }

      this.removeFromPokedex = function(pokey){
        var i = pc.pokedex.pokeyList.indexOf(pokey); 
        pc.pokedex.pokeyList.splice(i, 1);
      }

      this.pokedex = {
          name: 'Pokedex',
          pokeyList: []
        }


    }

}())