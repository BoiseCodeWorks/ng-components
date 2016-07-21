(function(){

  angular.module('pokemon')
    .component('environmentComponent', {
      templateUrl: 'app/components/pokemon/environment/environment.html',
      controller: EnvironmentController,
      bindings: {
        environment: '<',
        capture: '<'
      }
    })

    function EnvironmentController(){
      var ec = this;

      function checkWildStatus(pokey){
        if(ec.environment.name == 'Pokedex'){
          pokey.wild = false;
        }else{
          pokey.wild = true;
        }
      }

      ec.addPokemon = function(pokey){
        checkWildStatus(pokey);
        ec.environment.pokeyList.push(pokey);
        ec.newPokemon = {};
      }

      ec.removePokemon = function(pokey){
        var i = ec.environment.pokeyList.indexOf(pokey);
        ec.environment.pokeyList.splice(i, 1);
        ec.capture(pokey);
      }

    }

}())